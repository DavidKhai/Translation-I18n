import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from 'src/@core';
import { Language } from 'src/@core/models/language';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  languages: Language[] = [];
  languageDefault: string = 'en';

  constructor(
    private router: Router,
    private translate: TranslateService,
    private storageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.languages = [
      {
        id: 1,
        code: 'en',
        name: 'English',
      },
      {
        id: 2,
        code: 'de',
        name: 'Germany',
      },
      {
        id: 3,
        code: 'vi',
        name: 'Vietnamese',
      },
      {
        id: 4,
        code: 'thai',
        name: 'ThaiLan',
      },
      {
        id: 5,
        code: 'cy',
        name: 'Wales',
      },
    ];
    this.languageDefault = this.storageService.get('languageDefault');
  }

  changeLanguage({ value }: any) {
    this.storageService.set('languageDefault', value);
    this.translate.use(value);
  }

  nextBranch() {
    this.router.navigate(['/branch']);
  }

  validateMerchant() {
    return fetch(
      'https://apple-pay-gateway.apple.com/paymentservices/paymentSession',
      {
        // Adding method type
        method: 'POST',

        // Adding body or contents to send
        body: JSON.stringify({
          merchantIdentifier: 'merchant.com.apple.mystore',
          displayName: 'MyStore',
          domainName: 'frontend.example.com',
          initiative: 'web',
          initiativeContext: 'mystore.example.com',
        }),

        // Adding headers to the request
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    );
  }

  onApplePayButtonClicked() {
    if (!(window as any).ApplePaySession) {
      return;
    }

    // Define ApplePayPaymentRequest
    const request = {
      countryCode: 'US',
      currencyCode: 'USD',
      merchantCapabilities: ['supports3DS'],
      supportedNetworks: ['visa', 'masterCard', 'amex', 'discover'],
      total: {
        label: 'Demo (Card is not charged)',
        type: 'final',
        amount: '1.99',
      },
    };

    // Create ApplePaySession
    const session = new (window as any).ApplePaySession(3, request);

    session.onvalidatemerchant = async (event: any) => {
      // Call your own server to request a new merchant session.
      alert(JSON.stringify(event.validationURL));
      const merchantSession = await this.validateMerchant();
      alert(JSON.stringify(merchantSession));
      session.completeMerchantValidation(merchantSession);
    };

    session.onpaymentmethodselected = (event: any) => {
      // Define ApplePayPaymentMethodUpdate based on the selected payment method.
      // No updates or errors are needed, pass an empty object.
      const update = {};
      session.completePaymentMethodSelection(update);
    };

    session.onshippingmethodselected = (event: any) => {
      // Define ApplePayShippingMethodUpdate based on the selected shipping method.
      // No updates or errors are needed, pass an empty object.
      const update = {};
      session.completeShippingMethodSelection(update);
    };

    session.onshippingcontactselected = (event: any) => {
      // Define ApplePayShippingContactUpdate based on the selected shipping contact.
      const update = {};
      session.completeShippingContactSelection(update);
    };

    session.onpaymentauthorized = (event: any) => {
      // Define ApplePayPaymentAuthorizationResult
      const result = {
        status: (window as any).ApplePaySession.STATUS_SUCCESS,
      };
      session.completePayment(result);
    };

    session.oncouponcodechanged = (event: any) => {
      // Define ApplePayCouponCodeUpdate
      const newTotal = (window as any).calculateNewTotal(event.couponCode);
      const newLineItems = (window as any).calculateNewLineItems(
        event.couponCode
      );
      const newShippingMethods = (window as any).calculateNewShippingMethods(
        event.couponCode
      );
      const errors = (window as any).calculateErrors(event.couponCode);

      session.completeCouponCodeChange({
        newTotal: newTotal,
        newLineItems: newLineItems,
        newShippingMethods: newShippingMethods,
        errors: errors,
      });
    };

    session.oncancel = (event: any) => {
      // Payment canceled by WebKit
    };

    session.begin();
  }
}

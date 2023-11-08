import { PAYMENT_TYPE, TERM_TYPE } from "./enums";
import { IFooterSectionList } from "./interfaces";

export const FOOTER_SECTION_LIST: IFooterSectionList[] = [
  {
    title: 'Section title',
    sectionUrl: '#',
    subSections: [
      {
        subTitle: 'Page',
        subUrl: '#'
      },
      {
        subTitle: 'Page',
        subUrl: '#'
      },
      {
        subTitle: 'Page',
        subUrl: '#'
      },
      {
        subTitle: 'Page',
        subUrl: '#'
      },
    ]
  },
  {
    title: 'Section title',
    sectionUrl: '#',
    subSections: [
      {
        subTitle: 'Page',
        subUrl: '#'
      },
      {
        subTitle: 'Page',
        subUrl: '#'
      },
      {
        subTitle: 'Page',
        subUrl: '#'
      },
      {
        subTitle: 'Page',
        subUrl: '#'
      },
    ]
  },
  {
    title: 'Section title',
    sectionUrl: '#',
    subSections: [
      {
        subTitle: 'Page',
        subUrl: '#'
      },
      {
        subTitle: 'Page',
        subUrl: '#'
      },
      {
        subTitle: 'Page',
        subUrl: '#'
      },
      {
        subTitle: 'Page',
        subUrl: '#'
      },
    ]
  },
  {
    title: 'Section title',
    sectionUrl: '#',
    subSections: [
      {
        subTitle: 'Page',
        subUrl: '#'
      },
      {
        subTitle: 'Page',
        subUrl: '#'
      },
      {
        subTitle: 'Page',
        subUrl: '#'
      },
      {
        subTitle: 'Page',
        subUrl: '#'
      },
    ]
  },
]

export const UNAUTHORIZED_CODE = 401;

export const TERM_TYPE_LIST = [
	{
			name: 'day',
			value: TERM_TYPE.DAYS
	},
	{
			name: 'week',
			value: TERM_TYPE.WEEKS
	},
	{
			name: 'month',
			value: TERM_TYPE.MONTHS
	},
	{
			name: 'year',
			value: TERM_TYPE.YEARS
	}
]

export const PAYMENT_TYPE_LIST = [
	{
			name: 'Credit Card',
			value: PAYMENT_TYPE.CREDIT_CARD
	},
	{
			name: 'Direct Debit',
			value: PAYMENT_TYPE.DIRECT_DEBIT
	},
	{
			name: 'One Off Payment',
			value: PAYMENT_TYPE.ONE_OFF_PAYMENT
	}
]

export const CHECK_DEBIT_TRANSACTION = 'checkDebitTransaction'
export const PACKAGE_ID = 'packageId';
export const ATTRIBUTE_ID = 'attributeId';
export const CUSTOMER_INFO = 'customerInfo';
export const GIFTMEMBER_CUSTOMER_INFO = 'giftMmemberCustomerInfo';
export const PRICE_MATRIX_ID_SELECTED = 'priceMatrixId';
export const ERRORS = 'errors';
export const ATTRIBUTE = 'attribute';
export const ADDRESS_COLLECTION_NAME = 'Address collection';
export const GIFT_AID = 'Gift Aid'

export const GEOCODE_TYPE = {
  STREET: 'street_address',
  STREET_NUMBER: 'street_number',
  ROUTE: 'route',
  CITY: 'locality',
  NEIGHBORHOOD: 'neighborhood',
  COUNTRY: 'country',
  SUBLOCALITY_1: 'sublocality_level_1',
  SUBLOCALITY_2: 'sublocality_level_2',
  ADMIN_AREA_1: 'administrative_area_level_1',
  ADMIN_AREA_2: 'administrative_area_level_2',
  SUBPREMISE: 'subpremise',
  PREMISE: 'premise',
  POSTAL_TOWN: 'postal_town',
  POSTAL_CODE: 'postal_code'
};
export const AUTHORIZATION = 'authorization';
export const LIST_MEMBER_IDS = 'listMemberIds';
export const GIFTMEMBER_CUSTOMER_ID = 'giftmemberCustomerId';

export enum RegistrationPage {
  MainAccount = "Main Account",
  YourDetails = "Your",
  RecipientDetails = "Recipient",
}

export const DONATION = 'Donations';
export const DONATION_AMOUNT: number[] = [3,5,10,20,50];

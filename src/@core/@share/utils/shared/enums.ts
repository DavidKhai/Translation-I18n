export enum ATTRIBUTE_TYPE {
  BASIC = 1,
  CUSTOMER_TYPE = 2,
  PAYMENT_TYPE = 3,
  PAYMENT_TERM = 4,
  SCHEDULE = 5,
  SITE_ACCESS = 6,
}

export enum TERM_TYPE {
  DAYS = 1,
  WEEKS = 2,
  MONTHS = 3,
  YEARS = 4
}

export enum PAYMENT_TYPE {
  CREDIT_CARD = 0,
  DIRECT_DEBIT = 1,
  ONE_OFF_PAYMENT = 2
}

export enum MEMBER_ACCOUNT_STATUS {
  Active,
  Inactive,
  Suspended,
  OnHold
}

export enum MEMBER_TYPE {
  Customer, Member
}

export enum MEMBERSHIP_JOIN {
  disable = '0',
  enable = '1'
}

export enum ADDRESS_COLLECTION {
  disable = '0',
  enable = '1'
}

export enum DONATION_TYPE {
  disable = '2',
  enable = '1'
}

export enum PAYMENT_GATEWAY {
  stripe = 'stripe',
  opayo = 'opayo',
  worldpay = 'worldpay'
}

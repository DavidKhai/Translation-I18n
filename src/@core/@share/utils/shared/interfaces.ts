export interface IFooterSectionList {
  title: string;
  sectionUrl: string;
  subSections: ISubSectionList[];
}

export interface ISubSectionList {
  subTitle: string;
  subUrl: string;
}

export interface DirectDebitUrl {
  successUrl: string;
  cancelUrl: string;
}

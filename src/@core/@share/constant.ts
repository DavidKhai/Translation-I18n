export enum CAPACITY_TYPE {
  NonCapacity = 0,
  Capacity = 1
}

export enum TicketStatus {
  Available = 0,
  LimitAvailability = 1,
  SoldOut = 2,
  Unavailable = 3
}

export const PAGELIMIT_DEFAULT = [
  { key: '10', value: 10 },
  { key: '20', value: 20 },
  { key: '50', value: 50 },
  { key: '100', value: 100 }
];

export enum IMAGE_UPLOAD_TYPE {
  Avatar_User = 1,
}

export enum PAX_DROPDOWN_DEFAULT {
  PaxDropdown = 10
}

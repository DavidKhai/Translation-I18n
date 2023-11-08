export const PAGEAMOUNT_DEFAULT = 50;

export enum PAGINATION_TYPE {
    ALL = -1, // Get All Data
    PAGINATION = 0 // Allow pagination
}

export const PAGELIMIT_DEFAULT = [
    { key: '10', value: 10 },
    { key: '20', value: 20 },
    { key: '50', value: 50 },
    { key: '100', value: 100 }
];

export const CALENDAR_INTERVAL = [
    { key: '15 mins', value: 15 },
    { key: '30 mins', value: 30 },
    { key: '1 hour', value: 60 },
]

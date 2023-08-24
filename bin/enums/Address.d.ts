export declare type Geometry = {
    point: [number, number];
};
export declare type Place = {
    addressNumber: null | string;
    country: string;
    geometry: Geometry;
    internalNumber: null | string;
    interpolated: boolean;
    label: string;
    municipality: string | null;
    neighborhood: null | string;
    postalCode: string;
    region: string;
    street: string;
    subRegion: string;
};
export declare type Address = {
    distance: number;
    place: Place;
    tag: null | string;
    typeOfAddressId: string;
};

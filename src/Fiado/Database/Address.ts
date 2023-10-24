import { Country } from "../../General/enum/Country";

export type Geometry = {
    point: [number, number];
}

export type Place = {
    addressNumber: null | string;
    country: string;
    countryId? : Country;
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
}


export type Address = {
    distance: number;
    place: Place;
    tag: null | string;
    typeOfAddressId: string;
    isPrincipal: boolean;
    createDate: string;
}
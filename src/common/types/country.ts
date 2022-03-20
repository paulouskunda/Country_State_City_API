import {State} from './state'
import {Timezone} from './timeZone'
export interface Countries {
    id: number;
    name?: string;
    iso3?: string;
    iso2?: string;
    numeric_code?: string;
    phone_code?: string;
    capital?: string;
    currency?: string;
    currency_name?: string;
    currency_symbol?: string;
    tld?: string;
    native?: string;
    region?: string;
    subregion?: string;
    timezones?: Timezone[];
    translations?: any;
    latitude?: string;
    longitude?: string;
    emoji?: string;
    emojiU?: string;
    states?: State[];
}


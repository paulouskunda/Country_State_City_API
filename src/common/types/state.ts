import { City } from "./city";

export interface State {
    id?: number;
    name?: string;
    state_code?: string;
    latitude?: string;
    longitude?: string;
    type?: any;
    cities?: City[];
}
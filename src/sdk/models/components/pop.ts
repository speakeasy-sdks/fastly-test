/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

/**
 * the region used for billing
 */
export enum BillingRegion {
    Africa = "Africa",
    Australia = "Australia",
    Asia = "Asia",
    Europe = "Europe",
    India = "India",
    NorthAmerica = "North America",
    SouthKorea = "South Korea",
    SouthAmerica = "South America",
}

/**
 * the geographic location of the POP
 */
export class Coordinates extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "latitude" })
    latitude: number;

    @SpeakeasyMetadata()
    @Expose({ name: "longitude" })
    longitude: number;
}

export enum PopRegion {
    Apac = "APAC",
    Asia = "Asia",
    AFWest = "AF-West",
    EUCentral = "EU-Central",
    EUEast = "EU-East",
    EUWest = "EU-West",
    MiddleEast = "Middle-East",
    NorthAmerica = "North-America",
    SASouth = "SA-South",
    SAEast = "SA-East",
    SAWest = "SA-West",
    SANorth = "SA-North",
    SouthAfrica = "South-Africa",
    SouthAmerica = "South-America",
    USCentral = "US-Central",
    USEast = "US-East",
    USWest = "US-West",
    AsiaSouth = "Asia-South",
}

/**
 * the region used for stats reporting
 */
export enum StatsRegion {
    SouthamericaStd = "southamerica_std",
    AfricaStd = "africa_std",
    Anzac = "anzac",
    Asia = "asia",
    Europe = "europe",
    Usa = "usa",
    AsiaIndia = "asia_india",
    AsiaSouthkorea = "asia_southkorea",
}

export class Pop extends SpeakeasyBase {
    /**
     * the region used for billing
     */
    @SpeakeasyMetadata()
    @Expose({ name: "billing_region" })
    billingRegion: BillingRegion;

    /**
     * the three-letter code for the [POP](https://developer.fastly.com/learning/concepts/pop/)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "code" })
    code: string;

    /**
     * the geographic location of the POP
     */
    @SpeakeasyMetadata()
    @Expose({ name: "coordinates" })
    @Type(() => Coordinates)
    coordinates?: Coordinates;

    @SpeakeasyMetadata()
    @Expose({ name: "group" })
    group: string;

    /**
     * the name of the POP
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "region" })
    region: PopRegion;

    /**
     * the name of the [shield code](https://developer.fastly.com/learning/concepts/shielding/#choosing-a-shield-location) if this POP is suitable for shielding
     */
    @SpeakeasyMetadata()
    @Expose({ name: "shield" })
    shield?: string;

    /**
     * the region used for stats reporting
     */
    @SpeakeasyMetadata()
    @Expose({ name: "stats_region" })
    statsRegion: StatsRegion;
}

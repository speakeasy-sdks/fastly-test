/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class ListServiceStarsSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=Fastly-Key" })
    token: string;
}

export class ListServiceStars200ApplicationVndApiPlusJsonDataData extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "relationships" })
    @Type(() => shared.RelationshipsForStar)
    relationships?: shared.RelationshipsForStar;

    /**
     * Resource type
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: shared.TypeStar;
}

export class ListServiceStars200ApplicationVndApiPlusJsonData extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "attributes" })
    @Type(() => shared.Timestamps)
    attributes?: shared.Timestamps;

    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => ListServiceStars200ApplicationVndApiPlusJsonDataData)
    data?: ListServiceStars200ApplicationVndApiPlusJsonDataData;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;
}

export class ListServiceStars200ApplicationVndApiPlusJsonLinks extends SpeakeasyBase {
    /**
     * The first page of data.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "first" })
    first?: string;

    /**
     * The last page of data.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "last" })
    last?: string;

    /**
     * The next page of data.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "next" })
    next?: string;

    /**
     * The previous page of data.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "prev" })
    prev?: string;
}

export class ListServiceStars200ApplicationVndApiPlusJsonMeta extends SpeakeasyBase {
    /**
     * Current page.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "current_page" })
    currentPage?: number;

    /**
     * Number of records per page.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "per_page" })
    perPage?: number;

    /**
     * Total records in result set.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "record_count" })
    recordCount?: number;

    /**
     * Total pages in result set.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total_pages" })
    totalPages?: number;
}

/**
 * OK
 */
export class ListServiceStars200ApplicationVndApiPlusJson extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: ListServiceStars200ApplicationVndApiPlusJsonData })
    @Expose({ name: "data" })
    @Type(() => ListServiceStars200ApplicationVndApiPlusJsonData)
    data?: ListServiceStars200ApplicationVndApiPlusJsonData[];

    @SpeakeasyMetadata()
    @Expose({ name: "links" })
    @Type(() => ListServiceStars200ApplicationVndApiPlusJsonLinks)
    links?: ListServiceStars200ApplicationVndApiPlusJsonLinks;

    @SpeakeasyMetadata()
    @Expose({ name: "meta" })
    @Type(() => ListServiceStars200ApplicationVndApiPlusJsonMeta)
    meta?: ListServiceStars200ApplicationVndApiPlusJsonMeta;
}

export class ListServiceStarsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    listServiceStars200ApplicationVndApiPlusJsonObject?: ListServiceStars200ApplicationVndApiPlusJson;
}

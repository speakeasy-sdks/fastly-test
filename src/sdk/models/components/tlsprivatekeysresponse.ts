/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TlsPrivateKeyResponseData } from "./tlsprivatekeyresponsedata";
import { Expose, Type } from "class-transformer";

export class TlsPrivateKeysResponseLinks extends SpeakeasyBase {
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

export class TlsPrivateKeysResponseMeta extends SpeakeasyBase {
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

export class TlsPrivateKeysResponse extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: TlsPrivateKeyResponseData })
    @Expose({ name: "data" })
    @Type(() => TlsPrivateKeyResponseData)
    data?: TlsPrivateKeyResponseData[];

    @SpeakeasyMetadata()
    @Expose({ name: "links" })
    @Type(() => TlsPrivateKeysResponseLinks)
    links?: TlsPrivateKeysResponseLinks;

    @SpeakeasyMetadata()
    @Expose({ name: "meta" })
    @Type(() => TlsPrivateKeysResponseMeta)
    meta?: TlsPrivateKeysResponseMeta;
}

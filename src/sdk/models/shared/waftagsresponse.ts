/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { WafRule } from "./wafrule";
import { WafTagsResponseDataItem } from "./waftagsresponsedataitem";
import { Expose, Type } from "class-transformer";

export class WafTagsResponseLinks extends SpeakeasyBase {
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

export class WafTagsResponseMeta extends SpeakeasyBase {
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
export class WafTagsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: WafTagsResponseDataItem })
    @Expose({ name: "data" })
    @Type(() => WafTagsResponseDataItem)
    data?: WafTagsResponseDataItem[];

    @SpeakeasyMetadata({ elemType: WafRule })
    @Expose({ name: "included" })
    @Type(() => WafRule)
    included?: WafRule[];

    @SpeakeasyMetadata()
    @Expose({ name: "links" })
    @Type(() => WafTagsResponseLinks)
    links?: WafTagsResponseLinks;

    @SpeakeasyMetadata()
    @Expose({ name: "meta" })
    @Type(() => WafTagsResponseMeta)
    meta?: WafTagsResponseMeta;
}

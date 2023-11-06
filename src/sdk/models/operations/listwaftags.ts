/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ListWafTagsRequest extends SpeakeasyBase {
    /**
     * Limit the returned tags to a specific name.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[name]" })
    filterName?: string;

    /**
     * Include relationships. Optional.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
    include?: shared.WafTagInclude;

    /**
     * Current page.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page[number]" })
    pageNumber?: number;

    /**
     * Number of records per page.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page[size]" })
    pageSize?: number;
}

export class ListWafTagsResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    wafTagsResponse?: shared.WafTagsResponse;
}

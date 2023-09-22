/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ListWafFirewallsRequest extends SpeakeasyBase {
    /**
     * Limit the results returned to a specific service.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[service_id]" })
    filterServiceId?: string;

    /**
     * Limit the results returned to a specific service version.
     */
    @SpeakeasyMetadata({
        data: "queryParam, style=form;explode=true;name=filter[service_version_number]",
    })
    filterServiceVersionNumber?: string;

    /**
     * Include related objects. Optional.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
    include?: shared.FirewallInclude;

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

export class ListWafFirewallsResponse extends SpeakeasyBase {
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
    wafFirewallsResponse?: shared.WafFirewallsResponse;
}

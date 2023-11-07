/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as components from "../../../sdk/models/components";
import { AxiosResponse } from "axios";

export class GetUsageMonthRequest extends SpeakeasyBase {
    /**
     * If `true`, return results as billable units.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=billable_units" })
    billableUnits?: boolean;

    /**
     * 2-digit month.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=month" })
    month?: string;

    /**
     * 4-digit year.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" })
    year?: string;
}

export class GetUsageMonthResponse extends SpeakeasyBase {
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
    historicalUsageMonthResponse?: components.HistoricalUsageMonthResponse;
}

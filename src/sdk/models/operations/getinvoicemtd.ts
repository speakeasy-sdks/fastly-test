/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class GetInvoiceMtdRequest extends SpeakeasyBase {
    /**
     * Alphanumeric string identifying the customer.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer_id" })
    customerId: string;

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

export class GetInvoiceMtdResponse extends SpeakeasyBase {
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
    billingEstimateResponse?: shared.BillingEstimateResponse;
}

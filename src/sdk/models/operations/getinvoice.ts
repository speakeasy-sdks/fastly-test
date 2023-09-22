/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetInvoiceRequest extends SpeakeasyBase {
    /**
     * 2-digit month.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=month" })
    month: string;

    /**
     * 4-digit year.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=year" })
    year: string;
}

export class GetInvoiceResponse extends SpeakeasyBase {
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
    billingResponse?: shared.BillingResponse;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    getInvoice200ApplicationPdfBinaryString?: Uint8Array;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    getInvoice200TextCsvCsvString?: string;
}

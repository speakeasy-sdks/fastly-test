/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as components from "../../../sdk/models/components";
import { AxiosResponse } from "axios";

export class AddBillingAddrRequest extends SpeakeasyBase {
    /**
     * Billing address
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/vnd.api+json" })
    billingAddressRequest?: components.BillingAddressRequest;

    /**
     * Alphanumeric string identifying the customer.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer_id" })
    customerId: string;
}

export class AddBillingAddrResponse extends SpeakeasyBase {
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
     * Created
     */
    @SpeakeasyMetadata()
    billingAddressResponse?: components.BillingAddressResponse;
}

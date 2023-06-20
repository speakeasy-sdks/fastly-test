/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class UpdateBillingAddrSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=Fastly-Key" })
    token: string;
}

export class UpdateBillingAddrRequest extends SpeakeasyBase {
    /**
     * Alphanumeric string identifying the customer.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer_id" })
    customerId: string;

    /**
     * One or more billing address attributes
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/vnd.api+json" })
    updateBillingAddressRequestInput?: shared.UpdateBillingAddressRequestInput;
}

export class UpdateBillingAddrResponse extends SpeakeasyBase {
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
    billingAddressResponse?: shared.BillingAddressResponse;

    /**
     * Could not validate address
     */
    @SpeakeasyMetadata()
    billingAddressVerificationErrorResponse?: shared.BillingAddressVerificationErrorResponse;
}

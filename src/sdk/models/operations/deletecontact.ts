/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class DeleteContactSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=Fastly-Key" })
    token: string;
}

export class DeleteContactRequest extends SpeakeasyBase {
    /**
     * An alphanumeric string identifying the customer contact.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contact_id" })
    contactId: string;

    /**
     * Alphanumeric string identifying the customer.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer_id" })
    customerId: string;
}

/**
 * OK
 */
export class DeleteContact200ApplicationJSON extends SpeakeasyBase {
    /**
     * ok
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: string;
}

export class DeleteContactResponse extends SpeakeasyBase {
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
    deleteContact200ApplicationJSONObject?: DeleteContact200ApplicationJSON;
}
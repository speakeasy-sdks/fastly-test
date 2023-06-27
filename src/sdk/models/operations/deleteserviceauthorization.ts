/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class DeleteServiceAuthorizationSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=Fastly-Key" })
    token: string;
}

export class DeleteServiceAuthorizationRequest extends SpeakeasyBase {
    /**
     * Alphanumeric string identifying a service authorization.
     */
    @SpeakeasyMetadata({
        data: "pathParam, style=simple;explode=false;name=service_authorization_id",
    })
    serviceAuthorizationId: string;
}

export class DeleteServiceAuthorizationResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
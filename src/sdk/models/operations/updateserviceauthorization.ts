/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class UpdateServiceAuthorizationRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    serviceAuthorizationInput?: shared.ServiceAuthorizationInput;

    /**
     * Alphanumeric string identifying a service authorization.
     */
    @SpeakeasyMetadata({
        data: "pathParam, style=simple;explode=false;name=service_authorization_id",
    })
    serviceAuthorizationId: string;
}

export class UpdateServiceAuthorizationResponse extends SpeakeasyBase {
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
    serviceAuthorizationResponse?: shared.ServiceAuthorizationResponse;
}

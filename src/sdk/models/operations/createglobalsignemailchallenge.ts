/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class CreateGlobalsignEmailChallengeRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/vnd.api+json" })
    requestBody?: Record<string, any>;

    /**
     * Alphanumeric string identifying a TLS subscription.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tls_authorization_id" })
    tlsAuthorizationId: string;

    /**
     * Alphanumeric string identifying a TLS subscription.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tls_subscription_id" })
    tlsSubscriptionId: string;
}

/**
 * Created
 */
export class CreateGlobalsignEmailChallengeResponseBody extends SpeakeasyBase {}

export class CreateGlobalsignEmailChallengeResponse extends SpeakeasyBase {
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
    object?: CreateGlobalsignEmailChallengeResponseBody;
}

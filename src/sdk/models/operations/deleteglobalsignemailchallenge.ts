/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class DeleteGlobalsignEmailChallengeRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({
        data: "pathParam, style=simple;explode=false;name=globalsign_email_challenge_id",
    })
    globalsignEmailChallengeId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tls_authorization_id" })
    tlsAuthorizationId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tls_subscription_id" })
    tlsSubscriptionId: string;
}

export class DeleteGlobalsignEmailChallengeResponse extends SpeakeasyBase {
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
}

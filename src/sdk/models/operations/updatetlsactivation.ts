/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class UpdateTlsActivationRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/vnd.api+json" })
    tlsActivation?: shared.TlsActivation;

    /**
     * Alphanumeric string identifying a TLS activation.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tls_activation_id" })
    tlsActivationId: string;
}

export class UpdateTlsActivationResponse extends SpeakeasyBase {
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
    tlsActivationResponse?: shared.TlsActivationResponse;
}

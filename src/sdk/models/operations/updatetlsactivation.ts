/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class UpdateTlsActivationRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/vnd.api+json" })
    tlsActivationInput?: shared.TlsActivationInput;

    /**
     * Alphanumeric string identifying a TLS activation.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tls_activation_id" })
    tlsActivationId: string;
}

export class UpdateTlsActivationResponse extends SpeakeasyBase {
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
    tlsActivationResponse?: shared.TlsActivationResponse;
}

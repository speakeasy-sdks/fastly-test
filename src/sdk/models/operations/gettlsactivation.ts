/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as components from "../../../sdk/models/components";
import { AxiosResponse } from "axios";

export class GetTlsActivationRequest extends SpeakeasyBase {
    /**
     * Include related objects. Optional, comma-separated values. Permitted values: `tls_certificate`, `tls_configuration`, and `tls_domain`.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=include" })
    include?: string;

    /**
     * Alphanumeric string identifying a TLS activation.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tls_activation_id" })
    tlsActivationId: string;
}

export class GetTlsActivationResponse extends SpeakeasyBase {
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
    tlsActivationResponse?: components.TlsActivationResponse;
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as components from "../../../sdk/models/components";
import { AxiosResponse } from "axios";

export class GetTlsKeyRequest extends SpeakeasyBase {
    /**
     * Alphanumeric string identifying a private Key.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tls_private_key_id" })
    tlsPrivateKeyId: string;
}

export class GetTlsKeyResponse extends SpeakeasyBase {
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
    tlsPrivateKeyResponse?: components.TlsPrivateKeyResponse;
}

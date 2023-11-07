/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class DeleteTlsCertSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=Fastly-Key" })
    token: string;
}

export class DeleteTlsCertRequest extends SpeakeasyBase {
    /**
     * Alphanumeric string identifying a TLS certificate.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tls_certificate_id" })
    tlsCertificateId: string;
}

export class DeleteTlsCertResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}

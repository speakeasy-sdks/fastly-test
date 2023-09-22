/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class DeleteBulkTlsCertRequest extends SpeakeasyBase {
    /**
     * Alphanumeric string identifying a TLS bulk certificate.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=certificate_id" })
    certificateId: string;
}

export class DeleteBulkTlsCertResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class DeleteMutualTlsSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=Fastly-Key" })
    token: string;
}

export class DeleteMutualTlsRequest extends SpeakeasyBase {
    /**
     * Alphanumeric string identifying a mutual authentication.
     */
    @SpeakeasyMetadata({
        data: "pathParam, style=simple;explode=false;name=mutual_authentication_id",
    })
    mutualAuthenticationId: string;
}

export class DeleteMutualTlsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
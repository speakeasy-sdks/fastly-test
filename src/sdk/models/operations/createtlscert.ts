/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

/**
 * Created
 */
export class CreateTlsCert201ApplicationVndApiPlusJson extends SpeakeasyBase {}

export class CreateTlsCertResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Created
     */
    @SpeakeasyMetadata()
    createTlsCert201ApplicationVndApiPlusJsonObject?: CreateTlsCert201ApplicationVndApiPlusJson;
}

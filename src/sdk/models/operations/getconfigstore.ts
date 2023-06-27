/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetConfigStoreSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=Fastly-Key" })
    token: string;
}

export class GetConfigStoreRequest extends SpeakeasyBase {
    /**
     * An alphanumeric string identifying the config store.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=config_store_id" })
    configStoreId: string;
}

export class GetConfigStoreResponse extends SpeakeasyBase {
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
    configStoreResponse?: shared.ConfigStoreResponse;
}
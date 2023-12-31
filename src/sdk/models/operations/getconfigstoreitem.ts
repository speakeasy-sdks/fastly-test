/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as components from "../../../sdk/models/components";
import { AxiosResponse } from "axios";

export class GetConfigStoreItemRequest extends SpeakeasyBase {
    /**
     * An alphanumeric string identifying the config store.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=config_store_id" })
    configStoreId: string;

    /**
     * Item key, maximum 256 characters.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=config_store_item_key" })
    configStoreItemKey: string;
}

export class GetConfigStoreItemResponse extends SpeakeasyBase {
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
    configStoreItemResponse?: components.ConfigStoreItemResponse;
}

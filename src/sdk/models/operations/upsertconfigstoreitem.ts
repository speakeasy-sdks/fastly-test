/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class UpsertConfigStoreItemSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=Fastly-Key" })
    token: string;
}

export class UpsertConfigStoreItemRequest extends SpeakeasyBase {
    /**
     * An alphanumeric string identifying the config store.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=config_store_id" })
    configStoreId: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
    configStoreItem?: shared.ConfigStoreItem;

    /**
     * Item key, maximum 256 characters.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=config_store_item_key" })
    configStoreItemKey: string;
}

export class UpsertConfigStoreItemResponse extends SpeakeasyBase {
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
    configStoreItemResponse?: shared.ConfigStoreItemResponse;
}

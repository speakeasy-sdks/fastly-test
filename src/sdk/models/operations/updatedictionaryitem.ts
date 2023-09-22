/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class UpdateDictionaryItemRequest extends SpeakeasyBase {
    /**
     * Alphanumeric string identifying a Dictionary.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dictionary_id" })
    dictionaryId: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
    dictionaryItem?: shared.DictionaryItem;

    /**
     * Item key, maximum 256 characters.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dictionary_item_key" })
    dictionaryItemKey: string;

    /**
     * Alphanumeric string identifying the service.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=service_id" })
    serviceId: string;
}

export class UpdateDictionaryItemResponse extends SpeakeasyBase {
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
    dictionaryItemResponse?: shared.DictionaryItemResponse;
}

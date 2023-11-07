/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as components from "../../../sdk/models/components";
import { AxiosResponse } from "axios";

export class GetDictionaryItemRequest extends SpeakeasyBase {
    /**
     * Alphanumeric string identifying a Dictionary.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dictionary_id" })
    dictionaryId: string;

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

export class GetDictionaryItemResponse extends SpeakeasyBase {
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
    dictionaryItemResponse?: components.DictionaryItemResponse;
}

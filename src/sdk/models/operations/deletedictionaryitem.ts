/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class DeleteDictionaryItemRequest extends SpeakeasyBase {
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

/**
 * OK
 */
export class DeleteDictionaryItemResponseBody extends SpeakeasyBase {
    /**
     * ok
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: string;
}

export class DeleteDictionaryItemResponse extends SpeakeasyBase {
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
    object?: DeleteDictionaryItemResponseBody;
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class CreateDictionaryItemSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=Fastly-Key" })
    token: string;
}

export class CreateDictionaryItemRequest extends SpeakeasyBase {
    /**
     * Alphanumeric string identifying a Dictionary.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dictionary_id" })
    dictionaryId: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
    dictionaryItem?: shared.DictionaryItem;

    /**
     * Alphanumeric string identifying the service.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=service_id" })
    serviceId: string;
}

export class CreateDictionaryItemResponse extends SpeakeasyBase {
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
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class UpdateDictionaryRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
    dictionary?: shared.Dictionary;

    /**
     * Name for the Dictionary (must start with an alphabetic character and can contain only alphanumeric characters, underscores, and whitespace).
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dictionary_name" })
    dictionaryName: string;

    /**
     * Alphanumeric string identifying the service.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=service_id" })
    serviceId: string;

    /**
     * Integer identifying a service version.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version_id" })
    versionId: number;
}

export class UpdateDictionaryResponse extends SpeakeasyBase {
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
    dictionaryResponse?: shared.DictionaryResponse;
}

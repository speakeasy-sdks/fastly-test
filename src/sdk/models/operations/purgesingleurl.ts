/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class PurgeSingleUrlRequest extends SpeakeasyBase {
    /**
     * URL of object in cache to be purged.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cached_url" })
    cachedUrl: string;

    /**
     * If present, this header triggers the purge to be 'soft', which marks the affected object as stale rather than making it inaccessible.  Typically set to "1" when used, but the value is not important.
     */
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=fastly-soft-purge" })
    fastlySoftPurge?: number;
}

export class PurgeSingleUrlResponse extends SpeakeasyBase {
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
    purgeResponse?: shared.PurgeResponse;
}

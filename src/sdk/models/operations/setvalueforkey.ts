/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class SetValueForKeyRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/octet-stream" })
    requestBody?: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=add" })
    add?: boolean;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=append" })
    append?: boolean;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=background_fetch" })
    backgroundFetch?: boolean;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=if-generation-match" })
    ifGenerationMatch?: number;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=key_name" })
    keyName: string;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=metadata" })
    metadata?: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prepend" })
    prepend?: boolean;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=store_id" })
    storeId: string;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=time_to_live_sec" })
    timeToLiveSec?: number;
}

export class SetValueForKeyResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    headers?: Record<string, string[]>;

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
    res?: string;
}

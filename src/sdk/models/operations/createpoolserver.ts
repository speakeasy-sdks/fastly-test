/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as components from "../../../sdk/models/components";
import { AxiosResponse } from "axios";

export class CreatePoolServerRequest extends SpeakeasyBase {
    /**
     * Alphanumeric string identifying a Pool.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pool_id" })
    poolId: string;

    /**
     * Alphanumeric string identifying the service.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=service_id" })
    serviceId: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
    server?: components.Server;
}

export class CreatePoolServerResponse extends SpeakeasyBase {
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
    serverResponse?: components.ServerResponse;
}

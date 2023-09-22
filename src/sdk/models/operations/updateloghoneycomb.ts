/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class UpdateLogHoneycombRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
    loggingHoneycomb2?: shared.LoggingHoneycomb2;

    /**
     * The name for the real-time logging configuration.
     */
    @SpeakeasyMetadata({
        data: "pathParam, style=simple;explode=false;name=logging_honeycomb_name",
    })
    loggingHoneycombName: string;

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

export class UpdateLogHoneycombResponse extends SpeakeasyBase {
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
    loggingHoneycombResponse?: shared.LoggingHoneycombResponse;
}

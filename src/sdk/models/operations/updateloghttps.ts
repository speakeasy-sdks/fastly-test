/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class UpdateLogHttpsRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
    loggingHttps4?: shared.LoggingHttps4;

    /**
     * The name for the real-time logging configuration.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=logging_https_name" })
    loggingHttpsName: string;

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

export class UpdateLogHttpsResponse extends SpeakeasyBase {
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
    loggingHttpsResponse?: shared.LoggingHttpsResponse;
}

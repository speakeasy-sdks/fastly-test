/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class DeleteLogElasticsearchRequest extends SpeakeasyBase {
    /**
     * The name for the real-time logging configuration.
     */
    @SpeakeasyMetadata({
        data: "pathParam, style=simple;explode=false;name=logging_elasticsearch_name",
    })
    loggingElasticsearchName: string;

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

/**
 * OK
 */
export class DeleteLogElasticsearch200ApplicationJSON extends SpeakeasyBase {
    /**
     * ok
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: string;
}

export class DeleteLogElasticsearchResponse extends SpeakeasyBase {
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
    deleteLogElasticsearch200ApplicationJSONObject?: DeleteLogElasticsearch200ApplicationJSON;
}

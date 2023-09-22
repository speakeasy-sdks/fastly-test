/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class DeletePoolServerRequest extends SpeakeasyBase {
    /**
     * Alphanumeric string identifying a Pool.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pool_id" })
    poolId: string;

    /**
     * Alphanumeric string identifying a Server.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=server_id" })
    serverId: string;

    /**
     * Alphanumeric string identifying the service.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=service_id" })
    serviceId: string;
}

/**
 * OK
 */
export class DeletePoolServer200ApplicationJSON extends SpeakeasyBase {
    /**
     * ok
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: string;
}

export class DeletePoolServerResponse extends SpeakeasyBase {
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
    deletePoolServer200ApplicationJSONObject?: DeletePoolServer200ApplicationJSON;
}

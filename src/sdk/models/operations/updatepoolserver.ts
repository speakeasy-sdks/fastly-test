/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class UpdatePoolServerRequest extends SpeakeasyBase {
    /**
     * Alphanumeric string identifying a Pool.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pool_id" })
    poolId: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
    server?: shared.Server;

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

export class UpdatePoolServerResponse extends SpeakeasyBase {
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
    serverResponse?: shared.ServerResponse;
}

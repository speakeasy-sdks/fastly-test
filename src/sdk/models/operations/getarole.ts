/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class GetARoleRequest extends SpeakeasyBase {
    /**
     * Alphanumeric string identifying the role.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=role_id" })
    roleId: string;
}

/**
 * OK
 */
export class GetARole200ApplicationJSON extends SpeakeasyBase {}

export class GetARoleResponse extends SpeakeasyBase {
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
    getARole200ApplicationJSONObject?: GetARole200ApplicationJSON;
}

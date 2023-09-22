/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class DeleteAServiceGroupRequest extends SpeakeasyBase {
    /**
     * Alphanumeric string identifying the service group.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=service_group_id" })
    serviceGroupId: string;
}

export class DeleteAServiceGroupResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}

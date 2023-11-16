/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class ListUserGroupServiceGroupsRequest extends SpeakeasyBase {
    /**
     * Current page.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
    page?: number;

    /**
     * Number of records per page.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
    perPage?: number;

    /**
     * Alphanumeric string identifying the user group.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_group_id" })
    userGroupId: string;
}

/**
 * OK
 */
export class ListUserGroupServiceGroupsResponseBody extends SpeakeasyBase {}

export class ListUserGroupServiceGroupsResponse extends SpeakeasyBase {
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
    rawResponse: AxiosResponse;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    object?: ListUserGroupServiceGroupsResponseBody;
}

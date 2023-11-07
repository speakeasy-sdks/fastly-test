/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class ListAclEntriesRequest extends SpeakeasyBase {
    /**
     * Alphanumeric string identifying a ACL.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=acl_id" })
    aclId: string;

    /**
     * Direction in which to sort results.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
    direction?: shared.Direction;

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
     * Alphanumeric string identifying the service.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=service_id" })
    serviceId: string;

    /**
     * Field on which to sort.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
    sort?: string;
}

export class ListAclEntriesResponse extends SpeakeasyBase {
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
    @SpeakeasyMetadata({ elemType: shared.AclEntryResponse })
    classes?: shared.AclEntryResponse[];
}

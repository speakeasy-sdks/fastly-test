/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class BulkUpdateAclEntriesRequest extends SpeakeasyBase {
    /**
     * Alphanumeric string identifying a ACL.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=acl_id" })
    aclId: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    bulkUpdateAclEntriesRequest?: shared.BulkUpdateAclEntriesRequest;

    /**
     * Alphanumeric string identifying the service.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=service_id" })
    serviceId: string;
}

/**
 * OK
 */
export class BulkUpdateAclEntriesResponseBody extends SpeakeasyBase {
    /**
     * ok
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: string;
}

export class BulkUpdateAclEntriesResponse extends SpeakeasyBase {
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
    object?: BulkUpdateAclEntriesResponseBody;
}

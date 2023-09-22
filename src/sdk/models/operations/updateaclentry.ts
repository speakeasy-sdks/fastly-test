/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class UpdateAclEntryRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    aclEntry?: shared.AclEntry;

    /**
     * Alphanumeric string identifying an ACL Entry.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=acl_entry_id" })
    aclEntryId: string;

    /**
     * Alphanumeric string identifying a ACL.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=acl_id" })
    aclId: string;

    /**
     * Alphanumeric string identifying the service.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=service_id" })
    serviceId: string;
}

export class UpdateAclEntryResponse extends SpeakeasyBase {
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
    aclEntryResponse?: shared.AclEntryResponse;
}

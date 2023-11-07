/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TypeTlsDnsRecord } from "./typetlsdnsrecord";
import { Expose } from "class-transformer";

export class RelationshipMemberTlsDnsRecordInput extends SpeakeasyBase {
    /**
     * Resource type
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: TypeTlsDnsRecord;
}

export class RelationshipMemberTlsDnsRecord extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * Resource type
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: TypeTlsDnsRecord;
}
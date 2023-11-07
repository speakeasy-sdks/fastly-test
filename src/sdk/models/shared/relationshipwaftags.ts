/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RelationshipMemberWafTag } from "./relationshipmemberwaftag";
import { Expose, Type } from "class-transformer";

export class RelationshipWafTagsWafTags extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: RelationshipMemberWafTag })
    @Expose({ name: "data" })
    @Type(() => RelationshipMemberWafTag)
    data?: RelationshipMemberWafTag[];
}

export class RelationshipWafTags extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "waf_tags" })
    @Type(() => RelationshipWafTagsWafTags)
    wafTags?: RelationshipWafTagsWafTags;
}
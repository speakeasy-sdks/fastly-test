/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TypeWafRule } from "./typewafrule";
import { Expose } from "class-transformer";

export class RelationshipMemberWafRule extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * Resource type.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: TypeWafRule;
}

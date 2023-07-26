/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TypeWafActiveRule } from "./typewafactiverule";
import { Expose, Type } from "class-transformer";

/**
 * Describes the behavior for the particular rule revision within this firewall version.
 */
export enum BulkWafActiveRuleAttributesStatus {
    Log = "log",
    Block = "block",
    Score = "score",
}

export class BulkWafActiveRuleAttributes extends SpeakeasyBase {
    /**
     * The ModSecurity rule ID of the associated rule revision.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "modsec_rule_id" })
    modsecRuleId?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "revision" })
    revision?: any;

    /**
     * Describes the behavior for the particular rule revision within this firewall version.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: BulkWafActiveRuleAttributesStatus;
}

export class BulkWafActiveRuleInput extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "attributes" })
    @Type(() => BulkWafActiveRuleAttributes)
    attributes?: BulkWafActiveRuleAttributes;

    @SpeakeasyMetadata()
    @Expose({ name: "relationships" })
    relationships?: any;

    /**
     * Resource type.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: TypeWafActiveRule;
}

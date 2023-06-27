/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RelationshipWafRule } from "./relationshipwafrule";
import { TypeWafRuleRevision } from "./typewafrulerevision";
import { Expose, Type } from "class-transformer";

/**
 * The state, indicating if the revision is the most recent version of the rule.
 */
export enum WafRuleRevisionResponseDataAttributesState {
    Latest = "latest",
    Outdated = "outdated",
}

export class WafRuleRevisionResponseDataAttributes extends SpeakeasyBase {
    /**
     * Message metadata for the rule.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;

    /**
     * Corresponding ModSecurity rule ID.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "modsec_rule_id" })
    modsecRuleId?: number;

    /**
     * Paranoia level for the rule.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "paranoia_level" })
    paranoiaLevel?: number;

    /**
     * Revision number.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "revision" })
    revision?: number;

    /**
     * Severity metadata for the rule.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "severity" })
    severity?: number;

    /**
     * The ModSecurity rule logic.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "source" })
    source?: string;

    /**
     * The state, indicating if the revision is the most recent version of the rule.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "state" })
    state?: WafRuleRevisionResponseDataAttributesState;

    /**
     * The VCL representation of the rule logic.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "vcl" })
    vcl?: string;
}

export class WafRuleRevisionResponseData extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "attributes" })
    @Type(() => WafRuleRevisionResponseDataAttributes)
    attributes?: WafRuleRevisionResponseDataAttributes;

    /**
     * Alphanumeric string identifying a WAF rule revision.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "relationships" })
    @Type(() => RelationshipWafRule)
    relationships?: RelationshipWafRule;

    /**
     * Resource type.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: TypeWafRuleRevision;
}
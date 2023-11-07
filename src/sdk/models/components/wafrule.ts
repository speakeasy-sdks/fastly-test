/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TypeWafRule } from "./typewafrule";
import { Expose, Type } from "class-transformer";

/**
 * Rule publisher.
 */
export enum Publisher {
    Fastly = "fastly",
    Trustwave = "trustwave",
    Owasp = "owasp",
}

/**
 * The rule's [type](https://docs.fastly.com/en/guides/managing-rules-on-the-fastly-waf#understanding-the-types-of-rules).
 */
export enum WafRuleType {
    Strict = "strict",
    Score = "score",
    Threshold = "threshold",
}

export class WafRuleAttributes extends SpeakeasyBase {
    /**
     * Corresponding ModSecurity rule ID.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "modsec_rule_id" })
    modsecRuleId?: number;

    /**
     * Rule publisher.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "publisher" })
    publisher?: Publisher;

    /**
     * The rule's [type](https://docs.fastly.com/en/guides/managing-rules-on-the-fastly-waf#understanding-the-types-of-rules).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: WafRuleType;
}

export class WafRule extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "attributes" })
    @Type(() => WafRuleAttributes)
    attributes?: WafRuleAttributes;

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
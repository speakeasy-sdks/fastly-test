/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { WafActiveRuleResponseData } from "./wafactiveruleresponsedata";
import { Expose, Type } from "class-transformer";

/**
 * OK
 */
export class WafActiveRuleResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => WafActiveRuleResponseData)
    data?: WafActiveRuleResponseData;
}

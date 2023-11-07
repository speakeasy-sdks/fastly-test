/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { WafActiveRuleData } from "./wafactiveruledata";
import { Expose, Type } from "class-transformer";

export class BulkWafActiveRules extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: WafActiveRuleData })
    @Expose({ name: "data" })
    @Type(() => WafActiveRuleData)
    data?: WafActiveRuleData[];
}

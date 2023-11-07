/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { WafRuleResponseData } from "./wafruleresponsedata";
import { Expose, Type } from "class-transformer";

export class WafRuleResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => WafRuleResponseData)
    data?: WafRuleResponseData;

    @SpeakeasyMetadata()
    @Expose({ name: "included" })
    included?: any[];
}
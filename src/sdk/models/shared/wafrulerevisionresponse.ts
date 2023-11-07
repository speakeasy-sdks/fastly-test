/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { WafRule } from "./wafrule";
import { WafRuleRevisionResponseData } from "./wafrulerevisionresponsedata";
import { Expose, Type } from "class-transformer";

export class WafRuleRevisionResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => WafRuleRevisionResponseData)
    data?: WafRuleRevisionResponseData;

    @SpeakeasyMetadata({ elemType: WafRule })
    @Expose({ name: "included" })
    @Type(() => WafRule)
    included?: WafRule[];
}

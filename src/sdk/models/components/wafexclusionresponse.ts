/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { WafExclusionResponseData } from "./wafexclusionresponsedata";
import { Expose, Type } from "class-transformer";

export class WafExclusionResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => WafExclusionResponseData)
    data?: WafExclusionResponseData;
}

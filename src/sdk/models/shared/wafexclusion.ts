/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { WafExclusionDataInput } from "./wafexclusiondata";
import { Expose, Type } from "class-transformer";

export class WafExclusionInput extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => WafExclusionDataInput)
    data?: WafExclusionDataInput;
}
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { MutualAuthenticationDataInput } from "./mutualauthenticationdata";
import { Expose, Type } from "class-transformer";

export class MutualAuthenticationInput extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => MutualAuthenticationDataInput)
    data?: MutualAuthenticationDataInput;
}

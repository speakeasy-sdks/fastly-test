/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { MutualAuthenticationResponseData } from "./mutualauthenticationresponsedata";
import { Expose, Type } from "class-transformer";

/**
 * Created
 */
export class MutualAuthenticationResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => MutualAuthenticationResponseData)
    data?: MutualAuthenticationResponseData;
}

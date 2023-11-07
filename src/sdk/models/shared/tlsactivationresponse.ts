/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TlsActivationResponseData } from "./tlsactivationresponsedata";
import { Expose, Type } from "class-transformer";

export class TlsActivationResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => TlsActivationResponseData)
    data?: TlsActivationResponseData;
}

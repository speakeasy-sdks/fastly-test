/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TlsSubscriptionDataInput } from "./tlssubscriptiondata";
import { Expose, Type } from "class-transformer";

export class TlsSubscriptionInput extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => TlsSubscriptionDataInput)
    data?: TlsSubscriptionDataInput;
}
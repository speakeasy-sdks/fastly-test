/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TlsSubscriptionResponseAttributes } from "./tlssubscriptionresponseattributes";
import { Expose, Type } from "class-transformer";

export class TlsSubscriptionResponseData extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "attributes" })
    @Type(() => TlsSubscriptionResponseAttributes)
    attributes?: TlsSubscriptionResponseAttributes;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;
}

/**
 * Created
 */
export class TlsSubscriptionResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => TlsSubscriptionResponseData)
    data?: TlsSubscriptionResponseData;
}

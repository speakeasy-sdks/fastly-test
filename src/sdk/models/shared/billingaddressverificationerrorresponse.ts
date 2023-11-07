/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { BillingAddressAttributes } from "./billingaddressattributes";
import { Expose, Type } from "class-transformer";

export class Errors extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: BillingAddressAttributes })
    @Expose({ name: "candidates" })
    @Type(() => BillingAddressAttributes)
    candidates?: BillingAddressAttributes[];

    @SpeakeasyMetadata()
    @Expose({ name: "detail" })
    detail: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: number;

    @SpeakeasyMetadata()
    @Expose({ name: "title" })
    title: string;

    /**
     * The error type.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: string;
}

export class BillingAddressVerificationErrorResponse extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: Errors })
    @Expose({ name: "errors" })
    @Type(() => Errors)
    errors?: Errors[];
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { BillingAddressAttributesInput } from "./billingaddressattributes";
import { TypeBillingAddress } from "./typebillingaddress";
import { Expose, Type } from "class-transformer";

export class BillingAddressRequestDataInput extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "attributes" })
    @Type(() => BillingAddressAttributesInput)
    attributes?: BillingAddressAttributesInput;

    /**
     * Resource type
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: TypeBillingAddress;
}

/**
 * Billing address
 */
export class BillingAddressRequestInput extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => BillingAddressRequestDataInput)
    data?: BillingAddressRequestDataInput;

    /**
     * When set to true, the address will be saved without verification
     */
    @SpeakeasyMetadata()
    @Expose({ name: "skip_verification" })
    skipVerification?: boolean;
}
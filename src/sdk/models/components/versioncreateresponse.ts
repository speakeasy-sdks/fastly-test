/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class VersionCreateResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "number" })
    number?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "service_id" })
    serviceId?: string;
}

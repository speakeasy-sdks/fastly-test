/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RelationshipsForTlsActivationInput } from "./relationshipsfortlsactivation";
import { TypeTlsActivation } from "./typetlsactivation";
import { Expose, Type } from "class-transformer";

export class TlsActivationData extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "relationships" })
    @Type(() => RelationshipsForTlsActivationInput)
    relationships?: RelationshipsForTlsActivationInput;

    /**
     * Resource type.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: TypeTlsActivation;
}

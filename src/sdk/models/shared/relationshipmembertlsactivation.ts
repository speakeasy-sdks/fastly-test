/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TypeTlsActivation } from "./typetlsactivation";
import { Expose } from "class-transformer";

export class RelationshipMemberTlsActivationInput extends SpeakeasyBase {
    /**
     * Resource type.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: TypeTlsActivation;
}

export class RelationshipMemberTlsActivation extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * Resource type.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: TypeTlsActivation;
}

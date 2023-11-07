/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TypeTlsConfiguration } from "./typetlsconfiguration";
import { Expose } from "class-transformer";

export class RelationshipMemberTlsConfigurationInput extends SpeakeasyBase {
    /**
     * Resource type
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: TypeTlsConfiguration;
}

export class RelationshipMemberTlsConfiguration extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * Resource type
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: TypeTlsConfiguration;
}
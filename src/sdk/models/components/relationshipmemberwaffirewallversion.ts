/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TypeWafFirewallVersion } from "./typewaffirewallversion";
import { Expose } from "class-transformer";

export class RelationshipMemberWafFirewallVersion extends SpeakeasyBase {
    /**
     * Alphanumeric string identifying a Firewall version.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * Resource type.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: TypeWafFirewallVersion;
}

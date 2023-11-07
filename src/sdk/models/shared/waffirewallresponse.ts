/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SchemasWafFirewallVersion } from "./schemaswaffirewallversion";
import { WafFirewallResponseData } from "./waffirewallresponsedata";
import { Expose, Type } from "class-transformer";

export class WafFirewallResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => WafFirewallResponseData)
    data?: WafFirewallResponseData;

    @SpeakeasyMetadata({ elemType: SchemasWafFirewallVersion })
    @Expose({ name: "included" })
    @Type(() => SchemasWafFirewallVersion)
    included?: SchemasWafFirewallVersion[];
}

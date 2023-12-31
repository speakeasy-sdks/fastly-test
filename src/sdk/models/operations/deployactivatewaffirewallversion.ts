/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class DeployActivateWafFirewallVersionRequest extends SpeakeasyBase {
    /**
     * Alphanumeric string identifying a WAF Firewall.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firewall_id" })
    firewallId: string;

    /**
     * Integer identifying a WAF firewall version.
     */
    @SpeakeasyMetadata({
        data: "pathParam, style=simple;explode=false;name=firewall_version_number",
    })
    firewallVersionNumber: number;
}

/**
 * Accepted
 */
export class DeployActivateWafFirewallVersionResponseBody extends SpeakeasyBase {}

export class DeployActivateWafFirewallVersionResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Accepted
     */
    @SpeakeasyMetadata()
    object?: DeployActivateWafFirewallVersionResponseBody;
}

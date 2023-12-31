/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as components from "../../../sdk/models/components";
import { AxiosResponse } from "axios";

export class GetWafRuleExclusionRequest extends SpeakeasyBase {
    /**
     * A numeric ID identifying a WAF exclusion.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=exclusion_number" })
    exclusionNumber: number;

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

export class GetWafRuleExclusionResponse extends SpeakeasyBase {
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
     * OK
     */
    @SpeakeasyMetadata()
    wafExclusionResponse?: components.WafExclusionResponse;
}

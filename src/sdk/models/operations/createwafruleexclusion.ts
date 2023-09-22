/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class CreateWafRuleExclusionRequest extends SpeakeasyBase {
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

    @SpeakeasyMetadata({ data: "request, media_type=application/vnd.api+json" })
    wafExclusionInput?: shared.WafExclusionInput;
}

export class CreateWafRuleExclusionResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Created
     */
    @SpeakeasyMetadata()
    wafExclusionResponse?: shared.WafExclusionResponse;
}

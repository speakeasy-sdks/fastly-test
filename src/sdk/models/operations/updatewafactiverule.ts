/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class UpdateWafActiveRuleRequest extends SpeakeasyBase {
    /**
     * Alphanumeric string identifying a WAF Firewall.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firewall_id" })
    firewallId: string;

    /**
     * Integer identifying a service version.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version_id" })
    versionId: number;

    @SpeakeasyMetadata({ data: "request, media_type=application/vnd.api+json" })
    wafActiveRule?: shared.WafActiveRule;

    /**
     * Alphanumeric string identifying a WAF rule.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=waf_rule_id" })
    wafRuleId: string;
}

export class UpdateWafActiveRuleResponse extends SpeakeasyBase {
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
    wafActiveRuleResponse?: shared.WafActiveRuleResponse;
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ListWafActiveRulesSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=Fastly-Key" })
    token: string;
}

export class ListWafActiveRulesRequest extends SpeakeasyBase {
    /**
     * Limit results to active rules referencing an outdated rule revision.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[outdated]" })
    filterOutdated?: string;

    /**
     * Limit results to active rules with the specified status.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[status]" })
    filterStatus?: string;

    /**
     * Limit results to active rules with the specified message.
     */
    @SpeakeasyMetadata({
        data: "queryParam, style=form;explode=true;name=filter[waf_rule_revision][message]",
    })
    filterWafRuleRevisionMessage?: string;

    /**
     * Limit results to active rules that represent the specified ModSecurity modsec_rule_id.
     */
    @SpeakeasyMetadata({
        data: "queryParam, style=form;explode=true;name=filter[waf_rule_revision][modsec_rule_id]",
    })
    filterWafRuleRevisionModsecRuleId?: string;

    /**
     * Alphanumeric string identifying a WAF Firewall.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firewall_id" })
    firewallId: string;

    /**
     * Include relationships. Optional, comma-separated values. Permitted values: `waf_rule_revision` and `waf_firewall_version`.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
    include?: string;

    /**
     * Current page.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page[number]" })
    pageNumber?: number;

    /**
     * Number of records per page.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page[size]" })
    pageSize?: number;

    /**
     * Integer identifying a service version.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version_id" })
    versionId: number;
}

export class ListWafActiveRulesResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    wafActiveRulesResponse?: shared.WafActiveRulesResponse;
}

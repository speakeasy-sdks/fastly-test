/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ListWafRulesSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=Fastly-Key" })
    token: string;
}

export class ListWafRulesRequest extends SpeakeasyBase {
    /**
     * Limit the returned rules to a specific ModSecurity rule ID.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[modsec_rule_id]" })
    filterModsecRuleId?: string;

    /**
     * Limit the returned rules to a set not included in the active firewall version for a firewall.
     */
    @SpeakeasyMetadata({
        data: "queryParam, style=form;explode=true;name=filter[waf_firewall.id][not][match]",
    })
    filterWafFirewallIdNotMatch?: string;

    /**
     * Limit the returned rules to a set linked to a source.
     */
    @SpeakeasyMetadata({
        data: "queryParam, style=form;explode=true;name=filter[waf_rule_revisions][source]",
    })
    filterWafRuleRevisionsSource?: string;

    /**
     * Limit the returned rules to a set linked to a tag by name.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[waf_tags][name]" })
    filterWafTagsName?: string;

    /**
     * Include relationships. Optional, comma-separated values. Permitted values: `waf_tags` and `waf_rule_revisions`.
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
}

export class ListWafRulesResponse extends SpeakeasyBase {
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
    wafRulesResponse?: shared.WafRulesResponse;
}
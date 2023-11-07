/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class ListWafRuleRevisionsRequest extends SpeakeasyBase {
    /**
     * Include relationships. Optional.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
    include?: shared.WafRuleRevisionInclude;

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
     * Alphanumeric string identifying a WAF rule.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=waf_rule_id" })
    wafRuleId: string;
}

export class ListWafRuleRevisionsResponse extends SpeakeasyBase {
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
    wafRuleRevisionsResponse?: shared.WafRuleRevisionsResponse;
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as components from "../../../sdk/models/components";
import { AxiosResponse } from "axios";

export class GetWafRuleRevisionRequest extends SpeakeasyBase {
    /**
     * Include relationships. Optional, comma-separated values. Permitted values: `waf_rule`, `vcl`, and `source`. The `vcl` and `source` relationships show the WAF VCL and corresponding ModSecurity source. These fields are blank unless the relationship is included.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
    include?: string;

    /**
     * Alphanumeric string identifying a WAF rule.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=waf_rule_id" })
    wafRuleId: string;

    /**
     * Revision number.
     */
    @SpeakeasyMetadata({
        data: "pathParam, style=simple;explode=false;name=waf_rule_revision_number",
    })
    wafRuleRevisionNumber: number;
}

export class GetWafRuleRevisionResponse extends SpeakeasyBase {
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
    wafRuleRevisionResponse?: components.WafRuleRevisionResponse;
}

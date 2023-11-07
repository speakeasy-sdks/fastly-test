/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Rule revisions track new variations of [rules](/reference/api/waf/rules/) as they change over time with enhancements, fixes, and improvements. This object allows you to find a specific variation of a rule for use in your application. An [active rule](/reference/api/waf/rules/active/) on a firewall uses a specific rule revision.
 *
 * @see {@link https://developer.fastly.com/reference/api/waf/rules/revisions}
 */
export class WafRuleRevisions {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Get a revision of a rule
     *
     * @remarks
     * Get a specific rule revision.
     *
     * @deprecated this method will be removed in a future release, please migrate away from it as soon as possible
     */
    async getWafRuleRevision(
        req: operations.GetWafRuleRevisionRequest,
        security: operations.GetWafRuleRevisionSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.GetWafRuleRevisionResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetWafRuleRevisionRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/waf/rules/{waf_rule_id}/revisions/{waf_rule_revision_number}",
            req
        );

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetWafRuleRevisionSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/vnd.api+json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetWafRuleRevisionResponse =
            new operations.GetWafRuleRevisionResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/vnd.api+json`)) {
                    res.wafRuleRevisionResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.WafRuleRevisionResponse
                    );
                }
                break;
        }

        return res;
    }

    /**
     * List revisions for a rule
     *
     * @remarks
     * List all revisions for a specific rule. The `rule_id` provided can be the ModSecurity Rule ID or the Fastly generated rule ID.
     *
     * @deprecated this method will be removed in a future release, please migrate away from it as soon as possible
     */
    async listWafRuleRevisions(
        req: operations.ListWafRuleRevisionsRequest,
        security: operations.ListWafRuleRevisionsSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.ListWafRuleRevisionsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListWafRuleRevisionsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/waf/rules/{waf_rule_id}/revisions", req);

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.ListWafRuleRevisionsSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/vnd.api+json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.ListWafRuleRevisionsResponse =
            new operations.ListWafRuleRevisionsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/vnd.api+json`)) {
                    res.wafRuleRevisionsResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.WafRuleRevisionsResponse
                    );
                }
                break;
        }

        return res;
    }
}

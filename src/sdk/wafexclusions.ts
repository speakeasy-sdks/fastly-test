/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "../sdk/models/errors";
import * as operations from "../sdk/models/operations";
import * as shared from "../sdk/models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from "axios";

/**
 * WAF rule exclusions provide a flexible way to handle false positives, allowing specific variables, rules, and the entire WAF to be excluded on a per request basis. You can configure up to 300 WAF exclusions and each exclusion of type `rule` can have up to 30 rules associated with it.
 *
 * @remarks
 *
 *
 * @see {@link https://developer.fastly.com/reference/api/waf/rules/exclusions}
 */

export class WafExclusions {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Create a WAF rule exclusion
     *
     * @remarks
     * Create a WAF exclusion for a particular firewall version.
     *
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async createWafRuleExclusion(
        req: operations.CreateWafRuleExclusionRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.CreateWafRuleExclusionResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateWafRuleExclusionRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/waf/firewalls/{firewall_id}/versions/{firewall_version_number}/exclusions",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, null];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "wafExclusion", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = {
            ...reqBodyHeaders,
            ...config?.headers,
            ...properties.headers,
        };
        headers["Accept"] = "application/vnd.api+json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.CreateWafRuleExclusionResponse =
            new operations.CreateWafRuleExclusionResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 201:
                if (utils.matchContentType(contentType, `application/vnd.api+json`)) {
                    res.wafExclusionResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.WafExclusionResponse
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Delete a WAF rule exclusion
     *
     * @remarks
     * Delete a WAF exclusion for a particular firewall version.
     *
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async deleteWafRuleExclusion(
        req: operations.DeleteWafRuleExclusionRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteWafRuleExclusionResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteWafRuleExclusionRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/waf/firewalls/{firewall_id}/versions/{firewall_version_number}/exclusions/{exclusion_number}",
            req
        );
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        headers["Accept"] = "*/*";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "delete",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.DeleteWafRuleExclusionResponse =
            new operations.DeleteWafRuleExclusionResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 204:
                break;
        }

        return res;
    }

    /**
     * Get a WAF rule exclusion
     *
     * @remarks
     * Get a specific WAF exclusion object.
     *
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async getWafRuleExclusion(
        req: operations.GetWafRuleExclusionRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetWafRuleExclusionResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetWafRuleExclusionRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/waf/firewalls/{firewall_id}/versions/{firewall_version_number}/exclusions/{exclusion_number}",
            req
        );
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        headers["Accept"] = "application/vnd.api+json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetWafRuleExclusionResponse =
            new operations.GetWafRuleExclusionResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/vnd.api+json`)) {
                    res.wafExclusionResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.WafExclusionResponse
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * List WAF rule exclusions
     *
     * @remarks
     * List all exclusions for a particular firewall version.
     *
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async listWafRuleExclusions(
        req: operations.ListWafRuleExclusionsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.ListWafRuleExclusionsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListWafRuleExclusionsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/waf/firewalls/{firewall_id}/versions/{firewall_version_number}/exclusions",
            req
        );
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/vnd.api+json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

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

        const res: operations.ListWafRuleExclusionsResponse =
            new operations.ListWafRuleExclusionsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/vnd.api+json`)) {
                    res.wafExclusionsResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.WafExclusionsResponse
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Update a WAF rule exclusion
     *
     * @remarks
     * Update a WAF exclusion for a particular firewall version.
     *
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async updateWafRuleExclusion(
        req: operations.UpdateWafRuleExclusionRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.UpdateWafRuleExclusionResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateWafRuleExclusionRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/waf/firewalls/{firewall_id}/versions/{firewall_version_number}/exclusions/{exclusion_number}",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, null];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "wafExclusion", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = {
            ...reqBodyHeaders,
            ...config?.headers,
            ...properties.headers,
        };
        headers["Accept"] = "application/vnd.api+json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "patch",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.UpdateWafRuleExclusionResponse =
            new operations.UpdateWafRuleExclusionResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 201:
                if (utils.matchContentType(contentType, `application/vnd.api+json`)) {
                    res.wafExclusionResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.WafExclusionResponse
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }
}

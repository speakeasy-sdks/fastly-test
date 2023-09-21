/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "./models/errors";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from "axios";

/**
 * Tags for categorizing WAF [rules](/reference/api/waf/rules/).
 *
 * @see {@link https://developer.fastly.com/reference/api/waf/tags}
 */

export class WafTags {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * List tags
     *
     * @remarks
     * List all tags.
     *
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async listWafTags(
        req: operations.ListWafTagsRequest,
        security: operations.ListWafTagsSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.ListWafTagsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListWafTagsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/waf/tags";
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.ListWafTagsSecurity(security);
        }
        const properties = utils.parseSecurityProperties(security);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
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

        const res: operations.ListWafTagsResponse = new operations.ListWafTagsResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/vnd.api+json`)) {
                    res.wafTagsResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.WafTagsResponse
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

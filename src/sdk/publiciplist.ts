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
 * To help you manage firewall rules for connections from Fastly to your origin, we provide access to the [list of Fastly's assigned IP ranges](https://api.fastly.com/public-ip-list). Changes to this list will be announced in advance as an "IP address announcement" along with other service announcements to our [status page](https://fastlystatus.com/), which you can [subscribe](https://docs.fastly.com/en/guides/fastlys-network-status#subscribing-to-notifications) to. This list is exhaustive and includes all Fastly-owned IP ranges, so any client connections, log streaming reports, and origin connections should use these addresses.
 *
 * @see {@link https://developer.fastly.com/reference/api/utils/public-ip-list}
 */

export class PublicIpList {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * List Fastly's public IPs
     *
     * @remarks
     * List the public IP addresses for the Fastly network.
     */
    async listFastlyIps(
        security: operations.ListFastlyIpsSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.ListFastlyIpsResponse> {
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/public-ip-list";
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.ListFastlyIpsSecurity(security);
        }
        const properties = utils.parseSecurityProperties(security);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        headers["Accept"] = "application/json";

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

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

        const res: operations.ListFastlyIpsResponse = new operations.ListFastlyIpsResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.publicIpList = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.PublicIpList
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

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * See the line-by-line changes in configuration between two different versions of a service.
 *
 * @see {@link https://developer.fastly.com/reference/api/utils/diff}
 */
export class Diff {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Diff two service versions
     *
     * @remarks
     * Get diff between two versions.
     */
    async diffServiceVersions(
        req: operations.DiffServiceVersionsRequest,
        security: operations.DiffServiceVersionsSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.DiffServiceVersionsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DiffServiceVersionsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/service/{service_id}/diff/from/{from_version_id}/to/{to_version_id}",
            req
        );

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.DiffServiceVersionsSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json";
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

        const res: operations.DiffServiceVersionsResponse =
            new operations.DiffServiceVersionsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.diffResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.DiffResponse
                    );
                }
                break;
        }

        return res;
    }
}

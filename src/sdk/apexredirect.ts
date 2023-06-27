/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Supports redirecting traffic for apex domains, subdomains, or wildcard domains to a WWW subdomain.
 *
 * @see {@link https://developer.fastly.com/reference/api/vcl-services/apex-redirect}
 */
export class ApexRedirect {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Delete an apex redirect
     *
     * @remarks
     * Delete an apex redirect by its ID.
     */
    async deleteApexRedirect(
        req: operations.DeleteApexRedirectRequest,
        security: operations.DeleteApexRedirectSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteApexRedirectResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteApexRedirectRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/apex-redirects/{apex_redirect_id}", req);

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.DeleteApexRedirectSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

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

        const res: operations.DeleteApexRedirectResponse =
            new operations.DeleteApexRedirectResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.deleteApexRedirect200ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.DeleteApexRedirect200ApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get an apex redirect
     *
     * @remarks
     * Get an apex redirect by its ID.
     */
    async getApexRedirect(
        req: operations.GetApexRedirectRequest,
        security: operations.GetApexRedirectSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.GetApexRedirectResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetApexRedirectRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/apex-redirects/{apex_redirect_id}", req);

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetApexRedirectSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...config?.headers };
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

        const res: operations.GetApexRedirectResponse = new operations.GetApexRedirectResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.apexRedirect = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ApexRedirect
                    );
                }
                break;
        }

        return res;
    }

    /**
     * List apex redirects
     *
     * @remarks
     * List all apex redirects for a particular service and version.
     */
    async listApexRedirects(
        req: operations.ListApexRedirectsRequest,
        security: operations.ListApexRedirectsSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.ListApexRedirectsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListApexRedirectsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/service/{service_id}/version/{version_id}/apex-redirects",
            req
        );

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.ListApexRedirectsSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...config?.headers };
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

        const res: operations.ListApexRedirectsResponse = new operations.ListApexRedirectsResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.apexRedirects = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.apexRedirects = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ApexRedirect,
                        resFieldDepth
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Update an apex redirect
     *
     * @remarks
     * Update an apex redirect by its ID.
     */
    async updateApexRedirect(
        req: operations.UpdateApexRedirectRequest,
        security: operations.UpdateApexRedirectSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.UpdateApexRedirectResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateApexRedirectRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/apex-redirects/{apex_redirect_id}", req);

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "apexRedirectInput",
                "form"
            );
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.UpdateApexRedirectSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...reqBodyHeaders, ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "put",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.UpdateApexRedirectResponse =
            new operations.UpdateApexRedirectResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.apexRedirect = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ApexRedirect
                    );
                }
                break;
        }

        return res;
    }
}
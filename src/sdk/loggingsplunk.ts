/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Fastly will POST messages to your Splunk account in the format specified in the Splunk object.
 *
 * @see {@link https://developer.fastly.com/reference/api/logging/splunk}
 */
export class LoggingSplunk {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Create a Splunk log endpoint
     *
     * @remarks
     * Create a Splunk logging object for a particular service and version.
     */
    async createLogSplunk(
        req: operations.CreateLogSplunkRequest,
        security: operations.CreateLogSplunkSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.CreateLogSplunkResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateLogSplunkRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/service/{service_id}/version/{version_id}/logging/splunk",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "loggingSplunk2", "form");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.CreateLogSplunkSecurity(security);
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

        const res: operations.CreateLogSplunkResponse = new operations.CreateLogSplunkResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.loggingSplunkResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.LoggingSplunkResponse
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Delete a Splunk log endpoint
     *
     * @remarks
     * Delete the Splunk logging object for a particular service and version.
     */
    async deleteLogSplunk(
        req: operations.DeleteLogSplunkRequest,
        security: operations.DeleteLogSplunkSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteLogSplunkResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteLogSplunkRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/service/{service_id}/version/{version_id}/logging/splunk/{logging_splunk_name}",
            req
        );

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.DeleteLogSplunkSecurity(security);
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

        const res: operations.DeleteLogSplunkResponse = new operations.DeleteLogSplunkResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.deleteLogSplunk200ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.DeleteLogSplunk200ApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get a Splunk log endpoint
     *
     * @remarks
     * Get the details for a Splunk logging object for a particular service and version.
     */
    async getLogSplunk(
        req: operations.GetLogSplunkRequest,
        security: operations.GetLogSplunkSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.GetLogSplunkResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetLogSplunkRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/service/{service_id}/version/{version_id}/logging/splunk/{logging_splunk_name}",
            req
        );

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetLogSplunkSecurity(security);
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

        const res: operations.GetLogSplunkResponse = new operations.GetLogSplunkResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.loggingSplunkResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.LoggingSplunkResponse
                    );
                }
                break;
        }

        return res;
    }

    /**
     * List Splunk log endpoints
     *
     * @remarks
     * List all of the Splunk logging objects for a particular service and version.
     */
    async listLogSplunk(
        req: operations.ListLogSplunkRequest,
        security: operations.ListLogSplunkSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.ListLogSplunkResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListLogSplunkRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/service/{service_id}/version/{version_id}/logging/splunk",
            req
        );

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.ListLogSplunkSecurity(security);
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

        const res: operations.ListLogSplunkResponse = new operations.ListLogSplunkResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.loggingSplunkResponses = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.loggingSplunkResponses = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.LoggingSplunkResponse,
                        resFieldDepth
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Update a Splunk log endpoint
     *
     * @remarks
     * Update the Splunk logging object for a particular service and version.
     */
    async updateLogSplunk(
        req: operations.UpdateLogSplunkRequest,
        security: operations.UpdateLogSplunkSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.UpdateLogSplunkResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateLogSplunkRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/service/{service_id}/version/{version_id}/logging/splunk/{logging_splunk_name}",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "loggingSplunk2", "form");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.UpdateLogSplunkSecurity(security);
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

        const res: operations.UpdateLogSplunkResponse = new operations.UpdateLogSplunkResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.loggingSplunkResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.LoggingSplunkResponse
                    );
                }
                break;
        }

        return res;
    }
}

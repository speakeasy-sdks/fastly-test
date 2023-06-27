/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Fastly will upload log messages to the Google BigQuery dataset and table in the format specified in the BigQuery logging object.
 *
 * @see {@link https://developer.fastly.com/reference/api/logging/bigquery}
 */
export class LoggingBigquery {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Create a BigQuery log endpoint
     *
     * @remarks
     * Create a BigQuery logging object for a particular service and version.
     */
    async createLogBigquery(
        req: operations.CreateLogBigqueryRequest,
        security: operations.CreateLogBigquerySecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.CreateLogBigqueryResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateLogBigqueryRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/service/{service_id}/version/{version_id}/logging/bigquery",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "loggingBigquery2", "form");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.CreateLogBigquerySecurity(security);
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

        const res: operations.CreateLogBigqueryResponse = new operations.CreateLogBigqueryResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.loggingBigqueryResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.LoggingBigqueryResponse
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Delete a BigQuery log endpoint
     *
     * @remarks
     * Delete a BigQuery logging object for a particular service and version.
     */
    async deleteLogBigquery(
        req: operations.DeleteLogBigqueryRequest,
        security: operations.DeleteLogBigquerySecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteLogBigqueryResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteLogBigqueryRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/service/{service_id}/version/{version_id}/logging/bigquery/{logging_bigquery_name}",
            req
        );

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.DeleteLogBigquerySecurity(security);
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

        const res: operations.DeleteLogBigqueryResponse = new operations.DeleteLogBigqueryResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.deleteLogBigquery200ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.DeleteLogBigquery200ApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get a BigQuery log endpoint
     *
     * @remarks
     * Get the details for a BigQuery logging object for a particular service and version.
     */
    async getLogBigquery(
        req: operations.GetLogBigqueryRequest,
        security: operations.GetLogBigquerySecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.GetLogBigqueryResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetLogBigqueryRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/service/{service_id}/version/{version_id}/logging/bigquery/{logging_bigquery_name}",
            req
        );

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetLogBigquerySecurity(security);
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

        const res: operations.GetLogBigqueryResponse = new operations.GetLogBigqueryResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.loggingBigqueryResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.LoggingBigqueryResponse
                    );
                }
                break;
        }

        return res;
    }

    /**
     * List BigQuery log endpoints
     *
     * @remarks
     * List all of the BigQuery logging objects for a particular service and version.
     */
    async listLogBigquery(
        req: operations.ListLogBigqueryRequest,
        security: operations.ListLogBigquerySecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.ListLogBigqueryResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListLogBigqueryRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/service/{service_id}/version/{version_id}/logging/bigquery",
            req
        );

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.ListLogBigquerySecurity(security);
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

        const res: operations.ListLogBigqueryResponse = new operations.ListLogBigqueryResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.loggingBigqueryResponses = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.loggingBigqueryResponses = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.LoggingBigqueryResponse,
                        resFieldDepth
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Update a BigQuery log endpoint
     *
     * @remarks
     * Update a BigQuery logging object for a particular service and version.
     */
    async updateLogBigquery(
        req: operations.UpdateLogBigqueryRequest,
        security: operations.UpdateLogBigquerySecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.UpdateLogBigqueryResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateLogBigqueryRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/service/{service_id}/version/{version_id}/logging/bigquery/{logging_bigquery_name}",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "loggingBigquery2", "form");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.UpdateLogBigquerySecurity(security);
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

        const res: operations.UpdateLogBigqueryResponse = new operations.UpdateLogBigqueryResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.loggingBigqueryResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.LoggingBigqueryResponse
                    );
                }
                break;
        }

        return res;
    }
}
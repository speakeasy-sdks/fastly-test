/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Fastly will upload log messages to the Azure Blob Storage container in the format specified in the Azure Blob object.
 *
 * @see {@link https://developer.fastly.com/reference/api/logging/azureblob}
 */
export class LoggingAzureblob {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Create an Azure Blob Storage log endpoint
     *
     * @remarks
     * Create an Azure Blob Storage logging endpoint for a particular service and version.
     */
    async createLogAzure(
        req: operations.CreateLogAzureRequest,
        security: operations.CreateLogAzureSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.CreateLogAzureResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateLogAzureRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/service/{service_id}/version/{version_id}/logging/azureblob",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "loggingAzureblobInput",
                "form"
            );
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.CreateLogAzureSecurity(security);
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

        const res: operations.CreateLogAzureResponse = new operations.CreateLogAzureResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.loggingAzureblobResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.LoggingAzureblobResponse
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Delete the Azure Blob Storage log endpoint
     *
     * @remarks
     * Delete the Azure Blob Storage logging endpoint for a particular service and version.
     */
    async deleteLogAzure(
        req: operations.DeleteLogAzureRequest,
        security: operations.DeleteLogAzureSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteLogAzureResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteLogAzureRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/service/{service_id}/version/{version_id}/logging/azureblob/{logging_azureblob_name}",
            req
        );

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.DeleteLogAzureSecurity(security);
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

        const res: operations.DeleteLogAzureResponse = new operations.DeleteLogAzureResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.deleteLogAzure200ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.DeleteLogAzure200ApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get an Azure Blob Storage log endpoint
     *
     * @remarks
     * Get the Azure Blob Storage logging endpoint for a particular service and version.
     */
    async getLogAzure(
        req: operations.GetLogAzureRequest,
        security: operations.GetLogAzureSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.GetLogAzureResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetLogAzureRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/service/{service_id}/version/{version_id}/logging/azureblob/{logging_azureblob_name}",
            req
        );

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetLogAzureSecurity(security);
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

        const res: operations.GetLogAzureResponse = new operations.GetLogAzureResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.loggingAzureblobResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.LoggingAzureblobResponse
                    );
                }
                break;
        }

        return res;
    }

    /**
     * List Azure Blob Storage log endpoints
     *
     * @remarks
     * List all of the Azure Blob Storage logging endpoints for a particular service and version.
     */
    async listLogAzure(
        req: operations.ListLogAzureRequest,
        security: operations.ListLogAzureSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.ListLogAzureResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListLogAzureRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/service/{service_id}/version/{version_id}/logging/azureblob",
            req
        );

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.ListLogAzureSecurity(security);
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

        const res: operations.ListLogAzureResponse = new operations.ListLogAzureResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.loggingAzureblobResponses = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.loggingAzureblobResponses = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.LoggingAzureblobResponse,
                        resFieldDepth
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Update an Azure Blob Storage log endpoint
     *
     * @remarks
     * Update the Azure Blob Storage logging endpoint for a particular service and version.
     */
    async updateLogAzure(
        req: operations.UpdateLogAzureRequest,
        security: operations.UpdateLogAzureSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.UpdateLogAzureResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateLogAzureRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/service/{service_id}/version/{version_id}/logging/azureblob/{logging_azureblob_name}",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "loggingAzureblobInput",
                "form"
            );
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.UpdateLogAzureSecurity(security);
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

        const res: operations.UpdateLogAzureResponse = new operations.UpdateLogAzureResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.loggingAzureblobResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.LoggingAzureblobResponse
                    );
                }
                break;
        }

        return res;
    }
}

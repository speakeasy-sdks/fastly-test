/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Fastly will stream log messages to the Heroku account in the format specified in the Heroku object.
 *
 * @see {@link https://developer.fastly.com/reference/api/logging/heroku}
 */
export class LoggingHeroku {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Create a Heroku log endpoint
     *
     * @remarks
     * Create a Heroku for a particular service and version.
     */
    async createLogHeroku(
        req: operations.CreateLogHerokuRequest,
        security: operations.CreateLogHerokuSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.CreateLogHerokuResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateLogHerokuRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/service/{service_id}/version/{version_id}/logging/heroku",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "loggingHeroku2", "form");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.CreateLogHerokuSecurity(security);
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

        const res: operations.CreateLogHerokuResponse = new operations.CreateLogHerokuResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.loggingHerokuResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.LoggingHerokuResponse
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Delete the Heroku log endpoint
     *
     * @remarks
     * Delete the Heroku for a particular service and version.
     */
    async deleteLogHeroku(
        req: operations.DeleteLogHerokuRequest,
        security: operations.DeleteLogHerokuSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteLogHerokuResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteLogHerokuRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/service/{service_id}/version/{version_id}/logging/heroku/{logging_heroku_name}",
            req
        );

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.DeleteLogHerokuSecurity(security);
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

        const res: operations.DeleteLogHerokuResponse = new operations.DeleteLogHerokuResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.deleteLogHeroku200ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.DeleteLogHeroku200ApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get a Heroku log endpoint
     *
     * @remarks
     * Get the Heroku for a particular service and version.
     */
    async getLogHeroku(
        req: operations.GetLogHerokuRequest,
        security: operations.GetLogHerokuSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.GetLogHerokuResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetLogHerokuRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/service/{service_id}/version/{version_id}/logging/heroku/{logging_heroku_name}",
            req
        );

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetLogHerokuSecurity(security);
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

        const res: operations.GetLogHerokuResponse = new operations.GetLogHerokuResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.loggingHerokuResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.LoggingHerokuResponse
                    );
                }
                break;
        }

        return res;
    }

    /**
     * List Heroku log endpoints
     *
     * @remarks
     * List all of the Herokus for a particular service and version.
     */
    async listLogHeroku(
        req: operations.ListLogHerokuRequest,
        security: operations.ListLogHerokuSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.ListLogHerokuResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListLogHerokuRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/service/{service_id}/version/{version_id}/logging/heroku",
            req
        );

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.ListLogHerokuSecurity(security);
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

        const res: operations.ListLogHerokuResponse = new operations.ListLogHerokuResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.loggingHerokuResponses = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.loggingHerokuResponses = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.LoggingHerokuResponse,
                        resFieldDepth
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Update the Heroku log endpoint
     *
     * @remarks
     * Update the Heroku for a particular service and version.
     */
    async updateLogHeroku(
        req: operations.UpdateLogHerokuRequest,
        security: operations.UpdateLogHerokuSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.UpdateLogHerokuResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateLogHerokuRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/service/{service_id}/version/{version_id}/logging/heroku/{logging_heroku_name}",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "loggingHeroku2", "form");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.UpdateLogHerokuSecurity(security);
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

        const res: operations.UpdateLogHerokuResponse = new operations.UpdateLogHerokuResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.loggingHerokuResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.LoggingHerokuResponse
                    );
                }
                break;
        }

        return res;
    }
}

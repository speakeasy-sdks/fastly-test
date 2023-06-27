/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Fastly will upload log messages to the OpenStack bucket in the format specified in the openstack object.
 *
 * @see {@link https://developer.fastly.com/reference/api/logging/openstack}
 */
export class LoggingOpenstack {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Create an OpenStack log endpoint
     *
     * @remarks
     * Create a openstack for a particular service and version.
     */
    async createLogOpenstack(
        req: operations.CreateLogOpenstackRequest,
        security: operations.CreateLogOpenstackSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.CreateLogOpenstackResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateLogOpenstackRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/service/{service_id}/version/{version_id}/logging/openstack",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "loggingOpenstackInput",
                "form"
            );
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.CreateLogOpenstackSecurity(security);
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

        const res: operations.CreateLogOpenstackResponse =
            new operations.CreateLogOpenstackResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.loggingOpenstackResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.LoggingOpenstackResponse
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Delete an OpenStack log endpoint
     *
     * @remarks
     * Delete the openstack for a particular service and version.
     */
    async deleteLogOpenstack(
        req: operations.DeleteLogOpenstackRequest,
        security: operations.DeleteLogOpenstackSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteLogOpenstackResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteLogOpenstackRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/service/{service_id}/version/{version_id}/logging/openstack/{logging_openstack_name}",
            req
        );

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.DeleteLogOpenstackSecurity(security);
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

        const res: operations.DeleteLogOpenstackResponse =
            new operations.DeleteLogOpenstackResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.deleteLogOpenstack200ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.DeleteLogOpenstack200ApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get an OpenStack log endpoint
     *
     * @remarks
     * Get the openstack for a particular service and version.
     */
    async getLogOpenstack(
        req: operations.GetLogOpenstackRequest,
        security: operations.GetLogOpenstackSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.GetLogOpenstackResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetLogOpenstackRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/service/{service_id}/version/{version_id}/logging/openstack/{logging_openstack_name}",
            req
        );

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetLogOpenstackSecurity(security);
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

        const res: operations.GetLogOpenstackResponse = new operations.GetLogOpenstackResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.loggingOpenstackResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.LoggingOpenstackResponse
                    );
                }
                break;
        }

        return res;
    }

    /**
     * List OpenStack log endpoints
     *
     * @remarks
     * List all of the openstacks for a particular service and version.
     */
    async listLogOpenstack(
        req: operations.ListLogOpenstackRequest,
        security: operations.ListLogOpenstackSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.ListLogOpenstackResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListLogOpenstackRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/service/{service_id}/version/{version_id}/logging/openstack",
            req
        );

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.ListLogOpenstackSecurity(security);
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

        const res: operations.ListLogOpenstackResponse = new operations.ListLogOpenstackResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.loggingOpenstackResponses = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.loggingOpenstackResponses = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.LoggingOpenstackResponse,
                        resFieldDepth
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Update an OpenStack log endpoint
     *
     * @remarks
     * Update the openstack for a particular service and version.
     */
    async updateLogOpenstack(
        req: operations.UpdateLogOpenstackRequest,
        security: operations.UpdateLogOpenstackSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.UpdateLogOpenstackResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateLogOpenstackRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/service/{service_id}/version/{version_id}/logging/openstack/{logging_openstack_name}",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "loggingOpenstackInput",
                "form"
            );
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.UpdateLogOpenstackSecurity(security);
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

        const res: operations.UpdateLogOpenstackResponse =
            new operations.UpdateLogOpenstackResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.loggingOpenstackResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.LoggingOpenstackResponse
                    );
                }
                break;
        }

        return res;
    }
}
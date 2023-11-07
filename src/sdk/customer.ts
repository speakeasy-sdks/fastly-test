/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * A Customer is the base object that owns your Users and Services. Some information may be limited depending on access level.
 *
 * @see {@link https://developer.fastly.com/reference/api/account/customer}
 */
export class Customer {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Delete a customer
     *
     * @remarks
     * Delete a customer.
     */
    async deleteCustomer(
        req: operations.DeleteCustomerRequest,
        security: operations.DeleteCustomerSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteCustomerResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteCustomerRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/customer/{customer_id}", req);

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.DeleteCustomerSecurity(security);
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

        const res: operations.DeleteCustomerResponse = new operations.DeleteCustomerResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.deleteCustomer200ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.DeleteCustomer200ApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get a customer
     *
     * @remarks
     * Get a specific customer.
     */
    async getCustomer(
        req: operations.GetCustomerRequest,
        security: operations.GetCustomerSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.GetCustomerResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetCustomerRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/customer/{customer_id}", req);

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetCustomerSecurity(security);
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

        const res: operations.GetCustomerResponse = new operations.GetCustomerResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.customerResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.CustomerResponse
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get the logged in customer
     *
     * @remarks
     * Get the logged in customer.
     */
    async getLoggedInCustomer(
        security: operations.GetLoggedInCustomerSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.GetLoggedInCustomerResponse> {
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/current_customer";

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetLoggedInCustomerSecurity(security);
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

        const res: operations.GetLoggedInCustomerResponse =
            new operations.GetLoggedInCustomerResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.customerResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.CustomerResponse
                    );
                }
                break;
        }

        return res;
    }

    /**
     * List users
     *
     * @remarks
     * List all users from a specified customer id.
     */
    async listUsers(
        req: operations.ListUsersRequest,
        security: operations.ListUsersSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.ListUsersResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListUsersRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/customer/{customer_id}/users", req);

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.ListUsersSecurity(security);
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

        const res: operations.ListUsersResponse = new operations.ListUsersResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.schemasUserResponses = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.schemasUserResponses = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.SchemasUserResponse,
                        resFieldDepth
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Update a customer
     *
     * @remarks
     * Update a customer.
     */
    async updateCustomer(
        req: operations.UpdateCustomerRequest,
        security: operations.UpdateCustomerSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.UpdateCustomerResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateCustomerRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/customer/{customer_id}", req);

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "customerInput", "form");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.UpdateCustomerSecurity(security);
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

        const res: operations.UpdateCustomerResponse = new operations.UpdateCustomerResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.customerResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.CustomerResponse
                    );
                }
                break;
        }

        return res;
    }
}

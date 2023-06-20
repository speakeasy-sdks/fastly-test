/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * A Dictionary is a VCL data table that stores key-value pairs accessible to VCL during request processing. New, empty dictionaries can be attached to a draft version of a service, which must be activated for the dictionary to be included in VCL. Once installed, a dictionary's items may be updated via API calls without having to activate a new version of the associated service configuration. To remove a dictionary, delete it on a draft version of a service (one that is not locked and not active). Once removed, activate the draft service version without the dictionary.
 *
 * @see {@link https://developer.fastly.com/reference/api/dictionaries/dictionary}
 */
export class Dictionary {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Create an edge dictionary
     *
     * @remarks
     * Create named dictionary for a particular service and version.
     */
    async createDictionary(
        req: operations.CreateDictionaryRequest,
        security: operations.CreateDictionarySecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.CreateDictionaryResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateDictionaryRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/service/{service_id}/version/{version_id}/dictionary",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "dictionary", "form");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.CreateDictionarySecurity(security);
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

        const res: operations.CreateDictionaryResponse = new operations.CreateDictionaryResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.dictionaryResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.DictionaryResponse
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Delete an edge dictionary
     *
     * @remarks
     * Delete named dictionary for a particular service and version.
     */
    async deleteDictionary(
        req: operations.DeleteDictionaryRequest,
        security: operations.DeleteDictionarySecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteDictionaryResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteDictionaryRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/service/{service_id}/version/{version_id}/dictionary/{dictionary_name}",
            req
        );

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.DeleteDictionarySecurity(security);
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

        const res: operations.DeleteDictionaryResponse = new operations.DeleteDictionaryResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.deleteDictionary200ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.DeleteDictionary200ApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get an edge dictionary
     *
     * @remarks
     * Retrieve a single dictionary by name for the version and service.
     */
    async getDictionary(
        req: operations.GetDictionaryRequest,
        security: operations.GetDictionarySecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.GetDictionaryResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetDictionaryRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/service/{service_id}/version/{version_id}/dictionary/{dictionary_name}",
            req
        );

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetDictionarySecurity(security);
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

        const res: operations.GetDictionaryResponse = new operations.GetDictionaryResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.dictionaryResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.DictionaryResponse
                    );
                }
                break;
        }

        return res;
    }

    /**
     * List edge dictionaries
     *
     * @remarks
     * List all dictionaries for the version of the service.
     */
    async listDictionaries(
        req: operations.ListDictionariesRequest,
        security: operations.ListDictionariesSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.ListDictionariesResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListDictionariesRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/service/{service_id}/version/{version_id}/dictionary",
            req
        );

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.ListDictionariesSecurity(security);
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

        const res: operations.ListDictionariesResponse = new operations.ListDictionariesResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.dictionaryResponses = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.dictionaryResponses = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.DictionaryResponse,
                        resFieldDepth
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Update an edge dictionary
     *
     * @remarks
     * Update named dictionary for a particular service and version.
     */
    async updateDictionary(
        req: operations.UpdateDictionaryRequest,
        security: operations.UpdateDictionarySecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.UpdateDictionaryResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateDictionaryRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/service/{service_id}/version/{version_id}/dictionary/{dictionary_name}",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "dictionary", "form");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.UpdateDictionarySecurity(security);
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

        const res: operations.UpdateDictionaryResponse = new operations.UpdateDictionaryResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.dictionaryResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.DictionaryResponse
                    );
                }
                break;
        }

        return res;
    }
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * An ACL entry holds an individual IP address or subnet range and is a member of an ACL. ACL entries are versionless, which means they can be created, modified, or deleted without activating a new version of your service.
 *
 * @remarks
 *
 *
 * @see {@link https://developer.fastly.com/reference/api/acls/acl-entry}
 */
export class AclEntry {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Update multiple ACL entries
     *
     * @remarks
     * Update multiple ACL entries on the same ACL. For faster updates to your service, group your changes into large batches. The maximum batch size is 1000 entries. [Contact support](https://support.fastly.com/) to discuss raising this limit.
     */
    async bulkUpdateAclEntries(
        req: operations.BulkUpdateAclEntriesRequest,
        security: operations.BulkUpdateAclEntriesSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.BulkUpdateAclEntriesResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.BulkUpdateAclEntriesRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/service/{service_id}/acl/{acl_id}/entries",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "bulkUpdateAclEntriesRequestInput",
                "json"
            );
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.BulkUpdateAclEntriesSecurity(security);
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
            method: "patch",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.BulkUpdateAclEntriesResponse =
            new operations.BulkUpdateAclEntriesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.bulkUpdateAclEntries200ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.BulkUpdateAclEntries200ApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Create an ACL entry
     *
     * @remarks
     * Add an ACL entry to an ACL.
     */
    async createAclEntry(
        req: operations.CreateAclEntryRequest,
        security: operations.CreateAclEntrySecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.CreateAclEntryResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateAclEntryRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/service/{service_id}/acl/{acl_id}/entry",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "aclEntry", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.CreateAclEntrySecurity(security);
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

        const res: operations.CreateAclEntryResponse = new operations.CreateAclEntryResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.aclEntryResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.AclEntryResponse
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Delete an ACL entry
     *
     * @remarks
     * Delete an ACL entry from a specified ACL.
     */
    async deleteAclEntry(
        req: operations.DeleteAclEntryRequest,
        security: operations.DeleteAclEntrySecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteAclEntryResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteAclEntryRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/service/{service_id}/acl/{acl_id}/entry/{acl_entry_id}",
            req
        );

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.DeleteAclEntrySecurity(security);
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

        const res: operations.DeleteAclEntryResponse = new operations.DeleteAclEntryResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.deleteAclEntry200ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.DeleteAclEntry200ApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Describe an ACL entry
     *
     * @remarks
     * Retrieve a single ACL entry.
     */
    async getAclEntry(
        req: operations.GetAclEntryRequest,
        security: operations.GetAclEntrySecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.GetAclEntryResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetAclEntryRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/service/{service_id}/acl/{acl_id}/entry/{acl_entry_id}",
            req
        );

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetAclEntrySecurity(security);
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

        const res: operations.GetAclEntryResponse = new operations.GetAclEntryResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.aclEntryResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.AclEntryResponse
                    );
                }
                break;
        }

        return res;
    }

    /**
     * List ACL entries
     *
     * @remarks
     * List ACL entries for a specified ACL.
     */
    async listAclEntries(
        req: operations.ListAclEntriesRequest,
        security: operations.ListAclEntriesSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.ListAclEntriesResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListAclEntriesRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/service/{service_id}/acl/{acl_id}/entries",
            req
        );

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.ListAclEntriesSecurity(security);
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

        const res: operations.ListAclEntriesResponse = new operations.ListAclEntriesResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
            headers: utils.getHeadersFromResponse(httpRes.headers),
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.aclEntryResponses = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.aclEntryResponses = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.AclEntryResponse,
                        resFieldDepth
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Update an ACL entry
     *
     * @remarks
     * Update an ACL entry for a specified ACL.
     */
    async updateAclEntry(
        req: operations.UpdateAclEntryRequest,
        security: operations.UpdateAclEntrySecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.UpdateAclEntryResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateAclEntryRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/service/{service_id}/acl/{acl_id}/entry/{acl_entry_id}",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "aclEntry", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.UpdateAclEntrySecurity(security);
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
            method: "patch",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.UpdateAclEntryResponse = new operations.UpdateAclEntryResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.aclEntryResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.AclEntryResponse
                    );
                }
                break;
        }

        return res;
    }
}

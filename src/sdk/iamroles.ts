/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * A role is a collection of permissions that can be assigned to a user group.
 *
 * @see {@link https://developer.fastly.com/reference/api/account/roles}
 */
export class IamRoles {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Delete a role
     *
     * @remarks
     * Delete a role.
     */
    async deleteARole(
        req: operations.DeleteARoleRequest,
        security: operations.DeleteARoleSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteARoleResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteARoleRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/roles/{role_id}", req);

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.DeleteARoleSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...config?.headers };
        headers["Accept"] = "*/*";
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

        const res: operations.DeleteARoleResponse = new operations.DeleteARoleResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 204:
                break;
        }

        return res;
    }

    /**
     * Get a role
     *
     * @remarks
     * Get a role.
     */
    async getARole(
        req: operations.GetARoleRequest,
        security: operations.GetARoleSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.GetARoleResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetARoleRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/roles/{role_id}", req);

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetARoleSecurity(security);
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

        const res: operations.GetARoleResponse = new operations.GetARoleResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getARole200ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.GetARole200ApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * List permissions in a role
     *
     * @remarks
     * List all permissions in a role.
     */
    async listRolePermissions(
        req: operations.ListRolePermissionsRequest,
        security: operations.ListRolePermissionsSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.ListRolePermissionsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListRolePermissionsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/roles/{role_id}/permissions", req);

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.ListRolePermissionsSecurity(security);
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

        const res: operations.ListRolePermissionsResponse =
            new operations.ListRolePermissionsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.listRolePermissions200ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.ListRolePermissions200ApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * List roles
     *
     * @remarks
     * List all roles.
     */
    async listRoles(
        req: operations.ListRolesRequest,
        security: operations.ListRolesSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.ListRolesResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListRolesRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/roles";

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.ListRolesSecurity(security);
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

        const res: operations.ListRolesResponse = new operations.ListRolesResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.listRoles200ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.ListRoles200ApplicationJSON
                    );
                }
                break;
        }

        return res;
    }
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "./models/errors";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from "axios";

/**
 * Get information on current and past bills.
 *
 * @see {@link https://developer.fastly.com/reference/api/account/billing}
 */
export enum GetInvoiceAcceptEnum {
    applicationJson = "application/json",
    textCsv = "text/csv",
    applicationPdf = "application/pdf",
}

export enum GetInvoiceByIdAcceptEnum {
    applicationJson = "application/json",
    textCsv = "text/csv",
    applicationPdf = "application/pdf",
}

export class Billing {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Get an invoice
     *
     * @remarks
     * Get the invoice for a given year and month. Can be any month from when the Customer was created to the current month.
     */
    async getInvoice(
        req: operations.GetInvoiceRequest,
        config?: AxiosRequestConfig,
        acceptHeaderOverride?: GetInvoiceAcceptEnum
    ): Promise<operations.GetInvoiceResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetInvoiceRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/billing/v2/year/{year}/month/{month}",
            req
        );
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        if (acceptHeaderOverride !== undefined) {
            headers["Accept"] = acceptHeaderOverride.toString();
        } else {
            headers["Accept"] = "application/json;q=1, text/csv;q=0.7, application/pdf;q=0";
        }

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

        const res: operations.GetInvoiceResponse = new operations.GetInvoiceResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.billingResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.BillingResponse
                    );
                } else if (utils.matchContentType(contentType, `application/pdf`)) {
                    res.getInvoice200ApplicationPdfBinaryString = httpRes?.data;
                } else if (utils.matchContentType(contentType, `text/csv`)) {
                    res.getInvoice200TextCsvCsvString = decodedRes;
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get an invoice
     *
     * @remarks
     * Get the invoice for the given invoice_id.
     */
    async getInvoiceById(
        req: operations.GetInvoiceByIdRequest,
        config?: AxiosRequestConfig,
        acceptHeaderOverride?: GetInvoiceByIdAcceptEnum
    ): Promise<operations.GetInvoiceByIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetInvoiceByIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/billing/v2/account_customers/{customer_id}/invoices/{invoice_id}",
            req
        );
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        if (acceptHeaderOverride !== undefined) {
            headers["Accept"] = acceptHeaderOverride.toString();
        } else {
            headers["Accept"] = "application/json;q=1, text/csv;q=0.7, application/pdf;q=0";
        }

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

        const res: operations.GetInvoiceByIdResponse = new operations.GetInvoiceByIdResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.billingResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.BillingResponse
                    );
                } else if (utils.matchContentType(contentType, `application/pdf`)) {
                    res.getInvoiceById200ApplicationPdfBinaryString = httpRes?.data;
                } else if (utils.matchContentType(contentType, `text/csv`)) {
                    res.getInvoiceById200TextCsvCsvString = decodedRes;
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get month-to-date billing estimate
     *
     * @remarks
     * Get the current month-to-date estimate. This endpoint has two different responses. Under normal circumstances, it generally takes less than 5 seconds to generate but in certain cases can take up to 60 seconds. Once generated the month-to-date estimate is cached for 4 hours, and is available the next request will return the JSON representation of the month-to-date estimate. While a report is being generated in the background, this endpoint will return a `202 Accepted` response. The full format of which can be found in detail in our [billing calculation guide](https://docs.fastly.com/en/guides/how-we-calculate-your-bill). There are certain accounts for which we are unable to generate a month-to-date estimate. For example, accounts who have parent-pay are unable to generate an MTD estimate. The parent accounts are able to generate a month-to-date estimate but that estimate will not include the child accounts amounts at this time.
     */
    async getInvoiceMtd(
        req: operations.GetInvoiceMtdRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetInvoiceMtdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetInvoiceMtdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/billing/v2/account_customers/{customer_id}/mtd_invoice",
            req
        );
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
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

        const res: operations.GetInvoiceMtdResponse = new operations.GetInvoiceMtdResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.billingEstimateResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.BillingEstimateResponse
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }
}

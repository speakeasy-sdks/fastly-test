/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.
 *
 * @remarks
 *
 */
export enum LoggingBigqueryResponseFormatVersion {
    One = 1,
    Two = 2,
}

/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`.
 *
 * @remarks
 *
 */
export enum LoggingBigqueryResponsePlacement {
    None = "none",
    WafDebug = "waf_debug",
    LessThanNilGreaterThan = "<nil>",
}

export class LoggingBigqueryResponse extends SpeakeasyBase {
    /**
     * The name of the Google Cloud Platform service account associated with the target log collection service. Not required if `user` and `secret_key` are provided.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "account_name" })
    accountName?: string;

    /**
     * Date and time in ISO 8601 format.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    /**
     * Your BigQuery dataset.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "dataset" })
    dataset?: string;

    /**
     * Date and time in ISO 8601 format.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "deleted_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    deletedAt?: Date;

    /**
     * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce JSON that matches the schema of your BigQuery table.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "format" })
    format?: string;

    /**
     * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "format_version" })
    formatVersion?: LoggingBigqueryResponseFormatVersion;

    /**
     * The name of the BigQuery logging object. Used as a primary key for API access.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "placement" })
    placement?: LoggingBigqueryResponsePlacement;

    /**
     * Your Google Cloud Platform project ID. Required
     */
    @SpeakeasyMetadata()
    @Expose({ name: "project_id" })
    projectId?: string;

    /**
     * The name of an existing condition in the configured endpoint, or leave blank to always execute.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "response_condition" })
    responseCondition?: string;

    /**
     * Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. Not required if `account_name` is specified.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "secret_key" })
    secretKey?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "service_id" })
    serviceId?: string;

    /**
     * Your BigQuery table.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "table" })
    table?: string;

    /**
     * BigQuery table name suffix template. Optional.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "template_suffix" })
    templateSuffix?: string;

    /**
     * Date and time in ISO 8601 format.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;

    /**
     * Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. Not required if `account_name` is specified.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "user" })
    user?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version?: number;
}

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
export enum LoggingHerokuResponseFormatVersion {
    One = 1,
    Two = 2,
}

/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`.
 *
 * @remarks
 *
 */
export enum LoggingHerokuResponsePlacement {
    None = "none",
    WafDebug = "waf_debug",
    LessThanNilGreaterThan = "<nil>",
}

export class LoggingHerokuResponse extends SpeakeasyBase {
    /**
     * Date and time in ISO 8601 format.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    /**
     * Date and time in ISO 8601 format.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "deleted_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    deletedAt?: Date;

    /**
     * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
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
    formatVersion?: LoggingHerokuResponseFormatVersion;

    /**
     * The name for the real-time logging configuration.
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
    placement?: LoggingHerokuResponsePlacement;

    /**
     * The name of an existing condition in the configured endpoint, or leave blank to always execute.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "response_condition" })
    responseCondition?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "service_id" })
    serviceId?: string;

    /**
     * The token to use for authentication ([https://devcenter.heroku.com/articles/add-on-partner-log-integration](https://devcenter.heroku.com/articles/add-on-partner-log-integration)).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "token" })
    token?: string;

    /**
     * Date and time in ISO 8601 format.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;

    /**
     * The URL to stream logs to.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "url" })
    url?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version?: number;
}

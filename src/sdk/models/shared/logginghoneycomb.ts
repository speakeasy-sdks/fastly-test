/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.
 *
 * @remarks
 *
 */
export enum LoggingHoneycombFormatVersion {
    One = 1,
    Two = 2,
}

/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`.
 *
 * @remarks
 *
 */
export enum LoggingHoneycombPlacement {
    None = "none",
    WafDebug = "waf_debug",
    LessThanNilGreaterThan = "<nil>",
}

export class LoggingHoneycomb extends SpeakeasyBase {
    /**
     * The Honeycomb Dataset you want to log to.
     */
    @SpeakeasyMetadata({ data: "form, name=dataset" })
    @Expose({ name: "dataset" })
    dataset?: string;

    /**
     * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Honeycomb can ingest.
     */
    @SpeakeasyMetadata({ data: "form, name=format" })
    @Expose({ name: "format" })
    format?: string;

    /**
     * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "form, name=format_version" })
    @Expose({ name: "format_version" })
    formatVersion?: LoggingHoneycombFormatVersion;

    /**
     * The name for the real-time logging configuration.
     */
    @SpeakeasyMetadata({ data: "form, name=name" })
    @Expose({ name: "name" })
    name?: string;

    /**
     * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "form, name=placement" })
    @Expose({ name: "placement" })
    placement?: LoggingHoneycombPlacement;

    /**
     * The name of an existing condition in the configured endpoint, or leave blank to always execute.
     */
    @SpeakeasyMetadata({ data: "form, name=response_condition" })
    @Expose({ name: "response_condition" })
    responseCondition?: string;

    /**
     * The Write Key from the Account page of your Honeycomb account.
     */
    @SpeakeasyMetadata({ data: "form, name=token" })
    @Expose({ name: "token" })
    token?: string;
}
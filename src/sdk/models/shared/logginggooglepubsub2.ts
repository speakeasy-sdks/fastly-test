/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.
 *
 * @remarks
 *
 */
export enum LoggingGooglePubsubFormatVersion {
    One = 1,
    Two = 2,
}

/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`.
 *
 * @remarks
 *
 */
export enum LoggingGooglePubsubPlacement {
    None = "none",
    WafDebug = "waf_debug",
    LessThanNilGreaterThan = "<nil>",
}

export class LoggingGooglePubsub2 extends SpeakeasyBase {
    /**
     * The name of the Google Cloud Platform service account associated with the target log collection service. Not required if `user` and `secret_key` are provided.
     */
    @SpeakeasyMetadata({ data: "form, name=account_name" })
    accountName?: string;

    /**
     * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     */
    @SpeakeasyMetadata({ data: "form, name=format" })
    format?: string;

    /**
     * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "form, name=format_version" })
    formatVersion?: LoggingGooglePubsubFormatVersion;

    /**
     * The name for the real-time logging configuration.
     */
    @SpeakeasyMetadata({ data: "form, name=name" })
    name?: string;

    /**
     * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "form, name=placement" })
    placement?: LoggingGooglePubsubPlacement;

    /**
     * Your Google Cloud Platform project ID. Required
     */
    @SpeakeasyMetadata({ data: "form, name=project_id" })
    projectId?: string;

    /**
     * The name of an existing condition in the configured endpoint, or leave blank to always execute.
     */
    @SpeakeasyMetadata({ data: "form, name=response_condition" })
    responseCondition?: string;

    /**
     * Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. Not required if `account_name` is specified.
     */
    @SpeakeasyMetadata({ data: "form, name=secret_key" })
    secretKey?: string;

    /**
     * The Google Cloud Pub/Sub topic to which logs will be published. Required.
     */
    @SpeakeasyMetadata({ data: "form, name=topic" })
    topic?: string;

    /**
     * Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. Not required if `account_name` is specified.
     */
    @SpeakeasyMetadata({ data: "form, name=user" })
    user?: string;
}
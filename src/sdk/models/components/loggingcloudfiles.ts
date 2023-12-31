/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

/**
 * The codec used for compressing your logs. Valid values are `zstd`, `snappy`, and `gzip`. Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 */
export enum LoggingCloudfilesCompressionCodec {
    Zstd = "zstd",
    Snappy = "snappy",
    Gzip = "gzip",
}

/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.
 *
 * @remarks
 *
 */
export enum LoggingCloudfilesFormatVersion {
    One = 1,
    Two = 2,
}

/**
 * How the message should be formatted.
 */
export enum LoggingCloudfilesMessageType {
    Classic = "classic",
    Loggly = "loggly",
    Logplex = "logplex",
    Blank = "blank",
}

/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`.
 *
 * @remarks
 *
 */
export enum LoggingCloudfilesPlacement {
    None = "none",
    WafDebug = "waf_debug",
    LessThanNilGreaterThan = "<nil>",
}

/**
 * The region to stream logs to.
 */
export enum LoggingCloudfilesRegion {
    Dfw = "DFW",
    Ord = "ORD",
    Iad = "IAD",
    Lon = "LON",
    Syd = "SYD",
    Hkg = "HKG",
    LessThanNilGreaterThan = "<nil>",
}

export class LoggingCloudfiles extends SpeakeasyBase {
    /**
     * Your Cloud Files account access key.
     */
    @SpeakeasyMetadata({ data: "form, name=access_key" })
    accessKey?: string;

    /**
     * The name of your Cloud Files container.
     */
    @SpeakeasyMetadata({ data: "form, name=bucket_name" })
    bucketName?: string;

    /**
     * The codec used for compressing your logs. Valid values are `zstd`, `snappy`, and `gzip`. Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
     */
    @SpeakeasyMetadata({ data: "form, name=compression_codec" })
    compressionCodec?: LoggingCloudfilesCompressionCodec;

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
    formatVersion?: LoggingCloudfilesFormatVersion;

    /**
     * The level of gzip encoding when sending logs (default `0`, no compression). Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
     */
    @SpeakeasyMetadata({ data: "form, name=gzip_level" })
    gzipLevel?: number;

    /**
     * How the message should be formatted.
     */
    @SpeakeasyMetadata({ data: "form, name=message_type" })
    messageType?: LoggingCloudfilesMessageType;

    /**
     * The name for the real-time logging configuration.
     */
    @SpeakeasyMetadata({ data: "form, name=name" })
    name?: string;

    /**
     * The path to upload logs to.
     */
    @SpeakeasyMetadata({ data: "form, name=path" })
    path?: string;

    /**
     * How frequently log files are finalized so they can be available for reading (in seconds).
     */
    @SpeakeasyMetadata({ data: "form, name=period" })
    period?: number;

    /**
     * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "form, name=placement" })
    placement?: LoggingCloudfilesPlacement;

    /**
     * A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
     */
    @SpeakeasyMetadata({ data: "form, name=public_key" })
    publicKey?: string;

    /**
     * The region to stream logs to.
     */
    @SpeakeasyMetadata({ data: "form, name=region" })
    region?: LoggingCloudfilesRegion;

    /**
     * The name of an existing condition in the configured endpoint, or leave blank to always execute.
     */
    @SpeakeasyMetadata({ data: "form, name=response_condition" })
    responseCondition?: string;

    /**
     * The username for your Cloud Files account.
     */
    @SpeakeasyMetadata({ data: "form, name=user" })
    user?: string;
}

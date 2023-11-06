/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

/**
 * The codec used for compressing your logs. Valid values are `zstd`, `snappy`, and `gzip`. Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 */
export enum LoggingFtpResponseCompressionCodec {
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
export enum LoggingFtpResponseFormatVersion {
    One = 1,
    Two = 2,
}

/**
 * How the message should be formatted.
 */
export enum LoggingFtpResponseMessageType {
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
export enum LoggingFtpResponsePlacement {
    None = "none",
    WafDebug = "waf_debug",
    LessThanNilGreaterThan = "<nil>",
}

export class LoggingFtpResponse extends SpeakeasyBase {
    /**
     * An hostname or IPv4 address.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "address" })
    address?: string;

    /**
     * The codec used for compressing your logs. Valid values are `zstd`, `snappy`, and `gzip`. Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "compression_codec" })
    compressionCodec?: LoggingFtpResponseCompressionCodec;

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
    formatVersion?: LoggingFtpResponseFormatVersion;

    /**
     * The level of gzip encoding when sending logs (default `0`, no compression). Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "gzip_level" })
    gzipLevel?: number;

    /**
     * Hostname used.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hostname" })
    hostname?: string;

    /**
     * IPv4 address of the host.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ipv4" })
    ipv4?: string;

    /**
     * How the message should be formatted.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "message_type" })
    messageType?: LoggingFtpResponseMessageType;

    /**
     * The name for the real-time logging configuration.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * The password for the server. For anonymous use an email address.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "password" })
    password?: string;

    /**
     * The path to upload log files to. If the path ends in `/` then it is treated as a directory.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "path" })
    path?: string;

    /**
     * How frequently log files are finalized so they can be available for reading (in seconds).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "period" })
    period?: number;

    /**
     * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "placement" })
    placement?: LoggingFtpResponsePlacement;

    /**
     * The port number.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "port" })
    port?: number;

    /**
     * A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "public_key" })
    publicKey?: string;

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
     * A timestamp format
     */
    @SpeakeasyMetadata()
    @Expose({ name: "timestamp_format" })
    timestampFormat?: string;

    /**
     * Date and time in ISO 8601 format.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;

    /**
     * The username for the server. Can be anonymous.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "user" })
    user?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version?: number;
}

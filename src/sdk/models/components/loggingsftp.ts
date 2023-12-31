/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

/**
 * The codec used for compressing your logs. Valid values are `zstd`, `snappy`, and `gzip`. Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 */
export enum LoggingSftpCompressionCodec {
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
export enum LoggingSftpFormatVersion {
    One = 1,
    Two = 2,
}

/**
 * How the message should be formatted.
 */
export enum LoggingSftpMessageType {
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
export enum LoggingSftpPlacement {
    None = "none",
    WafDebug = "waf_debug",
    LessThanNilGreaterThan = "<nil>",
}

export class LoggingSftp extends SpeakeasyBase {
    /**
     * A hostname or IPv4 address.
     */
    @SpeakeasyMetadata({ data: "form, name=address" })
    address?: string;

    /**
     * The codec used for compressing your logs. Valid values are `zstd`, `snappy`, and `gzip`. Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
     */
    @SpeakeasyMetadata({ data: "form, name=compression_codec" })
    compressionCodec?: LoggingSftpCompressionCodec;

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
    formatVersion?: LoggingSftpFormatVersion;

    /**
     * The level of gzip encoding when sending logs (default `0`, no compression). Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
     */
    @SpeakeasyMetadata({ data: "form, name=gzip_level" })
    gzipLevel?: number;

    /**
     * How the message should be formatted.
     */
    @SpeakeasyMetadata({ data: "form, name=message_type" })
    messageType?: LoggingSftpMessageType;

    /**
     * The name for the real-time logging configuration.
     */
    @SpeakeasyMetadata({ data: "form, name=name" })
    name?: string;

    /**
     * The password for the server. If both `password` and `secret_key` are passed, `secret_key` will be used in preference.
     */
    @SpeakeasyMetadata({ data: "form, name=password" })
    password?: string;

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
    placement?: LoggingSftpPlacement;

    /**
     * The port number.
     */
    @SpeakeasyMetadata({ data: "form, name=port" })
    port?: number;

    /**
     * A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
     */
    @SpeakeasyMetadata({ data: "form, name=public_key" })
    publicKey?: string;

    /**
     * The name of an existing condition in the configured endpoint, or leave blank to always execute.
     */
    @SpeakeasyMetadata({ data: "form, name=response_condition" })
    responseCondition?: string;

    /**
     * The SSH private key for the server. If both `password` and `secret_key` are passed, `secret_key` will be used in preference.
     */
    @SpeakeasyMetadata({ data: "form, name=secret_key" })
    secretKey?: string;

    /**
     * A list of host keys for all hosts we can connect to over SFTP.
     */
    @SpeakeasyMetadata({ data: "form, name=ssh_known_hosts" })
    sshKnownHosts?: string;

    /**
     * The username for the server.
     */
    @SpeakeasyMetadata({ data: "form, name=user" })
    user?: string;
}

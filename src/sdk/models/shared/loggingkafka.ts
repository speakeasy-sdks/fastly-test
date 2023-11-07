/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { LoggingUseTls } from "./loggingusetls";

/**
 * SASL authentication method.
 */
export enum AuthMethod {
    Plain = "plain",
    ScramSha256 = "scram-sha-256",
    ScramSha512 = "scram-sha-512",
}

/**
 * The codec used for compression of your logs.
 */
export enum LoggingKafkaCompressionCodec {
    Gzip = "gzip",
    Snappy = "snappy",
    Lz4 = "lz4",
    LessThanNilGreaterThan = "<nil>",
}

/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.
 *
 * @remarks
 *
 */
export enum LoggingKafkaFormatVersion {
    One = 1,
    Two = 2,
}

/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`.
 *
 * @remarks
 *
 */
export enum LoggingKafkaPlacement {
    None = "none",
    WafDebug = "waf_debug",
    LessThanNilGreaterThan = "<nil>",
}

/**
 * The number of acknowledgements a leader must receive before a write is considered successful.
 */
export enum RequiredAcks {
    One = 1,
    Zero = 0,
    Minus1 = -1,
}

export class LoggingKafka extends SpeakeasyBase {
    /**
     * SASL authentication method.
     */
    @SpeakeasyMetadata({ data: "form, name=auth_method" })
    authMethod?: AuthMethod;

    /**
     * A comma-separated list of IP addresses or hostnames of Kafka brokers. Required.
     */
    @SpeakeasyMetadata({ data: "form, name=brokers" })
    brokers?: string;

    /**
     * The codec used for compression of your logs.
     */
    @SpeakeasyMetadata({ data: "form, name=compression_codec" })
    compressionCodec?: LoggingKafkaCompressionCodec;

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
    formatVersion?: LoggingKafkaFormatVersion;

    /**
     * The name for the real-time logging configuration.
     */
    @SpeakeasyMetadata({ data: "form, name=name" })
    name?: string;

    /**
     * Enables parsing of key=value tuples from the beginning of a logline, turning them into [record headers](https://cwiki.apache.org/confluence/display/KAFKA/KIP-82+-+Add+Record+Headers).
     */
    @SpeakeasyMetadata({ data: "form, name=parse_log_keyvals" })
    parseLogKeyvals?: boolean;

    /**
     * SASL password.
     */
    @SpeakeasyMetadata({ data: "form, name=password" })
    password?: string;

    /**
     * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "form, name=placement" })
    placement?: LoggingKafkaPlacement;

    /**
     * The maximum number of bytes sent in one request. Defaults `0` (no limit).
     */
    @SpeakeasyMetadata({ data: "form, name=request_max_bytes" })
    requestMaxBytes?: number;

    /**
     * The number of acknowledgements a leader must receive before a write is considered successful.
     */
    @SpeakeasyMetadata({ data: "form, name=required_acks" })
    requiredAcks?: RequiredAcks;

    /**
     * The name of an existing condition in the configured endpoint, or leave blank to always execute.
     */
    @SpeakeasyMetadata({ data: "form, name=response_condition" })
    responseCondition?: string;

    /**
     * A secure certificate to authenticate a server with. Must be in PEM format.
     */
    @SpeakeasyMetadata({ data: "form, name=tls_ca_cert" })
    tlsCaCert?: string;

    /**
     * The client certificate used to make authenticated requests. Must be in PEM format.
     */
    @SpeakeasyMetadata({ data: "form, name=tls_client_cert" })
    tlsClientCert?: string;

    /**
     * The client private key used to make authenticated requests. Must be in PEM format.
     */
    @SpeakeasyMetadata({ data: "form, name=tls_client_key" })
    tlsClientKey?: string;

    /**
     * The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
     */
    @SpeakeasyMetadata({ data: "form, name=tls_hostname" })
    tlsHostname?: string;

    /**
     * The Kafka topic to send logs to. Required.
     */
    @SpeakeasyMetadata({ data: "form, name=topic" })
    topic?: string;

    /**
     * Whether to use TLS.
     */
    @SpeakeasyMetadata({ data: "form, name=use_tls" })
    useTls?: LoggingUseTls;

    /**
     * SASL user.
     */
    @SpeakeasyMetadata({ data: "form, name=user" })
    user?: string;
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { LoggingUseTls } from "./loggingusetls";

/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.
 *
 * @remarks
 *
 */
export enum LoggingSplunkFormatVersion {
    One = 1,
    Two = 2,
}

/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`.
 *
 * @remarks
 *
 */
export enum LoggingSplunkPlacement {
    None = "none",
    WafDebug = "waf_debug",
    LessThanNilGreaterThan = "<nil>",
}

export class LoggingSplunk extends SpeakeasyBase {
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
    formatVersion?: LoggingSplunkFormatVersion;

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
    placement?: LoggingSplunkPlacement;

    /**
     * The maximum number of bytes sent in one request. Defaults `0` for unbounded.
     */
    @SpeakeasyMetadata({ data: "form, name=request_max_bytes" })
    requestMaxBytes?: number;

    /**
     * The maximum number of logs sent in one request. Defaults `0` for unbounded.
     */
    @SpeakeasyMetadata({ data: "form, name=request_max_entries" })
    requestMaxEntries?: number;

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
     * A Splunk token for use in posting logs over HTTP to your collector.
     */
    @SpeakeasyMetadata({ data: "form, name=token" })
    token?: string;

    /**
     * The URL to post logs to.
     */
    @SpeakeasyMetadata({ data: "form, name=url" })
    url?: string;

    /**
     * Whether to use TLS.
     */
    @SpeakeasyMetadata({ data: "form, name=use_tls" })
    useTls?: LoggingUseTls;
}

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
export enum LoggingElasticsearchResponseFormatVersion {
    One = 1,
    Two = 2,
}

/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`.
 *
 * @remarks
 *
 */
export enum LoggingElasticsearchResponsePlacement {
    None = "none",
    WafDebug = "waf_debug",
    LessThanNilGreaterThan = "<nil>",
}

export class LoggingElasticsearchResponse extends SpeakeasyBase {
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
     * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Elasticsearch can ingest.
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
    formatVersion?: LoggingElasticsearchResponseFormatVersion;

    /**
     * The name of the Elasticsearch index to send documents (logs) to. The index must follow the Elasticsearch [index format rules](https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-create-index.html). We support [strftime](https://www.man7.org/linux/man-pages/man3/strftime.3.html) interpolated variables inside braces prefixed with a pound symbol. For example, `#{%F}` will interpolate as `YYYY-MM-DD` with today's date.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "index" })
    index?: string;

    /**
     * The name for the real-time logging configuration.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * Basic Auth password.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "password" })
    password?: string;

    /**
     * The ID of the Elasticsearch ingest pipeline to apply pre-process transformations to before indexing. Learn more about creating a pipeline in the [Elasticsearch docs](https://www.elastic.co/guide/en/elasticsearch/reference/current/ingest.html).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "pipeline" })
    pipeline?: string;

    /**
     * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "placement" })
    placement?: LoggingElasticsearchResponsePlacement;

    /**
     * The maximum number of bytes sent in one request. Defaults `0` for unbounded.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "request_max_bytes" })
    requestMaxBytes?: number;

    /**
     * The maximum number of logs sent in one request. Defaults `0` for unbounded.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "request_max_entries" })
    requestMaxEntries?: number;

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
     * A secure certificate to authenticate a server with. Must be in PEM format.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tls_ca_cert" })
    tlsCaCert?: string;

    /**
     * The client certificate used to make authenticated requests. Must be in PEM format.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tls_client_cert" })
    tlsClientCert?: string;

    /**
     * The client private key used to make authenticated requests. Must be in PEM format.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tls_client_key" })
    tlsClientKey?: string;

    /**
     * The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tls_hostname" })
    tlsHostname?: string;

    /**
     * Date and time in ISO 8601 format.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;

    /**
     * The URL to stream logs to. Must use HTTPS.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "url" })
    url?: string;

    /**
     * Basic Auth username.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "user" })
    user?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version?: number;
}

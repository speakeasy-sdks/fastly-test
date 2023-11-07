/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class Backend extends SpeakeasyBase {
    /**
     * A hostname, IPv4, or IPv6 address for the backend. This is the preferred way to specify the location of your backend.
     */
    @SpeakeasyMetadata({ data: "form, name=address" })
    @Expose({ name: "address" })
    address?: string;

    /**
     * Whether or not this backend should be automatically load balanced. If true, all backends with this setting that don't have a `request_condition` will be selected based on their `weight`.
     */
    @SpeakeasyMetadata({ data: "form, name=auto_loadbalance" })
    @Expose({ name: "auto_loadbalance" })
    autoLoadbalance?: boolean;

    /**
     * Maximum duration in milliseconds that Fastly will wait while receiving no data on a download from a backend. If exceeded, the response received so far will be considered complete and the fetch will end. May be set at runtime using `bereq.between_bytes_timeout`.
     */
    @SpeakeasyMetadata({ data: "form, name=between_bytes_timeout" })
    @Expose({ name: "between_bytes_timeout" })
    betweenBytesTimeout?: number;

    /**
     * Unused.
     */
    @SpeakeasyMetadata({ data: "form, name=client_cert" })
    @Expose({ name: "client_cert" })
    clientCert?: string;

    /**
     * A freeform descriptive note.
     */
    @SpeakeasyMetadata({ data: "form, name=comment" })
    @Expose({ name: "comment" })
    comment?: string;

    /**
     * Maximum duration in milliseconds to wait for a connection to this backend to be established. If exceeded, the connection is aborted and a synthethic `503` response will be presented instead. May be set at runtime using `bereq.connect_timeout`.
     */
    @SpeakeasyMetadata({ data: "form, name=connect_timeout" })
    @Expose({ name: "connect_timeout" })
    connectTimeout?: number;

    /**
     * Maximum duration in milliseconds to wait for the server response to begin after a TCP connection is established and the request has been sent. If exceeded, the connection is aborted and a synthethic `503` response will be presented instead. May be set at runtime using `bereq.first_byte_timeout`.
     */
    @SpeakeasyMetadata({ data: "form, name=first_byte_timeout" })
    @Expose({ name: "first_byte_timeout" })
    firstByteTimeout?: number;

    /**
     * The name of the healthcheck to use with this backend.
     */
    @SpeakeasyMetadata({ data: "form, name=healthcheck" })
    @Expose({ name: "healthcheck" })
    healthcheck?: string;

    /**
     * The hostname of the backend. May be used as an alternative to `address` to set the backend location.
     */
    @SpeakeasyMetadata({ data: "form, name=hostname" })
    @Expose({ name: "hostname" })
    hostname?: string;

    /**
     * IPv4 address of the backend. May be used as an alternative to `address` to set the backend location.
     */
    @SpeakeasyMetadata({ data: "form, name=ipv4" })
    @Expose({ name: "ipv4" })
    ipv4?: string;

    /**
     * IPv6 address of the backend. May be used as an alternative to `address` to set the backend location.
     */
    @SpeakeasyMetadata({ data: "form, name=ipv6" })
    @Expose({ name: "ipv6" })
    ipv6?: string;

    /**
     * How long in seconds to keep a persistent connection to the backend between requests.
     */
    @SpeakeasyMetadata({ data: "form, name=keepalive_time" })
    @Expose({ name: "keepalive_time" })
    keepaliveTime?: number;

    /**
     * Maximum number of concurrent connections this backend will accept.
     */
    @SpeakeasyMetadata({ data: "form, name=max_conn" })
    @Expose({ name: "max_conn" })
    maxConn?: number;

    /**
     * Maximum allowed TLS version on SSL connections to this backend. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic `503` error response will be generated.
     */
    @SpeakeasyMetadata({ data: "form, name=max_tls_version" })
    @Expose({ name: "max_tls_version" })
    maxTlsVersion?: string;

    /**
     * Minimum allowed TLS version on SSL connections to this backend. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic `503` error response will be generated.
     */
    @SpeakeasyMetadata({ data: "form, name=min_tls_version" })
    @Expose({ name: "min_tls_version" })
    minTlsVersion?: string;

    /**
     * The name of the backend.
     */
    @SpeakeasyMetadata({ data: "form, name=name" })
    @Expose({ name: "name" })
    name?: string;

    /**
     * If set, will replace the client-supplied HTTP `Host` header on connections to this backend. Applied after VCL has been processed, so this setting will take precedence over changing `bereq.http.Host` in VCL.
     */
    @SpeakeasyMetadata({ data: "form, name=override_host" })
    @Expose({ name: "override_host" })
    overrideHost?: string;

    /**
     * Port on which the backend server is listening for connections from Fastly. Setting `port` to 80 or 443 will also set `use_ssl` automatically (to false and true respectively), unless explicitly overridden by setting `use_ssl` in the same request.
     */
    @SpeakeasyMetadata({ data: "form, name=port" })
    @Expose({ name: "port" })
    port?: number;

    /**
     * Name of a Condition, which if satisfied, will select this backend during a request. If set, will override any `auto_loadbalance` setting. By default, the first backend added to a service is selected for all requests.
     */
    @SpeakeasyMetadata({ data: "form, name=request_condition" })
    @Expose({ name: "request_condition" })
    requestCondition?: string;

    /**
     * Identifier of the POP to use as a [shield](https://docs.fastly.com/en/guides/shielding).
     */
    @SpeakeasyMetadata({ data: "form, name=shield" })
    @Expose({ name: "shield" })
    shield?: string;

    /**
     * CA certificate attached to origin.
     */
    @SpeakeasyMetadata({ data: "form, name=ssl_ca_cert" })
    @Expose({ name: "ssl_ca_cert" })
    sslCaCert?: string;

    /**
     * Overrides `ssl_hostname`, but only for cert verification. Does not affect SNI at all.
     */
    @SpeakeasyMetadata({ data: "form, name=ssl_cert_hostname" })
    @Expose({ name: "ssl_cert_hostname" })
    sslCertHostname?: string;

    /**
     * Be strict on checking SSL certs.
     */
    @SpeakeasyMetadata({ data: "form, name=ssl_check_cert" })
    @Expose({ name: "ssl_check_cert" })
    sslCheckCert?: boolean;

    /**
     * List of [OpenSSL ciphers](https://www.openssl.org/docs/manmaster/man1/ciphers.html) to support for connections to this origin. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic `503` error response will be generated.
     */
    @SpeakeasyMetadata({ data: "form, name=ssl_ciphers" })
    @Expose({ name: "ssl_ciphers" })
    sslCiphers?: string;

    /**
     * Client certificate attached to origin.
     */
    @SpeakeasyMetadata({ data: "form, name=ssl_client_cert" })
    @Expose({ name: "ssl_client_cert" })
    sslClientCert?: string;

    /**
     * Client key attached to origin.
     */
    @SpeakeasyMetadata({ data: "form, name=ssl_client_key" })
    @Expose({ name: "ssl_client_key" })
    sslClientKey?: string;

    /**
     * Use `ssl_cert_hostname` and `ssl_sni_hostname` to configure certificate validation.
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    @SpeakeasyMetadata({ data: "form, name=ssl_hostname" })
    @Expose({ name: "ssl_hostname" })
    sslHostname?: string;

    /**
     * Overrides `ssl_hostname`, but only for SNI in the handshake. Does not affect cert validation at all.
     */
    @SpeakeasyMetadata({ data: "form, name=ssl_sni_hostname" })
    @Expose({ name: "ssl_sni_hostname" })
    sslSniHostname?: string;

    /**
     * Whether or not to require TLS for connections to this backend.
     */
    @SpeakeasyMetadata({ data: "form, name=use_ssl" })
    @Expose({ name: "use_ssl" })
    useSsl?: boolean;

    /**
     * Weight used to load balance this backend against others. May be any positive integer. If `auto_loadbalance` is true, the chance of this backend being selected is equal to its own weight over the sum of all weights for backends that have `auto_loadbalance` set to true.
     */
    @SpeakeasyMetadata({ data: "form, name=weight" })
    @Expose({ name: "weight" })
    weight?: number;
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export class Healthcheck extends SpeakeasyBase {
    /**
     * How often to run the health check in milliseconds.
     */
    @SpeakeasyMetadata({ data: "form, name=check_interval" })
    checkInterval?: number;

    /**
     * A freeform descriptive note.
     */
    @SpeakeasyMetadata({ data: "form, name=comment" })
    comment?: string;

    /**
     * The status code expected from the host.
     */
    @SpeakeasyMetadata({ data: "form, name=expected_response" })
    expectedResponse?: number;

    /**
     * Array of custom headers that will be added to the health check probes.
     */
    @SpeakeasyMetadata({ data: "form, name=headers" })
    headers?: string[];

    /**
     * Which host to check.
     */
    @SpeakeasyMetadata({ data: "form, name=host" })
    host?: string;

    /**
     * Whether to use version 1.0 or 1.1 HTTP.
     */
    @SpeakeasyMetadata({ data: "form, name=http_version" })
    httpVersion?: string;

    /**
     * When loading a config, the initial number of probes to be seen as OK.
     */
    @SpeakeasyMetadata({ data: "form, name=initial" })
    initial?: number;

    /**
     * Which HTTP method to use.
     */
    @SpeakeasyMetadata({ data: "form, name=method" })
    method?: string;

    /**
     * The name of the health check.
     */
    @SpeakeasyMetadata({ data: "form, name=name" })
    name?: string;

    /**
     * The path to check.
     */
    @SpeakeasyMetadata({ data: "form, name=path" })
    path?: string;

    /**
     * How many health checks must succeed to be considered healthy.
     */
    @SpeakeasyMetadata({ data: "form, name=threshold" })
    threshold?: number;

    /**
     * Timeout in milliseconds.
     */
    @SpeakeasyMetadata({ data: "form, name=timeout" })
    timeout?: number;

    /**
     * The number of most recent health check queries to keep for this health check.
     */
    @SpeakeasyMetadata({ data: "form, name=window" })
    window?: number;
}
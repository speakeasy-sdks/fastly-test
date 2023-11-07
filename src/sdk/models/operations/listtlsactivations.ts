/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as components from "../../../sdk/models/components";
import { AxiosResponse } from "axios";

export class ListTlsActivationsRequest extends SpeakeasyBase {
    /**
     * Limit the returned activations to a specific certificate.
     */
    @SpeakeasyMetadata({
        data: "queryParam, style=form;explode=true;name=filter[tls_certificate.id]",
    })
    filterTlsCertificateId?: string;

    /**
     * Limit the returned activations to a specific TLS configuration.
     */
    @SpeakeasyMetadata({
        data: "queryParam, style=form;explode=true;name=filter[tls_configuration.id]",
    })
    filterTlsConfigurationId?: string;

    /**
     * Limit the returned rules to a specific domain name.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[tls_domain.id]" })
    filterTlsDomainId?: string;

    /**
     * Include related objects. Optional, comma-separated values. Permitted values: `tls_certificate`, `tls_configuration`, and `tls_domain`.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=include" })
    include?: string;

    /**
     * Current page.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page[number]" })
    pageNumber?: number;

    /**
     * Number of records per page.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page[size]" })
    pageSize?: number;
}

export class ListTlsActivationsResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    tlsActivationsResponse?: components.TlsActivationsResponse;
}

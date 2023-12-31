/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as components from "../../../sdk/models/components";
import { AxiosResponse } from "axios";

export class GetTlsSubRequest extends SpeakeasyBase {
    /**
     * Include related objects. Optional, comma-separated values. Permitted values: `tls_authorizations` and `tls_authorizations.globalsign_email_challenge`.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
    include?: string;

    /**
     * Alphanumeric string identifying a TLS subscription.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tls_subscription_id" })
    tlsSubscriptionId: string;
}

export class GetTlsSubResponse extends SpeakeasyBase {
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
    tlsSubscriptionResponse?: components.TlsSubscriptionResponse;
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as components from "../../../sdk/models/components";
import { AxiosResponse } from "axios";

export class VclDiffServiceVersionsRequest extends SpeakeasyBase {
    /**
     * Optional method to format the diff field.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
    format?: components.QueryFormat;

    /**
     * The version number of the service to which changes in the generated VCL are being compared. Can either be a positive number from 1 to your maximum version or a negative number from -1 down (-1 is latest version etc).
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=from_version_id" })
    fromVersionId: number;

    /**
     * Alphanumeric string identifying the service.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=service_id" })
    serviceId: string;

    /**
     * The version number of the service from which changes in the generated VCL are being compared. Uses same numbering scheme as `from`.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=to_version_id" })
    toVersionId: number;
}

export class VclDiffServiceVersionsResponse extends SpeakeasyBase {
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
    vclDiff?: components.VclDiff;
}

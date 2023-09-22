/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class SearchServiceRequest extends SpeakeasyBase {
    /**
     * The name of the service.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
    name: string;
}

export class SearchServiceResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    serviceResponse?: shared.ServiceResponse;
}

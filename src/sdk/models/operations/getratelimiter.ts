/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetRateLimiterSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=Fastly-Key" })
    token: string;
}

export class GetRateLimiterRequest extends SpeakeasyBase {
    /**
     * Alphanumeric string identifying the rate limiter.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rate_limiter_id" })
    rateLimiterId: string;
}

export class GetRateLimiterResponse extends SpeakeasyBase {
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
    rateLimiterResponse?: shared.RateLimiterResponse;
}

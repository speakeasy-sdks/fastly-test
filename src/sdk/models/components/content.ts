/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class Request extends SpeakeasyBase {}

export class Response extends SpeakeasyBase {}

export class Content extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "hash" })
    hash?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "pop" })
    pop?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "request" })
    @Type(() => Request)
    request?: Request;

    @SpeakeasyMetadata()
    @Expose({ name: "response" })
    @Type(() => Response)
    response?: Response;

    @SpeakeasyMetadata()
    @Expose({ name: "response_time" })
    responseTime?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "server" })
    server?: string;
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Payload format for delivering to subscribers of HTTP streaming response bodies (`stream` hold mode). One of `content` or `content-bin` must be specified.
 */
export class HttpStreamFormat extends SpeakeasyBase {
    /**
     * A fragment of body data as a string.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "content" })
    content?: string;

    /**
     * A fragment of body data as a base64-encoded binary blob.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "content-bin" })
    contentBin?: string;
}

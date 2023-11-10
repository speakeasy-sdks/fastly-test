/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export class Http3Input extends SpeakeasyBase {
    /**
     * Revision number of the HTTP/3 feature implementation. Defaults to the most recent revision.
     */
    @SpeakeasyMetadata({ data: "form, name=feature_revision" })
    featureRevision?: number;
}

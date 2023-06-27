/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export class PackageUploadPackage extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "multipart_form, content=true" })
    content: Uint8Array;

    @SpeakeasyMetadata({ data: "multipart_form, name=package" })
    package: string;
}

export class PackageUpload extends SpeakeasyBase {
    /**
     * The content of the Wasm binary package.
     */
    @SpeakeasyMetadata({ data: "multipart_form, file=true" })
    package?: PackageUploadPackage;
}
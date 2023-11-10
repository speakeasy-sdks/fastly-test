/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TlsCertificateData } from "./tlscertificatedata";
import { Expose, Type } from "class-transformer";

export class TlsCertificate extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => TlsCertificateData)
    data?: TlsCertificateData;
}

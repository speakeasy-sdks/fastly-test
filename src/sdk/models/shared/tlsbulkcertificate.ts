/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TlsBulkCertificateData } from "./tlsbulkcertificatedata";
import { Expose, Type } from "class-transformer";

export class TlsBulkCertificate extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => TlsBulkCertificateData)
    data?: TlsBulkCertificateData;
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TlsCertificateDataInput } from "./tlscertificatedata";
import { Expose, Type } from "class-transformer";

export class TlsCertificateInput extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => TlsCertificateDataInput)
    data?: TlsCertificateDataInput;
}

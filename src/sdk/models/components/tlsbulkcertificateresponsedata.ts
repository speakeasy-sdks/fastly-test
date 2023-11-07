/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TlsBulkCertificateResponseAttributes } from "./tlsbulkcertificateresponseattributes";
import { TypeTlsBulkCertificate } from "./typetlsbulkcertificate";
import { Expose, Type } from "class-transformer";

export class TlsBulkCertificateResponseData extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "attributes" })
    @Type(() => TlsBulkCertificateResponseAttributes)
    attributes?: TlsBulkCertificateResponseAttributes;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "relationships" })
    relationships?: any;

    /**
     * Resource type
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: TypeTlsBulkCertificate;
}
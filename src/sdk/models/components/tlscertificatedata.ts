/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RelationshipTlsDomainsInput } from "./relationshiptlsdomainsinput";
import { TypeTlsCertificate } from "./typetlscertificate";
import { Expose, Type } from "class-transformer";

export class TlsCertificateDataAttributes extends SpeakeasyBase {
    /**
     * The PEM-formatted certificate blob. Required.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "cert_blob" })
    certBlob?: string;

    /**
     * A customizable name for your certificate. Defaults to the certificate's Common Name or first Subject Alternative Names (SAN) entry. Optional.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class TlsCertificateData extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "attributes" })
    @Type(() => TlsCertificateDataAttributes)
    attributes?: TlsCertificateDataAttributes;

    @SpeakeasyMetadata()
    @Expose({ name: "relationships" })
    @Type(() => RelationshipTlsDomainsInput)
    relationships?: RelationshipTlsDomainsInput;

    /**
     * Resource type
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: TypeTlsCertificate;
}

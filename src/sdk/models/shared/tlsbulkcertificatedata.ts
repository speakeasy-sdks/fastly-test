/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RelationshipMemberTlsDomainInput } from "./relationshipmembertlsdomain";
import { TypeTlsBulkCertificate } from "./typetlsbulkcertificate";
import { Expose, Type } from "class-transformer";

export class TlsBulkCertificateDataAttributes extends SpeakeasyBase {
    /**
     * Allow certificates that chain to untrusted roots.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "allow_untrusted_root" })
    allowUntrustedRoot?: boolean;

    /**
     * The PEM-formatted certificate blob. Required.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "cert_blob" })
    certBlob?: string;

    /**
     * The PEM-formatted chain of intermediate blobs. Required.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "intermediates_blob" })
    intermediatesBlob?: string;
}

export class TlsBulkCertificateDataRelationships2TlsDomainsInput extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: RelationshipMemberTlsDomainInput })
    @Expose({ name: "data" })
    @Type(() => RelationshipMemberTlsDomainInput)
    data?: RelationshipMemberTlsDomainInput[];
}

/**
 * All the domains (including wildcard domains) that are listed in any certificate's Subject Alternative Names (SAN) list.
 */
export class TlsBulkCertificateDataRelationships2Input extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "tls_domains" })
    @Type(() => TlsBulkCertificateDataRelationships2TlsDomainsInput)
    tlsDomains?: TlsBulkCertificateDataRelationships2TlsDomainsInput;
}

export class TlsBulkCertificateDataInput extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "attributes" })
    @Type(() => TlsBulkCertificateDataAttributes)
    attributes?: TlsBulkCertificateDataAttributes;

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
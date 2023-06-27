/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RelationshipMemberService } from "./relationshipmemberservice";
import { RelationshipMemberTlsDnsRecord } from "./relationshipmembertlsdnsrecord";
import { TlsConfigurationResponseAttributes } from "./tlsconfigurationresponseattributes";
import { TypeTlsConfiguration } from "./typetlsconfiguration";
import { Expose, Type } from "class-transformer";

export class TlsConfigurationResponseDataRelationships2DnsRecords extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: RelationshipMemberTlsDnsRecord })
    @Expose({ name: "data" })
    @Type(() => RelationshipMemberTlsDnsRecord)
    data?: RelationshipMemberTlsDnsRecord[];
}

/**
 * The [DNS records](/reference/api/tls/custom-certs/dns-records/) to use for this configuration.
 */
export class TlsConfigurationResponseDataRelationships2 extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "dns_records" })
    @Type(() => TlsConfigurationResponseDataRelationships2DnsRecords)
    dnsRecords?: TlsConfigurationResponseDataRelationships2DnsRecords;
}

/**
 * The [Fastly Service](/reference/api/services/service/) that is automatically selected when this TLS Configuration is used.
 */
export class TlsConfigurationResponseDataRelationships1 extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "service" })
    @Type(() => RelationshipMemberService)
    service?: RelationshipMemberService;
}

export class TlsConfigurationResponseData extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "attributes" })
    @Type(() => TlsConfigurationResponseAttributes)
    attributes?: TlsConfigurationResponseAttributes;

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
    type?: TypeTlsConfiguration;
}
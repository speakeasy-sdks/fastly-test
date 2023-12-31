/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import {
    RelationshipMemberTlsDomain,
    RelationshipMemberTlsDomainInput,
} from "./relationshipmembertlsdomain";
import { Expose, Type } from "class-transformer";

export class RelationshipTlsDomainsTlsDomains extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: RelationshipMemberTlsDomainInput })
    @Expose({ name: "data" })
    @Type(() => RelationshipMemberTlsDomainInput)
    data?: RelationshipMemberTlsDomainInput[];
}

export class RelationshipTlsDomainsInput extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "tls_domains" })
    @Type(() => RelationshipTlsDomainsTlsDomains)
    tlsDomains?: RelationshipTlsDomainsTlsDomains;
}

export class TlsDomains extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: RelationshipMemberTlsDomain })
    @Expose({ name: "data" })
    @Type(() => RelationshipMemberTlsDomain)
    data?: RelationshipMemberTlsDomain[];
}

export class RelationshipTlsDomains extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "tls_domains" })
    @Type(() => TlsDomains)
    tlsDomains?: TlsDomains;
}

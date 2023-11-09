/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RelationshipMemberServiceInput } from "./relationshipmemberserviceinput";
import { TypeServiceInvitation } from "./typeserviceinvitation";
import { Expose, Type } from "class-transformer";

/**
 * The permission the accepting user will have in relation to the service.
 */
export enum ServiceInvitationDataPermission {
    Full = "full",
    ReadOnly = "read_only",
    PurgeSelect = "purge_select",
    PurgeAll = "purge_all",
}

export class ServiceInvitationDataAttributes extends SpeakeasyBase {
    /**
     * The permission the accepting user will have in relation to the service.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "permission" })
    permission?: ServiceInvitationDataPermission;
}

/**
 * Service the accepting user will have access to.
 */
export class ServiceInvitationDataRelationships extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "service" })
    @Type(() => RelationshipMemberServiceInput)
    service?: RelationshipMemberServiceInput;
}

export class ServiceInvitationData extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "attributes" })
    @Type(() => ServiceInvitationDataAttributes)
    attributes?: ServiceInvitationDataAttributes;

    /**
     * Service the accepting user will have access to.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "relationships" })
    @Type(() => ServiceInvitationDataRelationships)
    relationships?: ServiceInvitationDataRelationships;

    /**
     * Resource type
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: TypeServiceInvitation;
}

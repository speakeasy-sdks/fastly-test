/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RelationshipMemberServiceInput } from "./relationshipmemberserviceinput";
import { TypeUser } from "./typeuser";
import { Expose, Type } from "class-transformer";

export class RelationshipsForStarDataInput extends SpeakeasyBase {
    /**
     * Resource type
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: TypeUser;
}

export class RelationshipsForStarUserInput extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => RelationshipsForStarDataInput)
    data?: RelationshipsForStarDataInput;
}

export class RelationshipsForStarInput extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "service" })
    @Type(() => RelationshipMemberServiceInput)
    service?: RelationshipMemberServiceInput;

    @SpeakeasyMetadata()
    @Expose({ name: "user" })
    @Type(() => RelationshipsForStarUserInput)
    user?: RelationshipsForStarUserInput;
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RelationshipMemberCustomer } from "./relationshipmembercustomer";
import { Expose, Type } from "class-transformer";

export class RelationshipCustomerCustomer extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: RelationshipMemberCustomer })
    @Expose({ name: "data" })
    @Type(() => RelationshipMemberCustomer)
    data?: RelationshipMemberCustomer[];
}

export class RelationshipCustomer extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "customer" })
    @Type(() => RelationshipCustomerCustomer)
    customer?: RelationshipCustomerCustomer;
}
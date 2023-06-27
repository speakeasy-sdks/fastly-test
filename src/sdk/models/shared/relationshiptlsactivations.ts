/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import {
    RelationshipMemberTlsActivation,
    RelationshipMemberTlsActivationInput,
} from "./relationshipmembertlsactivation";
import { Expose, Type } from "class-transformer";

export class RelationshipTlsActivationsTlsActivationsInput extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: RelationshipMemberTlsActivationInput })
    @Expose({ name: "data" })
    @Type(() => RelationshipMemberTlsActivationInput)
    data?: RelationshipMemberTlsActivationInput[];
}

export class RelationshipTlsActivationsInput extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "tls_activations" })
    @Type(() => RelationshipTlsActivationsTlsActivationsInput)
    tlsActivations?: RelationshipTlsActivationsTlsActivationsInput;
}

export class RelationshipTlsActivationsTlsActivations extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: RelationshipMemberTlsActivation })
    @Expose({ name: "data" })
    @Type(() => RelationshipMemberTlsActivation)
    data?: RelationshipMemberTlsActivation[];
}

export class RelationshipTlsActivations extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "tls_activations" })
    @Type(() => RelationshipTlsActivationsTlsActivations)
    tlsActivations?: RelationshipTlsActivationsTlsActivations;
}
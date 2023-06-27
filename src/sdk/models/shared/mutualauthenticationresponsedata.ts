/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { MutualAuthenticationResponseAttributes } from "./mutualauthenticationresponseattributes";
import { TypeMutualAuthentication } from "./typemutualauthentication";
import { Expose, Type } from "class-transformer";

export class MutualAuthenticationResponseData extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "attributes" })
    @Type(() => MutualAuthenticationResponseAttributes)
    attributes?: MutualAuthenticationResponseAttributes;

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
    type?: TypeMutualAuthentication;
}
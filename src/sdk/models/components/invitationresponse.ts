/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { InvitationResponseData } from "./invitationresponsedata";
import { Expose, Type } from "class-transformer";

export class InvitationResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => InvitationResponseData)
    data?: InvitationResponseData;
}
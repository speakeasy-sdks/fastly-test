/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { InvitationData } from "./invitationdata";
import { Expose, Type } from "class-transformer";

export class Invitation extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => InvitationData)
    data?: InvitationData;
}

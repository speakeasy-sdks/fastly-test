/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RoleUser } from "./roleuser";

export class User extends SpeakeasyBase {
    /**
     * Indicates that the user has limited access to the customer's services.
     */
    @SpeakeasyMetadata({ data: "form, name=limit_services" })
    limitServices?: boolean;

    /**
     * Indicates whether the is account is locked for editing or not.
     */
    @SpeakeasyMetadata({ data: "form, name=locked" })
    locked?: boolean;

    /**
     * The real life name of the user.
     */
    @SpeakeasyMetadata({ data: "form, name=name" })
    name?: string;

    /**
     * Indicates if a new password is required at next login.
     */
    @SpeakeasyMetadata({ data: "form, name=require_new_password" })
    requireNewPassword?: boolean;

    /**
     * The permissions role assigned to the user. Can be `user`, `billing`, `engineer`, or `superuser`.
     */
    @SpeakeasyMetadata({ data: "form, name=role" })
    role?: RoleUser;

    /**
     * Indicates if 2FA is enabled on the user.
     */
    @SpeakeasyMetadata({ data: "form, name=two_factor_auth_enabled" })
    twoFactorAuthEnabled?: boolean;

    /**
     * Indicates if 2FA is required by the user's customer account.
     */
    @SpeakeasyMetadata({ data: "form, name=two_factor_setup_required" })
    twoFactorSetupRequired?: boolean;
}

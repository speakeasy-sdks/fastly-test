/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

/**
 * Accepts a string value.
 */
export enum HeaderResponseAction {
    Set = "set",
    Append = "append",
    Delete = "delete",
    Regex = "regex",
    RegexRepeat = "regex_repeat",
}

/**
 * Accepts a string value.
 */
export enum HeaderResponseType {
    Request = "request",
    Cache = "cache",
    Response = "response",
}

export class HeaderResponse extends SpeakeasyBase {
    /**
     * Accepts a string value.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "action" })
    action?: HeaderResponseAction;

    /**
     * Name of the cache condition controlling when this configuration applies.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "cache_condition" })
    cacheCondition?: string;

    /**
     * Date and time in ISO 8601 format.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    /**
     * Date and time in ISO 8601 format.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "deleted_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    deletedAt?: Date;

    /**
     * Header to set.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "dst" })
    dst?: string;

    /**
     * Don't add the header if it is added already. Only applies to 'set' action.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ignore_if_set" })
    ignoreIfSet?: number;

    /**
     * A handle to refer to this Header object.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * Priority determines execution order. Lower numbers execute first.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "priority" })
    priority?: number;

    /**
     * Regular expression to use. Only applies to `regex` and `regex_repeat` actions.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "regex" })
    regex?: string;

    /**
     * Condition which, if met, will select this configuration during a request. Optional.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "request_condition" })
    requestCondition?: string;

    /**
     * Optional name of a response condition to apply.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "response_condition" })
    responseCondition?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "service_id" })
    serviceId?: string;

    /**
     * Variable to be used as a source for the header content. Does not apply to `delete` action.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "src" })
    src?: string;

    /**
     * Value to substitute in place of regular expression. Only applies to `regex` and `regex_repeat` actions.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "substitution" })
    substitution?: string;

    /**
     * Accepts a string value.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: HeaderResponseType;

    /**
     * Date and time in ISO 8601 format.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version?: number;
}
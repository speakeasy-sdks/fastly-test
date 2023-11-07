/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

/**
 * Type of the condition. Required.
 */
export enum ConditionResponseType {
    Request = "REQUEST",
    Cache = "CACHE",
    Response = "RESPONSE",
    Prefetch = "PREFETCH",
}

export class ConditionResponse extends SpeakeasyBase {
    /**
     * A freeform descriptive note.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "comment" })
    comment?: string;

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
     * Name of the condition. Required.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * A numeric string. Priority determines execution order. Lower numbers execute first.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "priority" })
    priority?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "service_id" })
    serviceId?: string;

    /**
     * A conditional expression in VCL used to determine if the condition is met.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "statement" })
    statement?: string;

    /**
     * Type of the condition. Required.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: ConditionResponseType;

    /**
     * Date and time in ISO 8601 format.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;

    /**
     * A numeric string that represents the service version.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version?: string;
}
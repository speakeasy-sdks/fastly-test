/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TypeResource } from "./typeresource";
import { Expose, Transform } from "class-transformer";

/**
 * OK
 */
export class ResourceResponse extends SpeakeasyBase {
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
     * The path to the resource.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "href" })
    href?: string;

    /**
     * An alphanumeric string identifying the resource link.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * The name of the resource link.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * The ID of the underlying linked resource.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "resource_id" })
    resourceId?: string;

    /**
     * Resource type
     */
    @SpeakeasyMetadata()
    @Expose({ name: "resource_type" })
    resourceType?: TypeResource;

    /**
     * Alphanumeric string identifying the service.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "service_id" })
    serviceId?: string;

    /**
     * Date and time in ISO 8601 format.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;

    /**
     * Integer identifying a service version.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version?: number;
}

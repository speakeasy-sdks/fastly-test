/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SchemasVersionResponse } from "./schemasversionresponse";
import { Expose, Transform, Type } from "class-transformer";

/**
 * The type of this service.
 */
export enum ServiceListResponseType {
    Vcl = "vcl",
    Wasm = "wasm",
}

export class ServiceListResponse extends SpeakeasyBase {
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
     * Alphanumeric string identifying the customer.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "customer_id" })
    customerId?: string;

    /**
     * Date and time in ISO 8601 format.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "deleted_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    deletedAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * The name of the service.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * The type of this service.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: ServiceListResponseType;

    /**
     * Date and time in ISO 8601 format.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;

    /**
     * Current [version](/reference/api/services/version/) of the service.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version?: number;

    /**
     * A list of [versions](/reference/api/services/version/) associated with the service.
     */
    @SpeakeasyMetadata({ elemType: SchemasVersionResponse })
    @Expose({ name: "versions" })
    @Type(() => SchemasVersionResponse)
    versions?: SchemasVersionResponse[];
}
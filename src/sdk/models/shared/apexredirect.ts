/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

/**
 * HTTP status code used to redirect the client.
 */
export enum ApexRedirectStatusCode {
    ThreeHundredAndOne = 301,
    ThreeHundredAndTwo = 302,
    ThreeHundredAndSeven = 307,
    ThreeHundredAndEight = 308,
}

export class ApexRedirectInput extends SpeakeasyBase {
    /**
     * Array of apex domains that should redirect to their WWW subdomain.
     */
    @SpeakeasyMetadata({ data: "form, name=domains" })
    domains?: string[];

    /**
     * Revision number of the apex redirect feature implementation. Defaults to the most recent revision.
     */
    @SpeakeasyMetadata({ data: "form, name=feature_revision" })
    featureRevision?: number;

    /**
     * HTTP status code used to redirect the client.
     */
    @SpeakeasyMetadata({ data: "form, name=status_code" })
    statusCode?: ApexRedirectStatusCode;
}

/**
 * OK
 */
export class ApexRedirect extends SpeakeasyBase {
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
     * Array of apex domains that should redirect to their WWW subdomain.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "domains" })
    domains?: string[];

    /**
     * Revision number of the apex redirect feature implementation. Defaults to the most recent revision.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "feature_revision" })
    featureRevision?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "service_id" })
    serviceId?: string;

    /**
     * HTTP status code used to redirect the client.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status_code" })
    statusCode?: ApexRedirectStatusCode;

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

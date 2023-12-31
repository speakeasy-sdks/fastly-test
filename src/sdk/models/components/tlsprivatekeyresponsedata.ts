/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TlsPrivateKeyResponseAttributes } from "./tlsprivatekeyresponseattributes";
import { TypeTlsPrivateKey } from "./typetlsprivatekey";
import { Expose, Type } from "class-transformer";

export class TlsPrivateKeyResponseData extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "attributes" })
    @Type(() => TlsPrivateKeyResponseAttributes)
    attributes?: TlsPrivateKeyResponseAttributes;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * Resource type
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: TypeTlsPrivateKey;
}

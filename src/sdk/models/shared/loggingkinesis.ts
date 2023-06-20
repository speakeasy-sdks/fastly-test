/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AwsRegion } from "./awsregion";
import { LoggingFormatVersion } from "./loggingformatversion";
import { LoggingPlacement } from "./loggingplacement";

export class LoggingKinesis extends SpeakeasyBase {
    /**
     * The access key associated with the target Amazon Kinesis stream. Not required if `iam_role` is specified.
     */
    @SpeakeasyMetadata({ data: "form, name=access_key" })
    accessKey?: string;

    /**
     * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Kinesis can ingest.
     */
    @SpeakeasyMetadata({ data: "form, name=format" })
    format?: string;

    /**
     * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "form, name=format_version" })
    formatVersion?: LoggingFormatVersion;

    /**
     * The ARN for an IAM role granting Fastly access to the target Amazon Kinesis stream. Not required if `access_key` and `secret_key` are provided.
     */
    @SpeakeasyMetadata({ data: "form, name=iam_role" })
    iamRole?: string;

    /**
     * The name for the real-time logging configuration.
     */
    @SpeakeasyMetadata({ data: "form, name=name" })
    name?: string;

    /**
     * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "form, name=placement" })
    placement?: LoggingPlacement;

    /**
     * A named set of [AWS resources](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints) that's in the same geographical area.
     */
    @SpeakeasyMetadata({ data: "form, name=region" })
    region?: AwsRegion;

    /**
     * The secret key associated with the target Amazon Kinesis stream. Not required if `iam_role` is specified.
     */
    @SpeakeasyMetadata({ data: "form, name=secret_key" })
    secretKey?: string;

    /**
     * The Amazon Kinesis stream to send logs to. Required.
     */
    @SpeakeasyMetadata({ data: "form, name=topic" })
    topic?: string;
}

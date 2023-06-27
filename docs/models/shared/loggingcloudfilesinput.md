# LoggingCloudfilesInput


## Fields

| Field                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                | Example                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accessKey`                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                         | Your Cloud Files account access key.                                                                                                                                                                                       |                                                                                                                                                                                                                            |
| `bucketName`                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                         | The name of your Cloud Files container.                                                                                                                                                                                    |                                                                                                                                                                                                                            |
| `compressionCodec`                                                                                                                                                                                                         | [LoggingCloudfilesCompressionCodec](../../models/shared/loggingcloudfilescompressioncodec.md)                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                         | The codec used for compressing your logs. Valid values are `zstd`, `snappy`, and `gzip`. Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.                             |                                                                                                                                                                                                                            |
| `format`                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                         | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).                                                                                                                                        | %h %l %u %t "%r" %&gt;s %b                                                                                                                                                                                                 |
| `formatVersion`                                                                                                                                                                                                            | [LoggingCloudfilesFormatVersion](../../models/shared/loggingcloudfilesformatversion.md)                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                         | The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.<br/> | 2                                                                                                                                                                                                                          |
| `gzipLevel`                                                                                                                                                                                                                | *number*                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                         | The level of gzip encoding when sending logs (default `0`, no compression). Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.                                          | 0                                                                                                                                                                                                                          |
| `messageType`                                                                                                                                                                                                              | [LoggingCloudfilesMessageType](../../models/shared/loggingcloudfilesmessagetype.md)                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                         | How the message should be formatted.                                                                                                                                                                                       | classic                                                                                                                                                                                                                    |
| `name`                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                         | The name for the real-time logging configuration.                                                                                                                                                                          | test-log-endpoint                                                                                                                                                                                                          |
| `path`                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                         | The path to upload logs to.                                                                                                                                                                                                |                                                                                                                                                                                                                            |
| `period`                                                                                                                                                                                                                   | *number*                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                         | How frequently log files are finalized so they can be available for reading (in seconds).                                                                                                                                  | 3600                                                                                                                                                                                                                       |
| `placement`                                                                                                                                                                                                                | [LoggingCloudfilesPlacement](../../models/shared/loggingcloudfilesplacement.md)                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                         | Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`.<br/>              | null                                                                                                                                                                                                                       |
| `publicKey`                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                         | A PGP public key that Fastly will use to encrypt your log files before writing them to disk.                                                                                                                               | -----BEGIN PRIVATE KEY-----<br/>...<br/>-----END PRIVATE KEY-----<br/>                                                                                                                                                     |
| `region`                                                                                                                                                                                                                   | [LoggingCloudfilesRegion](../../models/shared/loggingcloudfilesregion.md)                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                         | The region to stream logs to.                                                                                                                                                                                              |                                                                                                                                                                                                                            |
| `responseCondition`                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                         | The name of an existing condition in the configured endpoint, or leave blank to always execute.                                                                                                                            | null                                                                                                                                                                                                                       |
| `user`                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                         | The username for your Cloud Files account.                                                                                                                                                                                 |                                                                                                                                                                                                                            |
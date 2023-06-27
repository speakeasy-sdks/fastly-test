# LoggingSftpResponse

OK


## Fields

| Field                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                | Example                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `address`                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                         | A hostname or IPv4 address.                                                                                                                                                                                                | example.com                                                                                                                                                                                                                |
| `compressionCodec`                                                                                                                                                                                                         | [LoggingSftpResponseCompressionCodec](../../models/shared/loggingsftpresponsecompressioncodec.md)                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                         | The codec used for compressing your logs. Valid values are `zstd`, `snappy`, and `gzip`. Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.                             |                                                                                                                                                                                                                            |
| `createdAt`                                                                                                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                         | Date and time in ISO 8601 format.                                                                                                                                                                                          | 2020-04-09T18:14:30Z                                                                                                                                                                                                       |
| `deletedAt`                                                                                                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                         | Date and time in ISO 8601 format.                                                                                                                                                                                          | 2020-04-09T18:14:30Z                                                                                                                                                                                                       |
| `format`                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                         | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).                                                                                                                                        | %h %l %u %t "%r" %&gt;s %b                                                                                                                                                                                                 |
| `formatVersion`                                                                                                                                                                                                            | [LoggingSftpResponseFormatVersion](../../models/shared/loggingsftpresponseformatversion.md)                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                         | The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.<br/> | 2                                                                                                                                                                                                                          |
| `gzipLevel`                                                                                                                                                                                                                | *number*                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                         | The level of gzip encoding when sending logs (default `0`, no compression). Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.                                          | 0                                                                                                                                                                                                                          |
| `messageType`                                                                                                                                                                                                              | [LoggingSftpResponseMessageType](../../models/shared/loggingsftpresponsemessagetype.md)                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                         | How the message should be formatted.                                                                                                                                                                                       | classic                                                                                                                                                                                                                    |
| `name`                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                         | The name for the real-time logging configuration.                                                                                                                                                                          | test-log-endpoint                                                                                                                                                                                                          |
| `password`                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                         | The password for the server. If both `password` and `secret_key` are passed, `secret_key` will be used in preference.                                                                                                      |                                                                                                                                                                                                                            |
| `path`                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                         | The path to upload logs to.                                                                                                                                                                                                |                                                                                                                                                                                                                            |
| `period`                                                                                                                                                                                                                   | *number*                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                         | How frequently log files are finalized so they can be available for reading (in seconds).                                                                                                                                  | 3600                                                                                                                                                                                                                       |
| `placement`                                                                                                                                                                                                                | [LoggingSftpResponsePlacement](../../models/shared/loggingsftpresponseplacement.md)                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                         | Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`.<br/>              | null                                                                                                                                                                                                                       |
| `port`                                                                                                                                                                                                                     | *number*                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                         | The port number.                                                                                                                                                                                                           |                                                                                                                                                                                                                            |
| `publicKey`                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                         | A PGP public key that Fastly will use to encrypt your log files before writing them to disk.                                                                                                                               | -----BEGIN PRIVATE KEY-----<br/>...<br/>-----END PRIVATE KEY-----<br/>                                                                                                                                                     |
| `responseCondition`                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                         | The name of an existing condition in the configured endpoint, or leave blank to always execute.                                                                                                                            | null                                                                                                                                                                                                                       |
| `secretKey`                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                         | The SSH private key for the server. If both `password` and `secret_key` are passed, `secret_key` will be used in preference.                                                                                               |                                                                                                                                                                                                                            |
| `serviceId`                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                        | SU1Z0isxPaozGVKXdv0eY                                                                                                                                                                                                      |
| `sshKnownHosts`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                         | A list of host keys for all hosts we can connect to over SFTP.                                                                                                                                                             |                                                                                                                                                                                                                            |
| `timestampFormat`                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                         | A timestamp format                                                                                                                                                                                                         | %Y-%m-%dT%H:%M:%S.000                                                                                                                                                                                                      |
| `updatedAt`                                                                                                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                         | Date and time in ISO 8601 format.                                                                                                                                                                                          | 2020-04-09T18:14:30Z                                                                                                                                                                                                       |
| `user`                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                         | The username for the server.                                                                                                                                                                                               |                                                                                                                                                                                                                            |
| `version`                                                                                                                                                                                                                  | *number*                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                        | 1                                                                                                                                                                                                                          |
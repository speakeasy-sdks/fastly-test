# UpdateLogAwsS3Request


## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `loggingS3`                                          | [shared.LoggingS3](../../models/shared/loggings3.md) | :heavy_minus_sign:                                   | N/A                                                  |                                                      |
| `loggingS3Name`                                      | *string*                                             | :heavy_check_mark:                                   | The name for the real-time logging configuration.    | test-log-endpoint                                    |
| `serviceId`                                          | *string*                                             | :heavy_check_mark:                                   | Alphanumeric string identifying the service.         | SU1Z0isxPaozGVKXdv0eY                                |
| `versionId`                                          | *number*                                             | :heavy_check_mark:                                   | Integer identifying a service version.               | 1                                                    |
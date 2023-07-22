# UpdateLogHerokuRequest


## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `loggingHeroku2`                                               | [shared.LoggingHeroku2](../../models/shared/loggingheroku2.md) | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `loggingHerokuName`                                            | *string*                                                       | :heavy_check_mark:                                             | The name for the real-time logging configuration.              | test-log-endpoint                                              |
| `serviceId`                                                    | *string*                                                       | :heavy_check_mark:                                             | Alphanumeric string identifying the service.                   | SU1Z0isxPaozGVKXdv0eY                                          |
| `versionId`                                                    | *number*                                                       | :heavy_check_mark:                                             | Integer identifying a service version.                         | 1                                                              |
# UpdateLogSyslogRequest


## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `loggingSyslog2`                                               | [shared.LoggingSyslog2](../../models/shared/loggingsyslog2.md) | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `loggingSyslogName`                                            | *string*                                                       | :heavy_check_mark:                                             | The name for the real-time logging configuration.              | test-log-endpoint                                              |
| `serviceId`                                                    | *string*                                                       | :heavy_check_mark:                                             | Alphanumeric string identifying the service.                   | SU1Z0isxPaozGVKXdv0eY                                          |
| `versionId`                                                    | *number*                                                       | :heavy_check_mark:                                             | Integer identifying a service version.                         | 1                                                              |
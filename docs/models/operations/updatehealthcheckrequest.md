# UpdateHealthcheckRequest


## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `healthcheck`                                            | [shared.Healthcheck](../../models/shared/healthcheck.md) | :heavy_minus_sign:                                       | N/A                                                      |                                                          |
| `healthcheckName`                                        | *string*                                                 | :heavy_check_mark:                                       | The name of the health check.                            | test-healthcheck                                         |
| `serviceId`                                              | *string*                                                 | :heavy_check_mark:                                       | Alphanumeric string identifying the service.             | SU1Z0isxPaozGVKXdv0eY                                    |
| `versionId`                                              | *number*                                                 | :heavy_check_mark:                                       | Integer identifying a service version.                   | 1                                                        |
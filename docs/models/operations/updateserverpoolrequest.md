# UpdateServerPoolRequest


## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `poolName`                                     | *string*                                       | :heavy_check_mark:                             | Name for the Pool.                             | my-pool                                        |
| `serviceId`                                    | *string*                                       | :heavy_check_mark:                             | Alphanumeric string identifying the service.   | SU1Z0isxPaozGVKXdv0eY                          |
| `versionId`                                    | *number*                                       | :heavy_check_mark:                             | Integer identifying a service version.         | 1                                              |
| `pool`                                         | [components.Pool](../../models/shared/pool.md) | :heavy_minus_sign:                             | N/A                                            |                                                |
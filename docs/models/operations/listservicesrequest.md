# ListServicesRequest


## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `direction`                                              | [components.Direction](../../models/shared/direction.md) | :heavy_minus_sign:                                       | Direction in which to sort results.                      | ascend                                                   |
| `page`                                                   | *number*                                                 | :heavy_minus_sign:                                       | Current page.                                            | 1                                                        |
| `perPage`                                                | *number*                                                 | :heavy_minus_sign:                                       | Number of records per page.                              | 20                                                       |
| `sort`                                                   | *string*                                                 | :heavy_minus_sign:                                       | Field on which to sort.                                  | created                                                  |
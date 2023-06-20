# ListAclEntriesRequest


## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `aclId`                                              | *string*                                             | :heavy_check_mark:                                   | Alphanumeric string identifying a ACL.               | 6tUXdegLTf5BCig0zGFrU3                               |
| `direction`                                          | [shared.Direction](../../models/shared/direction.md) | :heavy_minus_sign:                                   | Direction in which to sort results.                  | ascend                                               |
| `page`                                               | *number*                                             | :heavy_minus_sign:                                   | Current page.                                        | 1                                                    |
| `perPage`                                            | *number*                                             | :heavy_minus_sign:                                   | Number of records per page.                          | 20                                                   |
| `serviceId`                                          | *string*                                             | :heavy_check_mark:                                   | Alphanumeric string identifying the service.         | SU1Z0isxPaozGVKXdv0eY                                |
| `sort`                                               | *string*                                             | :heavy_minus_sign:                                   | Field on which to sort.                              | created                                              |
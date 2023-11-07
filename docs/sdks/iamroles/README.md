# IamRoles
(*.iamRoles*)

## Overview

A role is a collection of permissions that can be assigned to a user group.

<https://developer.fastly.com/reference/api/account/roles>
### Available Operations

* [deleteARole](#deletearole) - Delete a role
* [getARole](#getarole) - Get a role
* [listRolePermissions](#listrolepermissions) - List permissions in a role
* [listRoles](#listroles) - List roles

## deleteARole

Delete a role.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteARoleRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const roleId: string = "t4Gg2uUGZzb2W9Euo4mo0R";

  const res = await sdk.iamRoles.deleteARole(roleId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `roleId`                                                     | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the role.                    | t4Gg2uUGZzb2W9Euo4mo0R                                       |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteARoleResponse](../../models/operations/deletearoleresponse.md)>**


## getARole

Get a role.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetARoleRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const roleId: string = "t4Gg2uUGZzb2W9Euo4mo0R";

  const res = await sdk.iamRoles.getARole(roleId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `roleId`                                                     | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the role.                    | t4Gg2uUGZzb2W9Euo4mo0R                                       |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetARoleResponse](../../models/operations/getaroleresponse.md)>**


## listRolePermissions

List all permissions in a role.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListRolePermissionsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const roleId: string = "t4Gg2uUGZzb2W9Euo4mo0R";

  const res = await sdk.iamRoles.listRolePermissions(roleId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `roleId`                                                     | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the role.                    | t4Gg2uUGZzb2W9Euo4mo0R                                       |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.ListRolePermissionsResponse](../../models/operations/listrolepermissionsresponse.md)>**


## listRoles

List all roles.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListRolesRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const page: number = 1;
const perPage: number = 20;

  const res = await sdk.iamRoles.listRoles(page, perPage);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `page`                                                       | *number*                                                     | :heavy_minus_sign:                                           | Current page.                                                | 1                                                            |
| `perPage`                                                    | *number*                                                     | :heavy_minus_sign:                                           | Number of records per page.                                  | 20                                                           |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.ListRolesResponse](../../models/operations/listrolesresponse.md)>**


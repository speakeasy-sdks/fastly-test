# iamRoles

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
import { Fastly } from "FastlyTestJS";
import { DeleteARoleResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.iamRoles.deleteARole({
  roleId: "t4Gg2uUGZzb2W9Euo4mo0R",
}, {
  token: "",
}).then((res: DeleteARoleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.DeleteARoleRequest](../../models/operations/deletearolerequest.md)   | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `security`                                                                       | [operations.DeleteARoleSecurity](../../models/operations/deletearolesecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.DeleteARoleResponse](../../models/operations/deletearoleresponse.md)>**


## getARole

Get a role.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetARoleResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.iamRoles.getARole({
  roleId: "t4Gg2uUGZzb2W9Euo4mo0R",
}, {
  token: "",
}).then((res: GetARoleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.GetARoleRequest](../../models/operations/getarolerequest.md)   | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `security`                                                                 | [operations.GetARoleSecurity](../../models/operations/getarolesecurity.md) | :heavy_check_mark:                                                         | The security requirements to use for the request.                          |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.GetARoleResponse](../../models/operations/getaroleresponse.md)>**


## listRolePermissions

List all permissions in a role.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListRolePermissionsResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.iamRoles.listRolePermissions({
  roleId: "t4Gg2uUGZzb2W9Euo4mo0R",
}, {
  token: "",
}).then((res: ListRolePermissionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.ListRolePermissionsRequest](../../models/operations/listrolepermissionsrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.ListRolePermissionsSecurity](../../models/operations/listrolepermissionssecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.ListRolePermissionsResponse](../../models/operations/listrolepermissionsresponse.md)>**


## listRoles

List all roles.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListRolesResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.iamRoles.listRoles({
  page: 1,
  perPage: 20,
}, {
  token: "",
}).then((res: ListRolesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.ListRolesRequest](../../models/operations/listrolesrequest.md)   | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `security`                                                                   | [operations.ListRolesSecurity](../../models/operations/listrolessecurity.md) | :heavy_check_mark:                                                           | The security requirements to use for the request.                            |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.ListRolesResponse](../../models/operations/listrolesresponse.md)>**


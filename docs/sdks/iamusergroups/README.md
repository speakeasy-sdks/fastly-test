# IamUserGroups

## Overview

A user group is a collection of users with service groups and roles.

<https://developer.fastly.com/reference/api/account/user-groups>
### Available Operations

* [deleteAUserGroup](#deleteausergroup) - Delete a user group
* [getAUserGroup](#getausergroup) - Get a user group
* [listUserGroupMembers](#listusergroupmembers) - List members of a user group
* [listUserGroupRoles](#listusergrouproles) - List roles in a user group
* [listUserGroupServiceGroups](#listusergroupservicegroups) - List service groups in a user group
* [listUserGroups](#listusergroups) - List user groups

## deleteAUserGroup

Delete a user group.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteAUserGroupResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.iamUserGroups.deleteAUserGroup({
  userGroupId: "t4Gg2uUGZzb2W9Euo4mo0R",
}).then((res: DeleteAUserGroupResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.DeleteAUserGroupRequest](../../models/operations/deleteausergrouprequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DeleteAUserGroupResponse](../../models/operations/deleteausergroupresponse.md)>**


## getAUserGroup

Get a user group.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetAUserGroupResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.iamUserGroups.getAUserGroup({
  userGroupId: "t4Gg2uUGZzb2W9Euo4mo0R",
}).then((res: GetAUserGroupResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetAUserGroupRequest](../../models/operations/getausergrouprequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetAUserGroupResponse](../../models/operations/getausergroupresponse.md)>**


## listUserGroupMembers

List members of a user group.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListUserGroupMembersResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.iamUserGroups.listUserGroupMembers({
  page: 1,
  perPage: 20,
  userGroupId: "t4Gg2uUGZzb2W9Euo4mo0R",
}).then((res: ListUserGroupMembersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.ListUserGroupMembersRequest](../../models/operations/listusergroupmembersrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.ListUserGroupMembersResponse](../../models/operations/listusergroupmembersresponse.md)>**


## listUserGroupRoles

List roles in a user group.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListUserGroupRolesResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.iamUserGroups.listUserGroupRoles({
  page: 1,
  perPage: 20,
  userGroupId: "t4Gg2uUGZzb2W9Euo4mo0R",
}).then((res: ListUserGroupRolesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.ListUserGroupRolesRequest](../../models/operations/listusergrouprolesrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ListUserGroupRolesResponse](../../models/operations/listusergrouprolesresponse.md)>**


## listUserGroupServiceGroups

List service groups in a user group.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListUserGroupServiceGroupsResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.iamUserGroups.listUserGroupServiceGroups({
  page: 1,
  perPage: 20,
  userGroupId: "t4Gg2uUGZzb2W9Euo4mo0R",
}).then((res: ListUserGroupServiceGroupsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.ListUserGroupServiceGroupsRequest](../../models/operations/listusergroupservicegroupsrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.ListUserGroupServiceGroupsResponse](../../models/operations/listusergroupservicegroupsresponse.md)>**


## listUserGroups

List all user groups.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListUserGroupsResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.iamUserGroups.listUserGroups({
  page: 1,
  perPage: 20,
}).then((res: ListUserGroupsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.ListUserGroupsRequest](../../models/operations/listusergroupsrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ListUserGroupsResponse](../../models/operations/listusergroupsresponse.md)>**


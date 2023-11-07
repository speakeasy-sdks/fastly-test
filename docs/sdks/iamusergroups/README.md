# IamUserGroups
(*.iamUserGroups*)

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
import { Fastly } from "Fastly";
import { DeleteAUserGroupRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const userGroupId: string = "t4Gg2uUGZzb2W9Euo4mo0R";

  const res = await sdk.iamUserGroups.deleteAUserGroup(userGroupId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `userGroupId`                                                | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the user group.              | t4Gg2uUGZzb2W9Euo4mo0R                                       |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteAUserGroupResponse](../../models/operations/deleteausergroupresponse.md)>**


## getAUserGroup

Get a user group.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetAUserGroupRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const userGroupId: string = "t4Gg2uUGZzb2W9Euo4mo0R";

  const res = await sdk.iamUserGroups.getAUserGroup(userGroupId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `userGroupId`                                                | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the user group.              | t4Gg2uUGZzb2W9Euo4mo0R                                       |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetAUserGroupResponse](../../models/operations/getausergroupresponse.md)>**


## listUserGroupMembers

List members of a user group.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListUserGroupMembersRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const userGroupId: string = "t4Gg2uUGZzb2W9Euo4mo0R";
const page: number = 1;
const perPage: number = 20;

  const res = await sdk.iamUserGroups.listUserGroupMembers(userGroupId, page, perPage);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `userGroupId`                                                | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the user group.              | t4Gg2uUGZzb2W9Euo4mo0R                                       |
| `page`                                                       | *number*                                                     | :heavy_minus_sign:                                           | Current page.                                                | 1                                                            |
| `perPage`                                                    | *number*                                                     | :heavy_minus_sign:                                           | Number of records per page.                                  | 20                                                           |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.ListUserGroupMembersResponse](../../models/operations/listusergroupmembersresponse.md)>**


## listUserGroupRoles

List roles in a user group.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListUserGroupRolesRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const userGroupId: string = "t4Gg2uUGZzb2W9Euo4mo0R";
const page: number = 1;
const perPage: number = 20;

  const res = await sdk.iamUserGroups.listUserGroupRoles(userGroupId, page, perPage);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `userGroupId`                                                | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the user group.              | t4Gg2uUGZzb2W9Euo4mo0R                                       |
| `page`                                                       | *number*                                                     | :heavy_minus_sign:                                           | Current page.                                                | 1                                                            |
| `perPage`                                                    | *number*                                                     | :heavy_minus_sign:                                           | Number of records per page.                                  | 20                                                           |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.ListUserGroupRolesResponse](../../models/operations/listusergrouprolesresponse.md)>**


## listUserGroupServiceGroups

List service groups in a user group.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListUserGroupServiceGroupsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const userGroupId: string = "t4Gg2uUGZzb2W9Euo4mo0R";
const page: number = 1;
const perPage: number = 20;

  const res = await sdk.iamUserGroups.listUserGroupServiceGroups(userGroupId, page, perPage);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `userGroupId`                                                | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the user group.              | t4Gg2uUGZzb2W9Euo4mo0R                                       |
| `page`                                                       | *number*                                                     | :heavy_minus_sign:                                           | Current page.                                                | 1                                                            |
| `perPage`                                                    | *number*                                                     | :heavy_minus_sign:                                           | Number of records per page.                                  | 20                                                           |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.ListUserGroupServiceGroupsResponse](../../models/operations/listusergroupservicegroupsresponse.md)>**


## listUserGroups

List all user groups.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListUserGroupsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const page: number = 1;
const perPage: number = 20;

  const res = await sdk.iamUserGroups.listUserGroups(page, perPage);


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

**Promise<[operations.ListUserGroupsResponse](../../models/operations/listusergroupsresponse.md)>**


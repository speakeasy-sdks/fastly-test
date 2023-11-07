# IamServiceGroups
(*.iamServiceGroups*)

## Overview

A service group is a collection of services that can be assigned to a user group.

<https://developer.fastly.com/reference/api/account/service-groups>
### Available Operations

* [deleteAServiceGroup](#deleteaservicegroup) - Delete a service group
* [getAServiceGroup](#getaservicegroup) - Get a service group
* [listServiceGroupServices](#listservicegroupservices) - List services to a service group
* [listServiceGroups](#listservicegroups) - List service groups

## deleteAServiceGroup

Delete a service group.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteAServiceGroupRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceGroupId: string = "t4Gg2uUGZzb2W9Euo4mo0R";

  const res = await sdk.iamServiceGroups.deleteAServiceGroup(serviceGroupId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `serviceGroupId`                                             | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service group.           | t4Gg2uUGZzb2W9Euo4mo0R                                       |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteAServiceGroupResponse](../../models/operations/deleteaservicegroupresponse.md)>**


## getAServiceGroup

Get a service group.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetAServiceGroupRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceGroupId: string = "t4Gg2uUGZzb2W9Euo4mo0R";

  const res = await sdk.iamServiceGroups.getAServiceGroup(serviceGroupId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `serviceGroupId`                                             | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service group.           | t4Gg2uUGZzb2W9Euo4mo0R                                       |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetAServiceGroupResponse](../../models/operations/getaservicegroupresponse.md)>**


## listServiceGroupServices

List services to a service group.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListServiceGroupServicesRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceGroupId: string = "t4Gg2uUGZzb2W9Euo4mo0R";
const page: number = 1;
const perPage: number = 20;

  const res = await sdk.iamServiceGroups.listServiceGroupServices(serviceGroupId, page, perPage);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `serviceGroupId`                                             | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service group.           | t4Gg2uUGZzb2W9Euo4mo0R                                       |
| `page`                                                       | *number*                                                     | :heavy_minus_sign:                                           | Current page.                                                | 1                                                            |
| `perPage`                                                    | *number*                                                     | :heavy_minus_sign:                                           | Number of records per page.                                  | 20                                                           |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.ListServiceGroupServicesResponse](../../models/operations/listservicegroupservicesresponse.md)>**


## listServiceGroups

List all service groups.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListServiceGroupsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const page: number = 1;
const perPage: number = 20;

  const res = await sdk.iamServiceGroups.listServiceGroups(page, perPage);


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

**Promise<[operations.ListServiceGroupsResponse](../../models/operations/listservicegroupsresponse.md)>**


# IamServiceGroups

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
import { Fastly } from "FastlyTestJS";
import { DeleteAServiceGroupResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.iamServiceGroups.deleteAServiceGroup({
  serviceGroupId: "t4Gg2uUGZzb2W9Euo4mo0R",
}).then((res: DeleteAServiceGroupResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.DeleteAServiceGroupRequest](../../models/operations/deleteaservicegrouprequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.DeleteAServiceGroupResponse](../../models/operations/deleteaservicegroupresponse.md)>**


## getAServiceGroup

Get a service group.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetAServiceGroupResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.iamServiceGroups.getAServiceGroup({
  serviceGroupId: "t4Gg2uUGZzb2W9Euo4mo0R",
}).then((res: GetAServiceGroupResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetAServiceGroupRequest](../../models/operations/getaservicegrouprequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetAServiceGroupResponse](../../models/operations/getaservicegroupresponse.md)>**


## listServiceGroupServices

List services to a service group.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListServiceGroupServicesResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.iamServiceGroups.listServiceGroupServices({
  page: 1,
  perPage: 20,
  serviceGroupId: "t4Gg2uUGZzb2W9Euo4mo0R",
}).then((res: ListServiceGroupServicesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.ListServiceGroupServicesRequest](../../models/operations/listservicegroupservicesrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.ListServiceGroupServicesResponse](../../models/operations/listservicegroupservicesresponse.md)>**


## listServiceGroups

List all service groups.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListServiceGroupsResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.iamServiceGroups.listServiceGroups({
  page: 1,
  perPage: 20,
}).then((res: ListServiceGroupsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.ListServiceGroupsRequest](../../models/operations/listservicegroupsrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ListServiceGroupsResponse](../../models/operations/listservicegroupsresponse.md)>**


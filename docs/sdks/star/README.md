# Star

## Overview

A star allows users to mark services of interest.

<https://developer.fastly.com/reference/api/account/star>
### Available Operations

* [createServiceStar](#createservicestar) - Create a star
* [deleteServiceStar](#deleteservicestar) - Delete a star
* [getServiceStar](#getservicestar) - Get a star
* [listServiceStars](#listservicestars) - List stars

## createServiceStar

Create star.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateServiceStarResponse, CreateServiceStarSecurity } from "FastlyTestJS/dist/sdk/models/operations";
import { TypeService, TypeStar, TypeUser } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();
const operationSecurity: CreateServiceStarSecurity = {
  token: "",
};

sdk.star.createServiceStar({
  data: {
    relationships: {
      service: {
        type: TypeService.Service,
      },
      user: {
        data: {
          type: TypeUser.User,
        },
      },
    },
    type: TypeStar.Star,
  },
}, operationSecurity).then((res: CreateServiceStarResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [shared.StarInput](../../models/shared/starinput.md)                                         | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.CreateServiceStarSecurity](../../models/operations/createservicestarsecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.CreateServiceStarResponse](../../models/operations/createservicestarresponse.md)>**


## deleteServiceStar

Delete star.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteServiceStarResponse, DeleteServiceStarSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: DeleteServiceStarSecurity = {
  token: "",
};

sdk.star.deleteServiceStar({
  starId: "3krg2uUGZzb2W9Euo4moOY",
}, operationSecurity).then((res: DeleteServiceStarResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.DeleteServiceStarRequest](../../models/operations/deleteservicestarrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.DeleteServiceStarSecurity](../../models/operations/deleteservicestarsecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.DeleteServiceStarResponse](../../models/operations/deleteservicestarresponse.md)>**


## getServiceStar

Show star.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetServiceStarResponse, GetServiceStarSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: GetServiceStarSecurity = {
  token: "",
};

sdk.star.getServiceStar({
  starId: "3krg2uUGZzb2W9Euo4moOY",
}, operationSecurity).then((res: GetServiceStarResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetServiceStarRequest](../../models/operations/getservicestarrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.GetServiceStarSecurity](../../models/operations/getservicestarsecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetServiceStarResponse](../../models/operations/getservicestarresponse.md)>**


## listServiceStars

List stars.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListServiceStarsResponse, ListServiceStarsSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: ListServiceStarsSecurity = {
  token: "",
};

sdk.star.listServiceStars(operationSecurity).then((res: ListServiceStarsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `security`                                                                                 | [operations.ListServiceStarsSecurity](../../models/operations/listservicestarssecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ListServiceStarsResponse](../../models/operations/listservicestarsresponse.md)>**


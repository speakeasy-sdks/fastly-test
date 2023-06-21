# star

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
import { CreateServiceStarResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { TypeService, TypeStar, TypeUser } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

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
}, {
  token: "",
}).then((res: CreateServiceStarResponse) => {
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
import { DeleteServiceStarResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.star.deleteServiceStar({
  starId: "3krg2uUGZzb2W9Euo4moOY",
}, {
  token: "",
}).then((res: DeleteServiceStarResponse) => {
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
import { GetServiceStarResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.star.getServiceStar({
  starId: "3krg2uUGZzb2W9Euo4moOY",
}, {
  token: "",
}).then((res: GetServiceStarResponse) => {
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
import { ListServiceStarsResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { TypeService, TypeStar, TypeUser } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.star.listServiceStars({
  token: "",
}).then((res: ListServiceStarsResponse) => {
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


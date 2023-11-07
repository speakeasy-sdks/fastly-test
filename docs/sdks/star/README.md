# Star
(*.star*)

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
import { Fastly } from "Fastly";
import { TypeService, TypeStar, TypeUser } from "Fastly/dist/sdk/models/components";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.star.createServiceStar({
    data: {
      relationships: {
        service: {},
        user: {
          data: {},
        },
      },
    },
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [components.Star](../../models/shared/star.md)               | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateServiceStarResponse](../../models/operations/createservicestarresponse.md)>**


## deleteServiceStar

Delete star.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteServiceStarRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const starId: string = "3krg2uUGZzb2W9Euo4moOY";

  const res = await sdk.star.deleteServiceStar(starId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `starId`                                                     | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying a star.                      | 3krg2uUGZzb2W9Euo4moOY                                       |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteServiceStarResponse](../../models/operations/deleteservicestarresponse.md)>**


## getServiceStar

Show star.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetServiceStarRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const starId: string = "3krg2uUGZzb2W9Euo4moOY";

  const res = await sdk.star.getServiceStar(starId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `starId`                                                     | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying a star.                      | 3krg2uUGZzb2W9Euo4moOY                                       |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetServiceStarResponse](../../models/operations/getservicestarresponse.md)>**


## listServiceStars

List stars.

### Example Usage

```typescript
import { Fastly } from "Fastly";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.star.listServiceStars();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListServiceStarsResponse](../../models/operations/listservicestarsresponse.md)>**


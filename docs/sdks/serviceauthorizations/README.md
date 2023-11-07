# ServiceAuthorizations
(*.serviceAuthorizations*)

## Overview

A service authorization allows limited users to access only specified services.

<https://developer.fastly.com/reference/api/account/service-authorization>
### Available Operations

* [createServiceAuthorization](#createserviceauthorization) - Create service authorization
* [deleteServiceAuthorization](#deleteserviceauthorization) - Delete service authorization
* [listServiceAuthorization](#listserviceauthorization) - List service authorizations
* [showServiceAuthorization](#showserviceauthorization) - Show service authorization
* [updateServiceAuthorization](#updateserviceauthorization) - Update service authorization

## createServiceAuthorization

Create service authorization.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { Permission, TypeService, TypeServiceAuthorization, TypeUser } from "FastlyTestJS/dist/sdk/models/shared";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.serviceAuthorizations.createServiceAuthorization({
    data: {
      attributes: {
        permission: Permission.Full,
      },
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

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [shared.ServiceAuthorization](../../models/shared/serviceauthorization.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.CreateServiceAuthorizationResponse](../../models/operations/createserviceauthorizationresponse.md)>**


## deleteServiceAuthorization

Delete service authorization.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.serviceAuthorizations.deleteServiceAuthorization({
    serviceAuthorizationId: "3krg2uUGZzb2W9Euo4moOY",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.DeleteServiceAuthorizationRequest](../../models/operations/deleteserviceauthorizationrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.DeleteServiceAuthorizationResponse](../../models/operations/deleteserviceauthorizationresponse.md)>**


## listServiceAuthorization

List service authorizations.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.serviceAuthorizations.listServiceAuthorization({
    pageNumber: 1,
    pageSize: 20,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.ListServiceAuthorizationRequest](../../models/operations/listserviceauthorizationrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.ListServiceAuthorizationResponse](../../models/operations/listserviceauthorizationresponse.md)>**


## showServiceAuthorization

Show service authorization.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.serviceAuthorizations.showServiceAuthorization({
    serviceAuthorizationId: "3krg2uUGZzb2W9Euo4moOY",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.ShowServiceAuthorizationRequest](../../models/operations/showserviceauthorizationrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.ShowServiceAuthorizationResponse](../../models/operations/showserviceauthorizationresponse.md)>**


## updateServiceAuthorization

Update service authorization.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { Permission, TypeService, TypeServiceAuthorization, TypeUser } from "FastlyTestJS/dist/sdk/models/shared";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.serviceAuthorizations.updateServiceAuthorization({
    serviceAuthorization: {
      data: {
        attributes: {
          permission: Permission.Full,
        },
        relationships: {
          service: {},
          user: {
            data: {},
          },
        },
      },
    },
    serviceAuthorizationId: "3krg2uUGZzb2W9Euo4moOY",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.UpdateServiceAuthorizationRequest](../../models/operations/updateserviceauthorizationrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.UpdateServiceAuthorizationResponse](../../models/operations/updateserviceauthorizationresponse.md)>**


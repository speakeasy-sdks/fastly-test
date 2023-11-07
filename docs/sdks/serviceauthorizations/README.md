# serviceAuthorizations

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
import { Fastly } from "FastlyTest";
import { CreateServiceAuthorizationResponse } from "FastlyTest/dist/sdk/models/operations";
import { Permission, TypeService, TypeServiceAuthorization, TypeUser } from "FastlyTest/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.serviceAuthorizations.createServiceAuthorization({
  data: {
    attributes: {
      permission: Permission.Full,
    },
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
    type: TypeServiceAuthorization.ServiceAuthorization,
  },
}, {
  token: "",
}).then((res: CreateServiceAuthorizationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [shared.ServiceAuthorizationInput](../../models/shared/serviceauthorizationinput.md)                           | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `security`                                                                                                     | [operations.CreateServiceAuthorizationSecurity](../../models/operations/createserviceauthorizationsecurity.md) | :heavy_check_mark:                                                                                             | The security requirements to use for the request.                                                              |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.CreateServiceAuthorizationResponse](../../models/operations/createserviceauthorizationresponse.md)>**


## deleteServiceAuthorization

Delete service authorization.

### Example Usage

```typescript
import { Fastly } from "FastlyTest";
import { DeleteServiceAuthorizationResponse } from "FastlyTest/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.serviceAuthorizations.deleteServiceAuthorization({
  serviceAuthorizationId: "3krg2uUGZzb2W9Euo4moOY",
}, {
  token: "",
}).then((res: DeleteServiceAuthorizationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.DeleteServiceAuthorizationRequest](../../models/operations/deleteserviceauthorizationrequest.md)   | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `security`                                                                                                     | [operations.DeleteServiceAuthorizationSecurity](../../models/operations/deleteserviceauthorizationsecurity.md) | :heavy_check_mark:                                                                                             | The security requirements to use for the request.                                                              |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.DeleteServiceAuthorizationResponse](../../models/operations/deleteserviceauthorizationresponse.md)>**


## listServiceAuthorization

List service authorizations.

### Example Usage

```typescript
import { Fastly } from "FastlyTest";
import { ListServiceAuthorizationResponse } from "FastlyTest/dist/sdk/models/operations";
import { TypeService, TypeServiceAuthorization, TypeUser } from "FastlyTest/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.serviceAuthorizations.listServiceAuthorization({
  pageNumber: 1,
  pageSize: 20,
}, {
  token: "",
}).then((res: ListServiceAuthorizationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.ListServiceAuthorizationRequest](../../models/operations/listserviceauthorizationrequest.md)   | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `security`                                                                                                 | [operations.ListServiceAuthorizationSecurity](../../models/operations/listserviceauthorizationsecurity.md) | :heavy_check_mark:                                                                                         | The security requirements to use for the request.                                                          |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.ListServiceAuthorizationResponse](../../models/operations/listserviceauthorizationresponse.md)>**


## showServiceAuthorization

Show service authorization.

### Example Usage

```typescript
import { Fastly } from "FastlyTest";
import { ShowServiceAuthorizationResponse } from "FastlyTest/dist/sdk/models/operations";
import { TypeService, TypeServiceAuthorization, TypeUser } from "FastlyTest/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.serviceAuthorizations.showServiceAuthorization({
  serviceAuthorizationId: "3krg2uUGZzb2W9Euo4moOY",
}, {
  token: "",
}).then((res: ShowServiceAuthorizationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.ShowServiceAuthorizationRequest](../../models/operations/showserviceauthorizationrequest.md)   | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `security`                                                                                                 | [operations.ShowServiceAuthorizationSecurity](../../models/operations/showserviceauthorizationsecurity.md) | :heavy_check_mark:                                                                                         | The security requirements to use for the request.                                                          |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.ShowServiceAuthorizationResponse](../../models/operations/showserviceauthorizationresponse.md)>**


## updateServiceAuthorization

Update service authorization.

### Example Usage

```typescript
import { Fastly } from "FastlyTest";
import { UpdateServiceAuthorizationResponse } from "FastlyTest/dist/sdk/models/operations";
import { Permission, TypeService, TypeServiceAuthorization, TypeUser } from "FastlyTest/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.serviceAuthorizations.updateServiceAuthorization({
  serviceAuthorizationInput: {
    data: {
      attributes: {
        permission: Permission.Full,
      },
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
      type: TypeServiceAuthorization.ServiceAuthorization,
    },
  },
  serviceAuthorizationId: "3krg2uUGZzb2W9Euo4moOY",
}, {
  token: "",
}).then((res: UpdateServiceAuthorizationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.UpdateServiceAuthorizationRequest](../../models/operations/updateserviceauthorizationrequest.md)   | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `security`                                                                                                     | [operations.UpdateServiceAuthorizationSecurity](../../models/operations/updateserviceauthorizationsecurity.md) | :heavy_check_mark:                                                                                             | The security requirements to use for the request.                                                              |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.UpdateServiceAuthorizationResponse](../../models/operations/updateserviceauthorizationresponse.md)>**


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
import { Fastly } from "Fastly";
import { Permission, TypeService, TypeServiceAuthorization, TypeUser } from "Fastly/dist/sdk/models/components";

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

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [components.ServiceAuthorization](../../models/shared/serviceauthorization.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.CreateServiceAuthorizationResponse](../../models/operations/createserviceauthorizationresponse.md)>**


## deleteServiceAuthorization

Delete service authorization.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteServiceAuthorizationRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceAuthorizationId: string = "3krg2uUGZzb2W9Euo4moOY";

  const res = await sdk.serviceAuthorizations.deleteServiceAuthorization(serviceAuthorizationId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `serviceAuthorizationId`                                     | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying a service authorization.     | 3krg2uUGZzb2W9Euo4moOY                                       |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteServiceAuthorizationResponse](../../models/operations/deleteserviceauthorizationresponse.md)>**


## listServiceAuthorization

List service authorizations.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListServiceAuthorizationRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const pageNumber: number = 1;
const pageSize: number = 20;

  const res = await sdk.serviceAuthorizations.listServiceAuthorization(pageNumber, pageSize);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `pageNumber`                                                 | *number*                                                     | :heavy_minus_sign:                                           | Current page.                                                | 1                                                            |
| `pageSize`                                                   | *number*                                                     | :heavy_minus_sign:                                           | Number of records per page.                                  | 20                                                           |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.ListServiceAuthorizationResponse](../../models/operations/listserviceauthorizationresponse.md)>**


## showServiceAuthorization

Show service authorization.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ShowServiceAuthorizationRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceAuthorizationId: string = "3krg2uUGZzb2W9Euo4moOY";

  const res = await sdk.serviceAuthorizations.showServiceAuthorization(serviceAuthorizationId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `serviceAuthorizationId`                                     | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying a service authorization.     | 3krg2uUGZzb2W9Euo4moOY                                       |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.ShowServiceAuthorizationResponse](../../models/operations/showserviceauthorizationresponse.md)>**


## updateServiceAuthorization

Update service authorization.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  Permission,
  RelationshipMemberServiceInput,
  ServiceAuthorization,
  ServiceAuthorizationData,
  ServiceAuthorizationDataAttributes,
  ServiceAuthorizationDataData,
  ServiceAuthorizationDataRelationships,
  ServiceAuthorizationDataUser,
  TypeService,
  TypeServiceAuthorization,
  TypeUser,
} from "Fastly/dist/sdk/models/components";
import { UpdateServiceAuthorizationRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceAuthorizationId: string = "3krg2uUGZzb2W9Euo4moOY";
const serviceAuthorization: ServiceAuthorization = {
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
};

  const res = await sdk.serviceAuthorizations.updateServiceAuthorization(serviceAuthorizationId, serviceAuthorization);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `serviceAuthorizationId`                                                       | *string*                                                                       | :heavy_check_mark:                                                             | Alphanumeric string identifying a service authorization.                       | 3krg2uUGZzb2W9Euo4moOY                                                         |
| `serviceAuthorization`                                                         | [components.ServiceAuthorization](../../models/shared/serviceauthorization.md) | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |                                                                                |


### Response

**Promise<[operations.UpdateServiceAuthorizationResponse](../../models/operations/updateserviceauthorizationresponse.md)>**


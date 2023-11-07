# Service
(*.service*)

## Overview

A Service represents the configuration for a website, app, API, or anything else to be served through Fastly. A Service can have many Versions, through which Backends, Domains, and more can be configured.

<https://developer.fastly.com/reference/api/services/service>
### Available Operations

* [createService](#createservice) - Create a service
* [deleteService](#deleteservice) - Delete a service
* [getService](#getservice) - Get a service
* [getServiceDetail](#getservicedetail) - Get service details
* [listServiceDomains](#listservicedomains) - List the domains within a service
* [listServices](#listservices) - List services
* [searchService](#searchservice) - Search for a service by name
* [updateService](#updateservice) - Update a service

## createService

Create a service.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ServiceCreateType } from "Fastly/dist/sdk/models/components";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.service.createService({
    comment: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    customerId: "x4xCwxxJxGCx123Rx5xTx",
    name: "test-service",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `request`                                                        | [components.ServiceCreate](../../models/shared/servicecreate.md) | :heavy_check_mark:                                               | The request object to use for the request.                       |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |


### Response

**Promise<[operations.CreateServiceResponse](../../models/operations/createserviceresponse.md)>**


## deleteService

Delete a service.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteServiceRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";

  const res = await sdk.service.deleteService(serviceId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteServiceResponse](../../models/operations/deleteserviceresponse.md)>**


## getService

Get a specific service by id.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetServiceRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";

  const res = await sdk.service.getService(serviceId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetServiceResponse](../../models/operations/getserviceresponse.md)>**


## getServiceDetail

List detailed information on a specified service.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetServiceDetailRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const version: number = 1;

  const res = await sdk.service.getServiceDetail(serviceId, version);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `version`                                                    | *number*                                                     | :heavy_minus_sign:                                           | Number identifying a version of the service.                 | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetServiceDetailResponse](../../models/operations/getservicedetailresponse.md)>**


## listServiceDomains

List the domains within a service.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListServiceDomainsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";

  const res = await sdk.service.listServiceDomains(serviceId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.ListServiceDomainsResponse](../../models/operations/listservicedomainsresponse.md)>**


## listServices

List services.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { Direction } from "Fastly/dist/sdk/models/components";
import { ListServicesRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const direction: Direction = Direction.Ascend;
const page: number = 1;
const perPage: number = 20;
const sort: string = "created";

  const res = await sdk.service.listServices(direction, page, perPage, sort);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `direction`                                                  | [components.Direction](../../models/shared/direction.md)     | :heavy_minus_sign:                                           | Direction in which to sort results.                          | ascend                                                       |
| `page`                                                       | *number*                                                     | :heavy_minus_sign:                                           | Current page.                                                | 1                                                            |
| `perPage`                                                    | *number*                                                     | :heavy_minus_sign:                                           | Number of records per page.                                  | 20                                                           |
| `sort`                                                       | *string*                                                     | :heavy_minus_sign:                                           | Field on which to sort.                                      | created                                                      |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.ListServicesResponse](../../models/operations/listservicesresponse.md)>**


## searchService

Get a specific service by name.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { SearchServiceRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const name: string = "test-service";

  const res = await sdk.service.searchService(name);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `name`                                                       | *string*                                                     | :heavy_check_mark:                                           | The name of the service.                                     | test-service                                                 |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.SearchServiceResponse](../../models/operations/searchserviceresponse.md)>**


## updateService

Update a service.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { Service } from "Fastly/dist/sdk/models/components";
import { UpdateServiceRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const service: Service = {
  comment: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
  customerId: "x4xCwxxJxGCx123Rx5xTx",
  name: "test-service",
};

  const res = await sdk.service.updateService(serviceId, service);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `service`                                                    | [components.Service](../../models/shared/service.md)         | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.UpdateServiceResponse](../../models/operations/updateserviceresponse.md)>**


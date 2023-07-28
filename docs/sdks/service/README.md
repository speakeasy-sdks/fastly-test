# service

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
import { Fastly } from "FastlyTestJS";
import { CreateServiceResponse, CreateServiceSecurity } from "FastlyTestJS/dist/sdk/models/operations";
import { ServiceCreateType } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();
const operationSecurity: CreateServiceSecurity = {
  token: "",
};

sdk.service.createService({
  comment: "recusandae",
  customerId: "x4xCwxxJxGCx123Rx5xTx",
  name: "test-service",
  type: ServiceCreateType.Vcl,
}, operationSecurity).then((res: CreateServiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [shared.ServiceCreate1](../../models/shared/servicecreate1.md)                       | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.CreateServiceSecurity](../../models/operations/createservicesecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CreateServiceResponse](../../models/operations/createserviceresponse.md)>**


## deleteService

Delete a service.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteServiceResponse, DeleteServiceSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: DeleteServiceSecurity = {
  token: "",
};

sdk.service.deleteService({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
}, operationSecurity).then((res: DeleteServiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.DeleteServiceRequest](../../models/operations/deleteservicerequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.DeleteServiceSecurity](../../models/operations/deleteservicesecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.DeleteServiceResponse](../../models/operations/deleteserviceresponse.md)>**


## getService

Get a specific service by id.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetServiceResponse, GetServiceSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: GetServiceSecurity = {
  token: "",
};

sdk.service.getService({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
}, operationSecurity).then((res: GetServiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetServiceRequest](../../models/operations/getservicerequest.md)   | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `security`                                                                     | [operations.GetServiceSecurity](../../models/operations/getservicesecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetServiceResponse](../../models/operations/getserviceresponse.md)>**


## getServiceDetail

List detailed information on a specified service.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetServiceDetailResponse, GetServiceDetailSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: GetServiceDetailSecurity = {
  token: "",
};

sdk.service.getServiceDetail({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  version: 1,
}, operationSecurity).then((res: GetServiceDetailResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetServiceDetailRequest](../../models/operations/getservicedetailrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.GetServiceDetailSecurity](../../models/operations/getservicedetailsecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetServiceDetailResponse](../../models/operations/getservicedetailresponse.md)>**


## listServiceDomains

List the domains within a service.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListServiceDomainsResponse, ListServiceDomainsSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: ListServiceDomainsSecurity = {
  token: "",
};

sdk.service.listServiceDomains({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
}, operationSecurity).then((res: ListServiceDomainsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.ListServiceDomainsRequest](../../models/operations/listservicedomainsrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.ListServiceDomainsSecurity](../../models/operations/listservicedomainssecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ListServiceDomainsResponse](../../models/operations/listservicedomainsresponse.md)>**


## listServices

List services.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListServicesResponse, ListServicesSecurity } from "FastlyTestJS/dist/sdk/models/operations";
import { Direction } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();
const operationSecurity: ListServicesSecurity = {
  token: "",
};

sdk.service.listServices({
  direction: Direction.Ascend,
  page: 1,
  perPage: 20,
  sort: "created",
}, operationSecurity).then((res: ListServicesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.ListServicesRequest](../../models/operations/listservicesrequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.ListServicesSecurity](../../models/operations/listservicessecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.ListServicesResponse](../../models/operations/listservicesresponse.md)>**


## searchService

Get a specific service by name.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { SearchServiceResponse, SearchServiceSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: SearchServiceSecurity = {
  token: "",
};

sdk.service.searchService({
  name: "test-service",
}, operationSecurity).then((res: SearchServiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.SearchServiceRequest](../../models/operations/searchservicerequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.SearchServiceSecurity](../../models/operations/searchservicesecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.SearchServiceResponse](../../models/operations/searchserviceresponse.md)>**


## updateService

Update a service.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateServiceResponse, UpdateServiceSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: UpdateServiceSecurity = {
  token: "",
};

sdk.service.updateService({
  service: {
    comment: "provident",
    customerId: "x4xCwxxJxGCx123Rx5xTx",
    name: "test-service",
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
}, operationSecurity).then((res: UpdateServiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.UpdateServiceRequest](../../models/operations/updateservicerequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.UpdateServiceSecurity](../../models/operations/updateservicesecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdateServiceResponse](../../models/operations/updateserviceresponse.md)>**


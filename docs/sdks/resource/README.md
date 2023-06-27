# resource

## Overview

A resource link represents a link between a shared resource (such as an kv store or config store) and a service version.

<https://developer.fastly.com/reference/api/services/resource>
### Available Operations

* [createResource](#createresource) - Create a resource link
* [deleteResource](#deleteresource) - Delete a resource link
* [getResource](#getresource) - Display a resource link
* [listResources](#listresources) - List resource links
* [updateResource](#updateresource) - Update a resource link

## createResource

Create a link between a resource and a service version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateResourceResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { TypeResource } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.resource.createResource({
  resource: {
    name: "test-resource",
    resourceId: "3vjTN8v1O7nOAY7aNDGOL",
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: CreateResourceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.CreateResourceRequest](../../models/operations/createresourcerequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.CreateResourceSecurity](../../models/operations/createresourcesecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CreateResourceResponse](../../models/operations/createresourceresponse.md)>**


## deleteResource

Delete a link between a resource and a service version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteResourceResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.resource.deleteResource({
  id: "7Lsb7Y76rChV9hSrv3KgFl",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: DeleteResourceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.DeleteResourceRequest](../../models/operations/deleteresourcerequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.DeleteResourceSecurity](../../models/operations/deleteresourcesecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.DeleteResourceResponse](../../models/operations/deleteresourceresponse.md)>**


## getResource

Display a resource link by its identifier.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetResourceResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { TypeResource } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.resource.getResource({
  id: "7Lsb7Y76rChV9hSrv3KgFl",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: GetResourceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetResourceRequest](../../models/operations/getresourcerequest.md)   | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `security`                                                                       | [operations.GetResourceSecurity](../../models/operations/getresourcesecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetResourceResponse](../../models/operations/getresourceresponse.md)>**


## listResources

List links between resources and services

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListResourcesResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { TypeResource } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.resource.listResources({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: ListResourcesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.ListResourcesRequest](../../models/operations/listresourcesrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.ListResourcesSecurity](../../models/operations/listresourcessecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ListResourcesResponse](../../models/operations/listresourcesresponse.md)>**


## updateResource

Update a link between a resource and a service version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateResourceResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { TypeResource } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.resource.updateResource({
  id: "7Lsb7Y76rChV9hSrv3KgFl",
  resource: {
    name: "test-resource",
    resourceId: "3vjTN8v1O7nOAY7aNDGOL",
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: UpdateResourceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.UpdateResourceRequest](../../models/operations/updateresourcerequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.UpdateResourceSecurity](../../models/operations/updateresourcesecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.UpdateResourceResponse](../../models/operations/updateresourceresponse.md)>**

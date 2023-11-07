# Resource
(*.resource*)

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
import { Fastly } from "Fastly";
import { Resource } from "Fastly/dist/sdk/models/components";
import { CreateResourceRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const resource: Resource = {
  name: "test-resource",
  resourceId: "3vjTN8v1O7nOAY7aNDGOL",
};

  const res = await sdk.resource.createResource(serviceId, versionId, resource);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `resource`                                                   | [components.Resource](../../models/shared/resource.md)       | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.CreateResourceResponse](../../models/operations/createresourceresponse.md)>**


## deleteResource

Delete a link between a resource and a service version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteResourceRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const id: string = "7Lsb7Y76rChV9hSrv3KgFl";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.resource.deleteResource(id, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | An alphanumeric string identifying the resource link.        | 7Lsb7Y76rChV9hSrv3KgFl                                       |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteResourceResponse](../../models/operations/deleteresourceresponse.md)>**


## getResource

Display a resource link by its identifier.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetResourceRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const id: string = "7Lsb7Y76rChV9hSrv3KgFl";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.resource.getResource(id, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | An alphanumeric string identifying the resource link.        | 7Lsb7Y76rChV9hSrv3KgFl                                       |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetResourceResponse](../../models/operations/getresourceresponse.md)>**


## listResources

List links between resources and services

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListResourcesRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.resource.listResources(serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.ListResourcesResponse](../../models/operations/listresourcesresponse.md)>**


## updateResource

Update a link between a resource and a service version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { Resource } from "Fastly/dist/sdk/models/components";
import { UpdateResourceRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const id: string = "7Lsb7Y76rChV9hSrv3KgFl";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const resource: Resource = {
  name: "test-resource",
  resourceId: "3vjTN8v1O7nOAY7aNDGOL",
};

  const res = await sdk.resource.updateResource(id, serviceId, versionId, resource);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | An alphanumeric string identifying the resource link.        | 7Lsb7Y76rChV9hSrv3KgFl                                       |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `resource`                                                   | [components.Resource](../../models/shared/resource.md)       | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.UpdateResourceResponse](../../models/operations/updateresourceresponse.md)>**


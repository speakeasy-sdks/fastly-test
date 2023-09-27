# Header
(*header*)

## Overview

Header objects are used to add, modify, or delete headers from requests and responses. The header content can be simple strings or be derived from variables inside Varnish. Regular expressions can be used to customize the headers even further.

<https://developer.fastly.com/reference/api/vcl-services/header>
### Available Operations

* [createHeaderObject](#createheaderobject) - Create a Header object
* [deleteHeaderObject](#deleteheaderobject) - Delete a Header object
* [getHeaderObject](#getheaderobject) - Get a Header object
* [listHeaderObjects](#listheaderobjects) - List Header objects
* [updateHeaderObject](#updateheaderobject) - Update a Header object

## createHeaderObject

Creates a new Header object.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateHeaderObjectResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { HeaderAction, HeaderType } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.header.createHeaderObject({
  header2: {
    action: HeaderAction.Delete,
    cacheCondition: "null",
    dst: "accusantium",
    ignoreIfSet: 653201,
    name: "test-header",
    priority: 968962,
    regex: "mollitia",
    requestCondition: "null",
    responseCondition: "ad",
    src: "eum",
    substitution: "dolor",
    type: HeaderType.Response,
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: CreateHeaderObjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.CreateHeaderObjectRequest](../../models/operations/createheaderobjectrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.CreateHeaderObjectResponse](../../models/operations/createheaderobjectresponse.md)>**


## deleteHeaderObject

Deletes a Header object by name.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteHeaderObjectResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.header.deleteHeaderObject({
  headerName: "test-header",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: DeleteHeaderObjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.DeleteHeaderObjectRequest](../../models/operations/deleteheaderobjectrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.DeleteHeaderObjectResponse](../../models/operations/deleteheaderobjectresponse.md)>**


## getHeaderObject

Retrieves a Header object by name.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetHeaderObjectResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.header.getHeaderObject({
  headerName: "test-header",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: GetHeaderObjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetHeaderObjectRequest](../../models/operations/getheaderobjectrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetHeaderObjectResponse](../../models/operations/getheaderobjectresponse.md)>**


## listHeaderObjects

Retrieves all Header objects for a particular Version of a Service.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListHeaderObjectsResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.header.listHeaderObjects({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: ListHeaderObjectsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.ListHeaderObjectsRequest](../../models/operations/listheaderobjectsrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ListHeaderObjectsResponse](../../models/operations/listheaderobjectsresponse.md)>**


## updateHeaderObject

Modifies an existing Header object by name.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateHeaderObjectResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { HeaderAction, HeaderType } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.header.updateHeaderObject({
  header2: {
    action: HeaderAction.Set,
    cacheCondition: "null",
    dst: "nemo",
    ignoreIfSet: 97260,
    name: "test-header",
    priority: 435865,
    regex: "doloribus",
    requestCondition: "null",
    responseCondition: "debitis",
    src: "eius",
    substitution: "maxime",
    type: HeaderType.Cache,
  },
  headerName: "test-header",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: UpdateHeaderObjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.UpdateHeaderObjectRequest](../../models/operations/updateheaderobjectrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.UpdateHeaderObjectResponse](../../models/operations/updateheaderobjectresponse.md)>**


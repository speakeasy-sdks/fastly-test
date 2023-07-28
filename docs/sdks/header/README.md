# header

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
import { CreateHeaderObjectResponse, CreateHeaderObjectSecurity } from "FastlyTestJS/dist/sdk/models/operations";
import { HeaderAction, HeaderType } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();
const operationSecurity: CreateHeaderObjectSecurity = {
  token: "",
};

sdk.header.createHeaderObject({
  header2: {
    action: HeaderAction.Set,
    cacheCondition: "null",
    dst: "amet",
    ignoreIfSet: 758379,
    name: "test-header",
    priority: 881586,
    regex: "ad",
    requestCondition: "null",
    responseCondition: "saepe",
    src: "suscipit",
    substitution: "deserunt",
    type: HeaderType.Cache,
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: CreateHeaderObjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.CreateHeaderObjectRequest](../../models/operations/createheaderobjectrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.CreateHeaderObjectSecurity](../../models/operations/createheaderobjectsecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.CreateHeaderObjectResponse](../../models/operations/createheaderobjectresponse.md)>**


## deleteHeaderObject

Deletes a Header object by name.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteHeaderObjectResponse, DeleteHeaderObjectSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: DeleteHeaderObjectSecurity = {
  token: "",
};

sdk.header.deleteHeaderObject({
  headerName: "test-header",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: DeleteHeaderObjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.DeleteHeaderObjectRequest](../../models/operations/deleteheaderobjectrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.DeleteHeaderObjectSecurity](../../models/operations/deleteheaderobjectsecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.DeleteHeaderObjectResponse](../../models/operations/deleteheaderobjectresponse.md)>**


## getHeaderObject

Retrieves a Header object by name.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetHeaderObjectResponse, GetHeaderObjectSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: GetHeaderObjectSecurity = {
  token: "",
};

sdk.header.getHeaderObject({
  headerName: "test-header",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: GetHeaderObjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetHeaderObjectRequest](../../models/operations/getheaderobjectrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.GetHeaderObjectSecurity](../../models/operations/getheaderobjectsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetHeaderObjectResponse](../../models/operations/getheaderobjectresponse.md)>**


## listHeaderObjects

Retrieves all Header objects for a particular Version of a Service.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListHeaderObjectsResponse, ListHeaderObjectsSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: ListHeaderObjectsSecurity = {
  token: "",
};

sdk.header.listHeaderObjects({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: ListHeaderObjectsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.ListHeaderObjectsRequest](../../models/operations/listheaderobjectsrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.ListHeaderObjectsSecurity](../../models/operations/listheaderobjectssecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ListHeaderObjectsResponse](../../models/operations/listheaderobjectsresponse.md)>**


## updateHeaderObject

Modifies an existing Header object by name.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateHeaderObjectResponse, UpdateHeaderObjectSecurity } from "FastlyTestJS/dist/sdk/models/operations";
import { HeaderAction, HeaderType } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();
const operationSecurity: UpdateHeaderObjectSecurity = {
  token: "",
};

sdk.header.updateHeaderObject({
  header2: {
    action: HeaderAction.Append,
    cacheCondition: "null",
    dst: "repellendus",
    ignoreIfSet: 519711,
    name: "test-header",
    priority: 628982,
    regex: "alias",
    requestCondition: "null",
    responseCondition: "at",
    src: "quaerat",
    substitution: "tempora",
    type: HeaderType.Cache,
  },
  headerName: "test-header",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: UpdateHeaderObjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.UpdateHeaderObjectRequest](../../models/operations/updateheaderobjectrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.UpdateHeaderObjectSecurity](../../models/operations/updateheaderobjectsecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.UpdateHeaderObjectResponse](../../models/operations/updateheaderobjectresponse.md)>**


# snippet

## Overview

VCL Snippets are blocks of VCL logic inserted into your service's configuration that don't require custom VCL.

<https://developer.fastly.com/reference/api/vcl-services/snippet>
### Available Operations

* [createSnippet](#createsnippet) - Create a snippet
* [deleteSnippet](#deletesnippet) - Delete a snippet
* [getSnippet](#getsnippet) - Get a versioned snippet
* [getSnippetDynamic](#getsnippetdynamic) - Get a dynamic snippet
* [listSnippets](#listsnippets) - List snippets
* [updateSnippetDynamic](#updatesnippetdynamic) - Update a dynamic snippet

## createSnippet

Create a snippet for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateSnippetResponse, CreateSnippetSecurity } from "FastlyTestJS/dist/sdk/models/operations";
import { SnippetDynamic, SnippetType } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();
const operationSecurity: CreateSnippetSecurity = {
  token: "",
};

sdk.snippet.createSnippet({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  snippet2: {
    content: "provident",
    dynamic: SnippetDynamic.Zero,
    name: "test-snippet",
    priority: "10",
    type: SnippetType.Hit,
  },
  versionId: 1,
}, operationSecurity).then((res: CreateSnippetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.CreateSnippetRequest](../../models/operations/createsnippetrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.CreateSnippetSecurity](../../models/operations/createsnippetsecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CreateSnippetResponse](../../models/operations/createsnippetresponse.md)>**


## deleteSnippet

Delete a specific snippet for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteSnippetResponse, DeleteSnippetSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: DeleteSnippetSecurity = {
  token: "",
};

sdk.snippet.deleteSnippet({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  snippetName: "test-snippet",
  versionId: 1,
}, operationSecurity).then((res: DeleteSnippetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.DeleteSnippetRequest](../../models/operations/deletesnippetrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.DeleteSnippetSecurity](../../models/operations/deletesnippetsecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.DeleteSnippetResponse](../../models/operations/deletesnippetresponse.md)>**


## getSnippet

Get a single snippet for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetSnippetResponse, GetSnippetSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: GetSnippetSecurity = {
  token: "",
};

sdk.snippet.getSnippet({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  snippetName: "test-snippet",
  versionId: 1,
}, operationSecurity).then((res: GetSnippetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetSnippetRequest](../../models/operations/getsnippetrequest.md)   | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `security`                                                                     | [operations.GetSnippetSecurity](../../models/operations/getsnippetsecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetSnippetResponse](../../models/operations/getsnippetresponse.md)>**


## getSnippetDynamic

Get a single dynamic snippet for a particular service.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetSnippetDynamicResponse, GetSnippetDynamicSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: GetSnippetDynamicSecurity = {
  token: "",
};

sdk.snippet.getSnippetDynamic({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  snippetId: "62Yd1WfiCBPENLloXfXmlO",
}, operationSecurity).then((res: GetSnippetDynamicResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetSnippetDynamicRequest](../../models/operations/getsnippetdynamicrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.GetSnippetDynamicSecurity](../../models/operations/getsnippetdynamicsecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetSnippetDynamicResponse](../../models/operations/getsnippetdynamicresponse.md)>**


## listSnippets

List all snippets for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListSnippetsResponse, ListSnippetsSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: ListSnippetsSecurity = {
  token: "",
};

sdk.snippet.listSnippets({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: ListSnippetsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.ListSnippetsRequest](../../models/operations/listsnippetsrequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.ListSnippetsSecurity](../../models/operations/listsnippetssecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.ListSnippetsResponse](../../models/operations/listsnippetsresponse.md)>**


## updateSnippetDynamic

Update a dynamic snippet for a particular service.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateSnippetDynamicResponse, UpdateSnippetDynamicSecurity } from "FastlyTestJS/dist/sdk/models/operations";
import { SnippetDynamic, SnippetType } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();
const operationSecurity: UpdateSnippetDynamicSecurity = {
  token: "",
};

sdk.snippet.updateSnippetDynamic({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  snippet2: {
    content: "quasi",
    dynamic: SnippetDynamic.One,
    name: "test-snippet",
    priority: "10",
    type: SnippetType.Hit,
  },
  snippetId: "62Yd1WfiCBPENLloXfXmlO",
}, operationSecurity).then((res: UpdateSnippetDynamicResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.UpdateSnippetDynamicRequest](../../models/operations/updatesnippetdynamicrequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.UpdateSnippetDynamicSecurity](../../models/operations/updatesnippetdynamicsecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.UpdateSnippetDynamicResponse](../../models/operations/updatesnippetdynamicresponse.md)>**


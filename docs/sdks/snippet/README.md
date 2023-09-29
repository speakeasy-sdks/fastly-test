# Snippet
(*snippet*)

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
import { CreateSnippetResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { SnippetDynamic, SnippetType } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.snippet.createSnippet({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  snippet: {
    content: "architectures withdrawal Darmstadtium",
    dynamic: SnippetDynamic.One,
    name: "test-snippet",
    priority: "10",
    type: SnippetType.Recv,
  },
  versionId: 1,
}).then((res: CreateSnippetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.CreateSnippetRequest](../../models/operations/createsnippetrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.CreateSnippetResponse](../../models/operations/createsnippetresponse.md)>**


## deleteSnippet

Delete a specific snippet for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteSnippetResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.snippet.deleteSnippet({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  snippetName: "test-snippet",
  versionId: 1,
}).then((res: DeleteSnippetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.DeleteSnippetRequest](../../models/operations/deletesnippetrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.DeleteSnippetResponse](../../models/operations/deletesnippetresponse.md)>**


## getSnippet

Get a single snippet for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetSnippetResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.snippet.getSnippet({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  snippetName: "test-snippet",
  versionId: 1,
}).then((res: GetSnippetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetSnippetRequest](../../models/operations/getsnippetrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetSnippetResponse](../../models/operations/getsnippetresponse.md)>**


## getSnippetDynamic

Get a single dynamic snippet for a particular service.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetSnippetDynamicResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.snippet.getSnippetDynamic({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  snippetId: "62Yd1WfiCBPENLloXfXmlO",
}).then((res: GetSnippetDynamicResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetSnippetDynamicRequest](../../models/operations/getsnippetdynamicrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetSnippetDynamicResponse](../../models/operations/getsnippetdynamicresponse.md)>**


## listSnippets

List all snippets for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListSnippetsResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.snippet.listSnippets({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: ListSnippetsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.ListSnippetsRequest](../../models/operations/listsnippetsrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ListSnippetsResponse](../../models/operations/listsnippetsresponse.md)>**


## updateSnippetDynamic

Update a dynamic snippet for a particular service.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateSnippetDynamicResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { SnippetDynamic, SnippetType } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.snippet.updateSnippetDynamic({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  snippet: {
    content: "Shoes",
    dynamic: SnippetDynamic.One,
    name: "test-snippet",
    priority: "10",
    type: SnippetType.Log,
  },
  snippetId: "62Yd1WfiCBPENLloXfXmlO",
}).then((res: UpdateSnippetDynamicResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.UpdateSnippetDynamicRequest](../../models/operations/updatesnippetdynamicrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.UpdateSnippetDynamicResponse](../../models/operations/updatesnippetdynamicresponse.md)>**


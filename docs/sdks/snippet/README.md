# Snippet
(*.snippet*)

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
import { Fastly } from "Fastly";
import { Snippet, SnippetDynamic, SnippetType } from "Fastly/dist/sdk/models/components";
import { CreateSnippetRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const snippet: Snippet = {
  name: "test-snippet",
  priority: "10",
};

  const res = await sdk.snippet.createSnippet(serviceId, versionId, snippet);


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
| `snippet`                                                    | [components.Snippet](../../models/shared/snippet.md)         | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.CreateSnippetResponse](../../models/operations/createsnippetresponse.md)>**


## deleteSnippet

Delete a specific snippet for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteSnippetRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const snippetName: string = "test-snippet";
const versionId: number = 1;

  const res = await sdk.snippet.deleteSnippet(serviceId, snippetName, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `snippetName`                                                | *string*                                                     | :heavy_check_mark:                                           | The name for the snippet.                                    | test-snippet                                                 |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteSnippetResponse](../../models/operations/deletesnippetresponse.md)>**


## getSnippet

Get a single snippet for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetSnippetRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const snippetName: string = "test-snippet";
const versionId: number = 1;

  const res = await sdk.snippet.getSnippet(serviceId, snippetName, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `snippetName`                                                | *string*                                                     | :heavy_check_mark:                                           | The name for the snippet.                                    | test-snippet                                                 |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetSnippetResponse](../../models/operations/getsnippetresponse.md)>**


## getSnippetDynamic

Get a single dynamic snippet for a particular service.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetSnippetDynamicRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const snippetId: string = "62Yd1WfiCBPENLloXfXmlO";

  const res = await sdk.snippet.getSnippetDynamic(serviceId, snippetId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `snippetId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying a VCL Snippet.               | 62Yd1WfiCBPENLloXfXmlO                                       |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetSnippetDynamicResponse](../../models/operations/getsnippetdynamicresponse.md)>**


## listSnippets

List all snippets for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListSnippetsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.snippet.listSnippets(serviceId, versionId);


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

**Promise<[operations.ListSnippetsResponse](../../models/operations/listsnippetsresponse.md)>**


## updateSnippetDynamic

Update a dynamic snippet for a particular service.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { Snippet, SnippetDynamic, SnippetType } from "Fastly/dist/sdk/models/components";
import { UpdateSnippetDynamicRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const snippetId: string = "62Yd1WfiCBPENLloXfXmlO";
const snippet: Snippet = {
  name: "test-snippet",
  priority: "10",
};

  const res = await sdk.snippet.updateSnippetDynamic(serviceId, snippetId, snippet);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `snippetId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying a VCL Snippet.               | 62Yd1WfiCBPENLloXfXmlO                                       |
| `snippet`                                                    | [components.Snippet](../../models/shared/snippet.md)         | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.UpdateSnippetDynamicResponse](../../models/operations/updatesnippetdynamicresponse.md)>**


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
import { Fastly } from "Fastly";
import { HeaderAction, HeaderType } from "Fastly/dist/sdk/models/components";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.header.createHeaderObject({
    header: {
      cacheCondition: "string",
      name: "test-header",
      requestCondition: "string",
      responseCondition: "string",
    },
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.CreateHeaderObjectRequest](../../sdk/models/operations/createheaderobjectrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.CreateHeaderObjectResponse](../../sdk/models/operations/createheaderobjectresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## deleteHeaderObject

Deletes a Header object by name.

### Example Usage

```typescript
import { Fastly } from "Fastly";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.header.deleteHeaderObject({
    headerName: "test-header",
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.DeleteHeaderObjectRequest](../../sdk/models/operations/deleteheaderobjectrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.DeleteHeaderObjectResponse](../../sdk/models/operations/deleteheaderobjectresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getHeaderObject

Retrieves a Header object by name.

### Example Usage

```typescript
import { Fastly } from "Fastly";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.header.getHeaderObject({
    headerName: "test-header",
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetHeaderObjectRequest](../../sdk/models/operations/getheaderobjectrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetHeaderObjectResponse](../../sdk/models/operations/getheaderobjectresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listHeaderObjects

Retrieves all Header objects for a particular Version of a Service.

### Example Usage

```typescript
import { Fastly } from "Fastly";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.header.listHeaderObjects({
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.ListHeaderObjectsRequest](../../sdk/models/operations/listheaderobjectsrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ListHeaderObjectsResponse](../../sdk/models/operations/listheaderobjectsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateHeaderObject

Modifies an existing Header object by name.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { HeaderAction, HeaderType } from "Fastly/dist/sdk/models/components";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.header.updateHeaderObject({
    header: {
      cacheCondition: "string",
      name: "test-header",
      requestCondition: "string",
      responseCondition: "string",
    },
    headerName: "test-header",
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.UpdateHeaderObjectRequest](../../sdk/models/operations/updateheaderobjectrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.UpdateHeaderObjectResponse](../../sdk/models/operations/updateheaderobjectresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

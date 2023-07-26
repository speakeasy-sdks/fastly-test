# loggingElasticsearch

## Overview

Fastly will upload log messages periodically to the server in the format specified in the Elasticsearch object.

<https://developer.fastly.com/reference/api/logging/elasticsearch>
### Available Operations

* [createLogElasticsearch](#createlogelasticsearch) - Create an Elasticsearch log endpoint
* [deleteLogElasticsearch](#deletelogelasticsearch) - Delete an Elasticsearch log endpoint
* [getLogElasticsearch](#getlogelasticsearch) - Get an Elasticsearch log endpoint
* [listLogElasticsearch](#listlogelasticsearch) - List Elasticsearch log endpoints
* [updateLogElasticsearch](#updatelogelasticsearch) - Update an Elasticsearch log endpoint

## createLogElasticsearch

Create a Elasticsearch logging endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateLogElasticsearchResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { LoggingElasticsearchFormatVersion, LoggingElasticsearchPlacement } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingElasticsearch.createLogElasticsearch({
  loggingElasticsearch2: {
    format: "veniam",
    formatVersion: LoggingElasticsearchFormatVersion.One,
    index: "inventore",
    name: "test-log-endpoint",
    password: "magnam",
    pipeline: "ea",
    placement: LoggingElasticsearchPlacement.LessThanNilGreaterThan,
    requestMaxBytes: 232234,
    requestMaxEntries: 926213,
    responseCondition: "null",
    tlsCaCert: "aspernatur",
    tlsClientCert: "minima",
    tlsClientKey: "eaque",
    tlsHostname: "a",
    url: "libero",
    user: "aut",
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: CreateLogElasticsearchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.CreateLogElasticsearchRequest](../../models/operations/createlogelasticsearchrequest.md)   | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `security`                                                                                             | [operations.CreateLogElasticsearchSecurity](../../models/operations/createlogelasticsearchsecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.CreateLogElasticsearchResponse](../../models/operations/createlogelasticsearchresponse.md)>**


## deleteLogElasticsearch

Delete the Elasticsearch logging endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteLogElasticsearchResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.loggingElasticsearch.deleteLogElasticsearch({
  loggingElasticsearchName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: DeleteLogElasticsearchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.DeleteLogElasticsearchRequest](../../models/operations/deletelogelasticsearchrequest.md)   | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `security`                                                                                             | [operations.DeleteLogElasticsearchSecurity](../../models/operations/deletelogelasticsearchsecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.DeleteLogElasticsearchResponse](../../models/operations/deletelogelasticsearchresponse.md)>**


## getLogElasticsearch

Get the Elasticsearch logging endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetLogElasticsearchResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.loggingElasticsearch.getLogElasticsearch({
  loggingElasticsearchName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: GetLogElasticsearchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetLogElasticsearchRequest](../../models/operations/getlogelasticsearchrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.GetLogElasticsearchSecurity](../../models/operations/getlogelasticsearchsecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetLogElasticsearchResponse](../../models/operations/getlogelasticsearchresponse.md)>**


## listLogElasticsearch

List all of the Elasticsearch logging endpoints for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListLogElasticsearchResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.loggingElasticsearch.listLogElasticsearch({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: ListLogElasticsearchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.ListLogElasticsearchRequest](../../models/operations/listlogelasticsearchrequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.ListLogElasticsearchSecurity](../../models/operations/listlogelasticsearchsecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.ListLogElasticsearchResponse](../../models/operations/listlogelasticsearchresponse.md)>**


## updateLogElasticsearch

Update the Elasticsearch logging endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateLogElasticsearchResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { LoggingElasticsearchFormatVersion, LoggingElasticsearchPlacement } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingElasticsearch.updateLogElasticsearch({
  loggingElasticsearch2: {
    format: "aut",
    formatVersion: LoggingElasticsearchFormatVersion.Two,
    index: "impedit",
    name: "test-log-endpoint",
    password: "aliquam",
    pipeline: "fugit",
    placement: LoggingElasticsearchPlacement.LessThanNilGreaterThan,
    requestMaxBytes: 79522,
    requestMaxEntries: 250622,
    responseCondition: "null",
    tlsCaCert: "et",
    tlsClientCert: "dolorum",
    tlsClientKey: "laborum",
    tlsHostname: "placeat",
    url: "velit",
    user: "eum",
  },
  loggingElasticsearchName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: UpdateLogElasticsearchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.UpdateLogElasticsearchRequest](../../models/operations/updatelogelasticsearchrequest.md)   | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `security`                                                                                             | [operations.UpdateLogElasticsearchSecurity](../../models/operations/updatelogelasticsearchsecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.UpdateLogElasticsearchResponse](../../models/operations/updatelogelasticsearchresponse.md)>**


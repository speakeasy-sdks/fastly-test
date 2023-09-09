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
import { CreateLogElasticsearchResponse, CreateLogElasticsearchSecurity } from "FastlyTestJS/dist/sdk/models/operations";
import { LoggingElasticsearchFormatVersion, LoggingElasticsearchPlacement } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();
const operationSecurity: CreateLogElasticsearchSecurity = {
  token: "",
};

sdk.loggingElasticsearch.createLogElasticsearch({
  loggingElasticsearch2: {
    format: "similique",
    formatVersion: LoggingElasticsearchFormatVersion.One,
    index: "at",
    name: "test-log-endpoint",
    password: "quaerat",
    pipeline: "tempora",
    placement: LoggingElasticsearchPlacement.WafDebug,
    requestMaxBytes: 798047,
    requestMaxEntries: 885338,
    responseCondition: "null",
    tlsCaCert: "qui",
    tlsClientCert: "dolorum",
    tlsClientKey: "a",
    tlsHostname: "esse",
    url: "harum",
    user: "iusto",
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: CreateLogElasticsearchResponse) => {
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
import { DeleteLogElasticsearchResponse, DeleteLogElasticsearchSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: DeleteLogElasticsearchSecurity = {
  token: "",
};

sdk.loggingElasticsearch.deleteLogElasticsearch({
  loggingElasticsearchName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: DeleteLogElasticsearchResponse) => {
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
import { GetLogElasticsearchResponse, GetLogElasticsearchSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: GetLogElasticsearchSecurity = {
  token: "",
};

sdk.loggingElasticsearch.getLogElasticsearch({
  loggingElasticsearchName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: GetLogElasticsearchResponse) => {
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
import { ListLogElasticsearchResponse, ListLogElasticsearchSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: ListLogElasticsearchSecurity = {
  token: "",
};

sdk.loggingElasticsearch.listLogElasticsearch({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: ListLogElasticsearchResponse) => {
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
import { UpdateLogElasticsearchResponse, UpdateLogElasticsearchSecurity } from "FastlyTestJS/dist/sdk/models/operations";
import { LoggingElasticsearchFormatVersion, LoggingElasticsearchPlacement } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();
const operationSecurity: UpdateLogElasticsearchSecurity = {
  token: "",
};

sdk.loggingElasticsearch.updateLogElasticsearch({
  loggingElasticsearch2: {
    format: "ipsum",
    formatVersion: LoggingElasticsearchFormatVersion.Two,
    index: "tenetur",
    name: "test-log-endpoint",
    password: "amet",
    pipeline: "tempore",
    placement: LoggingElasticsearchPlacement.LessThanNilGreaterThan,
    requestMaxBytes: 253941,
    requestMaxEntries: 313692,
    responseCondition: "null",
    tlsCaCert: "dolorem",
    tlsClientCert: "sapiente",
    tlsClientKey: "totam",
    tlsHostname: "nihil",
    url: "sit",
    user: "expedita",
  },
  loggingElasticsearchName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: UpdateLogElasticsearchResponse) => {
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


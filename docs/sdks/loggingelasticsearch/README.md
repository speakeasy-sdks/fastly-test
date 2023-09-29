# LoggingElasticsearch
(*loggingElasticsearch*)

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

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingElasticsearch.createLogElasticsearch({
  loggingElasticsearch: {
    format: "Sedan",
    formatVersion: LoggingElasticsearchFormatVersion.Two,
    index: "Mouse",
    name: "test-log-endpoint",
    password: "L0LtOVDJ_cyv_Gf",
    pipeline: "leverage CSS",
    placement: LoggingElasticsearchPlacement.WafDebug,
    requestMaxBytes: 733399,
    requestMaxEntries: 237272,
    responseCondition: "null",
    tlsCaCert: "thistle purple",
    tlsClientCert: "superstructure",
    tlsClientKey: "Cayman Court Bicycle",
    tlsHostname: "mobile Croatian paradigms",
    url: "http://trained-dusk.info",
    user: "Raul_Ankunding",
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: CreateLogElasticsearchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.CreateLogElasticsearchRequest](../../models/operations/createlogelasticsearchrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.CreateLogElasticsearchResponse](../../models/operations/createlogelasticsearchresponse.md)>**


## deleteLogElasticsearch

Delete the Elasticsearch logging endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteLogElasticsearchResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingElasticsearch.deleteLogElasticsearch({
  loggingElasticsearchName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: DeleteLogElasticsearchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.DeleteLogElasticsearchRequest](../../models/operations/deletelogelasticsearchrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.DeleteLogElasticsearchResponse](../../models/operations/deletelogelasticsearchresponse.md)>**


## getLogElasticsearch

Get the Elasticsearch logging endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetLogElasticsearchResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingElasticsearch.getLogElasticsearch({
  loggingElasticsearchName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: GetLogElasticsearchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetLogElasticsearchRequest](../../models/operations/getlogelasticsearchrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetLogElasticsearchResponse](../../models/operations/getlogelasticsearchresponse.md)>**


## listLogElasticsearch

List all of the Elasticsearch logging endpoints for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListLogElasticsearchResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingElasticsearch.listLogElasticsearch({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: ListLogElasticsearchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.ListLogElasticsearchRequest](../../models/operations/listlogelasticsearchrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.ListLogElasticsearchResponse](../../models/operations/listlogelasticsearchresponse.md)>**


## updateLogElasticsearch

Update the Elasticsearch logging endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateLogElasticsearchResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { LoggingElasticsearchFormatVersion, LoggingElasticsearchPlacement } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingElasticsearch.updateLogElasticsearch({
  loggingElasticsearch: {
    format: "grenade yellow",
    formatVersion: LoggingElasticsearchFormatVersion.One,
    index: "HDD",
    name: "test-log-endpoint",
    password: "vvCrseYZg_P55Bi",
    pipeline: "Handmade",
    placement: LoggingElasticsearchPlacement.None,
    requestMaxBytes: 534662,
    requestMaxEntries: 978553,
    responseCondition: "null",
    tlsCaCert: "reciprocal PCI Wagon",
    tlsClientCert: "snare experiences",
    tlsClientKey: "Seychelles muffled Freeda",
    tlsHostname: "bypass",
    url: "https://well-worn-maker.com",
    user: "Jamil_Bauch53",
  },
  loggingElasticsearchName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: UpdateLogElasticsearchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.UpdateLogElasticsearchRequest](../../models/operations/updatelogelasticsearchrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.UpdateLogElasticsearchResponse](../../models/operations/updatelogelasticsearchresponse.md)>**


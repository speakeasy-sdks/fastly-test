# LoggingElasticsearch
(*.loggingElasticsearch*)

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
import { Fastly } from "Fastly";
import {
  LoggingElasticsearch,
  LoggingElasticsearchFormatVersion,
  LoggingElasticsearchPlacement,
} from "Fastly/dist/sdk/models/components";
import { CreateLogElasticsearchRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingElasticsearch: LoggingElasticsearch = {
  formatVersion: LoggingElasticsearchFormatVersion.Two,
  name: "test-log-endpoint",
  placement: LoggingElasticsearchPlacement.None,
  responseCondition: "null",
};

  const res = await sdk.loggingElasticsearch.createLogElasticsearch(serviceId, versionId, loggingElasticsearch);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `serviceId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | Alphanumeric string identifying the service.                                   | SU1Z0isxPaozGVKXdv0eY                                                          |
| `versionId`                                                                    | *number*                                                                       | :heavy_check_mark:                                                             | Integer identifying a service version.                                         | 1                                                                              |
| `loggingElasticsearch`                                                         | [components.LoggingElasticsearch](../../models/shared/loggingelasticsearch.md) | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |                                                                                |


### Response

**Promise<[operations.CreateLogElasticsearchResponse](../../models/operations/createlogelasticsearchresponse.md)>**


## deleteLogElasticsearch

Delete the Elasticsearch logging endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteLogElasticsearchRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingElasticsearchName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingElasticsearch.deleteLogElasticsearch(loggingElasticsearchName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingElasticsearchName`                                   | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteLogElasticsearchResponse](../../models/operations/deletelogelasticsearchresponse.md)>**


## getLogElasticsearch

Get the Elasticsearch logging endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetLogElasticsearchRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingElasticsearchName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingElasticsearch.getLogElasticsearch(loggingElasticsearchName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingElasticsearchName`                                   | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetLogElasticsearchResponse](../../models/operations/getlogelasticsearchresponse.md)>**


## listLogElasticsearch

List all of the Elasticsearch logging endpoints for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListLogElasticsearchRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingElasticsearch.listLogElasticsearch(serviceId, versionId);


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

**Promise<[operations.ListLogElasticsearchResponse](../../models/operations/listlogelasticsearchresponse.md)>**


## updateLogElasticsearch

Update the Elasticsearch logging endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  LoggingElasticsearch,
  LoggingElasticsearchFormatVersion,
  LoggingElasticsearchPlacement,
} from "Fastly/dist/sdk/models/components";
import { UpdateLogElasticsearchRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingElasticsearchName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingElasticsearch: LoggingElasticsearch = {
  formatVersion: LoggingElasticsearchFormatVersion.Two,
  name: "test-log-endpoint",
  placement: LoggingElasticsearchPlacement.WafDebug,
  responseCondition: "null",
};

  const res = await sdk.loggingElasticsearch.updateLogElasticsearch(loggingElasticsearchName, serviceId, versionId, loggingElasticsearch);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `loggingElasticsearchName`                                                     | *string*                                                                       | :heavy_check_mark:                                                             | The name for the real-time logging configuration.                              | test-log-endpoint                                                              |
| `serviceId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | Alphanumeric string identifying the service.                                   | SU1Z0isxPaozGVKXdv0eY                                                          |
| `versionId`                                                                    | *number*                                                                       | :heavy_check_mark:                                                             | Integer identifying a service version.                                         | 1                                                                              |
| `loggingElasticsearch`                                                         | [components.LoggingElasticsearch](../../models/shared/loggingelasticsearch.md) | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |                                                                                |


### Response

**Promise<[operations.UpdateLogElasticsearchResponse](../../models/operations/updatelogelasticsearchresponse.md)>**


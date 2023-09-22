# LoggingDatadog

## Overview

Fastly will upload log messages to Datadog in the format specified in the Datadog configuration object.

<https://developer.fastly.com/reference/api/logging/datadog>
### Available Operations

* [createLogDatadog](#createlogdatadog) - Create a Datadog log endpoint
* [deleteLogDatadog](#deletelogdatadog) - Delete a Datadog log endpoint
* [getLogDatadog](#getlogdatadog) - Get a Datadog log endpoint
* [listLogDatadog](#listlogdatadog) - List Datadog log endpoints
* [updateLogDatadog](#updatelogdatadog) - Update a Datadog log endpoint

## createLogDatadog

Create a Datadog logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateLogDatadogResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { LoggingDatadogFormatVersion, LoggingDatadogPlacement, LoggingDatadogRegion } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingDatadog.createLogDatadog({
  loggingDatadog3: {
    format: "voluptate",
    formatVersion: LoggingDatadogFormatVersion.Two,
    name: "test-log-endpoint",
    placement: LoggingDatadogPlacement.WafDebug,
    region: LoggingDatadogRegion.Eu,
    responseCondition: "null",
    token: "necessitatibus",
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: CreateLogDatadogResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.CreateLogDatadogRequest](../../models/operations/createlogdatadogrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CreateLogDatadogResponse](../../models/operations/createlogdatadogresponse.md)>**


## deleteLogDatadog

Delete the Datadog logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteLogDatadogResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingDatadog.deleteLogDatadog({
  loggingDatadogName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: DeleteLogDatadogResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.DeleteLogDatadogRequest](../../models/operations/deletelogdatadogrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DeleteLogDatadogResponse](../../models/operations/deletelogdatadogresponse.md)>**


## getLogDatadog

Get the details for a Datadog logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetLogDatadogResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingDatadog.getLogDatadog({
  loggingDatadogName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: GetLogDatadogResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetLogDatadogRequest](../../models/operations/getlogdatadogrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetLogDatadogResponse](../../models/operations/getlogdatadogresponse.md)>**


## listLogDatadog

List all of the Datadog logging objects for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListLogDatadogResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingDatadog.listLogDatadog({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: ListLogDatadogResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.ListLogDatadogRequest](../../models/operations/listlogdatadogrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ListLogDatadogResponse](../../models/operations/listlogdatadogresponse.md)>**


## updateLogDatadog

Update the Datadog logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateLogDatadogResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { LoggingDatadogFormatVersion, LoggingDatadogPlacement, LoggingDatadogRegion } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingDatadog.updateLogDatadog({
  loggingDatadog3: {
    format: "distinctio",
    formatVersion: LoggingDatadogFormatVersion.Two,
    name: "test-log-endpoint",
    placement: LoggingDatadogPlacement.WafDebug,
    region: LoggingDatadogRegion.Us,
    responseCondition: "null",
    token: "voluptate",
  },
  loggingDatadogName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: UpdateLogDatadogResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.UpdateLogDatadogRequest](../../models/operations/updatelogdatadogrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UpdateLogDatadogResponse](../../models/operations/updatelogdatadogresponse.md)>**


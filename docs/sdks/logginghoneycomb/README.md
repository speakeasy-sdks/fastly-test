# loggingHoneycomb

## Overview

Fastly will upload log messages to Honeycomb.io in the format specified in the Honeycomb object.

<https://developer.fastly.com/reference/api/logging/honeycomb>
### Available Operations

* [createLogHoneycomb](#createloghoneycomb) - Create a Honeycomb log endpoint
* [deleteLogHoneycomb](#deleteloghoneycomb) - Delete the Honeycomb log endpoint
* [getLogHoneycomb](#getloghoneycomb) - Get a Honeycomb log endpoint
* [listLogHoneycomb](#listloghoneycomb) - List Honeycomb log endpoints
* [updateLogHoneycomb](#updateloghoneycomb) - Update a Honeycomb log endpoint

## createLogHoneycomb

Create a Honeycomb logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateLogHoneycombResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { LoggingHoneycombFormatVersion, LoggingHoneycombPlacement } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingHoneycomb.createLogHoneycomb({
  loggingHoneycomb2: {
    dataset: "accusamus",
    format: "aliquam",
    formatVersion: LoggingHoneycombFormatVersion.One,
    name: "test-log-endpoint",
    placement: LoggingHoneycombPlacement.WafDebug,
    responseCondition: "null",
    token: "commodi",
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: CreateLogHoneycombResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.CreateLogHoneycombRequest](../../models/operations/createloghoneycombrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.CreateLogHoneycombSecurity](../../models/operations/createloghoneycombsecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.CreateLogHoneycombResponse](../../models/operations/createloghoneycombresponse.md)>**


## deleteLogHoneycomb

Delete the Honeycomb logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteLogHoneycombResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.loggingHoneycomb.deleteLogHoneycomb({
  loggingHoneycombName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: DeleteLogHoneycombResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.DeleteLogHoneycombRequest](../../models/operations/deleteloghoneycombrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.DeleteLogHoneycombSecurity](../../models/operations/deleteloghoneycombsecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.DeleteLogHoneycombResponse](../../models/operations/deleteloghoneycombresponse.md)>**


## getLogHoneycomb

Get the details of a Honeycomb logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetLogHoneycombResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { LoggingHoneycombFormatVersion, LoggingHoneycombPlacement } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingHoneycomb.getLogHoneycomb({
  loggingHoneycombName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: GetLogHoneycombResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetLogHoneycombRequest](../../models/operations/getloghoneycombrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.GetLogHoneycombSecurity](../../models/operations/getloghoneycombsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetLogHoneycombResponse](../../models/operations/getloghoneycombresponse.md)>**


## listLogHoneycomb

List all of the Honeycomb logging objects for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListLogHoneycombResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { LoggingHoneycombResponseFormatVersion, LoggingHoneycombResponsePlacement } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingHoneycomb.listLogHoneycomb({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: ListLogHoneycombResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.ListLogHoneycombRequest](../../models/operations/listloghoneycombrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.ListLogHoneycombSecurity](../../models/operations/listloghoneycombsecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ListLogHoneycombResponse](../../models/operations/listloghoneycombresponse.md)>**


## updateLogHoneycomb

Update a Honeycomb logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateLogHoneycombResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingHoneycombFormatVersion,
  LoggingHoneycombPlacement,
  LoggingHoneycombResponseFormatVersion,
  LoggingHoneycombResponsePlacement,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingHoneycomb.updateLogHoneycomb({
  loggingHoneycomb2: {
    dataset: "sapiente",
    format: "dolores",
    formatVersion: LoggingHoneycombFormatVersion.Two,
    name: "test-log-endpoint",
    placement: LoggingHoneycombPlacement.WafDebug,
    responseCondition: "null",
    token: "accusantium",
  },
  loggingHoneycombName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: UpdateLogHoneycombResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.UpdateLogHoneycombRequest](../../models/operations/updateloghoneycombrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.UpdateLogHoneycombSecurity](../../models/operations/updateloghoneycombsecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.UpdateLogHoneycombResponse](../../models/operations/updateloghoneycombresponse.md)>**


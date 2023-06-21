# loggingNewrelic

## Overview

Fastly will upload log messages to New Relic Logs in the format specified in the New Relic configuration object.

<https://developer.fastly.com/reference/api/logging/newrelic>
### Available Operations

* [createLogNewrelic](#createlognewrelic) - Create a New Relic log endpoint
* [deleteLogNewrelic](#deletelognewrelic) - Delete a New Relic log endpoint
* [getLogNewrelic](#getlognewrelic) - Get a New Relic log endpoint
* [listLogNewrelic](#listlognewrelic) - List New Relic log endpoints
* [updateLogNewrelic](#updatelognewrelic) - Update a New Relic log endpoint

## createLogNewrelic

Create a New Relic Logs logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateLogNewrelicResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingNewrelicFormatVersion,
  LoggingNewrelicPlacement,
  LoggingNewrelicRegion,
  LoggingNewrelicResponseFormatVersion,
  LoggingNewrelicResponsePlacement,
  LoggingNewrelicResponseRegion,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingNewrelic.createLogNewrelic({
  loggingNewrelic3: {
    format: "quae",
    formatVersion: LoggingNewrelicFormatVersion.Two,
    name: "test-log-endpoint",
    placement: LoggingNewrelicPlacement.WafDebug,
    region: LoggingNewrelicRegion.Us,
    responseCondition: "null",
    token: "eius",
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: CreateLogNewrelicResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.CreateLogNewrelicRequest](../../models/operations/createlognewrelicrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.CreateLogNewrelicSecurity](../../models/operations/createlognewrelicsecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.CreateLogNewrelicResponse](../../models/operations/createlognewrelicresponse.md)>**


## deleteLogNewrelic

Delete the New Relic Logs logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteLogNewrelicResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.loggingNewrelic.deleteLogNewrelic({
  loggingNewrelicName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: DeleteLogNewrelicResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.DeleteLogNewrelicRequest](../../models/operations/deletelognewrelicrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.DeleteLogNewrelicSecurity](../../models/operations/deletelognewrelicsecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.DeleteLogNewrelicResponse](../../models/operations/deletelognewrelicresponse.md)>**


## getLogNewrelic

Get the details of a New Relic Logs logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetLogNewrelicResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingNewrelicResponseFormatVersion,
  LoggingNewrelicResponsePlacement,
  LoggingNewrelicResponseRegion,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingNewrelic.getLogNewrelic({
  loggingNewrelicName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: GetLogNewrelicResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetLogNewrelicRequest](../../models/operations/getlognewrelicrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.GetLogNewrelicSecurity](../../models/operations/getlognewrelicsecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetLogNewrelicResponse](../../models/operations/getlognewrelicresponse.md)>**


## listLogNewrelic

List all of the New Relic Logs logging objects for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListLogNewrelicResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingNewrelicResponseFormatVersion,
  LoggingNewrelicResponsePlacement,
  LoggingNewrelicResponseRegion,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingNewrelic.listLogNewrelic({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: ListLogNewrelicResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.ListLogNewrelicRequest](../../models/operations/listlognewrelicrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.ListLogNewrelicSecurity](../../models/operations/listlognewrelicsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.ListLogNewrelicResponse](../../models/operations/listlognewrelicresponse.md)>**


## updateLogNewrelic

Update a New Relic Logs logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateLogNewrelicResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingNewrelicFormatVersion,
  LoggingNewrelicPlacement,
  LoggingNewrelicRegion,
  LoggingNewrelicResponseFormatVersion,
  LoggingNewrelicResponsePlacement,
  LoggingNewrelicResponseRegion,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingNewrelic.updateLogNewrelic({
  loggingNewrelic3: {
    format: "libero",
    formatVersion: LoggingNewrelicFormatVersion.Two,
    name: "test-log-endpoint",
    placement: LoggingNewrelicPlacement.LessThanNilGreaterThan,
    region: LoggingNewrelicRegion.Us,
    responseCondition: "null",
    token: "aliquam",
  },
  loggingNewrelicName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: UpdateLogNewrelicResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.UpdateLogNewrelicRequest](../../models/operations/updatelognewrelicrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.UpdateLogNewrelicSecurity](../../models/operations/updatelognewrelicsecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.UpdateLogNewrelicResponse](../../models/operations/updatelognewrelicresponse.md)>**


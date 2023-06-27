# loggingScalyr

## Overview

Fastly will stream log messages to the Scalyr account in the format specified in the Scalyr object.

<https://developer.fastly.com/reference/api/logging/scalyr>
### Available Operations

* [createLogScalyr](#createlogscalyr) - Create a Scalyr log endpoint
* [deleteLogScalyr](#deletelogscalyr) - Delete the Scalyr log endpoint
* [getLogScalyr](#getlogscalyr) - Get a Scalyr log endpoint
* [listLogScalyr](#listlogscalyr) - List Scalyr log endpoints
* [updateLogScalyr](#updatelogscalyr) - Update the Scalyr log endpoint

## createLogScalyr

Create a Scalyr for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateLogScalyrResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingScalyrFormatVersion,
  LoggingScalyrPlacement,
  LoggingScalyrRegion,
  LoggingScalyrResponseFormatVersion,
  LoggingScalyrResponsePlacement,
  LoggingScalyrResponseRegion,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingScalyr.createLogScalyr({
  loggingScalyr3: {
    format: "%h %l %u %t "%r" %&gt;s %b",
    formatVersion: LoggingScalyrFormatVersion.One,
    name: "test-log-endpoint",
    placement: LoggingScalyrPlacement.None,
    projectId: "consequuntur",
    region: LoggingScalyrRegion.Eu,
    responseCondition: "null",
    token: "officia",
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: CreateLogScalyrResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.CreateLogScalyrRequest](../../models/operations/createlogscalyrrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.CreateLogScalyrSecurity](../../models/operations/createlogscalyrsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CreateLogScalyrResponse](../../models/operations/createlogscalyrresponse.md)>**


## deleteLogScalyr

Delete the Scalyr for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteLogScalyrResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.loggingScalyr.deleteLogScalyr({
  loggingScalyrName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: DeleteLogScalyrResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.DeleteLogScalyrRequest](../../models/operations/deletelogscalyrrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.DeleteLogScalyrSecurity](../../models/operations/deletelogscalyrsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DeleteLogScalyrResponse](../../models/operations/deletelogscalyrresponse.md)>**


## getLogScalyr

Get the Scalyr for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetLogScalyrResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingScalyrResponseFormatVersion,
  LoggingScalyrResponsePlacement,
  LoggingScalyrResponseRegion,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingScalyr.getLogScalyr({
  loggingScalyrName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: GetLogScalyrResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetLogScalyrRequest](../../models/operations/getlogscalyrrequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.GetLogScalyrSecurity](../../models/operations/getlogscalyrsecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetLogScalyrResponse](../../models/operations/getlogscalyrresponse.md)>**


## listLogScalyr

List all of the Scalyrs for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListLogScalyrResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingScalyrResponseFormatVersion,
  LoggingScalyrResponsePlacement,
  LoggingScalyrResponseRegion,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingScalyr.listLogScalyr({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: ListLogScalyrResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.ListLogScalyrRequest](../../models/operations/listlogscalyrrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.ListLogScalyrSecurity](../../models/operations/listlogscalyrsecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ListLogScalyrResponse](../../models/operations/listlogscalyrresponse.md)>**


## updateLogScalyr

Update the Scalyr for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateLogScalyrResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingScalyrFormatVersion,
  LoggingScalyrPlacement,
  LoggingScalyrRegion,
  LoggingScalyrResponseFormatVersion,
  LoggingScalyrResponsePlacement,
  LoggingScalyrResponseRegion,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingScalyr.updateLogScalyr({
  loggingScalyr3: {
    format: "%h %l %u %t "%r" %&gt;s %b",
    formatVersion: LoggingScalyrFormatVersion.Two,
    name: "test-log-endpoint",
    placement: LoggingScalyrPlacement.WafDebug,
    projectId: "officia",
    region: LoggingScalyrRegion.Eu,
    responseCondition: "null",
    token: "nemo",
  },
  loggingScalyrName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: UpdateLogScalyrResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.UpdateLogScalyrRequest](../../models/operations/updatelogscalyrrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.UpdateLogScalyrSecurity](../../models/operations/updatelogscalyrsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UpdateLogScalyrResponse](../../models/operations/updatelogscalyrresponse.md)>**

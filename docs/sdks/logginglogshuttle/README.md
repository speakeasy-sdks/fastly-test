# loggingLogshuttle

## Overview

Fastly will upload log messages to the Log Shuttle bucket in the format specified in the logshuttle object.

<https://developer.fastly.com/reference/api/logging/logshuttle>
### Available Operations

* [createLogLogshuttle](#createloglogshuttle) - Create a Log Shuttle log endpoint
* [deleteLogLogshuttle](#deleteloglogshuttle) - Delete a Log Shuttle log endpoint
* [getLogLogshuttle](#getloglogshuttle) - Get a Log Shuttle log endpoint
* [listLogLogshuttle](#listloglogshuttle) - List Log Shuttle log endpoints
* [updateLogLogshuttle](#updateloglogshuttle) - Update a Log Shuttle log endpoint

## createLogLogshuttle

Create a Log Shuttle logging endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateLogLogshuttleResponse, CreateLogLogshuttleSecurity } from "FastlyTestJS/dist/sdk/models/operations";
import { LoggingLogshuttleFormatVersion, LoggingLogshuttlePlacement } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();
const operationSecurity: CreateLogLogshuttleSecurity = {
  token: "",
};

sdk.loggingLogshuttle.createLogLogshuttle({
  loggingLogshuttle2: {
    format: "%h %l %u %t "%r" %&gt;s %b",
    formatVersion: LoggingLogshuttleFormatVersion.Two,
    name: "test-log-endpoint",
    placement: LoggingLogshuttlePlacement.None,
    responseCondition: "null",
    token: "consequuntur",
    url: "quasi",
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: CreateLogLogshuttleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.CreateLogLogshuttleRequest](../../models/operations/createloglogshuttlerequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.CreateLogLogshuttleSecurity](../../models/operations/createloglogshuttlesecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.CreateLogLogshuttleResponse](../../models/operations/createloglogshuttleresponse.md)>**


## deleteLogLogshuttle

Delete the Log Shuttle logging endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteLogLogshuttleResponse, DeleteLogLogshuttleSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: DeleteLogLogshuttleSecurity = {
  token: "",
};

sdk.loggingLogshuttle.deleteLogLogshuttle({
  loggingLogshuttleName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: DeleteLogLogshuttleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.DeleteLogLogshuttleRequest](../../models/operations/deleteloglogshuttlerequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.DeleteLogLogshuttleSecurity](../../models/operations/deleteloglogshuttlesecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.DeleteLogLogshuttleResponse](../../models/operations/deleteloglogshuttleresponse.md)>**


## getLogLogshuttle

Get the Log Shuttle logging endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetLogLogshuttleResponse, GetLogLogshuttleSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: GetLogLogshuttleSecurity = {
  token: "",
};

sdk.loggingLogshuttle.getLogLogshuttle({
  loggingLogshuttleName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: GetLogLogshuttleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetLogLogshuttleRequest](../../models/operations/getloglogshuttlerequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.GetLogLogshuttleSecurity](../../models/operations/getloglogshuttlesecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetLogLogshuttleResponse](../../models/operations/getloglogshuttleresponse.md)>**


## listLogLogshuttle

List all of the Log Shuttle logging endpoints for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListLogLogshuttleResponse, ListLogLogshuttleSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: ListLogLogshuttleSecurity = {
  token: "",
};

sdk.loggingLogshuttle.listLogLogshuttle({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: ListLogLogshuttleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.ListLogLogshuttleRequest](../../models/operations/listloglogshuttlerequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.ListLogLogshuttleSecurity](../../models/operations/listloglogshuttlesecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ListLogLogshuttleResponse](../../models/operations/listloglogshuttleresponse.md)>**


## updateLogLogshuttle

Update the Log Shuttle logging endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateLogLogshuttleResponse, UpdateLogLogshuttleSecurity } from "FastlyTestJS/dist/sdk/models/operations";
import { LoggingLogshuttleFormatVersion, LoggingLogshuttlePlacement } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();
const operationSecurity: UpdateLogLogshuttleSecurity = {
  token: "",
};

sdk.loggingLogshuttle.updateLogLogshuttle({
  loggingLogshuttle2: {
    format: "%h %l %u %t "%r" %&gt;s %b",
    formatVersion: LoggingLogshuttleFormatVersion.Two,
    name: "test-log-endpoint",
    placement: LoggingLogshuttlePlacement.WafDebug,
    responseCondition: "null",
    token: "aliquid",
    url: "tenetur",
  },
  loggingLogshuttleName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: UpdateLogLogshuttleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.UpdateLogLogshuttleRequest](../../models/operations/updateloglogshuttlerequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.UpdateLogLogshuttleSecurity](../../models/operations/updateloglogshuttlesecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.UpdateLogLogshuttleResponse](../../models/operations/updateloglogshuttleresponse.md)>**


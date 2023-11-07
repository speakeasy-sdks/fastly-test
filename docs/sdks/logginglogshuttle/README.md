# LoggingLogshuttle
(*.loggingLogshuttle*)

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
import { Fastly } from "Fastly";
import { LoggingLogshuttle, LoggingLogshuttleFormatVersion, LoggingLogshuttlePlacement } from "Fastly/dist/sdk/models/components";
import { CreateLogLogshuttleRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingLogshuttle: LoggingLogshuttle = {
  format: "%h %l %u %t \"%r\" %&gt;s %b",
  formatVersion: LoggingLogshuttleFormatVersion.Two,
  name: "test-log-endpoint",
  placement: LoggingLogshuttlePlacement.None,
  responseCondition: "null",
};

  const res = await sdk.loggingLogshuttle.createLogLogshuttle(serviceId, versionId, loggingLogshuttle);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `serviceId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | Alphanumeric string identifying the service.                             | SU1Z0isxPaozGVKXdv0eY                                                    |
| `versionId`                                                              | *number*                                                                 | :heavy_check_mark:                                                       | Integer identifying a service version.                                   | 1                                                                        |
| `loggingLogshuttle`                                                      | [components.LoggingLogshuttle](../../models/shared/logginglogshuttle.md) | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |                                                                          |


### Response

**Promise<[operations.CreateLogLogshuttleResponse](../../models/operations/createloglogshuttleresponse.md)>**


## deleteLogLogshuttle

Delete the Log Shuttle logging endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteLogLogshuttleRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingLogshuttleName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingLogshuttle.deleteLogLogshuttle(loggingLogshuttleName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingLogshuttleName`                                      | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteLogLogshuttleResponse](../../models/operations/deleteloglogshuttleresponse.md)>**


## getLogLogshuttle

Get the Log Shuttle logging endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetLogLogshuttleRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingLogshuttleName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingLogshuttle.getLogLogshuttle(loggingLogshuttleName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingLogshuttleName`                                      | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetLogLogshuttleResponse](../../models/operations/getloglogshuttleresponse.md)>**


## listLogLogshuttle

List all of the Log Shuttle logging endpoints for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListLogLogshuttleRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingLogshuttle.listLogLogshuttle(serviceId, versionId);


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

**Promise<[operations.ListLogLogshuttleResponse](../../models/operations/listloglogshuttleresponse.md)>**


## updateLogLogshuttle

Update the Log Shuttle logging endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { LoggingLogshuttle, LoggingLogshuttleFormatVersion, LoggingLogshuttlePlacement } from "Fastly/dist/sdk/models/components";
import { UpdateLogLogshuttleRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingLogshuttleName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingLogshuttle: LoggingLogshuttle = {
  format: "%h %l %u %t \"%r\" %&gt;s %b",
  formatVersion: LoggingLogshuttleFormatVersion.Two,
  name: "test-log-endpoint",
  placement: LoggingLogshuttlePlacement.None,
  responseCondition: "null",
};

  const res = await sdk.loggingLogshuttle.updateLogLogshuttle(loggingLogshuttleName, serviceId, versionId, loggingLogshuttle);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `loggingLogshuttleName`                                                  | *string*                                                                 | :heavy_check_mark:                                                       | The name for the real-time logging configuration.                        | test-log-endpoint                                                        |
| `serviceId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | Alphanumeric string identifying the service.                             | SU1Z0isxPaozGVKXdv0eY                                                    |
| `versionId`                                                              | *number*                                                                 | :heavy_check_mark:                                                       | Integer identifying a service version.                                   | 1                                                                        |
| `loggingLogshuttle`                                                      | [components.LoggingLogshuttle](../../models/shared/logginglogshuttle.md) | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |                                                                          |


### Response

**Promise<[operations.UpdateLogLogshuttleResponse](../../models/operations/updateloglogshuttleresponse.md)>**


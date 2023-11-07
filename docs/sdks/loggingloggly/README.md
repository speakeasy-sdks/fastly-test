# LoggingLoggly
(*.loggingLoggly*)

## Overview

Fastly will stream log messages to the Loggly account in the format specified in the Loggly logging object.

<https://developer.fastly.com/reference/api/logging/loggly>
### Available Operations

* [createLogLoggly](#createlogloggly) - Create a Loggly log endpoint
* [deleteLogLoggly](#deletelogloggly) - Delete a Loggly log endpoint
* [getLogLoggly](#getlogloggly) - Get a Loggly log endpoint
* [listLogLoggly](#listlogloggly) - List Loggly log endpoints
* [updateLogLoggly](#updatelogloggly) - Update a Loggly log endpoint

## createLogLoggly

Create a Loggly logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { LoggingLoggly, LoggingLogglyFormatVersion, LoggingLogglyPlacement } from "Fastly/dist/sdk/models/components";
import { CreateLogLogglyRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingLoggly: LoggingLoggly = {
  format: "%h %l %u %t \"%r\" %&gt;s %b",
  formatVersion: LoggingLogglyFormatVersion.Two,
  name: "test-log-endpoint",
  placement: LoggingLogglyPlacement.None,
  responseCondition: "null",
};

  const res = await sdk.loggingLoggly.createLogLoggly(serviceId, versionId, loggingLoggly);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `serviceId`                                                      | *string*                                                         | :heavy_check_mark:                                               | Alphanumeric string identifying the service.                     | SU1Z0isxPaozGVKXdv0eY                                            |
| `versionId`                                                      | *number*                                                         | :heavy_check_mark:                                               | Integer identifying a service version.                           | 1                                                                |
| `loggingLoggly`                                                  | [components.LoggingLoggly](../../models/shared/loggingloggly.md) | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |                                                                  |


### Response

**Promise<[operations.CreateLogLogglyResponse](../../models/operations/createloglogglyresponse.md)>**


## deleteLogLoggly

Delete the Loggly logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteLogLogglyRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingLogglyName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingLoggly.deleteLogLoggly(loggingLogglyName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingLogglyName`                                          | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteLogLogglyResponse](../../models/operations/deleteloglogglyresponse.md)>**


## getLogLoggly

Get the Loggly logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetLogLogglyRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingLogglyName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingLoggly.getLogLoggly(loggingLogglyName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingLogglyName`                                          | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetLogLogglyResponse](../../models/operations/getloglogglyresponse.md)>**


## listLogLoggly

List all Loggly logging objects for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListLogLogglyRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingLoggly.listLogLoggly(serviceId, versionId);


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

**Promise<[operations.ListLogLogglyResponse](../../models/operations/listloglogglyresponse.md)>**


## updateLogLoggly

Update the Loggly logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { LoggingLoggly, LoggingLogglyFormatVersion, LoggingLogglyPlacement } from "Fastly/dist/sdk/models/components";
import { UpdateLogLogglyRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingLogglyName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingLoggly: LoggingLoggly = {
  format: "%h %l %u %t \"%r\" %&gt;s %b",
  formatVersion: LoggingLogglyFormatVersion.Two,
  name: "test-log-endpoint",
  placement: LoggingLogglyPlacement.WafDebug,
  responseCondition: "null",
};

  const res = await sdk.loggingLoggly.updateLogLoggly(loggingLogglyName, serviceId, versionId, loggingLoggly);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `loggingLogglyName`                                              | *string*                                                         | :heavy_check_mark:                                               | The name for the real-time logging configuration.                | test-log-endpoint                                                |
| `serviceId`                                                      | *string*                                                         | :heavy_check_mark:                                               | Alphanumeric string identifying the service.                     | SU1Z0isxPaozGVKXdv0eY                                            |
| `versionId`                                                      | *number*                                                         | :heavy_check_mark:                                               | Integer identifying a service version.                           | 1                                                                |
| `loggingLoggly`                                                  | [components.LoggingLoggly](../../models/shared/loggingloggly.md) | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |                                                                  |


### Response

**Promise<[operations.UpdateLogLogglyResponse](../../models/operations/updateloglogglyresponse.md)>**


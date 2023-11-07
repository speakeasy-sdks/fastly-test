# LoggingScalyr
(*.loggingScalyr*)

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
import { Fastly } from "Fastly";
import {
  LoggingScalyr,
  LoggingScalyrFormatVersion,
  LoggingScalyrPlacement,
  LoggingScalyrRegion,
} from "Fastly/dist/sdk/models/components";
import { CreateLogScalyrRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingScalyr: LoggingScalyr = {
  format: "%h %l %u %t \"%r\" %&gt;s %b",
  formatVersion: LoggingScalyrFormatVersion.Two,
  name: "test-log-endpoint",
  placement: LoggingScalyrPlacement.None,
  responseCondition: "null",
};

  const res = await sdk.loggingScalyr.createLogScalyr(serviceId, versionId, loggingScalyr);


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
| `loggingScalyr`                                                  | [components.LoggingScalyr](../../models/shared/loggingscalyr.md) | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |                                                                  |


### Response

**Promise<[operations.CreateLogScalyrResponse](../../models/operations/createlogscalyrresponse.md)>**


## deleteLogScalyr

Delete the Scalyr for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteLogScalyrRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingScalyrName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingScalyr.deleteLogScalyr(loggingScalyrName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingScalyrName`                                          | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteLogScalyrResponse](../../models/operations/deletelogscalyrresponse.md)>**


## getLogScalyr

Get the Scalyr for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetLogScalyrRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingScalyrName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingScalyr.getLogScalyr(loggingScalyrName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingScalyrName`                                          | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetLogScalyrResponse](../../models/operations/getlogscalyrresponse.md)>**


## listLogScalyr

List all of the Scalyrs for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListLogScalyrRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingScalyr.listLogScalyr(serviceId, versionId);


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

**Promise<[operations.ListLogScalyrResponse](../../models/operations/listlogscalyrresponse.md)>**


## updateLogScalyr

Update the Scalyr for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  LoggingScalyr,
  LoggingScalyrFormatVersion,
  LoggingScalyrPlacement,
  LoggingScalyrRegion,
} from "Fastly/dist/sdk/models/components";
import { UpdateLogScalyrRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingScalyrName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingScalyr: LoggingScalyr = {
  format: "%h %l %u %t \"%r\" %&gt;s %b",
  formatVersion: LoggingScalyrFormatVersion.Two,
  name: "test-log-endpoint",
  placement: LoggingScalyrPlacement.LessThanNilGreaterThan,
  responseCondition: "null",
};

  const res = await sdk.loggingScalyr.updateLogScalyr(loggingScalyrName, serviceId, versionId, loggingScalyr);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `loggingScalyrName`                                              | *string*                                                         | :heavy_check_mark:                                               | The name for the real-time logging configuration.                | test-log-endpoint                                                |
| `serviceId`                                                      | *string*                                                         | :heavy_check_mark:                                               | Alphanumeric string identifying the service.                     | SU1Z0isxPaozGVKXdv0eY                                            |
| `versionId`                                                      | *number*                                                         | :heavy_check_mark:                                               | Integer identifying a service version.                           | 1                                                                |
| `loggingScalyr`                                                  | [components.LoggingScalyr](../../models/shared/loggingscalyr.md) | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |                                                                  |


### Response

**Promise<[operations.UpdateLogScalyrResponse](../../models/operations/updatelogscalyrresponse.md)>**


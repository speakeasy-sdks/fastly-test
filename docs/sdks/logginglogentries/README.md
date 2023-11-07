# LoggingLogentries
(*.loggingLogentries*)

## Overview

The Logentries integration has been discontinued.  No new Logentries endpoints can be created.

<https://developer.fastly.com/reference/api/logging/logentries>
### Available Operations

* [~~createLogLogentries~~](#createloglogentries) - Create a Logentries log endpoint :warning: **Deprecated**
* [~~deleteLogLogentries~~](#deleteloglogentries) - Delete a Logentries log endpoint :warning: **Deprecated**
* [~~getLogLogentries~~](#getloglogentries) - Get a Logentries log endpoint :warning: **Deprecated**
* [~~listLogLogentries~~](#listloglogentries) - List Logentries log endpoints :warning: **Deprecated**
* [~~updateLogLogentries~~](#updateloglogentries) - Update a Logentries log endpoint :warning: **Deprecated**

## ~~createLogLogentries~~

Create a Logentry for a particular service and version.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  LoggingLogentries,
  LoggingLogentriesFormatVersion,
  LoggingLogentriesPlacement,
  LoggingLogentriesRegion,
  LoggingUseTls,
} from "Fastly/dist/sdk/models/components";
import { CreateLogLogentriesRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingLogentries: LoggingLogentries = {
  format: "%h %l %u %t \"%r\" %&gt;s %b",
  formatVersion: LoggingLogentriesFormatVersion.Two,
  name: "test-log-endpoint",
  placement: LoggingLogentriesPlacement.LessThanNilGreaterThan,
  responseCondition: "null",
};

  const res = await sdk.loggingLogentries.createLogLogentries(serviceId, versionId, loggingLogentries);


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
| `loggingLogentries`                                                      | [components.LoggingLogentries](../../models/shared/logginglogentries.md) | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |                                                                          |


### Response

**Promise<[operations.CreateLogLogentriesResponse](../../models/operations/createloglogentriesresponse.md)>**


## ~~deleteLogLogentries~~

Delete the Logentry for a particular service and version.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteLogLogentriesRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingLogentriesName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingLogentries.deleteLogLogentries(loggingLogentriesName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingLogentriesName`                                      | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteLogLogentriesResponse](../../models/operations/deleteloglogentriesresponse.md)>**


## ~~getLogLogentries~~

Get the Logentry for a particular service and version.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetLogLogentriesRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingLogentriesName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingLogentries.getLogLogentries(loggingLogentriesName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingLogentriesName`                                      | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetLogLogentriesResponse](../../models/operations/getloglogentriesresponse.md)>**


## ~~listLogLogentries~~

List all of the Logentries for a particular service and version.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListLogLogentriesRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingLogentries.listLogLogentries(serviceId, versionId);


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

**Promise<[operations.ListLogLogentriesResponse](../../models/operations/listloglogentriesresponse.md)>**


## ~~updateLogLogentries~~

Update the Logentry for a particular service and version.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  LoggingLogentries,
  LoggingLogentriesFormatVersion,
  LoggingLogentriesPlacement,
  LoggingLogentriesRegion,
  LoggingUseTls,
} from "Fastly/dist/sdk/models/components";
import { UpdateLogLogentriesRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingLogentriesName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingLogentries: LoggingLogentries = {
  format: "%h %l %u %t \"%r\" %&gt;s %b",
  formatVersion: LoggingLogentriesFormatVersion.Two,
  name: "test-log-endpoint",
  placement: LoggingLogentriesPlacement.LessThanNilGreaterThan,
  responseCondition: "null",
};

  const res = await sdk.loggingLogentries.updateLogLogentries(loggingLogentriesName, serviceId, versionId, loggingLogentries);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `loggingLogentriesName`                                                  | *string*                                                                 | :heavy_check_mark:                                                       | The name for the real-time logging configuration.                        | test-log-endpoint                                                        |
| `serviceId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | Alphanumeric string identifying the service.                             | SU1Z0isxPaozGVKXdv0eY                                                    |
| `versionId`                                                              | *number*                                                                 | :heavy_check_mark:                                                       | Integer identifying a service version.                                   | 1                                                                        |
| `loggingLogentries`                                                      | [components.LoggingLogentries](../../models/shared/logginglogentries.md) | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |                                                                          |


### Response

**Promise<[operations.UpdateLogLogentriesResponse](../../models/operations/updateloglogentriesresponse.md)>**


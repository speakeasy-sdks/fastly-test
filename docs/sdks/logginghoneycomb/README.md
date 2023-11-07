# LoggingHoneycomb
(*.loggingHoneycomb*)

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
import { Fastly } from "Fastly";
import { LoggingHoneycomb, LoggingHoneycombFormatVersion, LoggingHoneycombPlacement } from "Fastly/dist/sdk/models/components";
import { CreateLogHoneycombRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingHoneycomb: LoggingHoneycomb = {
  formatVersion: LoggingHoneycombFormatVersion.Two,
  name: "test-log-endpoint",
  placement: LoggingHoneycombPlacement.WafDebug,
  responseCondition: "null",
};

  const res = await sdk.loggingHoneycomb.createLogHoneycomb(serviceId, versionId, loggingHoneycomb);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `serviceId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | Alphanumeric string identifying the service.                           | SU1Z0isxPaozGVKXdv0eY                                                  |
| `versionId`                                                            | *number*                                                               | :heavy_check_mark:                                                     | Integer identifying a service version.                                 | 1                                                                      |
| `loggingHoneycomb`                                                     | [components.LoggingHoneycomb](../../models/shared/logginghoneycomb.md) | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |                                                                        |


### Response

**Promise<[operations.CreateLogHoneycombResponse](../../models/operations/createloghoneycombresponse.md)>**


## deleteLogHoneycomb

Delete the Honeycomb logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteLogHoneycombRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingHoneycombName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingHoneycomb.deleteLogHoneycomb(loggingHoneycombName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingHoneycombName`                                       | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteLogHoneycombResponse](../../models/operations/deleteloghoneycombresponse.md)>**


## getLogHoneycomb

Get the details of a Honeycomb logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetLogHoneycombRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingHoneycombName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingHoneycomb.getLogHoneycomb(loggingHoneycombName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingHoneycombName`                                       | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetLogHoneycombResponse](../../models/operations/getloghoneycombresponse.md)>**


## listLogHoneycomb

List all of the Honeycomb logging objects for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListLogHoneycombRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingHoneycomb.listLogHoneycomb(serviceId, versionId);


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

**Promise<[operations.ListLogHoneycombResponse](../../models/operations/listloghoneycombresponse.md)>**


## updateLogHoneycomb

Update a Honeycomb logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { LoggingHoneycomb, LoggingHoneycombFormatVersion, LoggingHoneycombPlacement } from "Fastly/dist/sdk/models/components";
import { UpdateLogHoneycombRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingHoneycombName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingHoneycomb: LoggingHoneycomb = {
  formatVersion: LoggingHoneycombFormatVersion.Two,
  name: "test-log-endpoint",
  placement: LoggingHoneycombPlacement.None,
  responseCondition: "null",
};

  const res = await sdk.loggingHoneycomb.updateLogHoneycomb(loggingHoneycombName, serviceId, versionId, loggingHoneycomb);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `loggingHoneycombName`                                                 | *string*                                                               | :heavy_check_mark:                                                     | The name for the real-time logging configuration.                      | test-log-endpoint                                                      |
| `serviceId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | Alphanumeric string identifying the service.                           | SU1Z0isxPaozGVKXdv0eY                                                  |
| `versionId`                                                            | *number*                                                               | :heavy_check_mark:                                                     | Integer identifying a service version.                                 | 1                                                                      |
| `loggingHoneycomb`                                                     | [components.LoggingHoneycomb](../../models/shared/logginghoneycomb.md) | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |                                                                        |


### Response

**Promise<[operations.UpdateLogHoneycombResponse](../../models/operations/updateloghoneycombresponse.md)>**


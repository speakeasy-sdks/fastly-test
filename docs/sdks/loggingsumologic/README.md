# LoggingSumologic
(*.loggingSumologic*)

## Overview

Fastly will POST messages to the Sumo Logic account in the format specified in the Sumologic object.

<https://developer.fastly.com/reference/api/logging/sumologic>
### Available Operations

* [createLogSumologic](#createlogsumologic) - Create a Sumologic log endpoint
* [deleteLogSumologic](#deletelogsumologic) - Delete a Sumologic log endpoint
* [getLogSumologic](#getlogsumologic) - Get a Sumologic log endpoint
* [listLogSumologic](#listlogsumologic) - List Sumologic log endpoints
* [updateLogSumologic](#updatelogsumologic) - Update a Sumologic log endpoint

## createLogSumologic

Create a Sumologic for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  LoggingMessageType,
  LoggingSumologic,
  LoggingSumologicFormatVersion,
  LoggingSumologicPlacement,
} from "Fastly/dist/sdk/models/components";
import { CreateLogSumologicRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingSumologic: LoggingSumologic = {
  format: "%h %l %u %t \"%r\" %&gt;s %b",
  formatVersion: LoggingSumologicFormatVersion.Two,
  messageType: LoggingMessageType.Classic,
  name: "test-log-endpoint",
  placement: LoggingSumologicPlacement.WafDebug,
  responseCondition: "null",
};

  const res = await sdk.loggingSumologic.createLogSumologic(serviceId, versionId, loggingSumologic);


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
| `loggingSumologic`                                                     | [components.LoggingSumologic](../../models/shared/loggingsumologic.md) | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |                                                                        |


### Response

**Promise<[operations.CreateLogSumologicResponse](../../models/operations/createlogsumologicresponse.md)>**


## deleteLogSumologic

Delete the Sumologic for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteLogSumologicRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingSumologicName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingSumologic.deleteLogSumologic(loggingSumologicName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingSumologicName`                                       | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteLogSumologicResponse](../../models/operations/deletelogsumologicresponse.md)>**


## getLogSumologic

Get the Sumologic for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetLogSumologicRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingSumologicName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingSumologic.getLogSumologic(loggingSumologicName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingSumologicName`                                       | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetLogSumologicResponse](../../models/operations/getlogsumologicresponse.md)>**


## listLogSumologic

List all of the Sumologics for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListLogSumologicRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingSumologic.listLogSumologic(serviceId, versionId);


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

**Promise<[operations.ListLogSumologicResponse](../../models/operations/listlogsumologicresponse.md)>**


## updateLogSumologic

Update the Sumologic for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  LoggingMessageType,
  LoggingSumologic,
  LoggingSumologicFormatVersion,
  LoggingSumologicPlacement,
} from "Fastly/dist/sdk/models/components";
import { UpdateLogSumologicRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingSumologicName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingSumologic: LoggingSumologic = {
  format: "%h %l %u %t \"%r\" %&gt;s %b",
  formatVersion: LoggingSumologicFormatVersion.Two,
  messageType: LoggingMessageType.Classic,
  name: "test-log-endpoint",
  placement: LoggingSumologicPlacement.WafDebug,
  responseCondition: "null",
};

  const res = await sdk.loggingSumologic.updateLogSumologic(loggingSumologicName, serviceId, versionId, loggingSumologic);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `loggingSumologicName`                                                 | *string*                                                               | :heavy_check_mark:                                                     | The name for the real-time logging configuration.                      | test-log-endpoint                                                      |
| `serviceId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | Alphanumeric string identifying the service.                           | SU1Z0isxPaozGVKXdv0eY                                                  |
| `versionId`                                                            | *number*                                                               | :heavy_check_mark:                                                     | Integer identifying a service version.                                 | 1                                                                      |
| `loggingSumologic`                                                     | [components.LoggingSumologic](../../models/shared/loggingsumologic.md) | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |                                                                        |


### Response

**Promise<[operations.UpdateLogSumologicResponse](../../models/operations/updatelogsumologicresponse.md)>**


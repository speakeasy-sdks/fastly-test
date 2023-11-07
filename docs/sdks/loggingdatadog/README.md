# LoggingDatadog
(*.loggingDatadog*)

## Overview

Fastly will upload log messages to Datadog in the format specified in the Datadog configuration object.

<https://developer.fastly.com/reference/api/logging/datadog>
### Available Operations

* [createLogDatadog](#createlogdatadog) - Create a Datadog log endpoint
* [deleteLogDatadog](#deletelogdatadog) - Delete a Datadog log endpoint
* [getLogDatadog](#getlogdatadog) - Get a Datadog log endpoint
* [listLogDatadog](#listlogdatadog) - List Datadog log endpoints
* [updateLogDatadog](#updatelogdatadog) - Update a Datadog log endpoint

## createLogDatadog

Create a Datadog logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  LoggingDatadog,
  LoggingDatadogFormatVersion,
  LoggingDatadogPlacement,
  LoggingDatadogRegion,
} from "Fastly/dist/sdk/models/components";
import { CreateLogDatadogRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingDatadog: LoggingDatadog = {
  formatVersion: LoggingDatadogFormatVersion.Two,
  name: "test-log-endpoint",
  placement: LoggingDatadogPlacement.None,
  responseCondition: "null",
};

  const res = await sdk.loggingDatadog.createLogDatadog(serviceId, versionId, loggingDatadog);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `serviceId`                                                        | *string*                                                           | :heavy_check_mark:                                                 | Alphanumeric string identifying the service.                       | SU1Z0isxPaozGVKXdv0eY                                              |
| `versionId`                                                        | *number*                                                           | :heavy_check_mark:                                                 | Integer identifying a service version.                             | 1                                                                  |
| `loggingDatadog`                                                   | [components.LoggingDatadog](../../models/shared/loggingdatadog.md) | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |                                                                    |


### Response

**Promise<[operations.CreateLogDatadogResponse](../../models/operations/createlogdatadogresponse.md)>**


## deleteLogDatadog

Delete the Datadog logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteLogDatadogRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingDatadogName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingDatadog.deleteLogDatadog(loggingDatadogName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingDatadogName`                                         | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteLogDatadogResponse](../../models/operations/deletelogdatadogresponse.md)>**


## getLogDatadog

Get the details for a Datadog logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetLogDatadogRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingDatadogName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingDatadog.getLogDatadog(loggingDatadogName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingDatadogName`                                         | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetLogDatadogResponse](../../models/operations/getlogdatadogresponse.md)>**


## listLogDatadog

List all of the Datadog logging objects for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListLogDatadogRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingDatadog.listLogDatadog(serviceId, versionId);


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

**Promise<[operations.ListLogDatadogResponse](../../models/operations/listlogdatadogresponse.md)>**


## updateLogDatadog

Update the Datadog logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  LoggingDatadog,
  LoggingDatadogFormatVersion,
  LoggingDatadogPlacement,
  LoggingDatadogRegion,
} from "Fastly/dist/sdk/models/components";
import { UpdateLogDatadogRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingDatadogName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingDatadog: LoggingDatadog = {
  formatVersion: LoggingDatadogFormatVersion.Two,
  name: "test-log-endpoint",
  placement: LoggingDatadogPlacement.LessThanNilGreaterThan,
  responseCondition: "null",
};

  const res = await sdk.loggingDatadog.updateLogDatadog(loggingDatadogName, serviceId, versionId, loggingDatadog);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `loggingDatadogName`                                               | *string*                                                           | :heavy_check_mark:                                                 | The name for the real-time logging configuration.                  | test-log-endpoint                                                  |
| `serviceId`                                                        | *string*                                                           | :heavy_check_mark:                                                 | Alphanumeric string identifying the service.                       | SU1Z0isxPaozGVKXdv0eY                                              |
| `versionId`                                                        | *number*                                                           | :heavy_check_mark:                                                 | Integer identifying a service version.                             | 1                                                                  |
| `loggingDatadog`                                                   | [components.LoggingDatadog](../../models/shared/loggingdatadog.md) | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |                                                                    |


### Response

**Promise<[operations.UpdateLogDatadogResponse](../../models/operations/updatelogdatadogresponse.md)>**


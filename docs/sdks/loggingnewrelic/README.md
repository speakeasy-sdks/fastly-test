# LoggingNewrelic
(*.loggingNewrelic*)

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
import { Fastly } from "Fastly";
import {
  LoggingNewrelic,
  LoggingNewrelicFormatVersion,
  LoggingNewrelicPlacement,
  LoggingNewrelicRegion,
} from "Fastly/dist/sdk/models/components";
import { CreateLogNewrelicRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingNewrelic: LoggingNewrelic = {
  formatVersion: LoggingNewrelicFormatVersion.Two,
  name: "test-log-endpoint",
  placement: LoggingNewrelicPlacement.WafDebug,
  responseCondition: "null",
};

  const res = await sdk.loggingNewrelic.createLogNewrelic(serviceId, versionId, loggingNewrelic);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `serviceId`                                                          | *string*                                                             | :heavy_check_mark:                                                   | Alphanumeric string identifying the service.                         | SU1Z0isxPaozGVKXdv0eY                                                |
| `versionId`                                                          | *number*                                                             | :heavy_check_mark:                                                   | Integer identifying a service version.                               | 1                                                                    |
| `loggingNewrelic`                                                    | [components.LoggingNewrelic](../../models/shared/loggingnewrelic.md) | :heavy_minus_sign:                                                   | N/A                                                                  |                                                                      |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |                                                                      |


### Response

**Promise<[operations.CreateLogNewrelicResponse](../../models/operations/createlognewrelicresponse.md)>**


## deleteLogNewrelic

Delete the New Relic Logs logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteLogNewrelicRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingNewrelicName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingNewrelic.deleteLogNewrelic(loggingNewrelicName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingNewrelicName`                                        | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteLogNewrelicResponse](../../models/operations/deletelognewrelicresponse.md)>**


## getLogNewrelic

Get the details of a New Relic Logs logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetLogNewrelicRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingNewrelicName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingNewrelic.getLogNewrelic(loggingNewrelicName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingNewrelicName`                                        | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetLogNewrelicResponse](../../models/operations/getlognewrelicresponse.md)>**


## listLogNewrelic

List all of the New Relic Logs logging objects for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListLogNewrelicRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingNewrelic.listLogNewrelic(serviceId, versionId);


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

**Promise<[operations.ListLogNewrelicResponse](../../models/operations/listlognewrelicresponse.md)>**


## updateLogNewrelic

Update a New Relic Logs logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  LoggingNewrelic,
  LoggingNewrelicFormatVersion,
  LoggingNewrelicPlacement,
  LoggingNewrelicRegion,
} from "Fastly/dist/sdk/models/components";
import { UpdateLogNewrelicRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingNewrelicName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingNewrelic: LoggingNewrelic = {
  formatVersion: LoggingNewrelicFormatVersion.Two,
  name: "test-log-endpoint",
  placement: LoggingNewrelicPlacement.LessThanNilGreaterThan,
  responseCondition: "null",
};

  const res = await sdk.loggingNewrelic.updateLogNewrelic(loggingNewrelicName, serviceId, versionId, loggingNewrelic);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `loggingNewrelicName`                                                | *string*                                                             | :heavy_check_mark:                                                   | The name for the real-time logging configuration.                    | test-log-endpoint                                                    |
| `serviceId`                                                          | *string*                                                             | :heavy_check_mark:                                                   | Alphanumeric string identifying the service.                         | SU1Z0isxPaozGVKXdv0eY                                                |
| `versionId`                                                          | *number*                                                             | :heavy_check_mark:                                                   | Integer identifying a service version.                               | 1                                                                    |
| `loggingNewrelic`                                                    | [components.LoggingNewrelic](../../models/shared/loggingnewrelic.md) | :heavy_minus_sign:                                                   | N/A                                                                  |                                                                      |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |                                                                      |


### Response

**Promise<[operations.UpdateLogNewrelicResponse](../../models/operations/updatelognewrelicresponse.md)>**


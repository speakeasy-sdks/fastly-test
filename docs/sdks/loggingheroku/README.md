# LoggingHeroku
(*.loggingHeroku*)

## Overview

Fastly will stream log messages to the Heroku account in the format specified in the Heroku object.

<https://developer.fastly.com/reference/api/logging/heroku>
### Available Operations

* [createLogHeroku](#createlogheroku) - Create a Heroku log endpoint
* [deleteLogHeroku](#deletelogheroku) - Delete the Heroku log endpoint
* [getLogHeroku](#getlogheroku) - Get a Heroku log endpoint
* [listLogHeroku](#listlogheroku) - List Heroku log endpoints
* [updateLogHeroku](#updatelogheroku) - Update the Heroku log endpoint

## createLogHeroku

Create a Heroku for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { LoggingHeroku, LoggingHerokuFormatVersion, LoggingHerokuPlacement } from "Fastly/dist/sdk/models/components";
import { CreateLogHerokuRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingHeroku: LoggingHeroku = {
  format: "%h %l %u %t \"%r\" %&gt;s %b",
  formatVersion: LoggingHerokuFormatVersion.Two,
  name: "test-log-endpoint",
  placement: LoggingHerokuPlacement.LessThanNilGreaterThan,
  responseCondition: "null",
};

  const res = await sdk.loggingHeroku.createLogHeroku(serviceId, versionId, loggingHeroku);


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
| `loggingHeroku`                                                  | [components.LoggingHeroku](../../models/shared/loggingheroku.md) | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |                                                                  |


### Response

**Promise<[operations.CreateLogHerokuResponse](../../models/operations/createlogherokuresponse.md)>**


## deleteLogHeroku

Delete the Heroku for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteLogHerokuRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingHerokuName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingHeroku.deleteLogHeroku(loggingHerokuName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingHerokuName`                                          | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteLogHerokuResponse](../../models/operations/deletelogherokuresponse.md)>**


## getLogHeroku

Get the Heroku for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetLogHerokuRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingHerokuName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingHeroku.getLogHeroku(loggingHerokuName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingHerokuName`                                          | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetLogHerokuResponse](../../models/operations/getlogherokuresponse.md)>**


## listLogHeroku

List all of the Herokus for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListLogHerokuRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingHeroku.listLogHeroku(serviceId, versionId);


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

**Promise<[operations.ListLogHerokuResponse](../../models/operations/listlogherokuresponse.md)>**


## updateLogHeroku

Update the Heroku for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { LoggingHeroku, LoggingHerokuFormatVersion, LoggingHerokuPlacement } from "Fastly/dist/sdk/models/components";
import { UpdateLogHerokuRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingHerokuName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingHeroku: LoggingHeroku = {
  format: "%h %l %u %t \"%r\" %&gt;s %b",
  formatVersion: LoggingHerokuFormatVersion.Two,
  name: "test-log-endpoint",
  placement: LoggingHerokuPlacement.None,
  responseCondition: "null",
};

  const res = await sdk.loggingHeroku.updateLogHeroku(loggingHerokuName, serviceId, versionId, loggingHeroku);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `loggingHerokuName`                                              | *string*                                                         | :heavy_check_mark:                                               | The name for the real-time logging configuration.                | test-log-endpoint                                                |
| `serviceId`                                                      | *string*                                                         | :heavy_check_mark:                                               | Alphanumeric string identifying the service.                     | SU1Z0isxPaozGVKXdv0eY                                            |
| `versionId`                                                      | *number*                                                         | :heavy_check_mark:                                               | Integer identifying a service version.                           | 1                                                                |
| `loggingHeroku`                                                  | [components.LoggingHeroku](../../models/shared/loggingheroku.md) | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |                                                                  |


### Response

**Promise<[operations.UpdateLogHerokuResponse](../../models/operations/updatelogherokuresponse.md)>**


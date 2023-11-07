# LoggingPapertrail
(*.loggingPapertrail*)

## Overview

Fastly will stream log messages to the Papertrail account in the format specified in the Papertrail object.

<https://developer.fastly.com/reference/api/logging/papertrail>
### Available Operations

* [createLogPapertrail](#createlogpapertrail) - Create a Papertrail log endpoint
* [deleteLogPapertrail](#deletelogpapertrail) - Delete a Papertrail log endpoint
* [getLogPapertrail](#getlogpapertrail) - Get a Papertrail log endpoint
* [listLogPapertrail](#listlogpapertrail) - List Papertrail log endpoints
* [updateLogPapertrail](#updatelogpapertrail) - Update a Papertrail log endpoint

## createLogPapertrail

Create a Papertrail for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { LoggingPapertrail, LoggingPapertrailFormatVersion, LoggingPapertrailPlacement } from "Fastly/dist/sdk/models/components";
import { CreateLogPapertrailRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingPapertrail: LoggingPapertrail = {
  address: "example.com",
  format: "%h %l %u %t \"%r\" %&gt;s %b",
  formatVersion: LoggingPapertrailFormatVersion.Two,
  name: "test-log-endpoint",
  placement: LoggingPapertrailPlacement.None,
  responseCondition: "null",
};

  const res = await sdk.loggingPapertrail.createLogPapertrail(serviceId, versionId, loggingPapertrail);


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
| `loggingPapertrail`                                                      | [components.LoggingPapertrail](../../models/shared/loggingpapertrail.md) | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |                                                                          |


### Response

**Promise<[operations.CreateLogPapertrailResponse](../../models/operations/createlogpapertrailresponse.md)>**


## deleteLogPapertrail

Delete the Papertrail for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteLogPapertrailRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingPapertrailName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingPapertrail.deleteLogPapertrail(loggingPapertrailName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingPapertrailName`                                      | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteLogPapertrailResponse](../../models/operations/deletelogpapertrailresponse.md)>**


## getLogPapertrail

Get the Papertrail for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetLogPapertrailRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingPapertrailName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingPapertrail.getLogPapertrail(loggingPapertrailName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingPapertrailName`                                      | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetLogPapertrailResponse](../../models/operations/getlogpapertrailresponse.md)>**


## listLogPapertrail

List all of the Papertrails for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListLogPapertrailRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingPapertrail.listLogPapertrail(serviceId, versionId);


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

**Promise<[operations.ListLogPapertrailResponse](../../models/operations/listlogpapertrailresponse.md)>**


## updateLogPapertrail

Update the Papertrail for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { LoggingPapertrail, LoggingPapertrailFormatVersion, LoggingPapertrailPlacement } from "Fastly/dist/sdk/models/components";
import { UpdateLogPapertrailRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingPapertrailName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingPapertrail: LoggingPapertrail = {
  address: "example.com",
  format: "%h %l %u %t \"%r\" %&gt;s %b",
  formatVersion: LoggingPapertrailFormatVersion.Two,
  name: "test-log-endpoint",
  placement: LoggingPapertrailPlacement.LessThanNilGreaterThan,
  responseCondition: "null",
};

  const res = await sdk.loggingPapertrail.updateLogPapertrail(loggingPapertrailName, serviceId, versionId, loggingPapertrail);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `loggingPapertrailName`                                                  | *string*                                                                 | :heavy_check_mark:                                                       | The name for the real-time logging configuration.                        | test-log-endpoint                                                        |
| `serviceId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | Alphanumeric string identifying the service.                             | SU1Z0isxPaozGVKXdv0eY                                                    |
| `versionId`                                                              | *number*                                                                 | :heavy_check_mark:                                                       | Integer identifying a service version.                                   | 1                                                                        |
| `loggingPapertrail`                                                      | [components.LoggingPapertrail](../../models/shared/loggingpapertrail.md) | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |                                                                          |


### Response

**Promise<[operations.UpdateLogPapertrailResponse](../../models/operations/updatelogpapertrailresponse.md)>**


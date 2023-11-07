# LoggingCloudfiles
(*.loggingCloudfiles*)

## Overview

Fastly will upload log messages to your Rackspace Cloud Files account.

<https://developer.fastly.com/reference/api/logging/cloudfiles>
### Available Operations

* [createLogCloudfiles](#createlogcloudfiles) - Create a Cloud Files log endpoint
* [deleteLogCloudfiles](#deletelogcloudfiles) - Delete the Cloud Files log endpoint
* [getLogCloudfiles](#getlogcloudfiles) - Get a Cloud Files log endpoint
* [listLogCloudfiles](#listlogcloudfiles) - List Cloud Files log endpoints
* [updateLogCloudfiles](#updatelogcloudfiles) - Update the Cloud Files log endpoint

## createLogCloudfiles

Create a Cloud Files log endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  LoggingCloudfiles,
  LoggingCloudfilesCompressionCodec,
  LoggingCloudfilesFormatVersion,
  LoggingCloudfilesMessageType,
  LoggingCloudfilesPlacement,
  LoggingCloudfilesRegion,
} from "Fastly/dist/sdk/models/components";
import { CreateLogCloudfilesRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingCloudfiles: LoggingCloudfiles = {
  format: "%h %l %u %t \"%r\" %&gt;s %b",
  formatVersion: LoggingCloudfilesFormatVersion.Two,
  gzipLevel: 0,
  messageType: LoggingCloudfilesMessageType.Classic,
  name: "test-log-endpoint",
  period: 3600,
  placement: LoggingCloudfilesPlacement.LessThanNilGreaterThan,
  publicKey: "-----BEGIN PRIVATE KEY-----
...
-----END PRIVATE KEY-----
",
  responseCondition: "null",
};

  const res = await sdk.loggingCloudfiles.createLogCloudfiles(serviceId, versionId, loggingCloudfiles);


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
| `loggingCloudfiles`                                                      | [components.LoggingCloudfiles](../../models/shared/loggingcloudfiles.md) | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |                                                                          |


### Response

**Promise<[operations.CreateLogCloudfilesResponse](../../models/operations/createlogcloudfilesresponse.md)>**


## deleteLogCloudfiles

Delete the Cloud Files log endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteLogCloudfilesRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingCloudfilesName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingCloudfiles.deleteLogCloudfiles(loggingCloudfilesName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingCloudfilesName`                                      | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteLogCloudfilesResponse](../../models/operations/deletelogcloudfilesresponse.md)>**


## getLogCloudfiles

Get the Cloud Files log endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetLogCloudfilesRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingCloudfilesName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingCloudfiles.getLogCloudfiles(loggingCloudfilesName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingCloudfilesName`                                      | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetLogCloudfilesResponse](../../models/operations/getlogcloudfilesresponse.md)>**


## listLogCloudfiles

List all of the Cloud Files log endpoints for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListLogCloudfilesRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingCloudfiles.listLogCloudfiles(serviceId, versionId);


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

**Promise<[operations.ListLogCloudfilesResponse](../../models/operations/listlogcloudfilesresponse.md)>**


## updateLogCloudfiles

Update the Cloud Files log endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  LoggingCloudfiles,
  LoggingCloudfilesCompressionCodec,
  LoggingCloudfilesFormatVersion,
  LoggingCloudfilesMessageType,
  LoggingCloudfilesPlacement,
  LoggingCloudfilesRegion,
} from "Fastly/dist/sdk/models/components";
import { UpdateLogCloudfilesRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingCloudfilesName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingCloudfiles: LoggingCloudfiles = {
  format: "%h %l %u %t \"%r\" %&gt;s %b",
  formatVersion: LoggingCloudfilesFormatVersion.Two,
  gzipLevel: 0,
  messageType: LoggingCloudfilesMessageType.Classic,
  name: "test-log-endpoint",
  period: 3600,
  placement: LoggingCloudfilesPlacement.LessThanNilGreaterThan,
  publicKey: "-----BEGIN PRIVATE KEY-----
...
-----END PRIVATE KEY-----
",
  responseCondition: "null",
};

  const res = await sdk.loggingCloudfiles.updateLogCloudfiles(loggingCloudfilesName, serviceId, versionId, loggingCloudfiles);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `loggingCloudfilesName`                                                  | *string*                                                                 | :heavy_check_mark:                                                       | The name for the real-time logging configuration.                        | test-log-endpoint                                                        |
| `serviceId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | Alphanumeric string identifying the service.                             | SU1Z0isxPaozGVKXdv0eY                                                    |
| `versionId`                                                              | *number*                                                                 | :heavy_check_mark:                                                       | Integer identifying a service version.                                   | 1                                                                        |
| `loggingCloudfiles`                                                      | [components.LoggingCloudfiles](../../models/shared/loggingcloudfiles.md) | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |                                                                          |


### Response

**Promise<[operations.UpdateLogCloudfilesResponse](../../models/operations/updatelogcloudfilesresponse.md)>**


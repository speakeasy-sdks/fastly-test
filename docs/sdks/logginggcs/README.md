# LoggingGcs
(*.loggingGcs*)

## Overview

Fastly will upload log messages to the GCS bucket in the format specified in the GCS object.

<https://developer.fastly.com/reference/api/logging/gcs>
### Available Operations

* [createLogGcs](#createloggcs) - Create a GCS log endpoint
* [deleteLogGcs](#deleteloggcs) - Delete a GCS log endpoint
* [getLogGcs](#getloggcs) - Get a GCS log endpoint
* [listLogGcs](#listloggcs) - List GCS log endpoints
* [updateLogGcs](#updateloggcs) - Update a GCS log endpoint

## createLogGcs

Create GCS logging for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  LoggingGcs,
  LoggingGcsCompressionCodec,
  LoggingGcsFormatVersion,
  LoggingGcsMessageType,
  LoggingGcsPlacement,
} from "Fastly/dist/sdk/models/components";
import { CreateLogGcsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingGcs: LoggingGcs = {
  accountName: "test-user@test-project-id.iam.gserviceaccount.com",
  format: "%h %l %u %t \"%r\" %&gt;s %b",
  formatVersion: LoggingGcsFormatVersion.Two,
  gzipLevel: 0,
  messageType: LoggingGcsMessageType.Classic,
  name: "test-log-endpoint",
  period: 3600,
  placement: LoggingGcsPlacement.LessThanNilGreaterThan,
  projectId: "test-project-id",
  publicKey: "-----BEGIN PRIVATE KEY-----
...
-----END PRIVATE KEY-----
",
  responseCondition: "null",
  secretKey: "-----BEGIN PRIVATE KEY-----
...
-----END PRIVATE KEY-----
",
  user: "test-user@test-project-id.iam.gserviceaccount.com",
};

  const res = await sdk.loggingGcs.createLogGcs(serviceId, versionId, loggingGcs);


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
| `loggingGcs`                                                 | [components.LoggingGcs](../../models/shared/logginggcs.md)   | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.CreateLogGcsResponse](../../models/operations/createloggcsresponse.md)>**


## deleteLogGcs

Delete the GCS Logging for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteLogGcsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingGcsName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingGcs.deleteLogGcs(loggingGcsName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingGcsName`                                             | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteLogGcsResponse](../../models/operations/deleteloggcsresponse.md)>**


## getLogGcs

Get the GCS Logging for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetLogGcsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingGcsName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingGcs.getLogGcs(loggingGcsName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingGcsName`                                             | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetLogGcsResponse](../../models/operations/getloggcsresponse.md)>**


## listLogGcs

List all of the GCS log endpoints for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListLogGcsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingGcs.listLogGcs(serviceId, versionId);


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

**Promise<[operations.ListLogGcsResponse](../../models/operations/listloggcsresponse.md)>**


## updateLogGcs

Update the GCS for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  LoggingGcs,
  LoggingGcsCompressionCodec,
  LoggingGcsFormatVersion,
  LoggingGcsMessageType,
  LoggingGcsPlacement,
} from "Fastly/dist/sdk/models/components";
import { UpdateLogGcsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingGcsName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingGcs: LoggingGcs = {
  accountName: "test-user@test-project-id.iam.gserviceaccount.com",
  format: "%h %l %u %t \"%r\" %&gt;s %b",
  formatVersion: LoggingGcsFormatVersion.Two,
  gzipLevel: 0,
  messageType: LoggingGcsMessageType.Classic,
  name: "test-log-endpoint",
  period: 3600,
  placement: LoggingGcsPlacement.WafDebug,
  projectId: "test-project-id",
  publicKey: "-----BEGIN PRIVATE KEY-----
...
-----END PRIVATE KEY-----
",
  responseCondition: "null",
  secretKey: "-----BEGIN PRIVATE KEY-----
...
-----END PRIVATE KEY-----
",
  user: "test-user@test-project-id.iam.gserviceaccount.com",
};

  const res = await sdk.loggingGcs.updateLogGcs(loggingGcsName, serviceId, versionId, loggingGcs);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingGcsName`                                             | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `loggingGcs`                                                 | [components.LoggingGcs](../../models/shared/logginggcs.md)   | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.UpdateLogGcsResponse](../../models/operations/updateloggcsresponse.md)>**


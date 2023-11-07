# LoggingHttps
(*.loggingHttps*)

## Overview

Fastly will upload log messages to an HTTPS endpoint in the format specified in the HTTPS object. The HTTPS endpoint requires proof of domain ownership before logs can be received. Learn how to validate your domain in our [HTTPS endpoint documentation](https://docs.fastly.com/en/guides/log-streaming-https).

<https://developer.fastly.com/reference/api/logging/https>
### Available Operations

* [createLogHttps](#createloghttps) - Create an HTTPS log endpoint
* [deleteLogHttps](#deleteloghttps) - Delete an HTTPS log endpoint
* [getLogHttps](#getloghttps) - Get an HTTPS log endpoint
* [listLogHttps](#listloghttps) - List HTTPS log endpoints
* [updateLogHttps](#updateloghttps) - Update an HTTPS log endpoint

## createLogHttps

Create an HTTPS object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  JsonFormat,
  LoggingHttps,
  LoggingHttpsFormatVersion,
  LoggingHttpsPlacement,
  LoggingMessageType,
  Method,
} from "Fastly/dist/sdk/models/components";
import { CreateLogHttpsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingHttps: LoggingHttps = {
  format: "%h %l %u %t \"%r\" %&gt;s %b",
  formatVersion: LoggingHttpsFormatVersion.Two,
  messageType: LoggingMessageType.Classic,
  name: "test-log-endpoint",
  placement: LoggingHttpsPlacement.WafDebug,
  responseCondition: "null",
};

  const res = await sdk.loggingHttps.createLogHttps(serviceId, versionId, loggingHttps);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                      | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `serviceId`                                                    | *string*                                                       | :heavy_check_mark:                                             | Alphanumeric string identifying the service.                   | SU1Z0isxPaozGVKXdv0eY                                          |
| `versionId`                                                    | *number*                                                       | :heavy_check_mark:                                             | Integer identifying a service version.                         | 1                                                              |
| `loggingHttps`                                                 | [components.LoggingHttps](../../models/shared/logginghttps.md) | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `config`                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)   | :heavy_minus_sign:                                             | Available config options for making requests.                  |                                                                |


### Response

**Promise<[operations.CreateLogHttpsResponse](../../models/operations/createloghttpsresponse.md)>**


## deleteLogHttps

Delete the HTTPS object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteLogHttpsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingHttpsName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingHttps.deleteLogHttps(loggingHttpsName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingHttpsName`                                           | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteLogHttpsResponse](../../models/operations/deleteloghttpsresponse.md)>**


## getLogHttps

Get the HTTPS object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetLogHttpsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingHttpsName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingHttps.getLogHttps(loggingHttpsName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingHttpsName`                                           | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetLogHttpsResponse](../../models/operations/getloghttpsresponse.md)>**


## listLogHttps

List all of the HTTPS objects for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListLogHttpsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingHttps.listLogHttps(serviceId, versionId);


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

**Promise<[operations.ListLogHttpsResponse](../../models/operations/listloghttpsresponse.md)>**


## updateLogHttps

Update the HTTPS object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  JsonFormat,
  LoggingHttps,
  LoggingHttpsFormatVersion,
  LoggingHttpsPlacement,
  LoggingMessageType,
  Method,
} from "Fastly/dist/sdk/models/components";
import { UpdateLogHttpsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingHttpsName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingHttps: LoggingHttps = {
  format: "%h %l %u %t \"%r\" %&gt;s %b",
  formatVersion: LoggingHttpsFormatVersion.Two,
  messageType: LoggingMessageType.Classic,
  name: "test-log-endpoint",
  placement: LoggingHttpsPlacement.WafDebug,
  responseCondition: "null",
};

  const res = await sdk.loggingHttps.updateLogHttps(loggingHttpsName, serviceId, versionId, loggingHttps);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                      | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `loggingHttpsName`                                             | *string*                                                       | :heavy_check_mark:                                             | The name for the real-time logging configuration.              | test-log-endpoint                                              |
| `serviceId`                                                    | *string*                                                       | :heavy_check_mark:                                             | Alphanumeric string identifying the service.                   | SU1Z0isxPaozGVKXdv0eY                                          |
| `versionId`                                                    | *number*                                                       | :heavy_check_mark:                                             | Integer identifying a service version.                         | 1                                                              |
| `loggingHttps`                                                 | [components.LoggingHttps](../../models/shared/logginghttps.md) | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `config`                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)   | :heavy_minus_sign:                                             | Available config options for making requests.                  |                                                                |


### Response

**Promise<[operations.UpdateLogHttpsResponse](../../models/operations/updateloghttpsresponse.md)>**


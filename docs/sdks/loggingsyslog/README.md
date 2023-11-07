# LoggingSyslog
(*.loggingSyslog*)

## Overview

Fastly will stream log messages to the location in the format specified in the Syslog object.

<https://developer.fastly.com/reference/api/logging/syslog>
### Available Operations

* [createLogSyslog](#createlogsyslog) - Create a syslog log endpoint
* [deleteLogSyslog](#deletelogsyslog) - Delete a syslog log endpoint
* [getLogSyslog](#getlogsyslog) - Get a syslog log endpoint
* [listLogSyslog](#listlogsyslog) - List Syslog log endpoints
* [updateLogSyslog](#updatelogsyslog) - Update a syslog log endpoint

## createLogSyslog

Create a Syslog for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  LoggingMessageType,
  LoggingSyslog,
  LoggingSyslogFormatVersion,
  LoggingSyslogPlacement,
  LoggingUseTls,
} from "Fastly/dist/sdk/models/components";
import { CreateLogSyslogRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingSyslog: LoggingSyslog = {
  address: "example.com",
  format: "%h %l %u %t \"%r\" %&gt;s %b",
  formatVersion: LoggingSyslogFormatVersion.Two,
  messageType: LoggingMessageType.Classic,
  name: "test-log-endpoint",
  placement: LoggingSyslogPlacement.WafDebug,
  responseCondition: "null",
};

  const res = await sdk.loggingSyslog.createLogSyslog(serviceId, versionId, loggingSyslog);


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
| `loggingSyslog`                                                  | [components.LoggingSyslog](../../models/shared/loggingsyslog.md) | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |                                                                  |


### Response

**Promise<[operations.CreateLogSyslogResponse](../../models/operations/createlogsyslogresponse.md)>**


## deleteLogSyslog

Delete the Syslog for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteLogSyslogRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingSyslogName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingSyslog.deleteLogSyslog(loggingSyslogName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingSyslogName`                                          | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteLogSyslogResponse](../../models/operations/deletelogsyslogresponse.md)>**


## getLogSyslog

Get the Syslog for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetLogSyslogRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingSyslogName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingSyslog.getLogSyslog(loggingSyslogName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingSyslogName`                                          | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetLogSyslogResponse](../../models/operations/getlogsyslogresponse.md)>**


## listLogSyslog

List all of the Syslogs for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListLogSyslogRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingSyslog.listLogSyslog(serviceId, versionId);


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

**Promise<[operations.ListLogSyslogResponse](../../models/operations/listlogsyslogresponse.md)>**


## updateLogSyslog

Update the Syslog for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  LoggingMessageType,
  LoggingSyslog,
  LoggingSyslogFormatVersion,
  LoggingSyslogPlacement,
  LoggingUseTls,
} from "Fastly/dist/sdk/models/components";
import { UpdateLogSyslogRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingSyslogName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingSyslog: LoggingSyslog = {
  address: "example.com",
  format: "%h %l %u %t \"%r\" %&gt;s %b",
  formatVersion: LoggingSyslogFormatVersion.Two,
  messageType: LoggingMessageType.Classic,
  name: "test-log-endpoint",
  placement: LoggingSyslogPlacement.WafDebug,
  responseCondition: "null",
};

  const res = await sdk.loggingSyslog.updateLogSyslog(loggingSyslogName, serviceId, versionId, loggingSyslog);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `loggingSyslogName`                                              | *string*                                                         | :heavy_check_mark:                                               | The name for the real-time logging configuration.                | test-log-endpoint                                                |
| `serviceId`                                                      | *string*                                                         | :heavy_check_mark:                                               | Alphanumeric string identifying the service.                     | SU1Z0isxPaozGVKXdv0eY                                            |
| `versionId`                                                      | *number*                                                         | :heavy_check_mark:                                               | Integer identifying a service version.                           | 1                                                                |
| `loggingSyslog`                                                  | [components.LoggingSyslog](../../models/shared/loggingsyslog.md) | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |                                                                  |


### Response

**Promise<[operations.UpdateLogSyslogResponse](../../models/operations/updatelogsyslogresponse.md)>**


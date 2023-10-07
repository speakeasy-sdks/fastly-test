# LoggingSyslog
(*loggingSyslog*)

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
import { Fastly } from "FastlyTestJS";
import {
  LoggingMessageType,
  LoggingSyslogFormatVersion,
  LoggingSyslogPlacement,
  LoggingUseTls,
} from "FastlyTestJS/dist/sdk/models/shared";

(async() => {
  const sdk = new Fastly({
    security: {
      token: "",
    },
  });

  const res = await sdk.loggingSyslog.createLogSyslog({
    loggingSyslog: {
      address: "example.com",
      format: "%h %l %u %t \"%r\" %&gt;s %b",
      formatVersion: LoggingSyslogFormatVersion.Two,
      messageType: LoggingMessageType.Classic,
      name: "test-log-endpoint",
      placement: LoggingSyslogPlacement.WafDebug,
      responseCondition: "null",
    },
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.CreateLogSyslogRequest](../../models/operations/createlogsyslogrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CreateLogSyslogResponse](../../models/operations/createlogsyslogresponse.md)>**


## deleteLogSyslog

Delete the Syslog for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    security: {
      token: "",
    },
  });

  const res = await sdk.loggingSyslog.deleteLogSyslog({
    loggingSyslogName: "test-log-endpoint",
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.DeleteLogSyslogRequest](../../models/operations/deletelogsyslogrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.DeleteLogSyslogResponse](../../models/operations/deletelogsyslogresponse.md)>**


## getLogSyslog

Get the Syslog for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    security: {
      token: "",
    },
  });

  const res = await sdk.loggingSyslog.getLogSyslog({
    loggingSyslogName: "test-log-endpoint",
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetLogSyslogRequest](../../models/operations/getlogsyslogrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetLogSyslogResponse](../../models/operations/getlogsyslogresponse.md)>**


## listLogSyslog

List all of the Syslogs for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    security: {
      token: "",
    },
  });

  const res = await sdk.loggingSyslog.listLogSyslog({
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.ListLogSyslogRequest](../../models/operations/listlogsyslogrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.ListLogSyslogResponse](../../models/operations/listlogsyslogresponse.md)>**


## updateLogSyslog

Update the Syslog for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import {
  LoggingMessageType,
  LoggingSyslogFormatVersion,
  LoggingSyslogPlacement,
  LoggingUseTls,
} from "FastlyTestJS/dist/sdk/models/shared";

(async() => {
  const sdk = new Fastly({
    security: {
      token: "",
    },
  });

  const res = await sdk.loggingSyslog.updateLogSyslog({
    loggingSyslog: {
      address: "example.com",
      format: "%h %l %u %t \"%r\" %&gt;s %b",
      formatVersion: LoggingSyslogFormatVersion.Two,
      messageType: LoggingMessageType.Classic,
      name: "test-log-endpoint",
      placement: LoggingSyslogPlacement.WafDebug,
      responseCondition: "null",
    },
    loggingSyslogName: "test-log-endpoint",
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.UpdateLogSyslogRequest](../../models/operations/updatelogsyslogrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.UpdateLogSyslogResponse](../../models/operations/updatelogsyslogresponse.md)>**


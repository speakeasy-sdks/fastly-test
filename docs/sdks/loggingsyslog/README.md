# loggingSyslog

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
import { CreateLogSyslogResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingMessageType,
  LoggingSyslogFormatVersion,
  LoggingSyslogPlacement,
  LoggingSyslogResponseFormatVersion,
  LoggingSyslogResponsePlacement,
  LoggingUseTls,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingSyslog.createLogSyslog({
  loggingSyslog2: {
    address: "example.com",
    format: "%h %l %u %t "%r" %&gt;s %b",
    formatVersion: LoggingSyslogFormatVersion.One,
    hostname: "clever-wreck.biz",
    ipv4: "63.58.27.125",
    messageType: LoggingMessageType.Classic,
    name: "test-log-endpoint",
    placement: LoggingSyslogPlacement.LessThanNilGreaterThan,
    port: 891523,
    responseCondition: "null",
    tlsCaCert: "consectetur",
    tlsClientCert: "corporis",
    tlsClientKey: "harum",
    tlsHostname: "laboriosam",
    token: "ipsa",
    useTls: LoggingUseTls.One,
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: CreateLogSyslogResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.CreateLogSyslogRequest](../../models/operations/createlogsyslogrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.CreateLogSyslogSecurity](../../models/operations/createlogsyslogsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CreateLogSyslogResponse](../../models/operations/createlogsyslogresponse.md)>**


## deleteLogSyslog

Delete the Syslog for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteLogSyslogResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.loggingSyslog.deleteLogSyslog({
  loggingSyslogName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: DeleteLogSyslogResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.DeleteLogSyslogRequest](../../models/operations/deletelogsyslogrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.DeleteLogSyslogSecurity](../../models/operations/deletelogsyslogsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DeleteLogSyslogResponse](../../models/operations/deletelogsyslogresponse.md)>**


## getLogSyslog

Get the Syslog for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetLogSyslogResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingMessageType,
  LoggingSyslogResponseFormatVersion,
  LoggingSyslogResponsePlacement,
  LoggingUseTls,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingSyslog.getLogSyslog({
  loggingSyslogName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: GetLogSyslogResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetLogSyslogRequest](../../models/operations/getlogsyslogrequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.GetLogSyslogSecurity](../../models/operations/getlogsyslogsecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetLogSyslogResponse](../../models/operations/getlogsyslogresponse.md)>**


## listLogSyslog

List all of the Syslogs for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListLogSyslogResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingMessageType,
  LoggingSyslogResponseFormatVersion,
  LoggingSyslogResponsePlacement,
  LoggingUseTls,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingSyslog.listLogSyslog({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: ListLogSyslogResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.ListLogSyslogRequest](../../models/operations/listlogsyslogrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.ListLogSyslogSecurity](../../models/operations/listlogsyslogsecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ListLogSyslogResponse](../../models/operations/listlogsyslogresponse.md)>**


## updateLogSyslog

Update the Syslog for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateLogSyslogResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingMessageType,
  LoggingSyslogFormatVersion,
  LoggingSyslogPlacement,
  LoggingSyslogResponseFormatVersion,
  LoggingSyslogResponsePlacement,
  LoggingUseTls,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingSyslog.updateLogSyslog({
  loggingSyslog2: {
    address: "example.com",
    format: "%h %l %u %t "%r" %&gt;s %b",
    formatVersion: LoggingSyslogFormatVersion.Two,
    hostname: "cheerful-system.name",
    ipv4: "69.34.97.95",
    messageType: LoggingMessageType.Classic,
    name: "test-log-endpoint",
    placement: LoggingSyslogPlacement.WafDebug,
    port: 324405,
    responseCondition: "null",
    tlsCaCert: "nobis",
    tlsClientCert: "dolorum",
    tlsClientKey: "adipisci",
    tlsHostname: "minus",
    token: "dolores",
    useTls: LoggingUseTls.One,
  },
  loggingSyslogName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: UpdateLogSyslogResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.UpdateLogSyslogRequest](../../models/operations/updatelogsyslogrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.UpdateLogSyslogSecurity](../../models/operations/updatelogsyslogsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UpdateLogSyslogResponse](../../models/operations/updatelogsyslogresponse.md)>**


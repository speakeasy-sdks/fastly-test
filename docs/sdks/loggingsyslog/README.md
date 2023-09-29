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
import { CreateLogSyslogResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingMessageType,
  LoggingSyslogFormatVersion,
  LoggingSyslogPlacement,
  LoggingUseTls,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingSyslog.createLogSyslog({
  loggingSyslog: {
    address: "example.com",
    format: "%h %l %u %t \"%r\" %&gt;s %b",
    formatVersion: LoggingSyslogFormatVersion.Two,
    hostname: "canine-medal.biz",
    ipv4: "231.1.221.44",
    messageType: LoggingMessageType.Classic,
    name: "test-log-endpoint",
    placement: LoggingSyslogPlacement.None,
    port: 167994,
    responseCondition: "null",
    tlsCaCert: "Southeast Reggae Sleek",
    tlsClientCert: "grey",
    tlsClientKey: "Directives HDD",
    tlsHostname: "Massachusetts",
    token: "Security abnormally",
    useTls: LoggingUseTls.One,
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: CreateLogSyslogResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { DeleteLogSyslogResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingSyslog.deleteLogSyslog({
  loggingSyslogName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: DeleteLogSyslogResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { GetLogSyslogResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingSyslog.getLogSyslog({
  loggingSyslogName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: GetLogSyslogResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { ListLogSyslogResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingSyslog.listLogSyslog({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: ListLogSyslogResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { UpdateLogSyslogResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingMessageType,
  LoggingSyslogFormatVersion,
  LoggingSyslogPlacement,
  LoggingUseTls,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingSyslog.updateLogSyslog({
  loggingSyslog: {
    address: "example.com",
    format: "%h %l %u %t \"%r\" %&gt;s %b",
    formatVersion: LoggingSyslogFormatVersion.One,
    hostname: "jubilant-broker.com",
    ipv4: "249.201.175.78",
    messageType: LoggingMessageType.Classic,
    name: "test-log-endpoint",
    placement: LoggingSyslogPlacement.WafDebug,
    port: 220843,
    responseCondition: "null",
    tlsCaCert: "turquoise",
    tlsClientCert: "Towels",
    tlsClientKey: "firewall Communications Elkhart",
    tlsHostname: "lavender",
    token: "Electric",
    useTls: LoggingUseTls.Zero,
  },
  loggingSyslogName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: UpdateLogSyslogResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.UpdateLogSyslogRequest](../../models/operations/updatelogsyslogrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.UpdateLogSyslogResponse](../../models/operations/updatelogsyslogresponse.md)>**


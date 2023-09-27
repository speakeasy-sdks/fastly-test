# LoggingFtp
(*loggingFtp*)

## Overview

Fastly will upload log messages periodically to the server in the format specified in the FTP object.

<https://developer.fastly.com/reference/api/logging/ftp>
### Available Operations

* [createLogFtp](#createlogftp) - Create an FTP log endpoint
* [deleteLogFtp](#deletelogftp) - Delete an FTP log endpoint
* [getLogFtp](#getlogftp) - Get an FTP log endpoint
* [listLogFtp](#listlogftp) - List FTP log endpoints
* [updateLogFtp](#updatelogftp) - Update an FTP log endpoint

## createLogFtp

Create a FTP for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateLogFtpResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingFtpCompressionCodec,
  LoggingFtpFormatVersion,
  LoggingFtpMessageType,
  LoggingFtpPlacement,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingFtp.createLogFtp({
  loggingFtpInput: {
    address: "14736 Cristobal Forge",
    compressionCodec: LoggingFtpCompressionCodec.Zstd,
    format: "%h %l %u %t "%r" %&gt;s %b",
    formatVersion: LoggingFtpFormatVersion.Two,
    gzipLevel: 0,
    hostname: "steel-subconscious.net",
    ipv4: "30.172.132.70",
    messageType: LoggingFtpMessageType.Classic,
    name: "test-log-endpoint",
    password: "aspernatur",
    path: "dolores",
    period: 3600,
    placement: LoggingFtpPlacement.LessThanNilGreaterThan,
    port: 704474,
    publicKey: "-----BEGIN PRIVATE KEY-----
  ...
  -----END PRIVATE KEY-----
  ",
    responseCondition: "null",
    user: "aliquid",
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: CreateLogFtpResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.CreateLogFtpRequest](../../models/operations/createlogftprequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.CreateLogFtpResponse](../../models/operations/createlogftpresponse.md)>**


## deleteLogFtp

Delete the FTP for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteLogFtpResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingFtp.deleteLogFtp({
  loggingFtpName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: DeleteLogFtpResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.DeleteLogFtpRequest](../../models/operations/deletelogftprequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.DeleteLogFtpResponse](../../models/operations/deletelogftpresponse.md)>**


## getLogFtp

Get the FTP for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetLogFtpResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingFtp.getLogFtp({
  loggingFtpName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: GetLogFtpResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.GetLogFtpRequest](../../models/operations/getlogftprequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.GetLogFtpResponse](../../models/operations/getlogftpresponse.md)>**


## listLogFtp

List all of the FTPs for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListLogFtpResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingFtp.listLogFtp({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: ListLogFtpResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.ListLogFtpRequest](../../models/operations/listlogftprequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.ListLogFtpResponse](../../models/operations/listlogftpresponse.md)>**


## updateLogFtp

Update the FTP for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateLogFtpResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingFtpCompressionCodec,
  LoggingFtpFormatVersion,
  LoggingFtpMessageType,
  LoggingFtpPlacement,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingFtp.updateLogFtp({
  loggingFtpInput: {
    address: "5812 Casimir Lock",
    compressionCodec: LoggingFtpCompressionCodec.Zstd,
    format: "%h %l %u %t "%r" %&gt;s %b",
    formatVersion: LoggingFtpFormatVersion.One,
    gzipLevel: 0,
    hostname: "scared-underpass.com",
    ipv4: "195.191.191.23",
    messageType: LoggingFtpMessageType.Classic,
    name: "test-log-endpoint",
    password: "saepe",
    path: "ipsum",
    period: 3600,
    placement: LoggingFtpPlacement.None,
    port: 749255,
    publicKey: "-----BEGIN PRIVATE KEY-----
  ...
  -----END PRIVATE KEY-----
  ",
    responseCondition: "null",
    user: "quos",
  },
  loggingFtpName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: UpdateLogFtpResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.UpdateLogFtpRequest](../../models/operations/updatelogftprequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.UpdateLogFtpResponse](../../models/operations/updatelogftpresponse.md)>**


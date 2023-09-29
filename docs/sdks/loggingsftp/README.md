# LoggingSftp
(*loggingSftp*)

## Overview

Fastly will upload log messages periodically to the server in the format specified in the SFTP object.

<https://developer.fastly.com/reference/api/logging/sftp>
### Available Operations

* [createLogSftp](#createlogsftp) - Create an SFTP log endpoint
* [deleteLogSftp](#deletelogsftp) - Delete an SFTP log endpoint
* [getLogSftp](#getlogsftp) - Get an SFTP log endpoint
* [listLogSftp](#listlogsftp) - List SFTP log endpoints
* [updateLogSftp](#updatelogsftp) - Update an SFTP log endpoint

## createLogSftp

Create a SFTP for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateLogSftpResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingSftpCompressionCodec,
  LoggingSftpFormatVersion,
  LoggingSftpMessageType,
  LoggingSftpPlacement,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingSftp.createLogSftp({
  loggingSftpInput: {
    address: "example.com",
    compressionCodec: LoggingSftpCompressionCodec.Zstd,
    format: "%h %l %u %t \"%r\" %&gt;s %b",
    formatVersion: LoggingSftpFormatVersion.Two,
    gzipLevel: 0,
    messageType: LoggingSftpMessageType.Classic,
    name: "test-log-endpoint",
    password: "Rm73s4qtnKCb1Iy",
    path: "/net",
    period: 3600,
    placement: LoggingSftpPlacement.LessThanNilGreaterThan,
    port: 101982,
    publicKey: "-----BEGIN PRIVATE KEY-----
  ...
  -----END PRIVATE KEY-----
  ",
    responseCondition: "null",
    secretKey: "Pickup Hybrid",
    sshKnownHosts: "Porsche firewall enhance",
    user: "Nikki_Reichert",
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: CreateLogSftpResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.CreateLogSftpRequest](../../models/operations/createlogsftprequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.CreateLogSftpResponse](../../models/operations/createlogsftpresponse.md)>**


## deleteLogSftp

Delete the SFTP for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteLogSftpResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingSftp.deleteLogSftp({
  loggingSftpName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: DeleteLogSftpResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.DeleteLogSftpRequest](../../models/operations/deletelogsftprequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.DeleteLogSftpResponse](../../models/operations/deletelogsftpresponse.md)>**


## getLogSftp

Get the SFTP for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetLogSftpResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingSftp.getLogSftp({
  loggingSftpName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: GetLogSftpResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetLogSftpRequest](../../models/operations/getlogsftprequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetLogSftpResponse](../../models/operations/getlogsftpresponse.md)>**


## listLogSftp

List all of the SFTPs for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListLogSftpResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingSftp.listLogSftp({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: ListLogSftpResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.ListLogSftpRequest](../../models/operations/listlogsftprequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.ListLogSftpResponse](../../models/operations/listlogsftpresponse.md)>**


## updateLogSftp

Update the SFTP for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateLogSftpResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingSftpCompressionCodec,
  LoggingSftpFormatVersion,
  LoggingSftpMessageType,
  LoggingSftpPlacement,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingSftp.updateLogSftp({
  loggingSftpInput: {
    address: "example.com",
    compressionCodec: LoggingSftpCompressionCodec.Gzip,
    format: "%h %l %u %t \"%r\" %&gt;s %b",
    formatVersion: LoggingSftpFormatVersion.One,
    gzipLevel: 0,
    messageType: LoggingSftpMessageType.Classic,
    name: "test-log-endpoint",
    password: "URboNeTxmiD9bUI",
    path: "/Library",
    period: 3600,
    placement: LoggingSftpPlacement.LessThanNilGreaterThan,
    port: 844898,
    publicKey: "-----BEGIN PRIVATE KEY-----
  ...
  -----END PRIVATE KEY-----
  ",
    responseCondition: "null",
    secretKey: "Cambridgeshire",
    sshKnownHosts: "why Frozen brr",
    user: "Josiah49",
  },
  loggingSftpName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: UpdateLogSftpResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.UpdateLogSftpRequest](../../models/operations/updatelogsftprequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.UpdateLogSftpResponse](../../models/operations/updatelogsftpresponse.md)>**


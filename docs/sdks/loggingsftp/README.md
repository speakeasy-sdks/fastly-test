# loggingSftp

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
import { CreateLogSftpResponse, CreateLogSftpSecurity } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingSftpCompressionCodec,
  LoggingSftpFormatVersion,
  LoggingSftpMessageType,
  LoggingSftpPlacement,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();
const operationSecurity: CreateLogSftpSecurity = {
  token: "",
};

sdk.loggingSftp.createLogSftp({
  loggingSftpInput: {
    address: "example.com",
    compressionCodec: LoggingSftpCompressionCodec.Snappy,
    format: "%h %l %u %t "%r" %&gt;s %b",
    formatVersion: LoggingSftpFormatVersion.Two,
    gzipLevel: 0,
    messageType: LoggingSftpMessageType.Classic,
    name: "test-log-endpoint",
    password: "aliquam",
    path: "odio",
    period: 3600,
    placement: LoggingSftpPlacement.WafDebug,
    port: 414567,
    publicKey: "-----BEGIN PRIVATE KEY-----
  ...
  -----END PRIVATE KEY-----
  ",
    responseCondition: "null",
    secretKey: "sapiente",
    sshKnownHosts: "dolores",
    user: "deserunt",
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: CreateLogSftpResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.CreateLogSftpRequest](../../models/operations/createlogsftprequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.CreateLogSftpSecurity](../../models/operations/createlogsftpsecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CreateLogSftpResponse](../../models/operations/createlogsftpresponse.md)>**


## deleteLogSftp

Delete the SFTP for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteLogSftpResponse, DeleteLogSftpSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: DeleteLogSftpSecurity = {
  token: "",
};

sdk.loggingSftp.deleteLogSftp({
  loggingSftpName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: DeleteLogSftpResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.DeleteLogSftpRequest](../../models/operations/deletelogsftprequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.DeleteLogSftpSecurity](../../models/operations/deletelogsftpsecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.DeleteLogSftpResponse](../../models/operations/deletelogsftpresponse.md)>**


## getLogSftp

Get the SFTP for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetLogSftpResponse, GetLogSftpSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: GetLogSftpSecurity = {
  token: "",
};

sdk.loggingSftp.getLogSftp({
  loggingSftpName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: GetLogSftpResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetLogSftpRequest](../../models/operations/getlogsftprequest.md)   | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `security`                                                                     | [operations.GetLogSftpSecurity](../../models/operations/getlogsftpsecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetLogSftpResponse](../../models/operations/getlogsftpresponse.md)>**


## listLogSftp

List all of the SFTPs for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListLogSftpResponse, ListLogSftpSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: ListLogSftpSecurity = {
  token: "",
};

sdk.loggingSftp.listLogSftp({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: ListLogSftpResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.ListLogSftpRequest](../../models/operations/listlogsftprequest.md)   | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `security`                                                                       | [operations.ListLogSftpSecurity](../../models/operations/listlogsftpsecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ListLogSftpResponse](../../models/operations/listlogsftpresponse.md)>**


## updateLogSftp

Update the SFTP for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateLogSftpResponse, UpdateLogSftpSecurity } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingSftpCompressionCodec,
  LoggingSftpFormatVersion,
  LoggingSftpMessageType,
  LoggingSftpPlacement,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();
const operationSecurity: UpdateLogSftpSecurity = {
  token: "",
};

sdk.loggingSftp.updateLogSftp({
  loggingSftpInput: {
    address: "example.com",
    compressionCodec: LoggingSftpCompressionCodec.Snappy,
    format: "%h %l %u %t "%r" %&gt;s %b",
    formatVersion: LoggingSftpFormatVersion.One,
    gzipLevel: 0,
    messageType: LoggingSftpMessageType.Classic,
    name: "test-log-endpoint",
    password: "porro",
    path: "eum",
    period: 3600,
    placement: LoggingSftpPlacement.WafDebug,
    port: 510017,
    publicKey: "-----BEGIN PRIVATE KEY-----
  ...
  -----END PRIVATE KEY-----
  ",
    responseCondition: "null",
    secretKey: "consequuntur",
    sshKnownHosts: "deleniti",
    user: "fugit",
  },
  loggingSftpName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: UpdateLogSftpResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.UpdateLogSftpRequest](../../models/operations/updatelogsftprequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.UpdateLogSftpSecurity](../../models/operations/updatelogsftpsecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdateLogSftpResponse](../../models/operations/updatelogsftpresponse.md)>**


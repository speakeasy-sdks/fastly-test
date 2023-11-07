# LoggingFtp
(*.loggingFtp*)

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
import { Fastly } from "Fastly";
import {
  LoggingFtp,
  LoggingFtpCompressionCodec,
  LoggingFtpFormatVersion,
  LoggingFtpMessageType,
  LoggingFtpPlacement,
} from "Fastly/dist/sdk/models/components";
import { CreateLogFtpRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingFtp: LoggingFtp = {
  format: "%h %l %u %t \"%r\" %&gt;s %b",
  formatVersion: LoggingFtpFormatVersion.Two,
  gzipLevel: 0,
  messageType: LoggingFtpMessageType.Classic,
  name: "test-log-endpoint",
  period: 3600,
  placement: LoggingFtpPlacement.LessThanNilGreaterThan,
  publicKey: "-----BEGIN PRIVATE KEY-----
...
-----END PRIVATE KEY-----
",
  responseCondition: "null",
};

  const res = await sdk.loggingFtp.createLogFtp(serviceId, versionId, loggingFtp);


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
| `loggingFtp`                                                 | [components.LoggingFtp](../../models/shared/loggingftp.md)   | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.CreateLogFtpResponse](../../models/operations/createlogftpresponse.md)>**


## deleteLogFtp

Delete the FTP for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteLogFtpRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingFtpName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingFtp.deleteLogFtp(loggingFtpName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingFtpName`                                             | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteLogFtpResponse](../../models/operations/deletelogftpresponse.md)>**


## getLogFtp

Get the FTP for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetLogFtpRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingFtpName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingFtp.getLogFtp(loggingFtpName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingFtpName`                                             | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetLogFtpResponse](../../models/operations/getlogftpresponse.md)>**


## listLogFtp

List all of the FTPs for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListLogFtpRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingFtp.listLogFtp(serviceId, versionId);


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

**Promise<[operations.ListLogFtpResponse](../../models/operations/listlogftpresponse.md)>**


## updateLogFtp

Update the FTP for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  LoggingFtp,
  LoggingFtpCompressionCodec,
  LoggingFtpFormatVersion,
  LoggingFtpMessageType,
  LoggingFtpPlacement,
} from "Fastly/dist/sdk/models/components";
import { UpdateLogFtpRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingFtpName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingFtp: LoggingFtp = {
  format: "%h %l %u %t \"%r\" %&gt;s %b",
  formatVersion: LoggingFtpFormatVersion.Two,
  gzipLevel: 0,
  messageType: LoggingFtpMessageType.Classic,
  name: "test-log-endpoint",
  period: 3600,
  placement: LoggingFtpPlacement.None,
  publicKey: "-----BEGIN PRIVATE KEY-----
...
-----END PRIVATE KEY-----
",
  responseCondition: "null",
};

  const res = await sdk.loggingFtp.updateLogFtp(loggingFtpName, serviceId, versionId, loggingFtp);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingFtpName`                                             | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `loggingFtp`                                                 | [components.LoggingFtp](../../models/shared/loggingftp.md)   | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.UpdateLogFtpResponse](../../models/operations/updatelogftpresponse.md)>**


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
import { Fastly } from "Fastly";
import {
  LoggingSftpCompressionCodec,
  LoggingSftpFormatVersion,
  LoggingSftpMessageType,
  LoggingSftpPlacement,
} from "Fastly/dist/sdk/models/components";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.loggingSftp.createLogSftp({
    loggingSftp: {
      address: "example.com",
      format: "%h %l %u %t \"%r\" %&gt;s %b",
      formatVersion: LoggingSftpFormatVersion.Two,
      gzipLevel: 0,
      messageType: LoggingSftpMessageType.Classic,
      name: "test-log-endpoint",
      period: 3600,
      placement: LoggingSftpPlacement.None,
      publicKey: "-----BEGIN PRIVATE KEY-----
    ...
    -----END PRIVATE KEY-----
    ",
      responseCondition: "string",
    },
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.CreateLogSftpRequest](../../sdk/models/operations/createlogsftprequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CreateLogSftpResponse](../../sdk/models/operations/createlogsftpresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## deleteLogSftp

Delete the SFTP for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.loggingSftp.deleteLogSftp({
    loggingSftpName: "test-log-endpoint",
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.DeleteLogSftpRequest](../../sdk/models/operations/deletelogsftprequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.DeleteLogSftpResponse](../../sdk/models/operations/deletelogsftpresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getLogSftp

Get the SFTP for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.loggingSftp.getLogSftp({
    loggingSftpName: "test-log-endpoint",
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetLogSftpRequest](../../sdk/models/operations/getlogsftprequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetLogSftpResponse](../../sdk/models/operations/getlogsftpresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listLogSftp

List all of the SFTPs for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.loggingSftp.listLogSftp({
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.ListLogSftpRequest](../../sdk/models/operations/listlogsftprequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.ListLogSftpResponse](../../sdk/models/operations/listlogsftpresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateLogSftp

Update the SFTP for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  LoggingSftpCompressionCodec,
  LoggingSftpFormatVersion,
  LoggingSftpMessageType,
  LoggingSftpPlacement,
} from "Fastly/dist/sdk/models/components";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.loggingSftp.updateLogSftp({
    loggingSftp: {
      address: "example.com",
      format: "%h %l %u %t \"%r\" %&gt;s %b",
      formatVersion: LoggingSftpFormatVersion.Two,
      gzipLevel: 0,
      messageType: LoggingSftpMessageType.Classic,
      name: "test-log-endpoint",
      period: 3600,
      placement: LoggingSftpPlacement.LessThanNilGreaterThan,
      publicKey: "-----BEGIN PRIVATE KEY-----
    ...
    -----END PRIVATE KEY-----
    ",
      responseCondition: "string",
    },
    loggingSftpName: "test-log-endpoint",
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.UpdateLogSftpRequest](../../sdk/models/operations/updatelogsftprequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.UpdateLogSftpResponse](../../sdk/models/operations/updatelogsftpresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

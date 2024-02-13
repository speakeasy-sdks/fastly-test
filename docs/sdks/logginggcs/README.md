# LoggingGcs
(*loggingGcs*)

## Overview

Fastly will upload log messages to the GCS bucket in the format specified in the GCS object.

<https://developer.fastly.com/reference/api/logging/gcs>
### Available Operations

* [createLogGcs](#createloggcs) - Create a GCS log endpoint
* [deleteLogGcs](#deleteloggcs) - Delete a GCS log endpoint
* [getLogGcs](#getloggcs) - Get a GCS log endpoint
* [listLogGcs](#listloggcs) - List GCS log endpoints
* [updateLogGcs](#updateloggcs) - Update a GCS log endpoint

## createLogGcs

Create GCS logging for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  LoggingGcsCompressionCodec,
  LoggingGcsFormatVersion,
  LoggingGcsMessageType,
  LoggingGcsPlacement,
} from "Fastly/dist/sdk/models/components";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.loggingGcs.createLogGcs({
    loggingGcs: {
      accountName: "test-user@test-project-id.iam.gserviceaccount.com",
      format: "%h %l %u %t \"%r\" %&gt;s %b",
      formatVersion: LoggingGcsFormatVersion.Two,
      gzipLevel: 0,
      messageType: LoggingGcsMessageType.Classic,
      name: "test-log-endpoint",
      period: 3600,
      placement: LoggingGcsPlacement.LessThanNilGreaterThan,
      projectId: "test-project-id",
      publicKey: "-----BEGIN PRIVATE KEY-----
    ...
    -----END PRIVATE KEY-----
    ",
      responseCondition: null,
      secretKey: "-----BEGIN PRIVATE KEY-----
    ...
    -----END PRIVATE KEY-----
    ",
      user: "test-user@test-project-id.iam.gserviceaccount.com",
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

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.CreateLogGcsRequest](../../sdk/models/operations/createloggcsrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CreateLogGcsResponse](../../sdk/models/operations/createloggcsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## deleteLogGcs

Delete the GCS Logging for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.loggingGcs.deleteLogGcs({
    loggingGcsName: "test-log-endpoint",
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

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.DeleteLogGcsRequest](../../sdk/models/operations/deleteloggcsrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.DeleteLogGcsResponse](../../sdk/models/operations/deleteloggcsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getLogGcs

Get the GCS Logging for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.loggingGcs.getLogGcs({
    loggingGcsName: "test-log-endpoint",
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

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetLogGcsRequest](../../sdk/models/operations/getloggcsrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetLogGcsResponse](../../sdk/models/operations/getloggcsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listLogGcs

List all of the GCS log endpoints for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.loggingGcs.listLogGcs({
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
| `request`                                                                        | [operations.ListLogGcsRequest](../../sdk/models/operations/listloggcsrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ListLogGcsResponse](../../sdk/models/operations/listloggcsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateLogGcs

Update the GCS for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  LoggingGcsCompressionCodec,
  LoggingGcsFormatVersion,
  LoggingGcsMessageType,
  LoggingGcsPlacement,
} from "Fastly/dist/sdk/models/components";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.loggingGcs.updateLogGcs({
    loggingGcs: {
      accountName: "test-user@test-project-id.iam.gserviceaccount.com",
      format: "%h %l %u %t \"%r\" %&gt;s %b",
      formatVersion: LoggingGcsFormatVersion.Two,
      gzipLevel: 0,
      messageType: LoggingGcsMessageType.Classic,
      name: "test-log-endpoint",
      period: 3600,
      placement: LoggingGcsPlacement.WafDebug,
      projectId: "test-project-id",
      publicKey: "-----BEGIN PRIVATE KEY-----
    ...
    -----END PRIVATE KEY-----
    ",
      responseCondition: null,
      secretKey: "-----BEGIN PRIVATE KEY-----
    ...
    -----END PRIVATE KEY-----
    ",
      user: "test-user@test-project-id.iam.gserviceaccount.com",
    },
    loggingGcsName: "test-log-endpoint",
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

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.UpdateLogGcsRequest](../../sdk/models/operations/updateloggcsrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdateLogGcsResponse](../../sdk/models/operations/updateloggcsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

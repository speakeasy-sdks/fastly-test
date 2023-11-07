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
import { Fastly } from "FastlyTestJS";
import {
  LoggingGcsCompressionCodec,
  LoggingGcsFormatVersion,
  LoggingGcsMessageType,
  LoggingGcsPlacement,
} from "FastlyTestJS/dist/sdk/models/shared";

(async() => {
  const sdk = new Fastly({
    security: {
      token: "",
    },
  });

  const res = await sdk.loggingGcs.createLogGcs({
    loggingGcsInput: {
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
      responseCondition: "null",
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
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.CreateLogGcsRequest](../../models/operations/createloggcsrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.CreateLogGcsResponse](../../models/operations/createloggcsresponse.md)>**


## deleteLogGcs

Delete the GCS Logging for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    security: {
      token: "",
    },
  });

  const res = await sdk.loggingGcs.deleteLogGcs({
    loggingGcsName: "test-log-endpoint",
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
| `request`                                                                        | [operations.DeleteLogGcsRequest](../../models/operations/deleteloggcsrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.DeleteLogGcsResponse](../../models/operations/deleteloggcsresponse.md)>**


## getLogGcs

Get the GCS Logging for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    security: {
      token: "",
    },
  });

  const res = await sdk.loggingGcs.getLogGcs({
    loggingGcsName: "test-log-endpoint",
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.GetLogGcsRequest](../../models/operations/getloggcsrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.GetLogGcsResponse](../../models/operations/getloggcsresponse.md)>**


## listLogGcs

List all of the GCS log endpoints for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    security: {
      token: "",
    },
  });

  const res = await sdk.loggingGcs.listLogGcs({
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.ListLogGcsRequest](../../models/operations/listloggcsrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.ListLogGcsResponse](../../models/operations/listloggcsresponse.md)>**


## updateLogGcs

Update the GCS for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import {
  LoggingGcsCompressionCodec,
  LoggingGcsFormatVersion,
  LoggingGcsMessageType,
  LoggingGcsPlacement,
} from "FastlyTestJS/dist/sdk/models/shared";

(async() => {
  const sdk = new Fastly({
    security: {
      token: "",
    },
  });

  const res = await sdk.loggingGcs.updateLogGcs({
    loggingGcsInput: {
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
      responseCondition: "null",
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
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.UpdateLogGcsRequest](../../models/operations/updateloggcsrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.UpdateLogGcsResponse](../../models/operations/updateloggcsresponse.md)>**


# LoggingDigitalocean
(*loggingDigitalocean*)

## Overview

Fastly will upload log messages to the DigitalOcean Space in the format specified in the DigitalOcean Spaces object.

<https://developer.fastly.com/reference/api/logging/digitalocean>
### Available Operations

* [createLogDigocean](#createlogdigocean) - Create a DigitalOcean Spaces log endpoint
* [deleteLogDigocean](#deletelogdigocean) - Delete a DigitalOcean Spaces log endpoint
* [getLogDigocean](#getlogdigocean) - Get a DigitalOcean Spaces log endpoint
* [listLogDigocean](#listlogdigocean) - List DigitalOcean Spaces log endpoints
* [updateLogDigocean](#updatelogdigocean) - Update a DigitalOcean Spaces log endpoint

## createLogDigocean

Create a DigitalOcean Space for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateLogDigoceanResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingDigitaloceanCompressionCodec,
  LoggingDigitaloceanFormatVersion,
  LoggingDigitaloceanMessageType,
  LoggingDigitaloceanPlacement,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingDigitalocean.createLogDigocean({
  loggingDigitaloceanInput: {
    accessKey: "id",
    bucketName: "saepe",
    compressionCodec: LoggingDigitaloceanCompressionCodec.Zstd,
    domain: "aspernatur",
    format: "%h %l %u %t "%r" %&gt;s %b",
    formatVersion: LoggingDigitaloceanFormatVersion.One,
    gzipLevel: 0,
    messageType: LoggingDigitaloceanMessageType.Classic,
    name: "test-log-endpoint",
    path: "amet",
    period: 3600,
    placement: LoggingDigitaloceanPlacement.LessThanNilGreaterThan,
    publicKey: "-----BEGIN PRIVATE KEY-----
  ...
  -----END PRIVATE KEY-----
  ",
    responseCondition: "null",
    secretKey: "accusamus",
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: CreateLogDigoceanResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.CreateLogDigoceanRequest](../../models/operations/createlogdigoceanrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CreateLogDigoceanResponse](../../models/operations/createlogdigoceanresponse.md)>**


## deleteLogDigocean

Delete the DigitalOcean Space for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteLogDigoceanResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingDigitalocean.deleteLogDigocean({
  loggingDigitaloceanName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: DeleteLogDigoceanResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.DeleteLogDigoceanRequest](../../models/operations/deletelogdigoceanrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.DeleteLogDigoceanResponse](../../models/operations/deletelogdigoceanresponse.md)>**


## getLogDigocean

Get the DigitalOcean Space for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetLogDigoceanResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingDigitalocean.getLogDigocean({
  loggingDigitaloceanName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: GetLogDigoceanResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetLogDigoceanRequest](../../models/operations/getlogdigoceanrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetLogDigoceanResponse](../../models/operations/getlogdigoceanresponse.md)>**


## listLogDigocean

List all of the DigitalOcean Spaces for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListLogDigoceanResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingDigitalocean.listLogDigocean({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: ListLogDigoceanResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.ListLogDigoceanRequest](../../models/operations/listlogdigoceanrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.ListLogDigoceanResponse](../../models/operations/listlogdigoceanresponse.md)>**


## updateLogDigocean

Update the DigitalOcean Space for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateLogDigoceanResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingDigitaloceanCompressionCodec,
  LoggingDigitaloceanFormatVersion,
  LoggingDigitaloceanMessageType,
  LoggingDigitaloceanPlacement,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingDigitalocean.updateLogDigocean({
  loggingDigitaloceanInput: {
    accessKey: "ad",
    bucketName: "saepe",
    compressionCodec: LoggingDigitaloceanCompressionCodec.Snappy,
    domain: "deserunt",
    format: "%h %l %u %t "%r" %&gt;s %b",
    formatVersion: LoggingDigitaloceanFormatVersion.Two,
    gzipLevel: 0,
    messageType: LoggingDigitaloceanMessageType.Classic,
    name: "test-log-endpoint",
    path: "minima",
    period: 3600,
    placement: LoggingDigitaloceanPlacement.LessThanNilGreaterThan,
    publicKey: "-----BEGIN PRIVATE KEY-----
  ...
  -----END PRIVATE KEY-----
  ",
    responseCondition: "null",
    secretKey: "totam",
  },
  loggingDigitaloceanName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: UpdateLogDigoceanResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.UpdateLogDigoceanRequest](../../models/operations/updatelogdigoceanrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.UpdateLogDigoceanResponse](../../models/operations/updatelogdigoceanresponse.md)>**


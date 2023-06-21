# loggingCloudfiles

## Overview

Fastly will upload log messages to your Rackspace Cloud Files account.

<https://developer.fastly.com/reference/api/logging/cloudfiles>
### Available Operations

* [createLogCloudfiles](#createlogcloudfiles) - Create a Cloud Files log endpoint
* [deleteLogCloudfiles](#deletelogcloudfiles) - Delete the Cloud Files log endpoint
* [getLogCloudfiles](#getlogcloudfiles) - Get a Cloud Files log endpoint
* [listLogCloudfiles](#listlogcloudfiles) - List Cloud Files log endpoints
* [updateLogCloudfiles](#updatelogcloudfiles) - Update the Cloud Files log endpoint

## createLogCloudfiles

Create a Cloud Files log endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateLogCloudfilesResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingCloudfilesCompressionCodec,
  LoggingCloudfilesFormatVersion,
  LoggingCloudfilesMessageType,
  LoggingCloudfilesPlacement,
  LoggingCloudfilesRegion,
  LoggingCloudfilesResponseCompressionCodec,
  LoggingCloudfilesResponseFormatVersion,
  LoggingCloudfilesResponseMessageType,
  LoggingCloudfilesResponsePlacement,
  LoggingCloudfilesResponseRegion,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingCloudfiles.createLogCloudfiles({
  loggingCloudfilesInput: {
    accessKey: "illum",
    bucketName: "sequi",
    compressionCodec: LoggingCloudfilesCompressionCodec.Snappy,
    format: "%h %l %u %t "%r" %&gt;s %b",
    formatVersion: LoggingCloudfilesFormatVersion.Two,
    gzipLevel: 0,
    messageType: LoggingCloudfilesMessageType.Classic,
    name: "test-log-endpoint",
    path: "aut",
    period: 3600,
    placement: LoggingCloudfilesPlacement.LessThanNilGreaterThan,
    publicKey: "-----BEGIN PRIVATE KEY-----
  ...
  -----END PRIVATE KEY-----
  ",
    region: LoggingCloudfilesRegion.Iad,
    responseCondition: "null",
    user: "nulla",
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: CreateLogCloudfilesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.CreateLogCloudfilesRequest](../../models/operations/createlogcloudfilesrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.CreateLogCloudfilesSecurity](../../models/operations/createlogcloudfilessecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.CreateLogCloudfilesResponse](../../models/operations/createlogcloudfilesresponse.md)>**


## deleteLogCloudfiles

Delete the Cloud Files log endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteLogCloudfilesResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.loggingCloudfiles.deleteLogCloudfiles({
  loggingCloudfilesName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: DeleteLogCloudfilesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.DeleteLogCloudfilesRequest](../../models/operations/deletelogcloudfilesrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.DeleteLogCloudfilesSecurity](../../models/operations/deletelogcloudfilessecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.DeleteLogCloudfilesResponse](../../models/operations/deletelogcloudfilesresponse.md)>**


## getLogCloudfiles

Get the Cloud Files log endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetLogCloudfilesResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingCloudfilesResponseCompressionCodec,
  LoggingCloudfilesResponseFormatVersion,
  LoggingCloudfilesResponseMessageType,
  LoggingCloudfilesResponsePlacement,
  LoggingCloudfilesResponseRegion,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingCloudfiles.getLogCloudfiles({
  loggingCloudfilesName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: GetLogCloudfilesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetLogCloudfilesRequest](../../models/operations/getlogcloudfilesrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.GetLogCloudfilesSecurity](../../models/operations/getlogcloudfilessecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetLogCloudfilesResponse](../../models/operations/getlogcloudfilesresponse.md)>**


## listLogCloudfiles

List all of the Cloud Files log endpoints for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListLogCloudfilesResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingCloudfilesResponseCompressionCodec,
  LoggingCloudfilesResponseFormatVersion,
  LoggingCloudfilesResponseMessageType,
  LoggingCloudfilesResponsePlacement,
  LoggingCloudfilesResponseRegion,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingCloudfiles.listLogCloudfiles({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: ListLogCloudfilesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.ListLogCloudfilesRequest](../../models/operations/listlogcloudfilesrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.ListLogCloudfilesSecurity](../../models/operations/listlogcloudfilessecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ListLogCloudfilesResponse](../../models/operations/listlogcloudfilesresponse.md)>**


## updateLogCloudfiles

Update the Cloud Files log endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateLogCloudfilesResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingCloudfilesCompressionCodec,
  LoggingCloudfilesFormatVersion,
  LoggingCloudfilesMessageType,
  LoggingCloudfilesPlacement,
  LoggingCloudfilesRegion,
  LoggingCloudfilesResponseCompressionCodec,
  LoggingCloudfilesResponseFormatVersion,
  LoggingCloudfilesResponseMessageType,
  LoggingCloudfilesResponsePlacement,
  LoggingCloudfilesResponseRegion,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingCloudfiles.updateLogCloudfiles({
  loggingCloudfilesInput: {
    accessKey: "fugit",
    bucketName: "porro",
    compressionCodec: LoggingCloudfilesCompressionCodec.Gzip,
    format: "%h %l %u %t "%r" %&gt;s %b",
    formatVersion: LoggingCloudfilesFormatVersion.Two,
    gzipLevel: 0,
    messageType: LoggingCloudfilesMessageType.Classic,
    name: "test-log-endpoint",
    path: "iusto",
    period: 3600,
    placement: LoggingCloudfilesPlacement.LessThanNilGreaterThan,
    publicKey: "-----BEGIN PRIVATE KEY-----
  ...
  -----END PRIVATE KEY-----
  ",
    region: LoggingCloudfilesRegion.Lon,
    responseCondition: "null",
    user: "alias",
  },
  loggingCloudfilesName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: UpdateLogCloudfilesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.UpdateLogCloudfilesRequest](../../models/operations/updatelogcloudfilesrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.UpdateLogCloudfilesSecurity](../../models/operations/updatelogcloudfilessecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.UpdateLogCloudfilesResponse](../../models/operations/updatelogcloudfilesresponse.md)>**


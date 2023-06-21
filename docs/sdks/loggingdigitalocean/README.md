# loggingDigitalocean

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
  LoggingDigitaloceanResponseCompressionCodec,
  LoggingDigitaloceanResponseFormatVersion,
  LoggingDigitaloceanResponseMessageType,
  LoggingDigitaloceanResponsePlacement,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingDigitalocean.createLogDigocean({
  loggingDigitaloceanInput: {
    accessKey: "laudantium",
    bucketName: "dicta",
    compressionCodec: LoggingDigitaloceanCompressionCodec.Zstd,
    domain: "maiores",
    format: "%h %l %u %t "%r" %&gt;s %b",
    formatVersion: LoggingDigitaloceanFormatVersion.One,
    gzipLevel: 0,
    messageType: LoggingDigitaloceanMessageType.Classic,
    name: "test-log-endpoint",
    path: "ex",
    period: 3600,
    placement: LoggingDigitaloceanPlacement.LessThanNilGreaterThan,
    publicKey: "-----BEGIN PRIVATE KEY-----
  ...
  -----END PRIVATE KEY-----
  ",
    responseCondition: "null",
    secretKey: "excepturi",
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: CreateLogDigoceanResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.CreateLogDigoceanRequest](../../models/operations/createlogdigoceanrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.CreateLogDigoceanSecurity](../../models/operations/createlogdigoceansecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.CreateLogDigoceanResponse](../../models/operations/createlogdigoceanresponse.md)>**


## deleteLogDigocean

Delete the DigitalOcean Space for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteLogDigoceanResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.loggingDigitalocean.deleteLogDigocean({
  loggingDigitaloceanName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: DeleteLogDigoceanResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.DeleteLogDigoceanRequest](../../models/operations/deletelogdigoceanrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.DeleteLogDigoceanSecurity](../../models/operations/deletelogdigoceansecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.DeleteLogDigoceanResponse](../../models/operations/deletelogdigoceanresponse.md)>**


## getLogDigocean

Get the DigitalOcean Space for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetLogDigoceanResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingDigitaloceanResponseCompressionCodec,
  LoggingDigitaloceanResponseFormatVersion,
  LoggingDigitaloceanResponseMessageType,
  LoggingDigitaloceanResponsePlacement,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingDigitalocean.getLogDigocean({
  loggingDigitaloceanName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: GetLogDigoceanResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetLogDigoceanRequest](../../models/operations/getlogdigoceanrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.GetLogDigoceanSecurity](../../models/operations/getlogdigoceansecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetLogDigoceanResponse](../../models/operations/getlogdigoceanresponse.md)>**


## listLogDigocean

List all of the DigitalOcean Spaces for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListLogDigoceanResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingDigitaloceanResponseCompressionCodec,
  LoggingDigitaloceanResponseFormatVersion,
  LoggingDigitaloceanResponseMessageType,
  LoggingDigitaloceanResponsePlacement,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingDigitalocean.listLogDigocean({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: ListLogDigoceanResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.ListLogDigoceanRequest](../../models/operations/listlogdigoceanrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.ListLogDigoceanSecurity](../../models/operations/listlogdigoceansecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


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
  LoggingDigitaloceanResponseCompressionCodec,
  LoggingDigitaloceanResponseFormatVersion,
  LoggingDigitaloceanResponseMessageType,
  LoggingDigitaloceanResponsePlacement,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingDigitalocean.updateLogDigocean({
  loggingDigitaloceanInput: {
    accessKey: "voluptatibus",
    bucketName: "nostrum",
    compressionCodec: LoggingDigitaloceanCompressionCodec.Gzip,
    domain: "quisquam",
    format: "%h %l %u %t "%r" %&gt;s %b",
    formatVersion: LoggingDigitaloceanFormatVersion.Two,
    gzipLevel: 0,
    messageType: LoggingDigitaloceanMessageType.Classic,
    name: "test-log-endpoint",
    path: "ea",
    period: 3600,
    placement: LoggingDigitaloceanPlacement.LessThanNilGreaterThan,
    publicKey: "-----BEGIN PRIVATE KEY-----
  ...
  -----END PRIVATE KEY-----
  ",
    responseCondition: "null",
    secretKey: "corporis",
  },
  loggingDigitaloceanName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: UpdateLogDigoceanResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.UpdateLogDigoceanRequest](../../models/operations/updatelogdigoceanrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.UpdateLogDigoceanSecurity](../../models/operations/updatelogdigoceansecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.UpdateLogDigoceanResponse](../../models/operations/updatelogdigoceanresponse.md)>**


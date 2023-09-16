# LoggingOpenstack

## Overview

Fastly will upload log messages to the OpenStack bucket in the format specified in the openstack object.

<https://developer.fastly.com/reference/api/logging/openstack>
### Available Operations

* [createLogOpenstack](#createlogopenstack) - Create an OpenStack log endpoint
* [deleteLogOpenstack](#deletelogopenstack) - Delete an OpenStack log endpoint
* [getLogOpenstack](#getlogopenstack) - Get an OpenStack log endpoint
* [listLogOpenstack](#listlogopenstack) - List OpenStack log endpoints
* [updateLogOpenstack](#updatelogopenstack) - Update an OpenStack log endpoint

## createLogOpenstack

Create a openstack for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateLogOpenstackResponse, CreateLogOpenstackSecurity } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingOpenstackCompressionCodec,
  LoggingOpenstackFormatVersion,
  LoggingOpenstackMessageType,
  LoggingOpenstackPlacement,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();
const operationSecurity: CreateLogOpenstackSecurity = {
  token: "",
};

sdk.loggingOpenstack.createLogOpenstack({
  loggingOpenstackInput: {
    accessKey: "laborum",
    bucketName: "placeat",
    compressionCodec: LoggingOpenstackCompressionCodec.Zstd,
    format: "%h %l %u %t "%r" %&gt;s %b",
    formatVersion: LoggingOpenstackFormatVersion.One,
    gzipLevel: 0,
    messageType: LoggingOpenstackMessageType.Classic,
    name: "test-log-endpoint",
    path: "autem",
    period: 3600,
    placement: LoggingOpenstackPlacement.LessThanNilGreaterThan,
    publicKey: "-----BEGIN PRIVATE KEY-----
  ...
  -----END PRIVATE KEY-----
  ",
    responseCondition: "null",
    url: "quas",
    user: "assumenda",
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: CreateLogOpenstackResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.CreateLogOpenstackRequest](../../models/operations/createlogopenstackrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.CreateLogOpenstackSecurity](../../models/operations/createlogopenstacksecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.CreateLogOpenstackResponse](../../models/operations/createlogopenstackresponse.md)>**


## deleteLogOpenstack

Delete the openstack for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteLogOpenstackResponse, DeleteLogOpenstackSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: DeleteLogOpenstackSecurity = {
  token: "",
};

sdk.loggingOpenstack.deleteLogOpenstack({
  loggingOpenstackName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: DeleteLogOpenstackResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.DeleteLogOpenstackRequest](../../models/operations/deletelogopenstackrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.DeleteLogOpenstackSecurity](../../models/operations/deletelogopenstacksecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.DeleteLogOpenstackResponse](../../models/operations/deletelogopenstackresponse.md)>**


## getLogOpenstack

Get the openstack for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetLogOpenstackResponse, GetLogOpenstackSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: GetLogOpenstackSecurity = {
  token: "",
};

sdk.loggingOpenstack.getLogOpenstack({
  loggingOpenstackName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: GetLogOpenstackResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetLogOpenstackRequest](../../models/operations/getlogopenstackrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.GetLogOpenstackSecurity](../../models/operations/getlogopenstacksecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetLogOpenstackResponse](../../models/operations/getlogopenstackresponse.md)>**


## listLogOpenstack

List all of the openstacks for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListLogOpenstackResponse, ListLogOpenstackSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: ListLogOpenstackSecurity = {
  token: "",
};

sdk.loggingOpenstack.listLogOpenstack({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: ListLogOpenstackResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.ListLogOpenstackRequest](../../models/operations/listlogopenstackrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.ListLogOpenstackSecurity](../../models/operations/listlogopenstacksecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ListLogOpenstackResponse](../../models/operations/listlogopenstackresponse.md)>**


## updateLogOpenstack

Update the openstack for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateLogOpenstackResponse, UpdateLogOpenstackSecurity } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingOpenstackCompressionCodec,
  LoggingOpenstackFormatVersion,
  LoggingOpenstackMessageType,
  LoggingOpenstackPlacement,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();
const operationSecurity: UpdateLogOpenstackSecurity = {
  token: "",
};

sdk.loggingOpenstack.updateLogOpenstack({
  loggingOpenstackInput: {
    accessKey: "nulla",
    bucketName: "voluptas",
    compressionCodec: LoggingOpenstackCompressionCodec.Gzip,
    format: "%h %l %u %t "%r" %&gt;s %b",
    formatVersion: LoggingOpenstackFormatVersion.One,
    gzipLevel: 0,
    messageType: LoggingOpenstackMessageType.Classic,
    name: "test-log-endpoint",
    path: "tempora",
    period: 3600,
    placement: LoggingOpenstackPlacement.None,
    publicKey: "-----BEGIN PRIVATE KEY-----
  ...
  -----END PRIVATE KEY-----
  ",
    responseCondition: "null",
    url: "explicabo",
    user: "provident",
  },
  loggingOpenstackName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: UpdateLogOpenstackResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.UpdateLogOpenstackRequest](../../models/operations/updatelogopenstackrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.UpdateLogOpenstackSecurity](../../models/operations/updatelogopenstacksecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.UpdateLogOpenstackResponse](../../models/operations/updatelogopenstackresponse.md)>**


# LoggingOpenstack
(*loggingOpenstack*)

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
import {
  LoggingOpenstackCompressionCodec,
  LoggingOpenstackFormatVersion,
  LoggingOpenstackMessageType,
  LoggingOpenstackPlacement,
} from "FastlyTestJS/dist/sdk/models/shared";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingOpenstack.createLogOpenstack({
    loggingOpenstackInput: {
      format: "%h %l %u %t \"%r\" %&gt;s %b",
      formatVersion: LoggingOpenstackFormatVersion.Two,
      gzipLevel: 0,
      messageType: LoggingOpenstackMessageType.Classic,
      name: "test-log-endpoint",
      period: 3600,
      placement: LoggingOpenstackPlacement.WafDebug,
      publicKey: "-----BEGIN PRIVATE KEY-----
    ...
    -----END PRIVATE KEY-----
    ",
      responseCondition: "null",
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

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.CreateLogOpenstackRequest](../../models/operations/createlogopenstackrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.CreateLogOpenstackResponse](../../models/operations/createlogopenstackresponse.md)>**


## deleteLogOpenstack

Delete the openstack for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingOpenstack.deleteLogOpenstack({
    loggingOpenstackName: "test-log-endpoint",
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.DeleteLogOpenstackRequest](../../models/operations/deletelogopenstackrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.DeleteLogOpenstackResponse](../../models/operations/deletelogopenstackresponse.md)>**


## getLogOpenstack

Get the openstack for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingOpenstack.getLogOpenstack({
    loggingOpenstackName: "test-log-endpoint",
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetLogOpenstackRequest](../../models/operations/getlogopenstackrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetLogOpenstackResponse](../../models/operations/getlogopenstackresponse.md)>**


## listLogOpenstack

List all of the openstacks for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingOpenstack.listLogOpenstack({
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.ListLogOpenstackRequest](../../models/operations/listlogopenstackrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.ListLogOpenstackResponse](../../models/operations/listlogopenstackresponse.md)>**


## updateLogOpenstack

Update the openstack for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import {
  LoggingOpenstackCompressionCodec,
  LoggingOpenstackFormatVersion,
  LoggingOpenstackMessageType,
  LoggingOpenstackPlacement,
} from "FastlyTestJS/dist/sdk/models/shared";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingOpenstack.updateLogOpenstack({
    loggingOpenstackInput: {
      format: "%h %l %u %t \"%r\" %&gt;s %b",
      formatVersion: LoggingOpenstackFormatVersion.Two,
      gzipLevel: 0,
      messageType: LoggingOpenstackMessageType.Classic,
      name: "test-log-endpoint",
      period: 3600,
      placement: LoggingOpenstackPlacement.LessThanNilGreaterThan,
      publicKey: "-----BEGIN PRIVATE KEY-----
    ...
    -----END PRIVATE KEY-----
    ",
      responseCondition: "null",
    },
    loggingOpenstackName: "test-log-endpoint",
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.UpdateLogOpenstackRequest](../../models/operations/updatelogopenstackrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.UpdateLogOpenstackResponse](../../models/operations/updatelogopenstackresponse.md)>**


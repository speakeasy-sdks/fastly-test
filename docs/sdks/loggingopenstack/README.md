# LoggingOpenstack
(*.loggingOpenstack*)

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
import { Fastly } from "Fastly";
import {
  LoggingOpenstack,
  LoggingOpenstackCompressionCodec,
  LoggingOpenstackFormatVersion,
  LoggingOpenstackMessageType,
  LoggingOpenstackPlacement,
} from "Fastly/dist/sdk/models/components";
import { CreateLogOpenstackRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingOpenstack: LoggingOpenstack = {
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
};

  const res = await sdk.loggingOpenstack.createLogOpenstack(serviceId, versionId, loggingOpenstack);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `serviceId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | Alphanumeric string identifying the service.                           | SU1Z0isxPaozGVKXdv0eY                                                  |
| `versionId`                                                            | *number*                                                               | :heavy_check_mark:                                                     | Integer identifying a service version.                                 | 1                                                                      |
| `loggingOpenstack`                                                     | [components.LoggingOpenstack](../../models/shared/loggingopenstack.md) | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |                                                                        |


### Response

**Promise<[operations.CreateLogOpenstackResponse](../../models/operations/createlogopenstackresponse.md)>**


## deleteLogOpenstack

Delete the openstack for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteLogOpenstackRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingOpenstackName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingOpenstack.deleteLogOpenstack(loggingOpenstackName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingOpenstackName`                                       | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteLogOpenstackResponse](../../models/operations/deletelogopenstackresponse.md)>**


## getLogOpenstack

Get the openstack for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetLogOpenstackRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingOpenstackName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingOpenstack.getLogOpenstack(loggingOpenstackName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingOpenstackName`                                       | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetLogOpenstackResponse](../../models/operations/getlogopenstackresponse.md)>**


## listLogOpenstack

List all of the openstacks for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListLogOpenstackRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingOpenstack.listLogOpenstack(serviceId, versionId);


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

**Promise<[operations.ListLogOpenstackResponse](../../models/operations/listlogopenstackresponse.md)>**


## updateLogOpenstack

Update the openstack for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  LoggingOpenstack,
  LoggingOpenstackCompressionCodec,
  LoggingOpenstackFormatVersion,
  LoggingOpenstackMessageType,
  LoggingOpenstackPlacement,
} from "Fastly/dist/sdk/models/components";
import { UpdateLogOpenstackRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingOpenstackName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingOpenstack: LoggingOpenstack = {
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
};

  const res = await sdk.loggingOpenstack.updateLogOpenstack(loggingOpenstackName, serviceId, versionId, loggingOpenstack);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `loggingOpenstackName`                                                 | *string*                                                               | :heavy_check_mark:                                                     | The name for the real-time logging configuration.                      | test-log-endpoint                                                      |
| `serviceId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | Alphanumeric string identifying the service.                           | SU1Z0isxPaozGVKXdv0eY                                                  |
| `versionId`                                                            | *number*                                                               | :heavy_check_mark:                                                     | Integer identifying a service version.                                 | 1                                                                      |
| `loggingOpenstack`                                                     | [components.LoggingOpenstack](../../models/shared/loggingopenstack.md) | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |                                                                        |


### Response

**Promise<[operations.UpdateLogOpenstackResponse](../../models/operations/updatelogopenstackresponse.md)>**


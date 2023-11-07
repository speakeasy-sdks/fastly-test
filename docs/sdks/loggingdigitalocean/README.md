# LoggingDigitalocean
(*.loggingDigitalocean*)

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
import { Fastly } from "Fastly";
import {
  LoggingDigitalocean,
  LoggingDigitaloceanCompressionCodec,
  LoggingDigitaloceanFormatVersion,
  LoggingDigitaloceanMessageType,
  LoggingDigitaloceanPlacement,
} from "Fastly/dist/sdk/models/components";
import { CreateLogDigoceanRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingDigitalocean: LoggingDigitalocean = {
  format: "%h %l %u %t \"%r\" %&gt;s %b",
  formatVersion: LoggingDigitaloceanFormatVersion.Two,
  gzipLevel: 0,
  messageType: LoggingDigitaloceanMessageType.Classic,
  name: "test-log-endpoint",
  period: 3600,
  placement: LoggingDigitaloceanPlacement.WafDebug,
  publicKey: "-----BEGIN PRIVATE KEY-----
...
-----END PRIVATE KEY-----
",
  responseCondition: "null",
};

  const res = await sdk.loggingDigitalocean.createLogDigocean(serviceId, versionId, loggingDigitalocean);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `serviceId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | Alphanumeric string identifying the service.                                 | SU1Z0isxPaozGVKXdv0eY                                                        |
| `versionId`                                                                  | *number*                                                                     | :heavy_check_mark:                                                           | Integer identifying a service version.                                       | 1                                                                            |
| `loggingDigitalocean`                                                        | [components.LoggingDigitalocean](../../models/shared/loggingdigitalocean.md) | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |                                                                              |


### Response

**Promise<[operations.CreateLogDigoceanResponse](../../models/operations/createlogdigoceanresponse.md)>**


## deleteLogDigocean

Delete the DigitalOcean Space for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteLogDigoceanRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingDigitaloceanName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingDigitalocean.deleteLogDigocean(loggingDigitaloceanName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingDigitaloceanName`                                    | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteLogDigoceanResponse](../../models/operations/deletelogdigoceanresponse.md)>**


## getLogDigocean

Get the DigitalOcean Space for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetLogDigoceanRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingDigitaloceanName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingDigitalocean.getLogDigocean(loggingDigitaloceanName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingDigitaloceanName`                                    | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetLogDigoceanResponse](../../models/operations/getlogdigoceanresponse.md)>**


## listLogDigocean

List all of the DigitalOcean Spaces for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListLogDigoceanRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingDigitalocean.listLogDigocean(serviceId, versionId);


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

**Promise<[operations.ListLogDigoceanResponse](../../models/operations/listlogdigoceanresponse.md)>**


## updateLogDigocean

Update the DigitalOcean Space for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  LoggingDigitalocean,
  LoggingDigitaloceanCompressionCodec,
  LoggingDigitaloceanFormatVersion,
  LoggingDigitaloceanMessageType,
  LoggingDigitaloceanPlacement,
} from "Fastly/dist/sdk/models/components";
import { UpdateLogDigoceanRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingDigitaloceanName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingDigitalocean: LoggingDigitalocean = {
  format: "%h %l %u %t \"%r\" %&gt;s %b",
  formatVersion: LoggingDigitaloceanFormatVersion.Two,
  gzipLevel: 0,
  messageType: LoggingDigitaloceanMessageType.Classic,
  name: "test-log-endpoint",
  period: 3600,
  placement: LoggingDigitaloceanPlacement.WafDebug,
  publicKey: "-----BEGIN PRIVATE KEY-----
...
-----END PRIVATE KEY-----
",
  responseCondition: "null",
};

  const res = await sdk.loggingDigitalocean.updateLogDigocean(loggingDigitaloceanName, serviceId, versionId, loggingDigitalocean);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `loggingDigitaloceanName`                                                    | *string*                                                                     | :heavy_check_mark:                                                           | The name for the real-time logging configuration.                            | test-log-endpoint                                                            |
| `serviceId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | Alphanumeric string identifying the service.                                 | SU1Z0isxPaozGVKXdv0eY                                                        |
| `versionId`                                                                  | *number*                                                                     | :heavy_check_mark:                                                           | Integer identifying a service version.                                       | 1                                                                            |
| `loggingDigitalocean`                                                        | [components.LoggingDigitalocean](../../models/shared/loggingdigitalocean.md) | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |                                                                              |


### Response

**Promise<[operations.UpdateLogDigoceanResponse](../../models/operations/updatelogdigoceanresponse.md)>**


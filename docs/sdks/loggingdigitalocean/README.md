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
import {
  LoggingDigitaloceanCompressionCodec,
  LoggingDigitaloceanFormatVersion,
  LoggingDigitaloceanMessageType,
  LoggingDigitaloceanPlacement,
} from "FastlyTestJS/dist/sdk/models/shared";

(async() => {
  const sdk = new Fastly({
    security: {
      token: "",
    },
  });

  const res = await sdk.loggingDigitalocean.createLogDigocean({
    loggingDigitaloceanInput: {
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

(async() => {
  const sdk = new Fastly({
    security: {
      token: "",
    },
  });

  const res = await sdk.loggingDigitalocean.deleteLogDigocean({
    loggingDigitaloceanName: "test-log-endpoint",
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Fastly({
    security: {
      token: "",
    },
  });

  const res = await sdk.loggingDigitalocean.getLogDigocean({
    loggingDigitaloceanName: "test-log-endpoint",
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Fastly({
    security: {
      token: "",
    },
  });

  const res = await sdk.loggingDigitalocean.listLogDigocean({
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
| `request`                                                                              | [operations.ListLogDigoceanRequest](../../models/operations/listlogdigoceanrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.ListLogDigoceanResponse](../../models/operations/listlogdigoceanresponse.md)>**


## updateLogDigocean

Update the DigitalOcean Space for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import {
  LoggingDigitaloceanCompressionCodec,
  LoggingDigitaloceanFormatVersion,
  LoggingDigitaloceanMessageType,
  LoggingDigitaloceanPlacement,
} from "FastlyTestJS/dist/sdk/models/shared";

(async() => {
  const sdk = new Fastly({
    security: {
      token: "",
    },
  });

  const res = await sdk.loggingDigitalocean.updateLogDigocean({
    loggingDigitaloceanInput: {
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
    },
    loggingDigitaloceanName: "test-log-endpoint",
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.UpdateLogDigoceanRequest](../../models/operations/updatelogdigoceanrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.UpdateLogDigoceanResponse](../../models/operations/updatelogdigoceanresponse.md)>**


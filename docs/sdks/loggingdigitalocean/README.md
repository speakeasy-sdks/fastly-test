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
import { Fastly } from "Fastly";
import {
  LoggingDigitaloceanCompressionCodec,
  LoggingDigitaloceanFormatVersion,
  LoggingDigitaloceanMessageType,
  LoggingDigitaloceanPlacement,
} from "Fastly/dist/sdk/models/components";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.loggingDigitalocean.createLogDigocean({
    loggingDigitalocean: {
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
      responseCondition: "string",
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

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.CreateLogDigoceanRequest](../../sdk/models/operations/createlogdigoceanrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.CreateLogDigoceanResponse](../../sdk/models/operations/createlogdigoceanresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteLogDigocean

Delete the DigitalOcean Space for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.loggingDigitalocean.deleteLogDigocean({
    loggingDigitaloceanName: "test-log-endpoint",
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

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.DeleteLogDigoceanRequest](../../sdk/models/operations/deletelogdigoceanrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.DeleteLogDigoceanResponse](../../sdk/models/operations/deletelogdigoceanresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getLogDigocean

Get the DigitalOcean Space for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.loggingDigitalocean.getLogDigocean({
    loggingDigitaloceanName: "test-log-endpoint",
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

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetLogDigoceanRequest](../../sdk/models/operations/getlogdigoceanrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetLogDigoceanResponse](../../sdk/models/operations/getlogdigoceanresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## listLogDigocean

List all of the DigitalOcean Spaces for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.loggingDigitalocean.listLogDigocean({
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

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.ListLogDigoceanRequest](../../sdk/models/operations/listlogdigoceanrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ListLogDigoceanResponse](../../sdk/models/operations/listlogdigoceanresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## updateLogDigocean

Update the DigitalOcean Space for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  LoggingDigitaloceanCompressionCodec,
  LoggingDigitaloceanFormatVersion,
  LoggingDigitaloceanMessageType,
  LoggingDigitaloceanPlacement,
} from "Fastly/dist/sdk/models/components";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.loggingDigitalocean.updateLogDigocean({
    loggingDigitalocean: {
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
      responseCondition: "string",
    },
    loggingDigitaloceanName: "test-log-endpoint",
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

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.UpdateLogDigoceanRequest](../../sdk/models/operations/updatelogdigoceanrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.UpdateLogDigoceanResponse](../../sdk/models/operations/updatelogdigoceanresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

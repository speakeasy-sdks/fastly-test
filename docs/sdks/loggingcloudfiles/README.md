# LoggingCloudfiles
(*loggingCloudfiles*)

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
import { Fastly } from "Fastly";
import {
  LoggingCloudfilesCompressionCodec,
  LoggingCloudfilesFormatVersion,
  LoggingCloudfilesMessageType,
  LoggingCloudfilesPlacement,
  LoggingCloudfilesRegion,
} from "Fastly/dist/sdk/models/components";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.loggingCloudfiles.createLogCloudfiles({
    loggingCloudfiles: {
      format: "%h %l %u %t \"%r\" %&gt;s %b",
      formatVersion: LoggingCloudfilesFormatVersion.Two,
      gzipLevel: 0,
      messageType: LoggingCloudfilesMessageType.Classic,
      name: "test-log-endpoint",
      period: 3600,
      placement: LoggingCloudfilesPlacement.LessThanNilGreaterThan,
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

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.CreateLogCloudfilesRequest](../../sdk/models/operations/createlogcloudfilesrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.CreateLogCloudfilesResponse](../../sdk/models/operations/createlogcloudfilesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## deleteLogCloudfiles

Delete the Cloud Files log endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.loggingCloudfiles.deleteLogCloudfiles({
    loggingCloudfilesName: "test-log-endpoint",
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

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.DeleteLogCloudfilesRequest](../../sdk/models/operations/deletelogcloudfilesrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.DeleteLogCloudfilesResponse](../../sdk/models/operations/deletelogcloudfilesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getLogCloudfiles

Get the Cloud Files log endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.loggingCloudfiles.getLogCloudfiles({
    loggingCloudfilesName: "test-log-endpoint",
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

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetLogCloudfilesRequest](../../sdk/models/operations/getlogcloudfilesrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetLogCloudfilesResponse](../../sdk/models/operations/getlogcloudfilesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listLogCloudfiles

List all of the Cloud Files log endpoints for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.loggingCloudfiles.listLogCloudfiles({
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
| `request`                                                                                      | [operations.ListLogCloudfilesRequest](../../sdk/models/operations/listlogcloudfilesrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ListLogCloudfilesResponse](../../sdk/models/operations/listlogcloudfilesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateLogCloudfiles

Update the Cloud Files log endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  LoggingCloudfilesCompressionCodec,
  LoggingCloudfilesFormatVersion,
  LoggingCloudfilesMessageType,
  LoggingCloudfilesPlacement,
  LoggingCloudfilesRegion,
} from "Fastly/dist/sdk/models/components";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.loggingCloudfiles.updateLogCloudfiles({
    loggingCloudfiles: {
      format: "%h %l %u %t \"%r\" %&gt;s %b",
      formatVersion: LoggingCloudfilesFormatVersion.Two,
      gzipLevel: 0,
      messageType: LoggingCloudfilesMessageType.Classic,
      name: "test-log-endpoint",
      period: 3600,
      placement: LoggingCloudfilesPlacement.LessThanNilGreaterThan,
      publicKey: "-----BEGIN PRIVATE KEY-----
    ...
    -----END PRIVATE KEY-----
    ",
      responseCondition: "string",
    },
    loggingCloudfilesName: "test-log-endpoint",
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

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.UpdateLogCloudfilesRequest](../../sdk/models/operations/updatelogcloudfilesrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.UpdateLogCloudfilesResponse](../../sdk/models/operations/updatelogcloudfilesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

# LoggingPapertrail
(*loggingPapertrail*)

## Overview

Fastly will stream log messages to the Papertrail account in the format specified in the Papertrail object.

<https://developer.fastly.com/reference/api/logging/papertrail>
### Available Operations

* [createLogPapertrail](#createlogpapertrail) - Create a Papertrail log endpoint
* [deleteLogPapertrail](#deletelogpapertrail) - Delete a Papertrail log endpoint
* [getLogPapertrail](#getlogpapertrail) - Get a Papertrail log endpoint
* [listLogPapertrail](#listlogpapertrail) - List Papertrail log endpoints
* [updateLogPapertrail](#updatelogpapertrail) - Update a Papertrail log endpoint

## createLogPapertrail

Create a Papertrail for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { LoggingPapertrailFormatVersion, LoggingPapertrailPlacement } from "Fastly/dist/sdk/models/components";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.loggingPapertrail.createLogPapertrail({
    loggingPapertrail: {
      address: "example.com",
      format: "%h %l %u %t \"%r\" %&gt;s %b",
      formatVersion: LoggingPapertrailFormatVersion.Two,
      name: "test-log-endpoint",
      placement: LoggingPapertrailPlacement.None,
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
| `request`                                                                                          | [operations.CreateLogPapertrailRequest](../../sdk/models/operations/createlogpapertrailrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.CreateLogPapertrailResponse](../../sdk/models/operations/createlogpapertrailresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## deleteLogPapertrail

Delete the Papertrail for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.loggingPapertrail.deleteLogPapertrail({
    loggingPapertrailName: "test-log-endpoint",
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
| `request`                                                                                          | [operations.DeleteLogPapertrailRequest](../../sdk/models/operations/deletelogpapertrailrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.DeleteLogPapertrailResponse](../../sdk/models/operations/deletelogpapertrailresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getLogPapertrail

Get the Papertrail for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.loggingPapertrail.getLogPapertrail({
    loggingPapertrailName: "test-log-endpoint",
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
| `request`                                                                                    | [operations.GetLogPapertrailRequest](../../sdk/models/operations/getlogpapertrailrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetLogPapertrailResponse](../../sdk/models/operations/getlogpapertrailresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listLogPapertrail

List all of the Papertrails for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.loggingPapertrail.listLogPapertrail({
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
| `request`                                                                                      | [operations.ListLogPapertrailRequest](../../sdk/models/operations/listlogpapertrailrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ListLogPapertrailResponse](../../sdk/models/operations/listlogpapertrailresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateLogPapertrail

Update the Papertrail for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { LoggingPapertrailFormatVersion, LoggingPapertrailPlacement } from "Fastly/dist/sdk/models/components";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.loggingPapertrail.updateLogPapertrail({
    loggingPapertrail: {
      address: "example.com",
      format: "%h %l %u %t \"%r\" %&gt;s %b",
      formatVersion: LoggingPapertrailFormatVersion.Two,
      name: "test-log-endpoint",
      placement: LoggingPapertrailPlacement.LessThanNilGreaterThan,
      responseCondition: "string",
    },
    loggingPapertrailName: "test-log-endpoint",
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
| `request`                                                                                          | [operations.UpdateLogPapertrailRequest](../../sdk/models/operations/updatelogpapertrailrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.UpdateLogPapertrailResponse](../../sdk/models/operations/updatelogpapertrailresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

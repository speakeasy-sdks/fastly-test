# LoggingSplunk
(*loggingSplunk*)

## Overview

Fastly will POST messages to your Splunk account in the format specified in the Splunk object.

<https://developer.fastly.com/reference/api/logging/splunk>
### Available Operations

* [createLogSplunk](#createlogsplunk) - Create a Splunk log endpoint
* [deleteLogSplunk](#deletelogsplunk) - Delete a Splunk log endpoint
* [getLogSplunk](#getlogsplunk) - Get a Splunk log endpoint
* [listLogSplunk](#listlogsplunk) - List Splunk log endpoints
* [updateLogSplunk](#updatelogsplunk) - Update a Splunk log endpoint

## createLogSplunk

Create a Splunk logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { LoggingSplunkFormatVersion, LoggingSplunkPlacement, LoggingUseTls } from "Fastly/dist/sdk/models/components";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.loggingSplunk.createLogSplunk({
    loggingSplunk: {
      format: "%h %l %u %t \"%r\" %&gt;s %b",
      formatVersion: LoggingSplunkFormatVersion.Two,
      name: "test-log-endpoint",
      placement: LoggingSplunkPlacement.WafDebug,
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

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.CreateLogSplunkRequest](../../sdk/models/operations/createlogsplunkrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CreateLogSplunkResponse](../../sdk/models/operations/createlogsplunkresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## deleteLogSplunk

Delete the Splunk logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.loggingSplunk.deleteLogSplunk({
    loggingSplunkName: "test-log-endpoint",
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
| `request`                                                                                  | [operations.DeleteLogSplunkRequest](../../sdk/models/operations/deletelogsplunkrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.DeleteLogSplunkResponse](../../sdk/models/operations/deletelogsplunkresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getLogSplunk

Get the details for a Splunk logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.loggingSplunk.getLogSplunk({
    loggingSplunkName: "test-log-endpoint",
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

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetLogSplunkRequest](../../sdk/models/operations/getlogsplunkrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetLogSplunkResponse](../../sdk/models/operations/getlogsplunkresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listLogSplunk

List all of the Splunk logging objects for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.loggingSplunk.listLogSplunk({
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

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.ListLogSplunkRequest](../../sdk/models/operations/listlogsplunkrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.ListLogSplunkResponse](../../sdk/models/operations/listlogsplunkresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateLogSplunk

Update the Splunk logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { LoggingSplunkFormatVersion, LoggingSplunkPlacement, LoggingUseTls } from "Fastly/dist/sdk/models/components";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.loggingSplunk.updateLogSplunk({
    loggingSplunk: {
      format: "%h %l %u %t \"%r\" %&gt;s %b",
      formatVersion: LoggingSplunkFormatVersion.Two,
      name: "test-log-endpoint",
      placement: LoggingSplunkPlacement.WafDebug,
      responseCondition: "string",
    },
    loggingSplunkName: "test-log-endpoint",
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
| `request`                                                                                  | [operations.UpdateLogSplunkRequest](../../sdk/models/operations/updatelogsplunkrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.UpdateLogSplunkResponse](../../sdk/models/operations/updatelogsplunkresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

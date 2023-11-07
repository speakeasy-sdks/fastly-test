# LoggingSplunk
(*.loggingSplunk*)

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
import { Fastly } from "FastlyTestJS";
import { LoggingSplunkFormatVersion, LoggingSplunkPlacement, LoggingUseTls } from "FastlyTestJS/dist/sdk/models/shared";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingSplunk.createLogSplunk({
    loggingSplunk: {
      format: "%h %l %u %t \"%r\" %&gt;s %b",
      formatVersion: LoggingSplunkFormatVersion.Two,
      name: "test-log-endpoint",
      placement: LoggingSplunkPlacement.WafDebug,
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

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.CreateLogSplunkRequest](../../models/operations/createlogsplunkrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CreateLogSplunkResponse](../../models/operations/createlogsplunkresponse.md)>**


## deleteLogSplunk

Delete the Splunk logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingSplunk.deleteLogSplunk({
    loggingSplunkName: "test-log-endpoint",
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
| `request`                                                                              | [operations.DeleteLogSplunkRequest](../../models/operations/deletelogsplunkrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.DeleteLogSplunkResponse](../../models/operations/deletelogsplunkresponse.md)>**


## getLogSplunk

Get the details for a Splunk logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingSplunk.getLogSplunk({
    loggingSplunkName: "test-log-endpoint",
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetLogSplunkRequest](../../models/operations/getlogsplunkrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetLogSplunkResponse](../../models/operations/getlogsplunkresponse.md)>**


## listLogSplunk

List all of the Splunk logging objects for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingSplunk.listLogSplunk({
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.ListLogSplunkRequest](../../models/operations/listlogsplunkrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.ListLogSplunkResponse](../../models/operations/listlogsplunkresponse.md)>**


## updateLogSplunk

Update the Splunk logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { LoggingSplunkFormatVersion, LoggingSplunkPlacement, LoggingUseTls } from "FastlyTestJS/dist/sdk/models/shared";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingSplunk.updateLogSplunk({
    loggingSplunk: {
      format: "%h %l %u %t \"%r\" %&gt;s %b",
      formatVersion: LoggingSplunkFormatVersion.Two,
      name: "test-log-endpoint",
      placement: LoggingSplunkPlacement.WafDebug,
      responseCondition: "null",
    },
    loggingSplunkName: "test-log-endpoint",
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
| `request`                                                                              | [operations.UpdateLogSplunkRequest](../../models/operations/updatelogsplunkrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.UpdateLogSplunkResponse](../../models/operations/updatelogsplunkresponse.md)>**


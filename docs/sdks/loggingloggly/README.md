# LoggingLoggly
(*loggingLoggly*)

## Overview

Fastly will stream log messages to the Loggly account in the format specified in the Loggly logging object.

<https://developer.fastly.com/reference/api/logging/loggly>
### Available Operations

* [createLogLoggly](#createlogloggly) - Create a Loggly log endpoint
* [deleteLogLoggly](#deletelogloggly) - Delete a Loggly log endpoint
* [getLogLoggly](#getlogloggly) - Get a Loggly log endpoint
* [listLogLoggly](#listlogloggly) - List Loggly log endpoints
* [updateLogLoggly](#updatelogloggly) - Update a Loggly log endpoint

## createLogLoggly

Create a Loggly logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { LoggingLogglyFormatVersion, LoggingLogglyPlacement } from "FastlyTestJS/dist/sdk/models/shared";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingLoggly.createLogLoggly({
    loggingLoggly: {
      format: "%h %l %u %t \"%r\" %&gt;s %b",
      formatVersion: LoggingLogglyFormatVersion.Two,
      name: "test-log-endpoint",
      placement: LoggingLogglyPlacement.None,
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
| `request`                                                                              | [operations.CreateLogLogglyRequest](../../models/operations/createloglogglyrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CreateLogLogglyResponse](../../models/operations/createloglogglyresponse.md)>**


## deleteLogLoggly

Delete the Loggly logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingLoggly.deleteLogLoggly({
    loggingLogglyName: "test-log-endpoint",
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
| `request`                                                                              | [operations.DeleteLogLogglyRequest](../../models/operations/deleteloglogglyrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.DeleteLogLogglyResponse](../../models/operations/deleteloglogglyresponse.md)>**


## getLogLoggly

Get the Loggly logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingLoggly.getLogLoggly({
    loggingLogglyName: "test-log-endpoint",
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
| `request`                                                                        | [operations.GetLogLogglyRequest](../../models/operations/getloglogglyrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetLogLogglyResponse](../../models/operations/getloglogglyresponse.md)>**


## listLogLoggly

List all Loggly logging objects for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingLoggly.listLogLoggly({
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
| `request`                                                                          | [operations.ListLogLogglyRequest](../../models/operations/listloglogglyrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.ListLogLogglyResponse](../../models/operations/listloglogglyresponse.md)>**


## updateLogLoggly

Update the Loggly logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { LoggingLogglyFormatVersion, LoggingLogglyPlacement } from "FastlyTestJS/dist/sdk/models/shared";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingLoggly.updateLogLoggly({
    loggingLoggly: {
      format: "%h %l %u %t \"%r\" %&gt;s %b",
      formatVersion: LoggingLogglyFormatVersion.Two,
      name: "test-log-endpoint",
      placement: LoggingLogglyPlacement.WafDebug,
      responseCondition: "null",
    },
    loggingLogglyName: "test-log-endpoint",
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
| `request`                                                                              | [operations.UpdateLogLogglyRequest](../../models/operations/updateloglogglyrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.UpdateLogLogglyResponse](../../models/operations/updateloglogglyresponse.md)>**


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
import { Fastly } from "FastlyTestJS";
import { LoggingPapertrailFormatVersion, LoggingPapertrailPlacement } from "FastlyTestJS/dist/sdk/models/shared";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingPapertrail.createLogPapertrail({
    loggingPapertrail: {
      address: "example.com",
      format: "%h %l %u %t \"%r\" %&gt;s %b",
      formatVersion: LoggingPapertrailFormatVersion.Two,
      name: "test-log-endpoint",
      placement: LoggingPapertrailPlacement.None,
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

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.CreateLogPapertrailRequest](../../models/operations/createlogpapertrailrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.CreateLogPapertrailResponse](../../models/operations/createlogpapertrailresponse.md)>**


## deleteLogPapertrail

Delete the Papertrail for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingPapertrail.deleteLogPapertrail({
    loggingPapertrailName: "test-log-endpoint",
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.DeleteLogPapertrailRequest](../../models/operations/deletelogpapertrailrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.DeleteLogPapertrailResponse](../../models/operations/deletelogpapertrailresponse.md)>**


## getLogPapertrail

Get the Papertrail for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingPapertrail.getLogPapertrail({
    loggingPapertrailName: "test-log-endpoint",
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
| `request`                                                                                | [operations.GetLogPapertrailRequest](../../models/operations/getlogpapertrailrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetLogPapertrailResponse](../../models/operations/getlogpapertrailresponse.md)>**


## listLogPapertrail

List all of the Papertrails for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingPapertrail.listLogPapertrail({
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
| `request`                                                                                  | [operations.ListLogPapertrailRequest](../../models/operations/listlogpapertrailrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ListLogPapertrailResponse](../../models/operations/listlogpapertrailresponse.md)>**


## updateLogPapertrail

Update the Papertrail for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { LoggingPapertrailFormatVersion, LoggingPapertrailPlacement } from "FastlyTestJS/dist/sdk/models/shared";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingPapertrail.updateLogPapertrail({
    loggingPapertrail: {
      address: "example.com",
      format: "%h %l %u %t \"%r\" %&gt;s %b",
      formatVersion: LoggingPapertrailFormatVersion.Two,
      name: "test-log-endpoint",
      placement: LoggingPapertrailPlacement.LessThanNilGreaterThan,
      responseCondition: "null",
    },
    loggingPapertrailName: "test-log-endpoint",
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.UpdateLogPapertrailRequest](../../models/operations/updatelogpapertrailrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.UpdateLogPapertrailResponse](../../models/operations/updatelogpapertrailresponse.md)>**


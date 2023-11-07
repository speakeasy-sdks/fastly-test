# LoggingScalyr
(*.loggingScalyr*)

## Overview

Fastly will stream log messages to the Scalyr account in the format specified in the Scalyr object.

<https://developer.fastly.com/reference/api/logging/scalyr>
### Available Operations

* [createLogScalyr](#createlogscalyr) - Create a Scalyr log endpoint
* [deleteLogScalyr](#deletelogscalyr) - Delete the Scalyr log endpoint
* [getLogScalyr](#getlogscalyr) - Get a Scalyr log endpoint
* [listLogScalyr](#listlogscalyr) - List Scalyr log endpoints
* [updateLogScalyr](#updatelogscalyr) - Update the Scalyr log endpoint

## createLogScalyr

Create a Scalyr for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { LoggingScalyrFormatVersion, LoggingScalyrPlacement, LoggingScalyrRegion } from "Fastly/dist/sdk/models/components";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingScalyr.createLogScalyr({
    loggingScalyr: {
      format: "%h %l %u %t \"%r\" %&gt;s %b",
      formatVersion: LoggingScalyrFormatVersion.Two,
      name: "test-log-endpoint",
      placement: LoggingScalyrPlacement.None,
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
| `request`                                                                              | [operations.CreateLogScalyrRequest](../../models/operations/createlogscalyrrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CreateLogScalyrResponse](../../models/operations/createlogscalyrresponse.md)>**


## deleteLogScalyr

Delete the Scalyr for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingScalyr.deleteLogScalyr({
    loggingScalyrName: "test-log-endpoint",
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
| `request`                                                                              | [operations.DeleteLogScalyrRequest](../../models/operations/deletelogscalyrrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.DeleteLogScalyrResponse](../../models/operations/deletelogscalyrresponse.md)>**


## getLogScalyr

Get the Scalyr for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingScalyr.getLogScalyr({
    loggingScalyrName: "test-log-endpoint",
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
| `request`                                                                        | [operations.GetLogScalyrRequest](../../models/operations/getlogscalyrrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetLogScalyrResponse](../../models/operations/getlogscalyrresponse.md)>**


## listLogScalyr

List all of the Scalyrs for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingScalyr.listLogScalyr({
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
| `request`                                                                          | [operations.ListLogScalyrRequest](../../models/operations/listlogscalyrrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.ListLogScalyrResponse](../../models/operations/listlogscalyrresponse.md)>**


## updateLogScalyr

Update the Scalyr for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { LoggingScalyrFormatVersion, LoggingScalyrPlacement, LoggingScalyrRegion } from "Fastly/dist/sdk/models/components";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingScalyr.updateLogScalyr({
    loggingScalyr: {
      format: "%h %l %u %t \"%r\" %&gt;s %b",
      formatVersion: LoggingScalyrFormatVersion.Two,
      name: "test-log-endpoint",
      placement: LoggingScalyrPlacement.LessThanNilGreaterThan,
      responseCondition: "null",
    },
    loggingScalyrName: "test-log-endpoint",
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
| `request`                                                                              | [operations.UpdateLogScalyrRequest](../../models/operations/updatelogscalyrrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.UpdateLogScalyrResponse](../../models/operations/updatelogscalyrresponse.md)>**


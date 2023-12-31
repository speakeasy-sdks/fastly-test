# LoggingSumologic
(*.loggingSumologic*)

## Overview

Fastly will POST messages to the Sumo Logic account in the format specified in the Sumologic object.

<https://developer.fastly.com/reference/api/logging/sumologic>
### Available Operations

* [createLogSumologic](#createlogsumologic) - Create a Sumologic log endpoint
* [deleteLogSumologic](#deletelogsumologic) - Delete a Sumologic log endpoint
* [getLogSumologic](#getlogsumologic) - Get a Sumologic log endpoint
* [listLogSumologic](#listlogsumologic) - List Sumologic log endpoints
* [updateLogSumologic](#updatelogsumologic) - Update a Sumologic log endpoint

## createLogSumologic

Create a Sumologic for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { LoggingMessageType, LoggingSumologicFormatVersion, LoggingSumologicPlacement } from "Fastly/dist/sdk/models/components";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingSumologic.createLogSumologic({
    loggingSumologic: {
      format: "%h %l %u %t \"%r\" %&gt;s %b",
      formatVersion: LoggingSumologicFormatVersion.Two,
      messageType: LoggingMessageType.Classic,
      name: "test-log-endpoint",
      placement: LoggingSumologicPlacement.WafDebug,
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

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.CreateLogSumologicRequest](../../models/operations/createlogsumologicrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.CreateLogSumologicResponse](../../models/operations/createlogsumologicresponse.md)>**


## deleteLogSumologic

Delete the Sumologic for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingSumologic.deleteLogSumologic({
    loggingSumologicName: "test-log-endpoint",
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.DeleteLogSumologicRequest](../../models/operations/deletelogsumologicrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.DeleteLogSumologicResponse](../../models/operations/deletelogsumologicresponse.md)>**


## getLogSumologic

Get the Sumologic for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingSumologic.getLogSumologic({
    loggingSumologicName: "test-log-endpoint",
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
| `request`                                                                              | [operations.GetLogSumologicRequest](../../models/operations/getlogsumologicrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetLogSumologicResponse](../../models/operations/getlogsumologicresponse.md)>**


## listLogSumologic

List all of the Sumologics for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingSumologic.listLogSumologic({
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
| `request`                                                                                | [operations.ListLogSumologicRequest](../../models/operations/listlogsumologicrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.ListLogSumologicResponse](../../models/operations/listlogsumologicresponse.md)>**


## updateLogSumologic

Update the Sumologic for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { LoggingMessageType, LoggingSumologicFormatVersion, LoggingSumologicPlacement } from "Fastly/dist/sdk/models/components";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingSumologic.updateLogSumologic({
    loggingSumologic: {
      format: "%h %l %u %t \"%r\" %&gt;s %b",
      formatVersion: LoggingSumologicFormatVersion.Two,
      messageType: LoggingMessageType.Classic,
      name: "test-log-endpoint",
      placement: LoggingSumologicPlacement.WafDebug,
      responseCondition: "null",
    },
    loggingSumologicName: "test-log-endpoint",
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.UpdateLogSumologicRequest](../../models/operations/updatelogsumologicrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.UpdateLogSumologicResponse](../../models/operations/updatelogsumologicresponse.md)>**


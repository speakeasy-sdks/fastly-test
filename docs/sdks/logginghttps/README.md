# LoggingHttps
(*loggingHttps*)

## Overview

Fastly will upload log messages to an HTTPS endpoint in the format specified in the HTTPS object. The HTTPS endpoint requires proof of domain ownership before logs can be received. Learn how to validate your domain in our [HTTPS endpoint documentation](https://docs.fastly.com/en/guides/log-streaming-https).

<https://developer.fastly.com/reference/api/logging/https>
### Available Operations

* [createLogHttps](#createloghttps) - Create an HTTPS log endpoint
* [deleteLogHttps](#deleteloghttps) - Delete an HTTPS log endpoint
* [getLogHttps](#getloghttps) - Get an HTTPS log endpoint
* [listLogHttps](#listloghttps) - List HTTPS log endpoints
* [updateLogHttps](#updateloghttps) - Update an HTTPS log endpoint

## createLogHttps

Create an HTTPS object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import {
  LoggingHttpsFormatVersion,
  LoggingHttpsJsonFormat,
  LoggingHttpsMethod,
  LoggingHttpsPlacement,
  LoggingMessageType,
} from "FastlyTestJS/dist/sdk/models/shared";

(async() => {
  const sdk = new Fastly({
    security: {
      token: "",
    },
  });

  const res = await sdk.loggingHttps.createLogHttps({
    loggingHttps: {
      format: "%h %l %u %t \"%r\" %&gt;s %b",
      formatVersion: LoggingHttpsFormatVersion.Two,
      messageType: LoggingMessageType.Classic,
      name: "test-log-endpoint",
      placement: LoggingHttpsPlacement.WafDebug,
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

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.CreateLogHttpsRequest](../../models/operations/createloghttpsrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CreateLogHttpsResponse](../../models/operations/createloghttpsresponse.md)>**


## deleteLogHttps

Delete the HTTPS object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    security: {
      token: "",
    },
  });

  const res = await sdk.loggingHttps.deleteLogHttps({
    loggingHttpsName: "test-log-endpoint",
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
| `request`                                                                            | [operations.DeleteLogHttpsRequest](../../models/operations/deleteloghttpsrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.DeleteLogHttpsResponse](../../models/operations/deleteloghttpsresponse.md)>**


## getLogHttps

Get the HTTPS object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    security: {
      token: "",
    },
  });

  const res = await sdk.loggingHttps.getLogHttps({
    loggingHttpsName: "test-log-endpoint",
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetLogHttpsRequest](../../models/operations/getloghttpsrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetLogHttpsResponse](../../models/operations/getloghttpsresponse.md)>**


## listLogHttps

List all of the HTTPS objects for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    security: {
      token: "",
    },
  });

  const res = await sdk.loggingHttps.listLogHttps({
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
| `request`                                                                        | [operations.ListLogHttpsRequest](../../models/operations/listloghttpsrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ListLogHttpsResponse](../../models/operations/listloghttpsresponse.md)>**


## updateLogHttps

Update the HTTPS object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import {
  LoggingHttpsFormatVersion,
  LoggingHttpsJsonFormat,
  LoggingHttpsMethod,
  LoggingHttpsPlacement,
  LoggingMessageType,
} from "FastlyTestJS/dist/sdk/models/shared";

(async() => {
  const sdk = new Fastly({
    security: {
      token: "",
    },
  });

  const res = await sdk.loggingHttps.updateLogHttps({
    loggingHttps: {
      format: "%h %l %u %t \"%r\" %&gt;s %b",
      formatVersion: LoggingHttpsFormatVersion.Two,
      messageType: LoggingMessageType.Classic,
      name: "test-log-endpoint",
      placement: LoggingHttpsPlacement.WafDebug,
      responseCondition: "null",
    },
    loggingHttpsName: "test-log-endpoint",
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
| `request`                                                                            | [operations.UpdateLogHttpsRequest](../../models/operations/updateloghttpsrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdateLogHttpsResponse](../../models/operations/updateloghttpsresponse.md)>**


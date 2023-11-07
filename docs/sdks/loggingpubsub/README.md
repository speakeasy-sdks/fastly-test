# LoggingPubsub
(*.loggingPubsub*)

## Overview

Fastly will publish log messages to a Google Cloud Pub/Sub topic in the format specified in the Pub/Sub logging object.

<https://developer.fastly.com/reference/api/logging/gcp-pubsub>
### Available Operations

* [createLogGcpPubsub](#createloggcppubsub) - Create a GCP Cloud Pub/Sub log endpoint
* [deleteLogGcpPubsub](#deleteloggcppubsub) - Delete a GCP Cloud Pub/Sub log endpoint
* [getLogGcpPubsub](#getloggcppubsub) - Get a GCP Cloud Pub/Sub log endpoint
* [listLogGcpPubsub](#listloggcppubsub) - List GCP Cloud Pub/Sub log endpoints
* [updateLogGcpPubsub](#updateloggcppubsub) - Update a GCP Cloud Pub/Sub log endpoint

## createLogGcpPubsub

Create a Pub/Sub logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { LoggingGooglePubsubFormatVersion, LoggingGooglePubsubPlacement } from "FastlyTestJS/dist/sdk/models/shared";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingPubsub.createLogGcpPubsub({
    loggingGooglePubsub: {
      accountName: "test-user@test-project-id.iam.gserviceaccount.com",
      format: "%h %l %u %t \"%r\" %&gt;s %b",
      formatVersion: LoggingGooglePubsubFormatVersion.Two,
      name: "test-log-endpoint",
      placement: LoggingGooglePubsubPlacement.None,
      projectId: "test-project-id",
      responseCondition: "null",
      secretKey: "-----BEGIN PRIVATE KEY-----
    ...
    -----END PRIVATE KEY-----
    ",
      user: "test-user@test-project-id.iam.gserviceaccount.com",
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
| `request`                                                                                    | [operations.CreateLogGcpPubsubRequest](../../models/operations/createloggcppubsubrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.CreateLogGcpPubsubResponse](../../models/operations/createloggcppubsubresponse.md)>**


## deleteLogGcpPubsub

Delete a Pub/Sub logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingPubsub.deleteLogGcpPubsub({
    loggingGooglePubsubName: "test-log-endpoint",
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
| `request`                                                                                    | [operations.DeleteLogGcpPubsubRequest](../../models/operations/deleteloggcppubsubrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.DeleteLogGcpPubsubResponse](../../models/operations/deleteloggcppubsubresponse.md)>**


## getLogGcpPubsub

Get the details for a Pub/Sub logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingPubsub.getLogGcpPubsub({
    loggingGooglePubsubName: "test-log-endpoint",
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
| `request`                                                                              | [operations.GetLogGcpPubsubRequest](../../models/operations/getloggcppubsubrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetLogGcpPubsubResponse](../../models/operations/getloggcppubsubresponse.md)>**


## listLogGcpPubsub

List all of the Pub/Sub logging objects for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingPubsub.listLogGcpPubsub({
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
| `request`                                                                                | [operations.ListLogGcpPubsubRequest](../../models/operations/listloggcppubsubrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.ListLogGcpPubsubResponse](../../models/operations/listloggcppubsubresponse.md)>**


## updateLogGcpPubsub

Update a Pub/Sub logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { LoggingGooglePubsubFormatVersion, LoggingGooglePubsubPlacement } from "FastlyTestJS/dist/sdk/models/shared";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingPubsub.updateLogGcpPubsub({
    loggingGooglePubsub: {
      accountName: "test-user@test-project-id.iam.gserviceaccount.com",
      format: "%h %l %u %t \"%r\" %&gt;s %b",
      formatVersion: LoggingGooglePubsubFormatVersion.Two,
      name: "test-log-endpoint",
      placement: LoggingGooglePubsubPlacement.None,
      projectId: "test-project-id",
      responseCondition: "null",
      secretKey: "-----BEGIN PRIVATE KEY-----
    ...
    -----END PRIVATE KEY-----
    ",
      user: "test-user@test-project-id.iam.gserviceaccount.com",
    },
    loggingGooglePubsubName: "test-log-endpoint",
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
| `request`                                                                                    | [operations.UpdateLogGcpPubsubRequest](../../models/operations/updateloggcppubsubrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.UpdateLogGcpPubsubResponse](../../models/operations/updateloggcppubsubresponse.md)>**


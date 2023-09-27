# LoggingPubsub
(*loggingPubsub*)

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
import { CreateLogGcpPubsubResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { LoggingGooglePubsubFormatVersion, LoggingGooglePubsubPlacement } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingPubsub.createLogGcpPubsub({
  loggingGooglePubsub2: {
    accountName: "test-user@test-project-id.iam.gserviceaccount.com",
    format: "%h %l %u %t "%r" %&gt;s %b",
    formatVersion: LoggingGooglePubsubFormatVersion.One,
    name: "test-log-endpoint",
    placement: LoggingGooglePubsubPlacement.WafDebug,
    projectId: "test-project-id",
    responseCondition: "null",
    secretKey: "-----BEGIN PRIVATE KEY-----
  ...
  -----END PRIVATE KEY-----
  ",
    topic: "fuga",
    user: "test-user@test-project-id.iam.gserviceaccount.com",
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: CreateLogGcpPubsubResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { DeleteLogGcpPubsubResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingPubsub.deleteLogGcpPubsub({
  loggingGooglePubsubName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: DeleteLogGcpPubsubResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { GetLogGcpPubsubResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingPubsub.getLogGcpPubsub({
  loggingGooglePubsubName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: GetLogGcpPubsubResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { ListLogGcpPubsubResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingPubsub.listLogGcpPubsub({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: ListLogGcpPubsubResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { UpdateLogGcpPubsubResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { LoggingGooglePubsubFormatVersion, LoggingGooglePubsubPlacement } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingPubsub.updateLogGcpPubsub({
  loggingGooglePubsub2: {
    accountName: "test-user@test-project-id.iam.gserviceaccount.com",
    format: "%h %l %u %t "%r" %&gt;s %b",
    formatVersion: LoggingGooglePubsubFormatVersion.One,
    name: "test-log-endpoint",
    placement: LoggingGooglePubsubPlacement.LessThanNilGreaterThan,
    projectId: "test-project-id",
    responseCondition: "null",
    secretKey: "-----BEGIN PRIVATE KEY-----
  ...
  -----END PRIVATE KEY-----
  ",
    topic: "fugiat",
    user: "test-user@test-project-id.iam.gserviceaccount.com",
  },
  loggingGooglePubsubName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: UpdateLogGcpPubsubResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.UpdateLogGcpPubsubRequest](../../models/operations/updateloggcppubsubrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.UpdateLogGcpPubsubResponse](../../models/operations/updateloggcppubsubresponse.md)>**


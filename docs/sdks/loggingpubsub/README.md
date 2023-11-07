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
import { Fastly } from "Fastly";
import {
  LoggingGooglePubsub,
  LoggingGooglePubsubFormatVersion,
  LoggingGooglePubsubPlacement,
} from "Fastly/dist/sdk/models/components";
import { CreateLogGcpPubsubRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingGooglePubsub: LoggingGooglePubsub = {
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
};

  const res = await sdk.loggingPubsub.createLogGcpPubsub(serviceId, versionId, loggingGooglePubsub);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `serviceId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | Alphanumeric string identifying the service.                                 | SU1Z0isxPaozGVKXdv0eY                                                        |
| `versionId`                                                                  | *number*                                                                     | :heavy_check_mark:                                                           | Integer identifying a service version.                                       | 1                                                                            |
| `loggingGooglePubsub`                                                        | [components.LoggingGooglePubsub](../../models/shared/logginggooglepubsub.md) | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |                                                                              |


### Response

**Promise<[operations.CreateLogGcpPubsubResponse](../../models/operations/createloggcppubsubresponse.md)>**


## deleteLogGcpPubsub

Delete a Pub/Sub logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteLogGcpPubsubRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingGooglePubsubName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingPubsub.deleteLogGcpPubsub(loggingGooglePubsubName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingGooglePubsubName`                                    | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteLogGcpPubsubResponse](../../models/operations/deleteloggcppubsubresponse.md)>**


## getLogGcpPubsub

Get the details for a Pub/Sub logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetLogGcpPubsubRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingGooglePubsubName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingPubsub.getLogGcpPubsub(loggingGooglePubsubName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingGooglePubsubName`                                    | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetLogGcpPubsubResponse](../../models/operations/getloggcppubsubresponse.md)>**


## listLogGcpPubsub

List all of the Pub/Sub logging objects for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListLogGcpPubsubRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingPubsub.listLogGcpPubsub(serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.ListLogGcpPubsubResponse](../../models/operations/listloggcppubsubresponse.md)>**


## updateLogGcpPubsub

Update a Pub/Sub logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  LoggingGooglePubsub,
  LoggingGooglePubsubFormatVersion,
  LoggingGooglePubsubPlacement,
} from "Fastly/dist/sdk/models/components";
import { UpdateLogGcpPubsubRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingGooglePubsubName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingGooglePubsub: LoggingGooglePubsub = {
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
};

  const res = await sdk.loggingPubsub.updateLogGcpPubsub(loggingGooglePubsubName, serviceId, versionId, loggingGooglePubsub);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `loggingGooglePubsubName`                                                    | *string*                                                                     | :heavy_check_mark:                                                           | The name for the real-time logging configuration.                            | test-log-endpoint                                                            |
| `serviceId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | Alphanumeric string identifying the service.                                 | SU1Z0isxPaozGVKXdv0eY                                                        |
| `versionId`                                                                  | *number*                                                                     | :heavy_check_mark:                                                           | Integer identifying a service version.                                       | 1                                                                            |
| `loggingGooglePubsub`                                                        | [components.LoggingGooglePubsub](../../models/shared/logginggooglepubsub.md) | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |                                                                              |


### Response

**Promise<[operations.UpdateLogGcpPubsubResponse](../../models/operations/updateloggcppubsubresponse.md)>**


# LoggingS3
(*.loggingS3*)

## Overview

Fastly will upload log messages to the S3 bucket in the format specified in the S3 object.

<https://developer.fastly.com/reference/api/logging/s3>
### Available Operations

* [createLogAwsS3](#createlogawss3) - Create an AWS S3 log endpoint
* [deleteLogAwsS3](#deletelogawss3) - Delete an AWS S3 log endpoint
* [getLogAwsS3](#getlogawss3) - Get an AWS S3 log endpoint
* [listLogAwsS3](#listlogawss3) - List AWS S3 log endpoints
* [updateLogAwsS3](#updatelogawss3) - Update an AWS S3 log endpoint

## createLogAwsS3

Create a S3 for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  LoggingS3,
  LoggingS3CompressionCodec,
  LoggingS3FormatVersion,
  LoggingS3MessageType,
  LoggingS3Placement,
} from "Fastly/dist/sdk/models/components";
import { CreateLogAwsS3Request } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingS3: LoggingS3 = {
  format: "%h %l %u %t \"%r\" %&gt;s %b",
  formatVersion: LoggingS3FormatVersion.Two,
  gzipLevel: 0,
  messageType: LoggingS3MessageType.Classic,
  name: "test-log-endpoint",
  period: 3600,
  placement: LoggingS3Placement.WafDebug,
  publicKey: "-----BEGIN PRIVATE KEY-----
...
-----END PRIVATE KEY-----
",
  responseCondition: "null",
};

  const res = await sdk.loggingS3.createLogAwsS3(serviceId, versionId, loggingS3);


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
| `loggingS3`                                                  | [components.LoggingS3](../../models/shared/loggings3.md)     | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.CreateLogAwsS3Response](../../models/operations/createlogawss3response.md)>**


## deleteLogAwsS3

Delete the S3 for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteLogAwsS3Request } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingS3Name: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingS3.deleteLogAwsS3(loggingS3Name, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingS3Name`                                              | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteLogAwsS3Response](../../models/operations/deletelogawss3response.md)>**


## getLogAwsS3

Get the S3 for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetLogAwsS3Request } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingS3Name: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingS3.getLogAwsS3(loggingS3Name, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingS3Name`                                              | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetLogAwsS3Response](../../models/operations/getlogawss3response.md)>**


## listLogAwsS3

List all of the S3s for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListLogAwsS3Request } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingS3.listLogAwsS3(serviceId, versionId);


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

**Promise<[operations.ListLogAwsS3Response](../../models/operations/listlogawss3response.md)>**


## updateLogAwsS3

Update the S3 for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  LoggingS3,
  LoggingS3CompressionCodec,
  LoggingS3FormatVersion,
  LoggingS3MessageType,
  LoggingS3Placement,
} from "Fastly/dist/sdk/models/components";
import { UpdateLogAwsS3Request } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingS3Name: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingS3: LoggingS3 = {
  format: "%h %l %u %t \"%r\" %&gt;s %b",
  formatVersion: LoggingS3FormatVersion.Two,
  gzipLevel: 0,
  messageType: LoggingS3MessageType.Classic,
  name: "test-log-endpoint",
  period: 3600,
  placement: LoggingS3Placement.WafDebug,
  publicKey: "-----BEGIN PRIVATE KEY-----
...
-----END PRIVATE KEY-----
",
  responseCondition: "null",
};

  const res = await sdk.loggingS3.updateLogAwsS3(loggingS3Name, serviceId, versionId, loggingS3);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingS3Name`                                              | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `loggingS3`                                                  | [components.LoggingS3](../../models/shared/loggings3.md)     | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.UpdateLogAwsS3Response](../../models/operations/updatelogawss3response.md)>**


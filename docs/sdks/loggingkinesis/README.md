# LoggingKinesis
(*.loggingKinesis*)

## Overview

Fastly will publish log messages to an Amazon Kinesis stream in the format specified in the Amazon Kinesis Data Streams logging object.

<https://developer.fastly.com/reference/api/logging/kinesis>
### Available Operations

* [createLogKinesis](#createlogkinesis) - Create  an Amazon Kinesis log endpoint
* [deleteLogKinesis](#deletelogkinesis) - Delete the Amazon Kinesis log endpoint
* [getLogKinesis](#getlogkinesis) - Get an Amazon Kinesis log endpoint
* [listLogKinesis](#listlogkinesis) - List Amazon Kinesis log endpoints

## createLogKinesis

Create an Amazon Kinesis Data Streams logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { AwsRegion, LoggingFormatVersion, LoggingKinesis, LoggingPlacement } from "Fastly/dist/sdk/models/components";
import { CreateLogKinesisRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingKinesis: LoggingKinesis = {
  formatVersion: LoggingFormatVersion.Two,
  name: "test-log-endpoint",
  placement: LoggingPlacement.LessThanNilGreaterThan,
};

  const res = await sdk.loggingKinesis.createLogKinesis(serviceId, versionId, loggingKinesis);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `serviceId`                                                        | *string*                                                           | :heavy_check_mark:                                                 | Alphanumeric string identifying the service.                       | SU1Z0isxPaozGVKXdv0eY                                              |
| `versionId`                                                        | *number*                                                           | :heavy_check_mark:                                                 | Integer identifying a service version.                             | 1                                                                  |
| `loggingKinesis`                                                   | [components.LoggingKinesis](../../models/shared/loggingkinesis.md) | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |                                                                    |


### Response

**Promise<[operations.CreateLogKinesisResponse](../../models/operations/createlogkinesisresponse.md)>**


## deleteLogKinesis

Delete an Amazon Kinesis Data Streams logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteLogKinesisRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingKinesisName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingKinesis.deleteLogKinesis(loggingKinesisName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingKinesisName`                                         | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteLogKinesisResponse](../../models/operations/deletelogkinesisresponse.md)>**


## getLogKinesis

Get the details for an Amazon Kinesis Data Streams logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetLogKinesisRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingKinesisName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingKinesis.getLogKinesis(loggingKinesisName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingKinesisName`                                         | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetLogKinesisResponse](../../models/operations/getlogkinesisresponse.md)>**


## listLogKinesis

List all of the Amazon Kinesis Data Streams logging objects for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListLogKinesisRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingKinesis.listLogKinesis(serviceId, versionId);


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

**Promise<[operations.ListLogKinesisResponse](../../models/operations/listlogkinesisresponse.md)>**


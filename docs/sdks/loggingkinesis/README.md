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
import { AwsRegion, LoggingFormatVersion, LoggingPlacement } from "Fastly/dist/sdk/models/components";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingKinesis.createLogKinesis({
    loggingKinesis: {
      formatVersion: LoggingFormatVersion.Two,
      name: "test-log-endpoint",
      placement: LoggingPlacement.LessThanNilGreaterThan,
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

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.CreateLogKinesisRequest](../../models/operations/createlogkinesisrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CreateLogKinesisResponse](../../models/operations/createlogkinesisresponse.md)>**


## deleteLogKinesis

Delete an Amazon Kinesis Data Streams logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingKinesis.deleteLogKinesis({
    loggingKinesisName: "test-log-endpoint",
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
| `request`                                                                                | [operations.DeleteLogKinesisRequest](../../models/operations/deletelogkinesisrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DeleteLogKinesisResponse](../../models/operations/deletelogkinesisresponse.md)>**


## getLogKinesis

Get the details for an Amazon Kinesis Data Streams logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingKinesis.getLogKinesis({
    loggingKinesisName: "test-log-endpoint",
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
| `request`                                                                          | [operations.GetLogKinesisRequest](../../models/operations/getlogkinesisrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetLogKinesisResponse](../../models/operations/getlogkinesisresponse.md)>**


## listLogKinesis

List all of the Amazon Kinesis Data Streams logging objects for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingKinesis.listLogKinesis({
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
| `request`                                                                            | [operations.ListLogKinesisRequest](../../models/operations/listlogkinesisrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ListLogKinesisResponse](../../models/operations/listlogkinesisresponse.md)>**


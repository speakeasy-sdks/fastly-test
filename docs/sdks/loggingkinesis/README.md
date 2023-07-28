# loggingKinesis

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
import { Fastly } from "FastlyTestJS";
import { CreateLogKinesisResponse, CreateLogKinesisSecurity } from "FastlyTestJS/dist/sdk/models/operations";
import { AwsRegion, LoggingFormatVersion, LoggingPlacement } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();
const operationSecurity: CreateLogKinesisSecurity = {
  token: "",
};

sdk.loggingKinesis.createLogKinesis({
  loggingKinesis: {
    accessKey: "culpa",
    format: "tempore",
    formatVersion: LoggingFormatVersion.One,
    iamRole: "cumque",
    name: "test-log-endpoint",
    placement: LoggingPlacement.None,
    region: AwsRegion.UsEast1,
    secretKey: "minus",
    topic: "quaerat",
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: CreateLogKinesisResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.CreateLogKinesisRequest](../../models/operations/createlogkinesisrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.CreateLogKinesisSecurity](../../models/operations/createlogkinesissecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CreateLogKinesisResponse](../../models/operations/createlogkinesisresponse.md)>**


## deleteLogKinesis

Delete an Amazon Kinesis Data Streams logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteLogKinesisResponse, DeleteLogKinesisSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: DeleteLogKinesisSecurity = {
  token: "",
};

sdk.loggingKinesis.deleteLogKinesis({
  loggingKinesisName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: DeleteLogKinesisResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.DeleteLogKinesisRequest](../../models/operations/deletelogkinesisrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.DeleteLogKinesisSecurity](../../models/operations/deletelogkinesissecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.DeleteLogKinesisResponse](../../models/operations/deletelogkinesisresponse.md)>**


## getLogKinesis

Get the details for an Amazon Kinesis Data Streams logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetLogKinesisResponse, GetLogKinesisSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: GetLogKinesisSecurity = {
  token: "",
};

sdk.loggingKinesis.getLogKinesis({
  loggingKinesisName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: GetLogKinesisResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetLogKinesisRequest](../../models/operations/getlogkinesisrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.GetLogKinesisSecurity](../../models/operations/getlogkinesissecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetLogKinesisResponse](../../models/operations/getlogkinesisresponse.md)>**


## listLogKinesis

List all of the Amazon Kinesis Data Streams logging objects for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListLogKinesisResponse, ListLogKinesisSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: ListLogKinesisSecurity = {
  token: "",
};

sdk.loggingKinesis.listLogKinesis({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: ListLogKinesisResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.ListLogKinesisRequest](../../models/operations/listlogkinesisrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.ListLogKinesisSecurity](../../models/operations/listlogkinesissecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.ListLogKinesisResponse](../../models/operations/listlogkinesisresponse.md)>**


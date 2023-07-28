# loggingS3

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
import { Fastly } from "FastlyTestJS";
import { CreateLogAwsS3Response, CreateLogAwsS3Security } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingS3CompressionCodec,
  LoggingS3FormatVersion,
  LoggingS3MessageType,
  LoggingS3Placement,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();
const operationSecurity: CreateLogAwsS3Security = {
  token: "",
};

sdk.loggingS3.createLogAwsS3({
  loggingS3Input: {
    accessKey: "accusantium",
    acl: "rem",
    bucketName: "aut",
    compressionCodec: LoggingS3CompressionCodec.Snappy,
    domain: "eum",
    format: "%h %l %u %t "%r" %&gt;s %b",
    formatVersion: LoggingS3FormatVersion.Two,
    gzipLevel: 0,
    iamRole: "ab",
    messageType: LoggingS3MessageType.Classic,
    name: "test-log-endpoint",
    path: "corrupti",
    period: 3600,
    placement: LoggingS3Placement.None,
    publicKey: "-----BEGIN PRIVATE KEY-----
  ...
  -----END PRIVATE KEY-----
  ",
    redundancy: "voluptatem",
    responseCondition: "null",
    secretKey: "dolor",
    serverSideEncryption: "occaecati",
    serverSideEncryptionKmsKeyId: "numquam",
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: CreateLogAwsS3Response) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.CreateLogAwsS3Request](../../models/operations/createlogawss3request.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.CreateLogAwsS3Security](../../models/operations/createlogawss3security.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CreateLogAwsS3Response](../../models/operations/createlogawss3response.md)>**


## deleteLogAwsS3

Delete the S3 for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteLogAwsS3Response, DeleteLogAwsS3Security } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: DeleteLogAwsS3Security = {
  token: "",
};

sdk.loggingS3.deleteLogAwsS3({
  loggingS3Name: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: DeleteLogAwsS3Response) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.DeleteLogAwsS3Request](../../models/operations/deletelogawss3request.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.DeleteLogAwsS3Security](../../models/operations/deletelogawss3security.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.DeleteLogAwsS3Response](../../models/operations/deletelogawss3response.md)>**


## getLogAwsS3

Get the S3 for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetLogAwsS3Response, GetLogAwsS3Security } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: GetLogAwsS3Security = {
  token: "",
};

sdk.loggingS3.getLogAwsS3({
  loggingS3Name: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: GetLogAwsS3Response) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetLogAwsS3Request](../../models/operations/getlogawss3request.md)   | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `security`                                                                       | [operations.GetLogAwsS3Security](../../models/operations/getlogawss3security.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetLogAwsS3Response](../../models/operations/getlogawss3response.md)>**


## listLogAwsS3

List all of the S3s for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListLogAwsS3Response, ListLogAwsS3Security } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: ListLogAwsS3Security = {
  token: "",
};

sdk.loggingS3.listLogAwsS3({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: ListLogAwsS3Response) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.ListLogAwsS3Request](../../models/operations/listlogawss3request.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.ListLogAwsS3Security](../../models/operations/listlogawss3security.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.ListLogAwsS3Response](../../models/operations/listlogawss3response.md)>**


## updateLogAwsS3

Update the S3 for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateLogAwsS3Response, UpdateLogAwsS3Security } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingS3CompressionCodec,
  LoggingS3FormatVersion,
  LoggingS3MessageType,
  LoggingS3Placement,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();
const operationSecurity: UpdateLogAwsS3Security = {
  token: "",
};

sdk.loggingS3.updateLogAwsS3({
  loggingS3Input: {
    accessKey: "impedit",
    acl: "explicabo",
    bucketName: "voluptas",
    compressionCodec: LoggingS3CompressionCodec.Zstd,
    domain: "dignissimos",
    format: "%h %l %u %t "%r" %&gt;s %b",
    formatVersion: LoggingS3FormatVersion.One,
    gzipLevel: 0,
    iamRole: "maiores",
    messageType: LoggingS3MessageType.Classic,
    name: "test-log-endpoint",
    path: "natus",
    period: 3600,
    placement: LoggingS3Placement.None,
    publicKey: "-----BEGIN PRIVATE KEY-----
  ...
  -----END PRIVATE KEY-----
  ",
    redundancy: "voluptatibus",
    responseCondition: "null",
    secretKey: "voluptas",
    serverSideEncryption: "asperiores",
    serverSideEncryptionKmsKeyId: "aperiam",
  },
  loggingS3Name: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: UpdateLogAwsS3Response) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.UpdateLogAwsS3Request](../../models/operations/updatelogawss3request.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.UpdateLogAwsS3Security](../../models/operations/updatelogawss3security.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.UpdateLogAwsS3Response](../../models/operations/updatelogawss3response.md)>**


# loggingAzureblob

## Overview

Fastly will upload log messages to the Azure Blob Storage container in the format specified in the Azure Blob object.

<https://developer.fastly.com/reference/api/logging/azureblob>
### Available Operations

* [createLogAzure](#createlogazure) - Create an Azure Blob Storage log endpoint
* [deleteLogAzure](#deletelogazure) - Delete the Azure Blob Storage log endpoint
* [getLogAzure](#getlogazure) - Get an Azure Blob Storage log endpoint
* [listLogAzure](#listlogazure) - List Azure Blob Storage log endpoints
* [updateLogAzure](#updatelogazure) - Update an Azure Blob Storage log endpoint

## createLogAzure

Create an Azure Blob Storage logging endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateLogAzureResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingAzureblobCompressionCodec,
  LoggingAzureblobFormatVersion,
  LoggingAzureblobMessageType,
  LoggingAzureblobPlacement,
  LoggingAzureblobResponseCompressionCodec,
  LoggingAzureblobResponseFormatVersion,
  LoggingAzureblobResponseMessageType,
  LoggingAzureblobResponsePlacement,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingAzureblob.createLogAzure({
  loggingAzureblobInput: {
    accountName: "aut",
    compressionCodec: LoggingAzureblobCompressionCodec.Snappy,
    container: "itaque",
    fileMaxBytes: 9240,
    format: "%h %l %u %t "%r" %&gt;s %b",
    formatVersion: LoggingAzureblobFormatVersion.Two,
    gzipLevel: 0,
    messageType: LoggingAzureblobMessageType.Classic,
    name: "test-log-endpoint",
    path: "repellendus",
    period: 3600,
    placement: LoggingAzureblobPlacement.LessThanNilGreaterThan,
    publicKey: "-----BEGIN PRIVATE KEY-----
  ...
  -----END PRIVATE KEY-----
  ",
    responseCondition: "null",
    sasToken: "doloribus",
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: CreateLogAzureResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.CreateLogAzureRequest](../../models/operations/createlogazurerequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.CreateLogAzureSecurity](../../models/operations/createlogazuresecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CreateLogAzureResponse](../../models/operations/createlogazureresponse.md)>**


## deleteLogAzure

Delete the Azure Blob Storage logging endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteLogAzureResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.loggingAzureblob.deleteLogAzure({
  loggingAzureblobName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: DeleteLogAzureResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.DeleteLogAzureRequest](../../models/operations/deletelogazurerequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.DeleteLogAzureSecurity](../../models/operations/deletelogazuresecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.DeleteLogAzureResponse](../../models/operations/deletelogazureresponse.md)>**


## getLogAzure

Get the Azure Blob Storage logging endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetLogAzureResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingAzureblobResponseCompressionCodec,
  LoggingAzureblobResponseFormatVersion,
  LoggingAzureblobResponseMessageType,
  LoggingAzureblobResponsePlacement,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingAzureblob.getLogAzure({
  loggingAzureblobName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: GetLogAzureResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetLogAzureRequest](../../models/operations/getlogazurerequest.md)   | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `security`                                                                       | [operations.GetLogAzureSecurity](../../models/operations/getlogazuresecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetLogAzureResponse](../../models/operations/getlogazureresponse.md)>**


## listLogAzure

List all of the Azure Blob Storage logging endpoints for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListLogAzureResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingAzureblobResponseCompressionCodec,
  LoggingAzureblobResponseFormatVersion,
  LoggingAzureblobResponseMessageType,
  LoggingAzureblobResponsePlacement,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingAzureblob.listLogAzure({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: ListLogAzureResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.ListLogAzureRequest](../../models/operations/listlogazurerequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.ListLogAzureSecurity](../../models/operations/listlogazuresecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.ListLogAzureResponse](../../models/operations/listlogazureresponse.md)>**


## updateLogAzure

Update the Azure Blob Storage logging endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateLogAzureResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingAzureblobCompressionCodec,
  LoggingAzureblobFormatVersion,
  LoggingAzureblobMessageType,
  LoggingAzureblobPlacement,
  LoggingAzureblobResponseCompressionCodec,
  LoggingAzureblobResponseFormatVersion,
  LoggingAzureblobResponseMessageType,
  LoggingAzureblobResponsePlacement,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingAzureblob.updateLogAzure({
  loggingAzureblobInput: {
    accountName: "ut",
    compressionCodec: LoggingAzureblobCompressionCodec.Gzip,
    container: "cupiditate",
    fileMaxBytes: 181631,
    format: "%h %l %u %t "%r" %&gt;s %b",
    formatVersion: LoggingAzureblobFormatVersion.One,
    gzipLevel: 0,
    messageType: LoggingAzureblobMessageType.Classic,
    name: "test-log-endpoint",
    path: "laudantium",
    period: 3600,
    placement: LoggingAzureblobPlacement.WafDebug,
    publicKey: "-----BEGIN PRIVATE KEY-----
  ...
  -----END PRIVATE KEY-----
  ",
    responseCondition: "null",
    sasToken: "occaecati",
  },
  loggingAzureblobName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: UpdateLogAzureResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.UpdateLogAzureRequest](../../models/operations/updatelogazurerequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.UpdateLogAzureSecurity](../../models/operations/updatelogazuresecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.UpdateLogAzureResponse](../../models/operations/updatelogazureresponse.md)>**

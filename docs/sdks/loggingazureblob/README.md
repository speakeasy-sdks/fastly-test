# LoggingAzureblob
(*.loggingAzureblob*)

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
import { Fastly } from "Fastly";
import { CompressionCodec, FormatVersion, LoggingAzureblob, MessageType, Placement } from "Fastly/dist/sdk/models/components";
import { CreateLogAzureRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingAzureblob: LoggingAzureblob = {
  format: "%h %l %u %t \"%r\" %&gt;s %b",
  formatVersion: FormatVersion.Two,
  gzipLevel: 0,
  messageType: MessageType.Classic,
  name: "test-log-endpoint",
  period: 3600,
  placement: Placement.WafDebug,
  publicKey: "-----BEGIN PRIVATE KEY-----
...
-----END PRIVATE KEY-----
",
  responseCondition: "null",
};

  const res = await sdk.loggingAzureblob.createLogAzure(serviceId, versionId, loggingAzureblob);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `serviceId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | Alphanumeric string identifying the service.                           | SU1Z0isxPaozGVKXdv0eY                                                  |
| `versionId`                                                            | *number*                                                               | :heavy_check_mark:                                                     | Integer identifying a service version.                                 | 1                                                                      |
| `loggingAzureblob`                                                     | [components.LoggingAzureblob](../../models/shared/loggingazureblob.md) | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |                                                                        |


### Response

**Promise<[operations.CreateLogAzureResponse](../../models/operations/createlogazureresponse.md)>**


## deleteLogAzure

Delete the Azure Blob Storage logging endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteLogAzureRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingAzureblobName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingAzureblob.deleteLogAzure(loggingAzureblobName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingAzureblobName`                                       | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteLogAzureResponse](../../models/operations/deletelogazureresponse.md)>**


## getLogAzure

Get the Azure Blob Storage logging endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetLogAzureRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingAzureblobName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingAzureblob.getLogAzure(loggingAzureblobName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingAzureblobName`                                       | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetLogAzureResponse](../../models/operations/getlogazureresponse.md)>**


## listLogAzure

List all of the Azure Blob Storage logging endpoints for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListLogAzureRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingAzureblob.listLogAzure(serviceId, versionId);


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

**Promise<[operations.ListLogAzureResponse](../../models/operations/listlogazureresponse.md)>**


## updateLogAzure

Update the Azure Blob Storage logging endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { CompressionCodec, FormatVersion, LoggingAzureblob, MessageType, Placement } from "Fastly/dist/sdk/models/components";
import { UpdateLogAzureRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingAzureblobName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingAzureblob: LoggingAzureblob = {
  format: "%h %l %u %t \"%r\" %&gt;s %b",
  formatVersion: FormatVersion.Two,
  gzipLevel: 0,
  messageType: MessageType.Classic,
  name: "test-log-endpoint",
  period: 3600,
  placement: Placement.LessThanNilGreaterThan,
  publicKey: "-----BEGIN PRIVATE KEY-----
...
-----END PRIVATE KEY-----
",
  responseCondition: "null",
};

  const res = await sdk.loggingAzureblob.updateLogAzure(loggingAzureblobName, serviceId, versionId, loggingAzureblob);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `loggingAzureblobName`                                                 | *string*                                                               | :heavy_check_mark:                                                     | The name for the real-time logging configuration.                      | test-log-endpoint                                                      |
| `serviceId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | Alphanumeric string identifying the service.                           | SU1Z0isxPaozGVKXdv0eY                                                  |
| `versionId`                                                            | *number*                                                               | :heavy_check_mark:                                                     | Integer identifying a service version.                                 | 1                                                                      |
| `loggingAzureblob`                                                     | [components.LoggingAzureblob](../../models/shared/loggingazureblob.md) | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |                                                                        |


### Response

**Promise<[operations.UpdateLogAzureResponse](../../models/operations/updatelogazureresponse.md)>**


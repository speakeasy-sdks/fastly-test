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
import { CompressionCodec, FormatVersion, MessageType, Placement } from "Fastly/dist/sdk/models/components";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingAzureblob.createLogAzure({
    loggingAzureblob: {
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

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.CreateLogAzureRequest](../../models/operations/createlogazurerequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CreateLogAzureResponse](../../models/operations/createlogazureresponse.md)>**


## deleteLogAzure

Delete the Azure Blob Storage logging endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingAzureblob.deleteLogAzure({
    loggingAzureblobName: "test-log-endpoint",
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
| `request`                                                                            | [operations.DeleteLogAzureRequest](../../models/operations/deletelogazurerequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.DeleteLogAzureResponse](../../models/operations/deletelogazureresponse.md)>**


## getLogAzure

Get the Azure Blob Storage logging endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingAzureblob.getLogAzure({
    loggingAzureblobName: "test-log-endpoint",
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetLogAzureRequest](../../models/operations/getlogazurerequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetLogAzureResponse](../../models/operations/getlogazureresponse.md)>**


## listLogAzure

List all of the Azure Blob Storage logging endpoints for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingAzureblob.listLogAzure({
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.ListLogAzureRequest](../../models/operations/listlogazurerequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ListLogAzureResponse](../../models/operations/listlogazureresponse.md)>**


## updateLogAzure

Update the Azure Blob Storage logging endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { CompressionCodec, FormatVersion, MessageType, Placement } from "Fastly/dist/sdk/models/components";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingAzureblob.updateLogAzure({
    loggingAzureblob: {
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
    },
    loggingAzureblobName: "test-log-endpoint",
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
| `request`                                                                            | [operations.UpdateLogAzureRequest](../../models/operations/updatelogazurerequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdateLogAzureResponse](../../models/operations/updatelogazureresponse.md)>**


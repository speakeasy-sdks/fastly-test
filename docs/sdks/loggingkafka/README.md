# LoggingKafka
(*.loggingKafka*)

## Overview

Fastly will upload log messages periodically to the server in the format specified in the Kafka object.

<https://developer.fastly.com/reference/api/logging/kafka>
### Available Operations

* [createLogKafka](#createlogkafka) - Create a Kafka log endpoint
* [deleteLogKafka](#deletelogkafka) - Delete the Kafka log endpoint
* [getLogKafka](#getlogkafka) - Get a Kafka log endpoint
* [listLogKafka](#listlogkafka) - List Kafka log endpoints

## createLogKafka

Create a Kafka logging endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  AuthMethod,
  LoggingKafka,
  LoggingKafkaCompressionCodec,
  LoggingKafkaFormatVersion,
  LoggingKafkaPlacement,
  LoggingUseTls,
  RequiredAcks,
} from "Fastly/dist/sdk/models/components";
import { CreateLogKafkaRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingKafka: LoggingKafka = {
  format: "%h %l %u %t \"%r\" %&gt;s %b",
  formatVersion: LoggingKafkaFormatVersion.Two,
  name: "test-log-endpoint",
  placement: LoggingKafkaPlacement.None,
  responseCondition: "null",
};

  const res = await sdk.loggingKafka.createLogKafka(serviceId, versionId, loggingKafka);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                      | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `serviceId`                                                    | *string*                                                       | :heavy_check_mark:                                             | Alphanumeric string identifying the service.                   | SU1Z0isxPaozGVKXdv0eY                                          |
| `versionId`                                                    | *number*                                                       | :heavy_check_mark:                                             | Integer identifying a service version.                         | 1                                                              |
| `loggingKafka`                                                 | [components.LoggingKafka](../../models/shared/loggingkafka.md) | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `config`                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)   | :heavy_minus_sign:                                             | Available config options for making requests.                  |                                                                |


### Response

**Promise<[operations.CreateLogKafkaResponse](../../models/operations/createlogkafkaresponse.md)>**


## deleteLogKafka

Delete the Kafka logging endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteLogKafkaRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingKafkaName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingKafka.deleteLogKafka(loggingKafkaName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingKafkaName`                                           | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteLogKafkaResponse](../../models/operations/deletelogkafkaresponse.md)>**


## getLogKafka

Get the Kafka logging endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetLogKafkaRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingKafkaName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingKafka.getLogKafka(loggingKafkaName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingKafkaName`                                           | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetLogKafkaResponse](../../models/operations/getlogkafkaresponse.md)>**


## listLogKafka

List all of the Kafka logging endpoints for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListLogKafkaRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingKafka.listLogKafka(serviceId, versionId);


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

**Promise<[operations.ListLogKafkaResponse](../../models/operations/listlogkafkaresponse.md)>**


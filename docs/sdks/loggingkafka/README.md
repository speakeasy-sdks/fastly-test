# LoggingKafka
(*loggingKafka*)

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
import { Fastly } from "FastlyTestJS";
import { CreateLogKafkaResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingKafkaAuthMethod,
  LoggingKafkaCompressionCodec,
  LoggingKafkaFormatVersion,
  LoggingKafkaPlacement,
  LoggingKafkaRequiredAcks,
  LoggingUseTls,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingKafka.createLogKafka({
  loggingKafka: {
    authMethod: LoggingKafkaAuthMethod.Plain,
    brokers: "regarding Hills dynamic",
    compressionCodec: LoggingKafkaCompressionCodec.LessThanNilGreaterThan,
    format: "%h %l %u %t \"%r\" %&gt;s %b",
    formatVersion: LoggingKafkaFormatVersion.Two,
    name: "test-log-endpoint",
    parseLogKeyvals: false,
    password: "pYCQxRtGcFHbQQe",
    placement: LoggingKafkaPlacement.LessThanNilGreaterThan,
    requestMaxBytes: 849155,
    requiredAcks: LoggingKafkaRequiredAcks.One,
    responseCondition: "null",
    tlsCaCert: "Avon",
    tlsClientCert: "ashamed Market",
    tlsClientKey: "Buckinghamshire Southwest feed",
    tlsHostname: "Ball",
    topic: "mindshare",
    useTls: LoggingUseTls.One,
    user: "Earline_Lynch83",
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: CreateLogKafkaResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.CreateLogKafkaRequest](../../models/operations/createlogkafkarequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CreateLogKafkaResponse](../../models/operations/createlogkafkaresponse.md)>**


## deleteLogKafka

Delete the Kafka logging endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteLogKafkaResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingKafka.deleteLogKafka({
  loggingKafkaName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: DeleteLogKafkaResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.DeleteLogKafkaRequest](../../models/operations/deletelogkafkarequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.DeleteLogKafkaResponse](../../models/operations/deletelogkafkaresponse.md)>**


## getLogKafka

Get the Kafka logging endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetLogKafkaResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingKafka.getLogKafka({
  loggingKafkaName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: GetLogKafkaResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetLogKafkaRequest](../../models/operations/getlogkafkarequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetLogKafkaResponse](../../models/operations/getlogkafkaresponse.md)>**


## listLogKafka

List all of the Kafka logging endpoints for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListLogKafkaResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingKafka.listLogKafka({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: ListLogKafkaResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.ListLogKafkaRequest](../../models/operations/listlogkafkarequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ListLogKafkaResponse](../../models/operations/listlogkafkaresponse.md)>**


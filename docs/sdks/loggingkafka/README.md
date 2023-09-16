# LoggingKafka

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
import { CreateLogKafkaResponse, CreateLogKafkaSecurity } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingKafkaAuthMethod,
  LoggingKafkaCompressionCodec,
  LoggingKafkaFormatVersion,
  LoggingKafkaPlacement,
  LoggingKafkaRequiredAcks,
  LoggingUseTls,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();
const operationSecurity: CreateLogKafkaSecurity = {
  token: "",
};

sdk.loggingKafka.createLogKafka({
  loggingKafka5: {
    authMethod: LoggingKafkaAuthMethod.ScramSha512,
    brokers: "fugit",
    compressionCodec: LoggingKafkaCompressionCodec.LessThanNilGreaterThan,
    format: "%h %l %u %t "%r" %&gt;s %b",
    formatVersion: LoggingKafkaFormatVersion.Two,
    name: "test-log-endpoint",
    parseLogKeyvals: false,
    password: "doloribus",
    placement: LoggingKafkaPlacement.WafDebug,
    requestMaxBytes: 753570,
    requiredAcks: LoggingKafkaRequiredAcks.Zero,
    responseCondition: "null",
    tlsCaCert: "alias",
    tlsClientCert: "officia",
    tlsClientKey: "tempora",
    tlsHostname: "ipsam",
    topic: "ea",
    useTls: LoggingUseTls.Zero,
    user: "vel",
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: CreateLogKafkaResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.CreateLogKafkaRequest](../../models/operations/createlogkafkarequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.CreateLogKafkaSecurity](../../models/operations/createlogkafkasecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CreateLogKafkaResponse](../../models/operations/createlogkafkaresponse.md)>**


## deleteLogKafka

Delete the Kafka logging endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteLogKafkaResponse, DeleteLogKafkaSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: DeleteLogKafkaSecurity = {
  token: "",
};

sdk.loggingKafka.deleteLogKafka({
  loggingKafkaName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: DeleteLogKafkaResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.DeleteLogKafkaRequest](../../models/operations/deletelogkafkarequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.DeleteLogKafkaSecurity](../../models/operations/deletelogkafkasecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.DeleteLogKafkaResponse](../../models/operations/deletelogkafkaresponse.md)>**


## getLogKafka

Get the Kafka logging endpoint for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetLogKafkaResponse, GetLogKafkaSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: GetLogKafkaSecurity = {
  token: "",
};

sdk.loggingKafka.getLogKafka({
  loggingKafkaName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: GetLogKafkaResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetLogKafkaRequest](../../models/operations/getlogkafkarequest.md)   | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `security`                                                                       | [operations.GetLogKafkaSecurity](../../models/operations/getlogkafkasecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetLogKafkaResponse](../../models/operations/getlogkafkaresponse.md)>**


## listLogKafka

List all of the Kafka logging endpoints for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListLogKafkaResponse, ListLogKafkaSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: ListLogKafkaSecurity = {
  token: "",
};

sdk.loggingKafka.listLogKafka({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: ListLogKafkaResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.ListLogKafkaRequest](../../models/operations/listlogkafkarequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.ListLogKafkaSecurity](../../models/operations/listlogkafkasecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.ListLogKafkaResponse](../../models/operations/listlogkafkaresponse.md)>**


# loggingHttps

## Overview

Fastly will upload log messages to an HTTPS endpoint in the format specified in the HTTPS object. The HTTPS endpoint requires proof of domain ownership before logs can be received. Learn how to validate your domain in our [HTTPS endpoint documentation](https://docs.fastly.com/en/guides/log-streaming-https).

<https://developer.fastly.com/reference/api/logging/https>
### Available Operations

* [createLogHttps](#createloghttps) - Create an HTTPS log endpoint
* [deleteLogHttps](#deleteloghttps) - Delete an HTTPS log endpoint
* [getLogHttps](#getloghttps) - Get an HTTPS log endpoint
* [listLogHttps](#listloghttps) - List HTTPS log endpoints
* [updateLogHttps](#updateloghttps) - Update an HTTPS log endpoint

## createLogHttps

Create an HTTPS object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTest";
import { CreateLogHttpsResponse } from "FastlyTest/dist/sdk/models/operations";
import {
  LoggingHttpsFormatVersion,
  LoggingHttpsJsonFormat,
  LoggingHttpsMethod,
  LoggingHttpsPlacement,
  LoggingHttpsResponseFormatVersion,
  LoggingHttpsResponseJsonFormat,
  LoggingHttpsResponseMethod,
  LoggingHttpsResponsePlacement,
  LoggingMessageType,
} from "FastlyTest/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingHttps.createLogHttps({
  loggingHttps4: {
    contentType: "porro",
    format: "%h %l %u %t "%r" %&gt;s %b",
    formatVersion: LoggingHttpsFormatVersion.One,
    headerName: "quas",
    headerValue: "praesentium",
    jsonFormat: LoggingHttpsJsonFormat.Zero,
    messageType: LoggingMessageType.Classic,
    method: LoggingHttpsMethod.Put,
    name: "test-log-endpoint",
    placement: LoggingHttpsPlacement.None,
    requestMaxBytes: 681393,
    requestMaxEntries: 649463,
    responseCondition: "null",
    tlsCaCert: "incidunt",
    tlsClientCert: "atque",
    tlsClientKey: "explicabo",
    tlsHostname: "minima",
    url: "nisi",
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: CreateLogHttpsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.CreateLogHttpsRequest](../../models/operations/createloghttpsrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.CreateLogHttpsSecurity](../../models/operations/createloghttpssecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CreateLogHttpsResponse](../../models/operations/createloghttpsresponse.md)>**


## deleteLogHttps

Delete the HTTPS object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTest";
import { DeleteLogHttpsResponse } from "FastlyTest/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.loggingHttps.deleteLogHttps({
  loggingHttpsName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: DeleteLogHttpsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.DeleteLogHttpsRequest](../../models/operations/deleteloghttpsrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.DeleteLogHttpsSecurity](../../models/operations/deleteloghttpssecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.DeleteLogHttpsResponse](../../models/operations/deleteloghttpsresponse.md)>**


## getLogHttps

Get the HTTPS object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTest";
import { GetLogHttpsResponse } from "FastlyTest/dist/sdk/models/operations";
import {
  LoggingHttpsResponseFormatVersion,
  LoggingHttpsResponseJsonFormat,
  LoggingHttpsResponseMethod,
  LoggingHttpsResponsePlacement,
  LoggingMessageType,
} from "FastlyTest/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingHttps.getLogHttps({
  loggingHttpsName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: GetLogHttpsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetLogHttpsRequest](../../models/operations/getloghttpsrequest.md)   | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `security`                                                                       | [operations.GetLogHttpsSecurity](../../models/operations/getloghttpssecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetLogHttpsResponse](../../models/operations/getloghttpsresponse.md)>**


## listLogHttps

List all of the HTTPS objects for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTest";
import { ListLogHttpsResponse } from "FastlyTest/dist/sdk/models/operations";
import {
  LoggingHttpsResponseFormatVersion,
  LoggingHttpsResponseJsonFormat,
  LoggingHttpsResponseMethod,
  LoggingHttpsResponsePlacement,
  LoggingMessageType,
} from "FastlyTest/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingHttps.listLogHttps({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: ListLogHttpsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.ListLogHttpsRequest](../../models/operations/listloghttpsrequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.ListLogHttpsSecurity](../../models/operations/listloghttpssecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.ListLogHttpsResponse](../../models/operations/listloghttpsresponse.md)>**


## updateLogHttps

Update the HTTPS object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTest";
import { UpdateLogHttpsResponse } from "FastlyTest/dist/sdk/models/operations";
import {
  LoggingHttpsFormatVersion,
  LoggingHttpsJsonFormat,
  LoggingHttpsMethod,
  LoggingHttpsPlacement,
  LoggingHttpsResponseFormatVersion,
  LoggingHttpsResponseJsonFormat,
  LoggingHttpsResponseMethod,
  LoggingHttpsResponsePlacement,
  LoggingMessageType,
} from "FastlyTest/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingHttps.updateLogHttps({
  loggingHttps4: {
    contentType: "fugit",
    format: "%h %l %u %t "%r" %&gt;s %b",
    formatVersion: LoggingHttpsFormatVersion.Two,
    headerName: "consequuntur",
    headerValue: "ratione",
    jsonFormat: LoggingHttpsJsonFormat.Zero,
    messageType: LoggingMessageType.Classic,
    method: LoggingHttpsMethod.Put,
    name: "test-log-endpoint",
    placement: LoggingHttpsPlacement.WafDebug,
    requestMaxBytes: 543806,
    requestMaxEntries: 92260,
    responseCondition: "null",
    tlsCaCert: "esse",
    tlsClientCert: "eveniet",
    tlsClientKey: "accusamus",
    tlsHostname: "veritatis",
    url: "esse",
  },
  loggingHttpsName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: UpdateLogHttpsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.UpdateLogHttpsRequest](../../models/operations/updateloghttpsrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.UpdateLogHttpsSecurity](../../models/operations/updateloghttpssecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.UpdateLogHttpsResponse](../../models/operations/updateloghttpsresponse.md)>**


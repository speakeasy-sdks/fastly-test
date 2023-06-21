# loggingSplunk

## Overview

Fastly will POST messages to your Splunk account in the format specified in the Splunk object.

<https://developer.fastly.com/reference/api/logging/splunk>
### Available Operations

* [createLogSplunk](#createlogsplunk) - Create a Splunk log endpoint
* [deleteLogSplunk](#deletelogsplunk) - Delete a Splunk log endpoint
* [getLogSplunk](#getlogsplunk) - Get a Splunk log endpoint
* [listLogSplunk](#listlogsplunk) - List Splunk log endpoints
* [updateLogSplunk](#updatelogsplunk) - Update a Splunk log endpoint

## createLogSplunk

Create a Splunk logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateLogSplunkResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingSplunkFormatVersion,
  LoggingSplunkPlacement,
  LoggingSplunkResponseFormatVersion,
  LoggingSplunkResponsePlacement,
  LoggingUseTls,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingSplunk.createLogSplunk({
  loggingSplunk2: {
    format: "%h %l %u %t "%r" %&gt;s %b",
    formatVersion: LoggingSplunkFormatVersion.Two,
    name: "test-log-endpoint",
    placement: LoggingSplunkPlacement.WafDebug,
    requestMaxBytes: 287051,
    requestMaxEntries: 822560,
    responseCondition: "null",
    tlsCaCert: "facilis",
    tlsClientCert: "cum",
    tlsClientKey: "commodi",
    tlsHostname: "in",
    token: "corporis",
    url: "reiciendis",
    useTls: LoggingUseTls.One,
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: CreateLogSplunkResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.CreateLogSplunkRequest](../../models/operations/createlogsplunkrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.CreateLogSplunkSecurity](../../models/operations/createlogsplunksecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CreateLogSplunkResponse](../../models/operations/createlogsplunkresponse.md)>**


## deleteLogSplunk

Delete the Splunk logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteLogSplunkResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.loggingSplunk.deleteLogSplunk({
  loggingSplunkName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: DeleteLogSplunkResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.DeleteLogSplunkRequest](../../models/operations/deletelogsplunkrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.DeleteLogSplunkSecurity](../../models/operations/deletelogsplunksecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DeleteLogSplunkResponse](../../models/operations/deletelogsplunkresponse.md)>**


## getLogSplunk

Get the details for a Splunk logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetLogSplunkResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingSplunkResponseFormatVersion,
  LoggingSplunkResponsePlacement,
  LoggingUseTls,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingSplunk.getLogSplunk({
  loggingSplunkName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: GetLogSplunkResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetLogSplunkRequest](../../models/operations/getlogsplunkrequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.GetLogSplunkSecurity](../../models/operations/getlogsplunksecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetLogSplunkResponse](../../models/operations/getlogsplunkresponse.md)>**


## listLogSplunk

List all of the Splunk logging objects for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListLogSplunkResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingSplunkResponseFormatVersion,
  LoggingSplunkResponsePlacement,
  LoggingUseTls,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingSplunk.listLogSplunk({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: ListLogSplunkResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.ListLogSplunkRequest](../../models/operations/listlogsplunkrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.ListLogSplunkSecurity](../../models/operations/listlogsplunksecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ListLogSplunkResponse](../../models/operations/listlogsplunkresponse.md)>**


## updateLogSplunk

Update the Splunk logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateLogSplunkResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingSplunkFormatVersion,
  LoggingSplunkPlacement,
  LoggingSplunkResponseFormatVersion,
  LoggingSplunkResponsePlacement,
  LoggingUseTls,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingSplunk.updateLogSplunk({
  loggingSplunk2: {
    format: "%h %l %u %t "%r" %&gt;s %b",
    formatVersion: LoggingSplunkFormatVersion.One,
    name: "test-log-endpoint",
    placement: LoggingSplunkPlacement.LessThanNilGreaterThan,
    requestMaxBytes: 397533,
    requestMaxEntries: 46007,
    responseCondition: "null",
    tlsCaCert: "cum",
    tlsClientCert: "consectetur",
    tlsClientKey: "in",
    tlsHostname: "exercitationem",
    token: "earum",
    url: "facere",
    useTls: LoggingUseTls.Zero,
  },
  loggingSplunkName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: UpdateLogSplunkResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.UpdateLogSplunkRequest](../../models/operations/updatelogsplunkrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.UpdateLogSplunkSecurity](../../models/operations/updatelogsplunksecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UpdateLogSplunkResponse](../../models/operations/updatelogsplunkresponse.md)>**


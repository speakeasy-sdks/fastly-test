# LoggingSplunk
(*.loggingSplunk*)

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
import { Fastly } from "Fastly";
import { LoggingSplunk, LoggingSplunkFormatVersion, LoggingSplunkPlacement, LoggingUseTls } from "Fastly/dist/sdk/models/components";
import { CreateLogSplunkRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingSplunk: LoggingSplunk = {
  format: "%h %l %u %t \"%r\" %&gt;s %b",
  formatVersion: LoggingSplunkFormatVersion.Two,
  name: "test-log-endpoint",
  placement: LoggingSplunkPlacement.WafDebug,
  responseCondition: "null",
};

  const res = await sdk.loggingSplunk.createLogSplunk(serviceId, versionId, loggingSplunk);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `serviceId`                                                      | *string*                                                         | :heavy_check_mark:                                               | Alphanumeric string identifying the service.                     | SU1Z0isxPaozGVKXdv0eY                                            |
| `versionId`                                                      | *number*                                                         | :heavy_check_mark:                                               | Integer identifying a service version.                           | 1                                                                |
| `loggingSplunk`                                                  | [components.LoggingSplunk](../../models/shared/loggingsplunk.md) | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |                                                                  |


### Response

**Promise<[operations.CreateLogSplunkResponse](../../models/operations/createlogsplunkresponse.md)>**


## deleteLogSplunk

Delete the Splunk logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteLogSplunkRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingSplunkName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingSplunk.deleteLogSplunk(loggingSplunkName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingSplunkName`                                          | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteLogSplunkResponse](../../models/operations/deletelogsplunkresponse.md)>**


## getLogSplunk

Get the details for a Splunk logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetLogSplunkRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingSplunkName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingSplunk.getLogSplunk(loggingSplunkName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingSplunkName`                                          | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetLogSplunkResponse](../../models/operations/getlogsplunkresponse.md)>**


## listLogSplunk

List all of the Splunk logging objects for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListLogSplunkRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingSplunk.listLogSplunk(serviceId, versionId);


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

**Promise<[operations.ListLogSplunkResponse](../../models/operations/listlogsplunkresponse.md)>**


## updateLogSplunk

Update the Splunk logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { LoggingSplunk, LoggingSplunkFormatVersion, LoggingSplunkPlacement, LoggingUseTls } from "Fastly/dist/sdk/models/components";
import { UpdateLogSplunkRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingSplunkName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingSplunk: LoggingSplunk = {
  format: "%h %l %u %t \"%r\" %&gt;s %b",
  formatVersion: LoggingSplunkFormatVersion.Two,
  name: "test-log-endpoint",
  placement: LoggingSplunkPlacement.WafDebug,
  responseCondition: "null",
};

  const res = await sdk.loggingSplunk.updateLogSplunk(loggingSplunkName, serviceId, versionId, loggingSplunk);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `loggingSplunkName`                                              | *string*                                                         | :heavy_check_mark:                                               | The name for the real-time logging configuration.                | test-log-endpoint                                                |
| `serviceId`                                                      | *string*                                                         | :heavy_check_mark:                                               | Alphanumeric string identifying the service.                     | SU1Z0isxPaozGVKXdv0eY                                            |
| `versionId`                                                      | *number*                                                         | :heavy_check_mark:                                               | Integer identifying a service version.                           | 1                                                                |
| `loggingSplunk`                                                  | [components.LoggingSplunk](../../models/shared/loggingsplunk.md) | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |                                                                  |


### Response

**Promise<[operations.UpdateLogSplunkResponse](../../models/operations/updatelogsplunkresponse.md)>**


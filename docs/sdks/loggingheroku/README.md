# loggingHeroku

## Overview

Fastly will stream log messages to the Heroku account in the format specified in the Heroku object.

<https://developer.fastly.com/reference/api/logging/heroku>
### Available Operations

* [createLogHeroku](#createlogheroku) - Create a Heroku log endpoint
* [deleteLogHeroku](#deletelogheroku) - Delete the Heroku log endpoint
* [getLogHeroku](#getlogheroku) - Get a Heroku log endpoint
* [listLogHeroku](#listlogheroku) - List Heroku log endpoints
* [updateLogHeroku](#updatelogheroku) - Update the Heroku log endpoint

## createLogHeroku

Create a Heroku for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateLogHerokuResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingHerokuFormatVersion,
  LoggingHerokuPlacement,
  LoggingHerokuResponseFormatVersion,
  LoggingHerokuResponsePlacement,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingHeroku.createLogHeroku({
  loggingHeroku2: {
    format: "%h %l %u %t "%r" %&gt;s %b",
    formatVersion: LoggingHerokuFormatVersion.Two,
    name: "test-log-endpoint",
    placement: LoggingHerokuPlacement.None,
    responseCondition: "null",
    token: "distinctio",
    url: "quod",
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: CreateLogHerokuResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.CreateLogHerokuRequest](../../models/operations/createlogherokurequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.CreateLogHerokuSecurity](../../models/operations/createlogherokusecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CreateLogHerokuResponse](../../models/operations/createlogherokuresponse.md)>**


## deleteLogHeroku

Delete the Heroku for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteLogHerokuResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.loggingHeroku.deleteLogHeroku({
  loggingHerokuName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: DeleteLogHerokuResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.DeleteLogHerokuRequest](../../models/operations/deletelogherokurequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.DeleteLogHerokuSecurity](../../models/operations/deletelogherokusecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DeleteLogHerokuResponse](../../models/operations/deletelogherokuresponse.md)>**


## getLogHeroku

Get the Heroku for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetLogHerokuResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { LoggingHerokuResponseFormatVersion, LoggingHerokuResponsePlacement } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingHeroku.getLogHeroku({
  loggingHerokuName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: GetLogHerokuResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetLogHerokuRequest](../../models/operations/getlogherokurequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.GetLogHerokuSecurity](../../models/operations/getlogherokusecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetLogHerokuResponse](../../models/operations/getlogherokuresponse.md)>**


## listLogHeroku

List all of the Herokus for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListLogHerokuResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { LoggingHerokuResponseFormatVersion, LoggingHerokuResponsePlacement } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingHeroku.listLogHeroku({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: ListLogHerokuResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.ListLogHerokuRequest](../../models/operations/listlogherokurequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.ListLogHerokuSecurity](../../models/operations/listlogherokusecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ListLogHerokuResponse](../../models/operations/listlogherokuresponse.md)>**


## updateLogHeroku

Update the Heroku for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateLogHerokuResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingHerokuFormatVersion,
  LoggingHerokuPlacement,
  LoggingHerokuResponseFormatVersion,
  LoggingHerokuResponsePlacement,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingHeroku.updateLogHeroku({
  loggingHeroku2: {
    format: "%h %l %u %t "%r" %&gt;s %b",
    formatVersion: LoggingHerokuFormatVersion.One,
    name: "test-log-endpoint",
    placement: LoggingHerokuPlacement.None,
    responseCondition: "null",
    token: "nihil",
    url: "totam",
  },
  loggingHerokuName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: UpdateLogHerokuResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.UpdateLogHerokuRequest](../../models/operations/updatelogherokurequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.UpdateLogHerokuSecurity](../../models/operations/updatelogherokusecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UpdateLogHerokuResponse](../../models/operations/updatelogherokuresponse.md)>**

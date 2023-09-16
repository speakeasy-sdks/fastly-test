# LoggingPapertrail

## Overview

Fastly will stream log messages to the Papertrail account in the format specified in the Papertrail object.

<https://developer.fastly.com/reference/api/logging/papertrail>
### Available Operations

* [createLogPapertrail](#createlogpapertrail) - Create a Papertrail log endpoint
* [deleteLogPapertrail](#deletelogpapertrail) - Delete a Papertrail log endpoint
* [getLogPapertrail](#getlogpapertrail) - Get a Papertrail log endpoint
* [listLogPapertrail](#listlogpapertrail) - List Papertrail log endpoints
* [updateLogPapertrail](#updatelogpapertrail) - Update a Papertrail log endpoint

## createLogPapertrail

Create a Papertrail for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateLogPapertrailResponse, CreateLogPapertrailSecurity } from "FastlyTestJS/dist/sdk/models/operations";
import { LoggingPapertrailFormatVersion, LoggingPapertrailPlacement } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();
const operationSecurity: CreateLogPapertrailSecurity = {
  token: "",
};

sdk.loggingPapertrail.createLogPapertrail({
  loggingPapertrail2: {
    address: "example.com",
    format: "%h %l %u %t "%r" %&gt;s %b",
    formatVersion: LoggingPapertrailFormatVersion.One,
    name: "test-log-endpoint",
    placement: LoggingPapertrailPlacement.WafDebug,
    port: 301598,
    responseCondition: "null",
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: CreateLogPapertrailResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.CreateLogPapertrailRequest](../../models/operations/createlogpapertrailrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.CreateLogPapertrailSecurity](../../models/operations/createlogpapertrailsecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.CreateLogPapertrailResponse](../../models/operations/createlogpapertrailresponse.md)>**


## deleteLogPapertrail

Delete the Papertrail for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteLogPapertrailResponse, DeleteLogPapertrailSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: DeleteLogPapertrailSecurity = {
  token: "",
};

sdk.loggingPapertrail.deleteLogPapertrail({
  loggingPapertrailName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: DeleteLogPapertrailResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.DeleteLogPapertrailRequest](../../models/operations/deletelogpapertrailrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.DeleteLogPapertrailSecurity](../../models/operations/deletelogpapertrailsecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.DeleteLogPapertrailResponse](../../models/operations/deletelogpapertrailresponse.md)>**


## getLogPapertrail

Get the Papertrail for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetLogPapertrailResponse, GetLogPapertrailSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: GetLogPapertrailSecurity = {
  token: "",
};

sdk.loggingPapertrail.getLogPapertrail({
  loggingPapertrailName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: GetLogPapertrailResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetLogPapertrailRequest](../../models/operations/getlogpapertrailrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.GetLogPapertrailSecurity](../../models/operations/getlogpapertrailsecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetLogPapertrailResponse](../../models/operations/getlogpapertrailresponse.md)>**


## listLogPapertrail

List all of the Papertrails for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListLogPapertrailResponse, ListLogPapertrailSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: ListLogPapertrailSecurity = {
  token: "",
};

sdk.loggingPapertrail.listLogPapertrail({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: ListLogPapertrailResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.ListLogPapertrailRequest](../../models/operations/listlogpapertrailrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.ListLogPapertrailSecurity](../../models/operations/listlogpapertrailsecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ListLogPapertrailResponse](../../models/operations/listlogpapertrailresponse.md)>**


## updateLogPapertrail

Update the Papertrail for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateLogPapertrailResponse, UpdateLogPapertrailSecurity } from "FastlyTestJS/dist/sdk/models/operations";
import { LoggingPapertrailFormatVersion, LoggingPapertrailPlacement } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();
const operationSecurity: UpdateLogPapertrailSecurity = {
  token: "",
};

sdk.loggingPapertrail.updateLogPapertrail({
  loggingPapertrail2: {
    address: "example.com",
    format: "%h %l %u %t "%r" %&gt;s %b",
    formatVersion: LoggingPapertrailFormatVersion.One,
    name: "test-log-endpoint",
    placement: LoggingPapertrailPlacement.None,
    port: 458515,
    responseCondition: "null",
  },
  loggingPapertrailName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: UpdateLogPapertrailResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.UpdateLogPapertrailRequest](../../models/operations/updatelogpapertrailrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.UpdateLogPapertrailSecurity](../../models/operations/updatelogpapertrailsecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.UpdateLogPapertrailResponse](../../models/operations/updatelogpapertrailresponse.md)>**


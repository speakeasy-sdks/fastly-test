# loggingLogentries

## Overview

The Logentries integration has been discontinued.  No new Logentries endpoints can be created.

<https://developer.fastly.com/reference/api/logging/logentries>
### Available Operations

* [~~createLogLogentries~~](#createloglogentries) - Create a Logentries log endpoint :warning: **Deprecated**
* [~~deleteLogLogentries~~](#deleteloglogentries) - Delete a Logentries log endpoint :warning: **Deprecated**
* [~~getLogLogentries~~](#getloglogentries) - Get a Logentries log endpoint :warning: **Deprecated**
* [~~listLogLogentries~~](#listloglogentries) - List Logentries log endpoints :warning: **Deprecated**
* [~~updateLogLogentries~~](#updateloglogentries) - Update a Logentries log endpoint :warning: **Deprecated**

## ~~createLogLogentries~~

Create a Logentry for a particular service and version.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateLogLogentriesResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingLogentriesFormatVersion,
  LoggingLogentriesPlacement,
  LoggingLogentriesRegion,
  LoggingLogentriesResponseFormatVersion,
  LoggingLogentriesResponsePlacement,
  LoggingLogentriesResponseRegion,
  LoggingUseTls,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingLogentries.createLogLogentries({
  loggingLogentries3: {
    format: "%h %l %u %t "%r" %&gt;s %b",
    formatVersion: LoggingLogentriesFormatVersion.Two,
    name: "test-log-endpoint",
    placement: LoggingLogentriesPlacement.None,
    port: 458139,
    region: LoggingLogentriesRegion.Eu,
    responseCondition: "null",
    token: "provident",
    useTls: LoggingUseTls.One,
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: CreateLogLogentriesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.CreateLogLogentriesRequest](../../models/operations/createloglogentriesrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.CreateLogLogentriesSecurity](../../models/operations/createloglogentriessecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.CreateLogLogentriesResponse](../../models/operations/createloglogentriesresponse.md)>**


## ~~deleteLogLogentries~~

Delete the Logentry for a particular service and version.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteLogLogentriesResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.loggingLogentries.deleteLogLogentries({
  loggingLogentriesName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: DeleteLogLogentriesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.DeleteLogLogentriesRequest](../../models/operations/deleteloglogentriesrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.DeleteLogLogentriesSecurity](../../models/operations/deleteloglogentriessecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.DeleteLogLogentriesResponse](../../models/operations/deleteloglogentriesresponse.md)>**


## ~~getLogLogentries~~

Get the Logentry for a particular service and version.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetLogLogentriesResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingLogentriesResponseFormatVersion,
  LoggingLogentriesResponsePlacement,
  LoggingLogentriesResponseRegion,
  LoggingUseTls,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingLogentries.getLogLogentries({
  loggingLogentriesName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: GetLogLogentriesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetLogLogentriesRequest](../../models/operations/getloglogentriesrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.GetLogLogentriesSecurity](../../models/operations/getloglogentriessecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetLogLogentriesResponse](../../models/operations/getloglogentriesresponse.md)>**


## ~~listLogLogentries~~

List all of the Logentries for a particular service and version.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListLogLogentriesResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingLogentriesResponseFormatVersion,
  LoggingLogentriesResponsePlacement,
  LoggingLogentriesResponseRegion,
  LoggingUseTls,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingLogentries.listLogLogentries({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: ListLogLogentriesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.ListLogLogentriesRequest](../../models/operations/listloglogentriesrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.ListLogLogentriesSecurity](../../models/operations/listloglogentriessecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ListLogLogentriesResponse](../../models/operations/listloglogentriesresponse.md)>**


## ~~updateLogLogentries~~

Update the Logentry for a particular service and version.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateLogLogentriesResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingLogentriesFormatVersion,
  LoggingLogentriesPlacement,
  LoggingLogentriesRegion,
  LoggingLogentriesResponseFormatVersion,
  LoggingLogentriesResponsePlacement,
  LoggingLogentriesResponseRegion,
  LoggingUseTls,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingLogentries.updateLogLogentries({
  loggingLogentries3: {
    format: "%h %l %u %t "%r" %&gt;s %b",
    formatVersion: LoggingLogentriesFormatVersion.Two,
    name: "test-log-endpoint",
    placement: LoggingLogentriesPlacement.WafDebug,
    port: 457223,
    region: LoggingLogentriesRegion.Us,
    responseCondition: "null",
    token: "a",
    useTls: LoggingUseTls.One,
  },
  loggingLogentriesName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: UpdateLogLogentriesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.UpdateLogLogentriesRequest](../../models/operations/updateloglogentriesrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.UpdateLogLogentriesSecurity](../../models/operations/updateloglogentriessecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.UpdateLogLogentriesResponse](../../models/operations/updateloglogentriesresponse.md)>**

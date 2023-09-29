# LoggingLogentries
(*loggingLogentries*)

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

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateLogLogentriesResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingLogentriesFormatVersion,
  LoggingLogentriesPlacement,
  LoggingLogentriesRegion,
  LoggingUseTls,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingLogentries.createLogLogentries({
  loggingLogentries: {
    format: "%h %l %u %t \"%r\" %&gt;s %b",
    formatVersion: LoggingLogentriesFormatVersion.Two,
    name: "test-log-endpoint",
    placement: LoggingLogentriesPlacement.LessThanNilGreaterThan,
    port: 843159,
    region: LoggingLogentriesRegion.Us,
    responseCondition: "null",
    token: "Beach",
    useTls: LoggingUseTls.Zero,
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: CreateLogLogentriesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.CreateLogLogentriesRequest](../../models/operations/createloglogentriesrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.CreateLogLogentriesResponse](../../models/operations/createloglogentriesresponse.md)>**


## ~~deleteLogLogentries~~

Delete the Logentry for a particular service and version.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteLogLogentriesResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingLogentries.deleteLogLogentries({
  loggingLogentriesName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: DeleteLogLogentriesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.DeleteLogLogentriesRequest](../../models/operations/deleteloglogentriesrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.DeleteLogLogentriesResponse](../../models/operations/deleteloglogentriesresponse.md)>**


## ~~getLogLogentries~~

Get the Logentry for a particular service and version.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetLogLogentriesResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingLogentries.getLogLogentries({
  loggingLogentriesName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: GetLogLogentriesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetLogLogentriesRequest](../../models/operations/getloglogentriesrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetLogLogentriesResponse](../../models/operations/getloglogentriesresponse.md)>**


## ~~listLogLogentries~~

List all of the Logentries for a particular service and version.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListLogLogentriesResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingLogentries.listLogLogentries({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: ListLogLogentriesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.ListLogLogentriesRequest](../../models/operations/listloglogentriesrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ListLogLogentriesResponse](../../models/operations/listloglogentriesresponse.md)>**


## ~~updateLogLogentries~~

Update the Logentry for a particular service and version.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateLogLogentriesResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingLogentriesFormatVersion,
  LoggingLogentriesPlacement,
  LoggingLogentriesRegion,
  LoggingUseTls,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.loggingLogentries.updateLogLogentries({
  loggingLogentries: {
    format: "%h %l %u %t \"%r\" %&gt;s %b",
    formatVersion: LoggingLogentriesFormatVersion.Two,
    name: "test-log-endpoint",
    placement: LoggingLogentriesPlacement.LessThanNilGreaterThan,
    port: 975061,
    region: LoggingLogentriesRegion.Eu,
    responseCondition: "null",
    token: "towards",
    useTls: LoggingUseTls.One,
  },
  loggingLogentriesName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: UpdateLogLogentriesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.UpdateLogLogentriesRequest](../../models/operations/updateloglogentriesrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.UpdateLogLogentriesResponse](../../models/operations/updateloglogentriesresponse.md)>**


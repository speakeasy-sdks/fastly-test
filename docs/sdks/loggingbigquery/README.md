# loggingBigquery

## Overview

Fastly will upload log messages to the Google BigQuery dataset and table in the format specified in the BigQuery logging object.

<https://developer.fastly.com/reference/api/logging/bigquery>
### Available Operations

* [createLogBigquery](#createlogbigquery) - Create a BigQuery log endpoint
* [deleteLogBigquery](#deletelogbigquery) - Delete a BigQuery log endpoint
* [getLogBigquery](#getlogbigquery) - Get a BigQuery log endpoint
* [listLogBigquery](#listlogbigquery) - List BigQuery log endpoints
* [updateLogBigquery](#updatelogbigquery) - Update a BigQuery log endpoint

## createLogBigquery

Create a BigQuery logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateLogBigqueryResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingBigqueryFormatVersion,
  LoggingBigqueryPlacement,
  LoggingBigqueryResponseFormatVersion,
  LoggingBigqueryResponsePlacement,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingBigquery.createLogBigquery({
  loggingBigquery2: {
    accountName: "test-user@test-project-id.iam.gserviceaccount.com",
    dataset: "voluptatibus",
    format: "quisquam",
    formatVersion: LoggingBigqueryFormatVersion.Two,
    name: "Tim Erdman",
    placement: LoggingBigqueryPlacement.None,
    projectId: "test-project-id",
    responseCondition: "null",
    secretKey: "-----BEGIN PRIVATE KEY-----
  ...
  -----END PRIVATE KEY-----
  ",
    table: "vero",
    templateSuffix: "tenetur",
    user: "test-user@test-project-id.iam.gserviceaccount.com",
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: CreateLogBigqueryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.CreateLogBigqueryRequest](../../models/operations/createlogbigqueryrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.CreateLogBigquerySecurity](../../models/operations/createlogbigquerysecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.CreateLogBigqueryResponse](../../models/operations/createlogbigqueryresponse.md)>**


## deleteLogBigquery

Delete a BigQuery logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteLogBigqueryResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.loggingBigquery.deleteLogBigquery({
  loggingBigqueryName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: DeleteLogBigqueryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.DeleteLogBigqueryRequest](../../models/operations/deletelogbigqueryrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.DeleteLogBigquerySecurity](../../models/operations/deletelogbigquerysecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.DeleteLogBigqueryResponse](../../models/operations/deletelogbigqueryresponse.md)>**


## getLogBigquery

Get the details for a BigQuery logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetLogBigqueryResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { LoggingBigqueryResponseFormatVersion, LoggingBigqueryResponsePlacement } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingBigquery.getLogBigquery({
  loggingBigqueryName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: GetLogBigqueryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetLogBigqueryRequest](../../models/operations/getlogbigqueryrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.GetLogBigquerySecurity](../../models/operations/getlogbigquerysecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetLogBigqueryResponse](../../models/operations/getlogbigqueryresponse.md)>**


## listLogBigquery

List all of the BigQuery logging objects for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListLogBigqueryResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { LoggingBigqueryResponseFormatVersion, LoggingBigqueryResponsePlacement } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingBigquery.listLogBigquery({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: ListLogBigqueryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.ListLogBigqueryRequest](../../models/operations/listlogbigqueryrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.ListLogBigquerySecurity](../../models/operations/listlogbigquerysecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.ListLogBigqueryResponse](../../models/operations/listlogbigqueryresponse.md)>**


## updateLogBigquery

Update a BigQuery logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateLogBigqueryResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  LoggingBigqueryFormatVersion,
  LoggingBigqueryPlacement,
  LoggingBigqueryResponseFormatVersion,
  LoggingBigqueryResponsePlacement,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.loggingBigquery.updateLogBigquery({
  loggingBigquery2: {
    accountName: "test-user@test-project-id.iam.gserviceaccount.com",
    dataset: "dignissimos",
    format: "hic",
    formatVersion: LoggingBigqueryFormatVersion.Two,
    name: "Lonnie Murray",
    placement: LoggingBigqueryPlacement.WafDebug,
    projectId: "test-project-id",
    responseCondition: "null",
    secretKey: "-----BEGIN PRIVATE KEY-----
  ...
  -----END PRIVATE KEY-----
  ",
    table: "dolore",
    templateSuffix: "quibusdam",
    user: "test-user@test-project-id.iam.gserviceaccount.com",
  },
  loggingBigqueryName: "test-log-endpoint",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: UpdateLogBigqueryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.UpdateLogBigqueryRequest](../../models/operations/updatelogbigqueryrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.UpdateLogBigquerySecurity](../../models/operations/updatelogbigquerysecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.UpdateLogBigqueryResponse](../../models/operations/updatelogbigqueryresponse.md)>**


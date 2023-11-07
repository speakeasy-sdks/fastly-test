# LoggingBigquery
(*.loggingBigquery*)

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
import { Fastly } from "Fastly";
import { LoggingBigquery, LoggingBigqueryFormatVersion, LoggingBigqueryPlacement } from "Fastly/dist/sdk/models/components";
import { CreateLogBigqueryRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingBigquery: LoggingBigquery = {
  accountName: "test-user@test-project-id.iam.gserviceaccount.com",
  formatVersion: LoggingBigqueryFormatVersion.Two,
  placement: LoggingBigqueryPlacement.None,
  projectId: "test-project-id",
  responseCondition: "null",
  secretKey: "-----BEGIN PRIVATE KEY-----
...
-----END PRIVATE KEY-----
",
  user: "test-user@test-project-id.iam.gserviceaccount.com",
};

  const res = await sdk.loggingBigquery.createLogBigquery(serviceId, versionId, loggingBigquery);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `serviceId`                                                          | *string*                                                             | :heavy_check_mark:                                                   | Alphanumeric string identifying the service.                         | SU1Z0isxPaozGVKXdv0eY                                                |
| `versionId`                                                          | *number*                                                             | :heavy_check_mark:                                                   | Integer identifying a service version.                               | 1                                                                    |
| `loggingBigquery`                                                    | [components.LoggingBigquery](../../models/shared/loggingbigquery.md) | :heavy_minus_sign:                                                   | N/A                                                                  |                                                                      |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |                                                                      |


### Response

**Promise<[operations.CreateLogBigqueryResponse](../../models/operations/createlogbigqueryresponse.md)>**


## deleteLogBigquery

Delete a BigQuery logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteLogBigqueryRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingBigqueryName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingBigquery.deleteLogBigquery(loggingBigqueryName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingBigqueryName`                                        | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteLogBigqueryResponse](../../models/operations/deletelogbigqueryresponse.md)>**


## getLogBigquery

Get the details for a BigQuery logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetLogBigqueryRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingBigqueryName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingBigquery.getLogBigquery(loggingBigqueryName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loggingBigqueryName`                                        | *string*                                                     | :heavy_check_mark:                                           | The name for the real-time logging configuration.            | test-log-endpoint                                            |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetLogBigqueryResponse](../../models/operations/getlogbigqueryresponse.md)>**


## listLogBigquery

List all of the BigQuery logging objects for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListLogBigqueryRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.loggingBigquery.listLogBigquery(serviceId, versionId);


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

**Promise<[operations.ListLogBigqueryResponse](../../models/operations/listlogbigqueryresponse.md)>**


## updateLogBigquery

Update a BigQuery logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { LoggingBigquery, LoggingBigqueryFormatVersion, LoggingBigqueryPlacement } from "Fastly/dist/sdk/models/components";
import { UpdateLogBigqueryRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const loggingBigqueryName: string = "test-log-endpoint";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const loggingBigquery: LoggingBigquery = {
  accountName: "test-user@test-project-id.iam.gserviceaccount.com",
  formatVersion: LoggingBigqueryFormatVersion.Two,
  placement: LoggingBigqueryPlacement.WafDebug,
  projectId: "test-project-id",
  responseCondition: "null",
  secretKey: "-----BEGIN PRIVATE KEY-----
...
-----END PRIVATE KEY-----
",
  user: "test-user@test-project-id.iam.gserviceaccount.com",
};

  const res = await sdk.loggingBigquery.updateLogBigquery(loggingBigqueryName, serviceId, versionId, loggingBigquery);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `loggingBigqueryName`                                                | *string*                                                             | :heavy_check_mark:                                                   | The name for the real-time logging configuration.                    | test-log-endpoint                                                    |
| `serviceId`                                                          | *string*                                                             | :heavy_check_mark:                                                   | Alphanumeric string identifying the service.                         | SU1Z0isxPaozGVKXdv0eY                                                |
| `versionId`                                                          | *number*                                                             | :heavy_check_mark:                                                   | Integer identifying a service version.                               | 1                                                                    |
| `loggingBigquery`                                                    | [components.LoggingBigquery](../../models/shared/loggingbigquery.md) | :heavy_minus_sign:                                                   | N/A                                                                  |                                                                      |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |                                                                      |


### Response

**Promise<[operations.UpdateLogBigqueryResponse](../../models/operations/updatelogbigqueryresponse.md)>**


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
import { Fastly } from "FastlyTestJS";
import { LoggingBigqueryFormatVersion, LoggingBigqueryPlacement } from "FastlyTestJS/dist/sdk/models/shared";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingBigquery.createLogBigquery({
    loggingBigquery: {
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
    },
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.CreateLogBigqueryRequest](../../models/operations/createlogbigqueryrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CreateLogBigqueryResponse](../../models/operations/createlogbigqueryresponse.md)>**


## deleteLogBigquery

Delete a BigQuery logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingBigquery.deleteLogBigquery({
    loggingBigqueryName: "test-log-endpoint",
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.DeleteLogBigqueryRequest](../../models/operations/deletelogbigqueryrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.DeleteLogBigqueryResponse](../../models/operations/deletelogbigqueryresponse.md)>**


## getLogBigquery

Get the details for a BigQuery logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingBigquery.getLogBigquery({
    loggingBigqueryName: "test-log-endpoint",
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetLogBigqueryRequest](../../models/operations/getlogbigqueryrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetLogBigqueryResponse](../../models/operations/getlogbigqueryresponse.md)>**


## listLogBigquery

List all of the BigQuery logging objects for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingBigquery.listLogBigquery({
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.ListLogBigqueryRequest](../../models/operations/listlogbigqueryrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.ListLogBigqueryResponse](../../models/operations/listlogbigqueryresponse.md)>**


## updateLogBigquery

Update a BigQuery logging object for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { LoggingBigqueryFormatVersion, LoggingBigqueryPlacement } from "FastlyTestJS/dist/sdk/models/shared";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.loggingBigquery.updateLogBigquery({
    loggingBigquery: {
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
    },
    loggingBigqueryName: "test-log-endpoint",
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.UpdateLogBigqueryRequest](../../models/operations/updatelogbigqueryrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.UpdateLogBigqueryResponse](../../models/operations/updatelogbigqueryresponse.md)>**


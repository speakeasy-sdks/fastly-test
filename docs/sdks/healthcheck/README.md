# Healthcheck
(*.healthcheck*)

## Overview

Health checks are used to customize the way Fastly checks on your Backends. If an origin server is marked unhealthy due to health checks, Fastly will stop attempting to send requests to it. If all origin servers are marked unhealthy, Fastly will attempt to serve stale. If no stale object is available, a 503 will be returned to the client.

<https://developer.fastly.com/reference/api/services/healthcheck>
### Available Operations

* [createHealthcheck](#createhealthcheck) - Create a health check
* [deleteHealthcheck](#deletehealthcheck) - Delete a health check
* [getHealthcheck](#gethealthcheck) - Get a health check
* [listHealthchecks](#listhealthchecks) - List health checks
* [updateHealthcheck](#updatehealthcheck) - Update a health check

## createHealthcheck

Create a health check for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { Healthcheck } from "Fastly/dist/sdk/models/components";
import { CreateHealthcheckRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const healthcheck: Healthcheck = {
  comment: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
  headers: [
    "string",
  ],
  name: "test-healthcheck",
};

  const res = await sdk.healthcheck.createHealthcheck(serviceId, versionId, healthcheck);


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
| `healthcheck`                                                | [components.Healthcheck](../../models/shared/healthcheck.md) | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.CreateHealthcheckResponse](../../models/operations/createhealthcheckresponse.md)>**


## deleteHealthcheck

Delete the health check for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteHealthcheckRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const healthcheckName: string = "test-healthcheck";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.healthcheck.deleteHealthcheck(healthcheckName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `healthcheckName`                                            | *string*                                                     | :heavy_check_mark:                                           | The name of the health check.                                | test-healthcheck                                             |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteHealthcheckResponse](../../models/operations/deletehealthcheckresponse.md)>**


## getHealthcheck

Get the health check for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetHealthcheckRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const healthcheckName: string = "test-healthcheck";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.healthcheck.getHealthcheck(healthcheckName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `healthcheckName`                                            | *string*                                                     | :heavy_check_mark:                                           | The name of the health check.                                | test-healthcheck                                             |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetHealthcheckResponse](../../models/operations/gethealthcheckresponse.md)>**


## listHealthchecks

List all of the health checks for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListHealthchecksRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.healthcheck.listHealthchecks(serviceId, versionId);


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

**Promise<[operations.ListHealthchecksResponse](../../models/operations/listhealthchecksresponse.md)>**


## updateHealthcheck

Update the health check for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { Healthcheck } from "Fastly/dist/sdk/models/components";
import { UpdateHealthcheckRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const healthcheckName: string = "test-healthcheck";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const healthcheck: Healthcheck = {
  comment: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
  headers: [
    "string",
  ],
  name: "test-healthcheck",
};

  const res = await sdk.healthcheck.updateHealthcheck(healthcheckName, serviceId, versionId, healthcheck);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `healthcheckName`                                            | *string*                                                     | :heavy_check_mark:                                           | The name of the health check.                                | test-healthcheck                                             |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `healthcheck`                                                | [components.Healthcheck](../../models/shared/healthcheck.md) | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.UpdateHealthcheckResponse](../../models/operations/updatehealthcheckresponse.md)>**


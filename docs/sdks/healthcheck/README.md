# healthcheck

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
import { Fastly } from "FastlyTestJS";
import { CreateHealthcheckResponse, CreateHealthcheckSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: CreateHealthcheckSecurity = {
  token: "",
};

sdk.healthcheck.createHealthcheck({
  healthcheck: {
    checkInterval: 703889,
    comment: "in",
    expectedResponse: 100226,
    headers: [
      "architecto",
    ],
    host: "repudiandae",
    httpVersion: "ullam",
    initial: 714242,
    method: "nihil",
    name: "test-healthcheck",
    path: "repellat",
    threshold: 841140,
    timeout: 149448,
    window: 904648,
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: CreateHealthcheckResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.CreateHealthcheckRequest](../../models/operations/createhealthcheckrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.CreateHealthcheckSecurity](../../models/operations/createhealthchecksecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.CreateHealthcheckResponse](../../models/operations/createhealthcheckresponse.md)>**


## deleteHealthcheck

Delete the health check for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteHealthcheckResponse, DeleteHealthcheckSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: DeleteHealthcheckSecurity = {
  token: "",
};

sdk.healthcheck.deleteHealthcheck({
  healthcheckName: "test-healthcheck",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: DeleteHealthcheckResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.DeleteHealthcheckRequest](../../models/operations/deletehealthcheckrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.DeleteHealthcheckSecurity](../../models/operations/deletehealthchecksecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.DeleteHealthcheckResponse](../../models/operations/deletehealthcheckresponse.md)>**


## getHealthcheck

Get the health check for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetHealthcheckResponse, GetHealthcheckSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: GetHealthcheckSecurity = {
  token: "",
};

sdk.healthcheck.getHealthcheck({
  healthcheckName: "test-healthcheck",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: GetHealthcheckResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetHealthcheckRequest](../../models/operations/gethealthcheckrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.GetHealthcheckSecurity](../../models/operations/gethealthchecksecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetHealthcheckResponse](../../models/operations/gethealthcheckresponse.md)>**


## listHealthchecks

List all of the health checks for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListHealthchecksResponse, ListHealthchecksSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: ListHealthchecksSecurity = {
  token: "",
};

sdk.healthcheck.listHealthchecks({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: ListHealthchecksResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.ListHealthchecksRequest](../../models/operations/listhealthchecksrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.ListHealthchecksSecurity](../../models/operations/listhealthcheckssecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ListHealthchecksResponse](../../models/operations/listhealthchecksresponse.md)>**


## updateHealthcheck

Update the health check for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateHealthcheckResponse, UpdateHealthcheckSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: UpdateHealthcheckSecurity = {
  token: "",
};

sdk.healthcheck.updateHealthcheck({
  healthcheck: {
    checkInterval: 868126,
    comment: "accusantium",
    expectedResponse: 162493,
    headers: [
      "praesentium",
    ],
    host: "natus",
    httpVersion: "magni",
    initial: 123820,
    method: "quo",
    name: "test-healthcheck",
    path: "illum",
    threshold: 864934,
    timeout: 807319,
    window: 411397,
  },
  healthcheckName: "test-healthcheck",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: UpdateHealthcheckResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.UpdateHealthcheckRequest](../../models/operations/updatehealthcheckrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.UpdateHealthcheckSecurity](../../models/operations/updatehealthchecksecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.UpdateHealthcheckResponse](../../models/operations/updatehealthcheckresponse.md)>**


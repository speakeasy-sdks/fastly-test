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
import { CreateHealthcheckResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.healthcheck.createHealthcheck({
  healthcheck: {
    checkInterval: 798047,
    comment: "officiis",
    expectedResponse: 185636,
    headers: [
      "a",
      "esse",
      "harum",
    ],
    host: "iusto",
    httpVersion: "ipsum",
    initial: 788740,
    method: "tenetur",
    name: "test-healthcheck",
    path: "amet",
    threshold: 730856,
    timeout: 880298,
    window: 253941,
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: CreateHealthcheckResponse) => {
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
import { DeleteHealthcheckResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.healthcheck.deleteHealthcheck({
  healthcheckName: "test-healthcheck",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: DeleteHealthcheckResponse) => {
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
import { GetHealthcheckResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.healthcheck.getHealthcheck({
  healthcheckName: "test-healthcheck",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: GetHealthcheckResponse) => {
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
import { ListHealthchecksResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.healthcheck.listHealthchecks({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: ListHealthchecksResponse) => {
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
import { UpdateHealthcheckResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.healthcheck.updateHealthcheck({
  healthcheck: {
    checkInterval: 313692,
    comment: "dolorem",
    expectedResponse: 957451,
    headers: [
      "nihil",
      "sit",
      "expedita",
    ],
    host: "neque",
    httpVersion: "sed",
    initial: 424685,
    method: "libero",
    name: "test-healthcheck",
    path: "voluptas",
    threshold: 646265,
    timeout: 463575,
    window: 214880,
  },
  healthcheckName: "test-healthcheck",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: UpdateHealthcheckResponse) => {
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


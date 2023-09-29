# Healthcheck
(*healthcheck*)

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

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.healthcheck.createHealthcheck({
  healthcheck: {
    checkInterval: 894822,
    comment: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    expectedResponse: 563880,
    headers: [
      "synergistic",
    ],
    host: "glistening-concept.biz",
    httpVersion: "meh Caguas",
    initial: 288154,
    method: "whenever",
    name: "test-healthcheck",
    path: "/opt/share",
    threshold: 837733,
    timeout: 697295,
    window: 644894,
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: CreateHealthcheckResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.CreateHealthcheckRequest](../../models/operations/createhealthcheckrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CreateHealthcheckResponse](../../models/operations/createhealthcheckresponse.md)>**


## deleteHealthcheck

Delete the health check for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteHealthcheckResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.healthcheck.deleteHealthcheck({
  healthcheckName: "test-healthcheck",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: DeleteHealthcheckResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.DeleteHealthcheckRequest](../../models/operations/deletehealthcheckrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.DeleteHealthcheckResponse](../../models/operations/deletehealthcheckresponse.md)>**


## getHealthcheck

Get the health check for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetHealthcheckResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.healthcheck.getHealthcheck({
  healthcheckName: "test-healthcheck",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: GetHealthcheckResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetHealthcheckRequest](../../models/operations/gethealthcheckrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetHealthcheckResponse](../../models/operations/gethealthcheckresponse.md)>**


## listHealthchecks

List all of the health checks for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListHealthchecksResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.healthcheck.listHealthchecks({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: ListHealthchecksResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.ListHealthchecksRequest](../../models/operations/listhealthchecksrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.ListHealthchecksResponse](../../models/operations/listhealthchecksresponse.md)>**


## updateHealthcheck

Update the health check for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateHealthcheckResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.healthcheck.updateHealthcheck({
  healthcheck: {
    checkInterval: 931535,
    comment: "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    expectedResponse: 848950,
    headers: [
      "Branding",
    ],
    host: "past-armament.org",
    httpVersion: "Canadian",
    initial: 693029,
    method: "Nissan",
    name: "test-healthcheck",
    path: "/root",
    threshold: 324473,
    timeout: 242944,
    window: 455756,
  },
  healthcheckName: "test-healthcheck",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: UpdateHealthcheckResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.UpdateHealthcheckRequest](../../models/operations/updatehealthcheckrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.UpdateHealthcheckResponse](../../models/operations/updatehealthcheckresponse.md)>**


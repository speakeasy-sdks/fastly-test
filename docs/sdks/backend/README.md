# Backend
(*backend*)

## Overview

A backend (also sometimes called an origin server) is a server identified by IP address or hostname, from which Fastly will fetch your content. There can be multiple backends attached to a service, but each backend is specific to one service. By default, the first backend added to a service configuration will be used for all requests (provided it meets any [conditions](/reference/api/vcl-services/condition) attached to it). If multiple backends are defined for a service, the first one that has no attached conditions, or whose condition is satisfied for the current request, will be used, unless that behavior is modified using the `auto_loadbalance` field described below.

<https://developer.fastly.com/reference/api/services/backend>
### Available Operations

* [createBackend](#createbackend) - Create a backend
* [deleteBackend](#deletebackend) - Delete a backend
* [getBackend](#getbackend) - Describe a backend
* [listBackends](#listbackends) - List backends
* [updateBackend](#updatebackend) - Update a backend

## createBackend

Create a backend for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateBackendResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.backend.createBackend({
  backend: {
    address: "8907 Jenkins River",
    autoLoadbalance: false,
    betweenBytesTimeout: 183210,
    clientCert: "impactful",
    comment: "The Football Is Good For Training And Recreational Purposes",
    connectTimeout: 98007,
    firstByteTimeout: 257494,
    healthcheck: "dolor Celsius",
    hostname: "partial-palm.com",
    ipv4: "161.90.29.1",
    ipv6: "d39b:d79a:5d04:c177:f7f9:6719:86e6:473c",
    keepaliveTime: 885848,
    maxConn: 588682,
    maxTlsVersion: "gray Eritrea",
    minTlsVersion: "withdrawal US Pop",
    name: "test-backend",
    overrideHost: "Transexual Southwest Buckinghamshire",
    port: 572529,
    requestCondition: "productivity enhance",
    shield: "Account",
    sslCaCert: "Officer realistic Bronze",
    sslCertHostname: "Bigender",
    sslCheckCert: false,
    sslCiphers: "Checking Alabama Representative",
    sslClientCert: "calculate Funk man",
    sslClientKey: "collaborative Configuration",
    sslHostname: "Southwest holistic",
    sslSniHostname: "Cotton",
    useSsl: false,
    weight: 161737,
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: CreateBackendResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.CreateBackendRequest](../../models/operations/createbackendrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.CreateBackendResponse](../../models/operations/createbackendresponse.md)>**


## deleteBackend

Delete the backend for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteBackendResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.backend.deleteBackend({
  backendName: "test-backend",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: DeleteBackendResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.DeleteBackendRequest](../../models/operations/deletebackendrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.DeleteBackendResponse](../../models/operations/deletebackendresponse.md)>**


## getBackend

Get the backend for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetBackendResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.backend.getBackend({
  backendName: "test-backend",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: GetBackendResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetBackendRequest](../../models/operations/getbackendrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetBackendResponse](../../models/operations/getbackendresponse.md)>**


## listBackends

List all backends for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListBackendsResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.backend.listBackends({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: ListBackendsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.ListBackendsRequest](../../models/operations/listbackendsrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ListBackendsResponse](../../models/operations/listbackendsresponse.md)>**


## updateBackend

Update the backend for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateBackendResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.backend.updateBackend({
  backend: {
    address: "64862 Kerluke Track",
    autoLoadbalance: false,
    betweenBytesTimeout: 56573,
    clientCert: "Response politicize Ashburn",
    comment: "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    connectTimeout: 378358,
    firstByteTimeout: 306955,
    healthcheck: "API",
    hostname: "willing-emergent.name",
    ipv4: "227.145.93.119",
    ipv6: "bab4:866d:fe81:1d0a:13db:54fa:628f:0807",
    keepaliveTime: 424116,
    maxConn: 391076,
    maxTlsVersion: "man Northwest",
    minTlsVersion: "pfft watt generate",
    name: "test-backend",
    overrideHost: "Chrysler",
    port: 882064,
    requestCondition: "Convertible",
    shield: "turquoise",
    sslCaCert: "West Security Jeep",
    sslCertHostname: "Strategist",
    sslCheckCert: false,
    sslCiphers: "hacksaw supermarket battle",
    sslClientCert: "green Computer",
    sslClientKey: "Wooden Bicycle open",
    sslHostname: "bifurcated",
    sslSniHostname: "unto nor",
    useSsl: false,
    weight: 67164,
  },
  backendName: "test-backend",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: UpdateBackendResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.UpdateBackendRequest](../../models/operations/updatebackendrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.UpdateBackendResponse](../../models/operations/updatebackendresponse.md)>**


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
    address: "80923 Paxton Spurs",
    autoLoadbalance: false,
    betweenBytesTimeout: 528895,
    clientCert: "iusto",
    comment: "excepturi",
    connectTimeout: 392785,
    firstByteTimeout: 925597,
    healthcheck: "temporibus",
    hostname: "bite-sized-favorite.com",
    ipv4: "165.5.94.213",
    ipv6: "fc2d:df7c:c78c:a1ba:928f:c816:742c:b739",
    keepaliveTime: 135218,
    maxConn: 18789,
    maxTlsVersion: "ad",
    minTlsVersion: "natus",
    name: "test-backend",
    overrideHost: "sed",
    port: 612096,
    requestCondition: "dolor",
    shield: "natus",
    sslCaCert: "laboriosam",
    sslCertHostname: "hic",
    sslCheckCert: false,
    sslCiphers: "saepe",
    sslClientCert: "fuga",
    sslClientKey: "in",
    sslHostname: "corporis",
    sslSniHostname: "iste",
    useSsl: false,
    weight: 437032,
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
    address: "600 Orn Plain",
    autoLoadbalance: false,
    betweenBytesTimeout: 670638,
    clientCert: "dolores",
    comment: "dolorem",
    connectTimeout: 358152,
    firstByteTimeout: 128926,
    healthcheck: "nobis",
    hostname: "front-odyssey.info",
    ipv4: "83.145.9.112",
    ipv6: "aff1:a3a2:fa94:6773:9251:aa52:c3f5:ad01",
    keepaliveTime: 622846,
    maxConn: 837945,
    maxTlsVersion: "laborum",
    minTlsVersion: "quasi",
    name: "test-backend",
    overrideHost: "reiciendis",
    port: 976460,
    requestCondition: "vero",
    shield: "nihil",
    sslCaCert: "praesentium",
    sslCertHostname: "voluptatibus",
    sslCheckCert: false,
    sslCiphers: "ipsa",
    sslClientCert: "omnis",
    sslClientKey: "voluptate",
    sslHostname: "cum",
    sslSniHostname: "perferendis",
    useSsl: false,
    weight: 39187,
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


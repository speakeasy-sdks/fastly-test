# backend

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

const sdk = new Fastly();

sdk.backend.createBackend({
  backend: {
    address: "3980 Ashlee Place",
    autoLoadbalance: false,
    betweenBytesTimeout: 20218,
    clientCert: "ipsam",
    comment: "repellendus",
    connectTimeout: 957156,
    firstByteTimeout: 778157,
    healthcheck: "odit",
    hostname: "trifling-sunday.org",
    ipv4: "121.204.205.118",
    ipv6: "8ca1:ba92:8fc8:1674:2cb7:3920:5929:396f",
    keepaliveTime: 902599,
    maxConn: 681820,
    maxTlsVersion: "in",
    minTlsVersion: "corporis",
    name: "test-backend",
    overrideHost: "iste",
    port: 437032,
    requestCondition: "saepe",
    shield: "quidem",
    sslCaCert: "architecto",
    sslCertHostname: "ipsa",
    sslCheckCert: false,
    sslCiphers: "reiciendis",
    sslClientCert: "est",
    sslClientKey: "mollitia",
    sslHostname: "laborum",
    sslSniHostname: "dolores",
    useSsl: false,
    weight: 210382,
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: CreateBackendResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.CreateBackendRequest](../../models/operations/createbackendrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.CreateBackendSecurity](../../models/operations/createbackendsecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CreateBackendResponse](../../models/operations/createbackendresponse.md)>**


## deleteBackend

Delete the backend for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteBackendResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.backend.deleteBackend({
  backendName: "test-backend",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: DeleteBackendResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.DeleteBackendRequest](../../models/operations/deletebackendrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.DeleteBackendSecurity](../../models/operations/deletebackendsecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.DeleteBackendResponse](../../models/operations/deletebackendresponse.md)>**


## getBackend

Get the backend for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetBackendResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.backend.getBackend({
  backendName: "test-backend",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: GetBackendResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetBackendRequest](../../models/operations/getbackendrequest.md)   | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `security`                                                                     | [operations.GetBackendSecurity](../../models/operations/getbackendsecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetBackendResponse](../../models/operations/getbackendresponse.md)>**


## listBackends

List all backends for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListBackendsResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.backend.listBackends({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: ListBackendsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.ListBackendsRequest](../../models/operations/listbackendsrequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.ListBackendsSecurity](../../models/operations/listbackendssecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.ListBackendsResponse](../../models/operations/listbackendsresponse.md)>**


## updateBackend

Update the backend for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateBackendResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.backend.updateBackend({
  backend: {
    address: "1736 Era Mountains",
    autoLoadbalance: false,
    betweenBytesTimeout: 38425,
    clientCert: "iure",
    comment: "culpa",
    connectTimeout: 988374,
    firstByteTimeout: 958950,
    healthcheck: "architecto",
    hostname: "prize-cornmeal.name",
    ipv4: "41.254.167.148",
    ipv6: "4677:3925:1aa5:2c3f:5ad0:19da:1ffe:78f0",
    keepaliveTime: 604846,
    maxConn: 451159,
    maxTlsVersion: "cum",
    minTlsVersion: "perferendis",
    name: "test-backend",
    overrideHost: "doloremque",
    port: 441711,
    requestCondition: "ut",
    shield: "maiores",
    sslCaCert: "dicta",
    sslCertHostname: "corporis",
    sslCheckCert: false,
    sslCiphers: "dolore",
    sslClientCert: "iusto",
    sslClientKey: "dicta",
    sslHostname: "harum",
    sslSniHostname: "enim",
    useSsl: false,
    weight: 880476,
  },
  backendName: "test-backend",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: UpdateBackendResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.UpdateBackendRequest](../../models/operations/updatebackendrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.UpdateBackendSecurity](../../models/operations/updatebackendsecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdateBackendResponse](../../models/operations/updatebackendresponse.md)>**


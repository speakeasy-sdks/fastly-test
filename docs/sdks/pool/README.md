# Pool
(*pool*)

## Overview

A pool is responsible for balancing requests among a group of servers. In addition to balancing, pools can be configured to attempt retrying failed requests. Pools have a quorum setting that can be used to determine when the pool as a whole is considered up, in order to prevent problems following an outage as servers come back up.

<https://developer.fastly.com/reference/api/load-balancing/pools/pool>
### Available Operations

* [createServerPool](#createserverpool) - Create a server pool
* [deleteServerPool](#deleteserverpool) - Delete a server pool
* [getServerPool](#getserverpool) - Get a server pool
* [listServerPools](#listserverpools) - List server pools
* [updateServerPool](#updateserverpool) - Update a server pool

## createServerPool

Creates a pool for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateServerPoolResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { PoolType, PoolUseTls } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.pool.createServerPool({
  pool: {
    comment: "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    connectTimeout: 811080,
    firstByteTimeout: 590807,
    healthcheck: "Producer ROI",
    maxConnDefault: 866009,
    maxTlsVersion: 533393,
    minTlsVersion: 447912,
    name: "my-pool",
    overrideHost: "empower Darmstadtium",
    quorum: 662201,
    requestCondition: "null",
    shield: "Paradigm",
    tlsCaCert: "Hybrid Electronic Nihonium",
    tlsCertHostname: "Dinar spool disintermediate",
    tlsCheckCert: 135881,
    tlsCiphers: "Cotton useful",
    tlsClientCert: "instructive drive Touring",
    tlsClientKey: "Buckinghamshire hack",
    tlsSniHostname: "harum bifurcated",
    type: PoolType.Random,
    useTls: PoolUseTls.One,
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: CreateServerPoolResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.CreateServerPoolRequest](../../models/operations/createserverpoolrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CreateServerPoolResponse](../../models/operations/createserverpoolresponse.md)>**


## deleteServerPool

Deletes a specific pool for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteServerPoolResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.pool.deleteServerPool({
  poolName: "my-pool",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: DeleteServerPoolResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.DeleteServerPoolRequest](../../models/operations/deleteserverpoolrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DeleteServerPoolResponse](../../models/operations/deleteserverpoolresponse.md)>**


## getServerPool

Gets a single pool for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetServerPoolResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.pool.getServerPool({
  poolName: "my-pool",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: GetServerPoolResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetServerPoolRequest](../../models/operations/getserverpoolrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetServerPoolResponse](../../models/operations/getserverpoolresponse.md)>**


## listServerPools

Lists all pools for a particular service and pool.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListServerPoolsResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.pool.listServerPools({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: ListServerPoolsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.ListServerPoolsRequest](../../models/operations/listserverpoolsrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.ListServerPoolsResponse](../../models/operations/listserverpoolsresponse.md)>**


## updateServerPool

Updates a specific pool for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateServerPoolResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { PoolType, PoolUseTls } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.pool.updateServerPool({
  pool: {
    comment: "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    connectTimeout: 870420,
    firstByteTimeout: 29969,
    healthcheck: "gold Rancho Hybrid",
    maxConnDefault: 422957,
    maxTlsVersion: 357933,
    minTlsVersion: 955467,
    name: "my-pool",
    overrideHost: "Cedi",
    quorum: 770007,
    requestCondition: "null",
    shield: "experiences Tactics",
    tlsCaCert: "terribly quantifying MTF",
    tlsCertHostname: "services BCEAO requite",
    tlsCheckCert: 600539,
    tlsCiphers: "male",
    tlsClientCert: "Northwest blue digital",
    tlsClientKey: "navigating",
    tlsSniHostname: "Arab",
    type: PoolType.Client,
    useTls: PoolUseTls.One,
  },
  poolName: "my-pool",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: UpdateServerPoolResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.UpdateServerPoolRequest](../../models/operations/updateserverpoolrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UpdateServerPoolResponse](../../models/operations/updateserverpoolresponse.md)>**


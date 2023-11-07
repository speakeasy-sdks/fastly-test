# pool

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
import { Fastly } from "FastlyTest";
import { CreateServerPoolResponse } from "FastlyTest/dist/sdk/models/operations";
import { PoolResponseType, PoolResponseUseTls, PoolType, PoolUseTls } from "FastlyTest/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.pool.createServerPool({
  pool2: {
    comment: "sit",
    connectTimeout: 699575,
    firstByteTimeout: 148829,
    healthcheck: "reiciendis",
    maxConnDefault: 131852,
    maxTlsVersion: 994401,
    minTlsVersion: 707918,
    name: "my-pool",
    overrideHost: "voluptate",
    quorum: 709072,
    requestCondition: "null",
    shield: "ab",
    tlsCaCert: "iste",
    tlsCertHostname: "dolore",
    tlsCheckCert: 671907,
    tlsCiphers: "sed",
    tlsClientCert: "in",
    tlsClientKey: "commodi",
    tlsSniHostname: "quidem",
    type: PoolType.Random,
    useTls: PoolUseTls.Zero,
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: CreateServerPoolResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.CreateServerPoolRequest](../../models/operations/createserverpoolrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.CreateServerPoolSecurity](../../models/operations/createserverpoolsecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CreateServerPoolResponse](../../models/operations/createserverpoolresponse.md)>**


## deleteServerPool

Deletes a specific pool for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTest";
import { DeleteServerPoolResponse } from "FastlyTest/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.pool.deleteServerPool({
  poolName: "my-pool",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: DeleteServerPoolResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.DeleteServerPoolRequest](../../models/operations/deleteserverpoolrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.DeleteServerPoolSecurity](../../models/operations/deleteserverpoolsecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.DeleteServerPoolResponse](../../models/operations/deleteserverpoolresponse.md)>**


## getServerPool

Gets a single pool for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTest";
import { GetServerPoolResponse } from "FastlyTest/dist/sdk/models/operations";
import { PoolResponseType, PoolResponseUseTls } from "FastlyTest/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.pool.getServerPool({
  poolName: "my-pool",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: GetServerPoolResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetServerPoolRequest](../../models/operations/getserverpoolrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.GetServerPoolSecurity](../../models/operations/getserverpoolsecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetServerPoolResponse](../../models/operations/getserverpoolresponse.md)>**


## listServerPools

Lists all pools for a particular service and pool.

### Example Usage

```typescript
import { Fastly } from "FastlyTest";
import { ListServerPoolsResponse } from "FastlyTest/dist/sdk/models/operations";
import { PoolResponseType, PoolResponseUseTls } from "FastlyTest/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.pool.listServerPools({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: ListServerPoolsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.ListServerPoolsRequest](../../models/operations/listserverpoolsrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.ListServerPoolsSecurity](../../models/operations/listserverpoolssecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.ListServerPoolsResponse](../../models/operations/listserverpoolsresponse.md)>**


## updateServerPool

Updates a specific pool for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTest";
import { UpdateServerPoolResponse } from "FastlyTest/dist/sdk/models/operations";
import { PoolResponseType, PoolResponseUseTls, PoolType, PoolUseTls } from "FastlyTest/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.pool.updateServerPool({
  pool2: {
    comment: "unde",
    connectTimeout: 100032,
    firstByteTimeout: 382808,
    healthcheck: "sapiente",
    maxConnDefault: 895386,
    maxTlsVersion: 72434,
    minTlsVersion: 967795,
    name: "my-pool",
    overrideHost: "perferendis",
    quorum: 546885,
    requestCondition: "null",
    shield: "maiores",
    tlsCaCert: "incidunt",
    tlsCertHostname: "sed",
    tlsCheckCert: 592231,
    tlsCiphers: "eius",
    tlsClientCert: "necessitatibus",
    tlsClientKey: "ipsum",
    tlsSniHostname: "ea",
    type: PoolType.Hash,
    useTls: PoolUseTls.One,
  },
  poolName: "my-pool",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: UpdateServerPoolResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.UpdateServerPoolRequest](../../models/operations/updateserverpoolrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.UpdateServerPoolSecurity](../../models/operations/updateserverpoolsecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.UpdateServerPoolResponse](../../models/operations/updateserverpoolresponse.md)>**


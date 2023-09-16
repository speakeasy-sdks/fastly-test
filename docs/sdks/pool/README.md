# Pool

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
import { CreateServerPoolResponse, CreateServerPoolSecurity } from "FastlyTestJS/dist/sdk/models/operations";
import { PoolType, PoolUseTls } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();
const operationSecurity: CreateServerPoolSecurity = {
  token: "",
};

sdk.pool.createServerPool({
  pool2: {
    comment: "accusantium",
    connectTimeout: 306986,
    firstByteTimeout: 958983,
    healthcheck: "dicta",
    maxConnDefault: 355369,
    maxTlsVersion: 443879,
    minTlsVersion: 356707,
    name: "my-pool",
    overrideHost: "nisi",
    quorum: 16328,
    requestCondition: "null",
    shield: "voluptatum",
    tlsCaCert: "qui",
    tlsCertHostname: "quibusdam",
    tlsCheckCert: 401259,
    tlsCiphers: "deleniti",
    tlsClientCert: "itaque",
    tlsClientKey: "dolorum",
    tlsSniHostname: "architecto",
    type: PoolType.Hash,
    useTls: PoolUseTls.One,
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: CreateServerPoolResponse) => {
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
import { Fastly } from "FastlyTestJS";
import { DeleteServerPoolResponse, DeleteServerPoolSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: DeleteServerPoolSecurity = {
  token: "",
};

sdk.pool.deleteServerPool({
  poolName: "my-pool",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: DeleteServerPoolResponse) => {
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
import { Fastly } from "FastlyTestJS";
import { GetServerPoolResponse, GetServerPoolSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: GetServerPoolSecurity = {
  token: "",
};

sdk.pool.getServerPool({
  poolName: "my-pool",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: GetServerPoolResponse) => {
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
import { Fastly } from "FastlyTestJS";
import { ListServerPoolsResponse, ListServerPoolsSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: ListServerPoolsSecurity = {
  token: "",
};

sdk.pool.listServerPools({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: ListServerPoolsResponse) => {
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
import { Fastly } from "FastlyTestJS";
import { UpdateServerPoolResponse, UpdateServerPoolSecurity } from "FastlyTestJS/dist/sdk/models/operations";
import { PoolType, PoolUseTls } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();
const operationSecurity: UpdateServerPoolSecurity = {
  token: "",
};

sdk.pool.updateServerPool({
  pool2: {
    comment: "quasi",
    connectTimeout: 869489,
    firstByteTimeout: 92027,
    healthcheck: "voluptate",
    maxConnDefault: 55965,
    maxTlsVersion: 326701,
    minTlsVersion: 86532,
    name: "my-pool",
    overrideHost: "consectetur",
    quorum: 237173,
    requestCondition: "null",
    shield: "iste",
    tlsCaCert: "temporibus",
    tlsCertHostname: "accusantium",
    tlsCheckCert: 522371,
    tlsCiphers: "aut",
    tlsClientCert: "laudantium",
    tlsClientKey: "eum",
    tlsSniHostname: "mollitia",
    type: PoolType.Random,
    useTls: PoolUseTls.One,
  },
  poolName: "my-pool",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: UpdateServerPoolResponse) => {
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


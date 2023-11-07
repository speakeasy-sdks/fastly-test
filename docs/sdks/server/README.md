# server

## Overview

A server is an address (IP address or hostname) to which the Fastly Load Balancer service can forward requests. This service can define multiple servers and assign it to a pool. Fastly can then select any one of these servers based on a selection policy defined for the pool.

<https://developer.fastly.com/reference/api/load-balancing/pools/server>
### Available Operations

* [createPoolServer](#createpoolserver) - Add a server to a pool
* [deletePoolServer](#deletepoolserver) - Delete a server from a pool
* [getPoolServer](#getpoolserver) - Get a pool server
* [listPoolServers](#listpoolservers) - List servers in a pool
* [updatePoolServer](#updatepoolserver) - Update a server

## createPoolServer

Creates a single server for a particular service and pool.

### Example Usage

```typescript
import { Fastly } from "FastlyTest";
import { CreatePoolServerResponse } from "FastlyTest/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.server.createPoolServer({
  poolId: "2Yd1WfiCBPENLloXfXmlO",
  server: {
    address: "6309 Daniel Plaza",
    comment: "minima",
    disabled: false,
    maxConn: 293144,
    overrideHost: "dolorum",
    port: 200364,
    weight: 63207,
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
}, {
  token: "",
}).then((res: CreatePoolServerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.CreatePoolServerRequest](../../models/operations/createpoolserverrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.CreatePoolServerSecurity](../../models/operations/createpoolserversecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CreatePoolServerResponse](../../models/operations/createpoolserverresponse.md)>**


## deletePoolServer

Deletes a single server for a particular service and pool.

### Example Usage

```typescript
import { Fastly } from "FastlyTest";
import { DeletePoolServerResponse } from "FastlyTest/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.server.deletePoolServer({
  poolId: "2Yd1WfiCBPENLloXfXmlO",
  serverId: "6kEuoknxiaDBCLiAjKqyXq",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
}, {
  token: "",
}).then((res: DeletePoolServerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.DeletePoolServerRequest](../../models/operations/deletepoolserverrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.DeletePoolServerSecurity](../../models/operations/deletepoolserversecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.DeletePoolServerResponse](../../models/operations/deletepoolserverresponse.md)>**


## getPoolServer

Gets a single server for a particular service and pool.

### Example Usage

```typescript
import { Fastly } from "FastlyTest";
import { GetPoolServerResponse } from "FastlyTest/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.server.getPoolServer({
  poolId: "2Yd1WfiCBPENLloXfXmlO",
  serverId: "6kEuoknxiaDBCLiAjKqyXq",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
}, {
  token: "",
}).then((res: GetPoolServerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetPoolServerRequest](../../models/operations/getpoolserverrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.GetPoolServerSecurity](../../models/operations/getpoolserversecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetPoolServerResponse](../../models/operations/getpoolserverresponse.md)>**


## listPoolServers

Lists all servers for a particular service and pool.

### Example Usage

```typescript
import { Fastly } from "FastlyTest";
import { ListPoolServersResponse } from "FastlyTest/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.server.listPoolServers({
  poolId: "2Yd1WfiCBPENLloXfXmlO",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
}, {
  token: "",
}).then((res: ListPoolServersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.ListPoolServersRequest](../../models/operations/listpoolserversrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.ListPoolServersSecurity](../../models/operations/listpoolserverssecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.ListPoolServersResponse](../../models/operations/listpoolserversresponse.md)>**


## updatePoolServer

Updates a single server for a particular service and pool.

### Example Usage

```typescript
import { Fastly } from "FastlyTest";
import { UpdatePoolServerResponse } from "FastlyTest/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.server.updatePoolServer({
  poolId: "2Yd1WfiCBPENLloXfXmlO",
  server: {
    address: "634 Ed Pike",
    comment: "adipisci",
    disabled: false,
    maxConn: 890653,
    overrideHost: "laudantium",
    port: 432606,
    weight: 367927,
  },
  serverId: "6kEuoknxiaDBCLiAjKqyXq",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
}, {
  token: "",
}).then((res: UpdatePoolServerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.UpdatePoolServerRequest](../../models/operations/updatepoolserverrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.UpdatePoolServerSecurity](../../models/operations/updatepoolserversecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.UpdatePoolServerResponse](../../models/operations/updatepoolserverresponse.md)>**


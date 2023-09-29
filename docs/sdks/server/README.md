# Server
(*server*)

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
import { Fastly } from "FastlyTestJS";
import { CreatePoolServerResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.server.createPoolServer({
  poolId: "2Yd1WfiCBPENLloXfXmlO",
  server: {
    address: "669 Amber Square",
    comment: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    disabled: false,
    maxConn: 467910,
    overrideHost: "Road scalable",
    port: 74265,
    weight: 846472,
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
}).then((res: CreatePoolServerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.CreatePoolServerRequest](../../models/operations/createpoolserverrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CreatePoolServerResponse](../../models/operations/createpoolserverresponse.md)>**


## deletePoolServer

Deletes a single server for a particular service and pool.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeletePoolServerResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.server.deletePoolServer({
  poolId: "2Yd1WfiCBPENLloXfXmlO",
  serverId: "6kEuoknxiaDBCLiAjKqyXq",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
}).then((res: DeletePoolServerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.DeletePoolServerRequest](../../models/operations/deletepoolserverrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DeletePoolServerResponse](../../models/operations/deletepoolserverresponse.md)>**


## getPoolServer

Gets a single server for a particular service and pool.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetPoolServerResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.server.getPoolServer({
  poolId: "2Yd1WfiCBPENLloXfXmlO",
  serverId: "6kEuoknxiaDBCLiAjKqyXq",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
}).then((res: GetPoolServerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetPoolServerRequest](../../models/operations/getpoolserverrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetPoolServerResponse](../../models/operations/getpoolserverresponse.md)>**


## listPoolServers

Lists all servers for a particular service and pool.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListPoolServersResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.server.listPoolServers({
  poolId: "2Yd1WfiCBPENLloXfXmlO",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
}).then((res: ListPoolServersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.ListPoolServersRequest](../../models/operations/listpoolserversrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.ListPoolServersResponse](../../models/operations/listpoolserversresponse.md)>**


## updatePoolServer

Updates a single server for a particular service and pool.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdatePoolServerResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.server.updatePoolServer({
  poolId: "2Yd1WfiCBPENLloXfXmlO",
  server: {
    address: "5838 Abshire Union",
    comment: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    disabled: false,
    maxConn: 71212,
    overrideHost: "South Soft",
    port: 875148,
    weight: 10211,
  },
  serverId: "6kEuoknxiaDBCLiAjKqyXq",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
}).then((res: UpdatePoolServerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.UpdatePoolServerRequest](../../models/operations/updatepoolserverrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UpdatePoolServerResponse](../../models/operations/updatepoolserverresponse.md)>**


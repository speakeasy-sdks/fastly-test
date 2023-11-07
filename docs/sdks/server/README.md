# Server
(*.server*)

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

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.server.createPoolServer({
    poolId: "2Yd1WfiCBPENLloXfXmlO",
    server: {
      comment: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    },
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.server.deletePoolServer({
    poolId: "2Yd1WfiCBPENLloXfXmlO",
    serverId: "6kEuoknxiaDBCLiAjKqyXq",
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.server.getPoolServer({
    poolId: "2Yd1WfiCBPENLloXfXmlO",
    serverId: "6kEuoknxiaDBCLiAjKqyXq",
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.server.listPoolServers({
    poolId: "2Yd1WfiCBPENLloXfXmlO",
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.server.updatePoolServer({
    poolId: "2Yd1WfiCBPENLloXfXmlO",
    server: {
      comment: "The Football Is Good For Training And Recreational Purposes",
    },
    serverId: "6kEuoknxiaDBCLiAjKqyXq",
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.UpdatePoolServerRequest](../../models/operations/updatepoolserverrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UpdatePoolServerResponse](../../models/operations/updatepoolserverresponse.md)>**


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
import { Fastly } from "Fastly";
import { Server } from "Fastly/dist/sdk/models/components";
import { CreatePoolServerRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const poolId: string = "2Yd1WfiCBPENLloXfXmlO";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const server: Server = {
  comment: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
};

  const res = await sdk.server.createPoolServer(poolId, serviceId, server);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `poolId`                                                     | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying a Pool.                      | 2Yd1WfiCBPENLloXfXmlO                                        |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `server`                                                     | [components.Server](../../models/shared/server.md)           | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.CreatePoolServerResponse](../../models/operations/createpoolserverresponse.md)>**


## deletePoolServer

Deletes a single server for a particular service and pool.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeletePoolServerRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const poolId: string = "2Yd1WfiCBPENLloXfXmlO";
const serverId: string = "6kEuoknxiaDBCLiAjKqyXq";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";

  const res = await sdk.server.deletePoolServer(poolId, serverId, serviceId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `poolId`                                                     | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying a Pool.                      | 2Yd1WfiCBPENLloXfXmlO                                        |
| `serverId`                                                   | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying a Server.                    | 6kEuoknxiaDBCLiAjKqyXq                                       |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeletePoolServerResponse](../../models/operations/deletepoolserverresponse.md)>**


## getPoolServer

Gets a single server for a particular service and pool.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetPoolServerRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const poolId: string = "2Yd1WfiCBPENLloXfXmlO";
const serverId: string = "6kEuoknxiaDBCLiAjKqyXq";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";

  const res = await sdk.server.getPoolServer(poolId, serverId, serviceId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `poolId`                                                     | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying a Pool.                      | 2Yd1WfiCBPENLloXfXmlO                                        |
| `serverId`                                                   | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying a Server.                    | 6kEuoknxiaDBCLiAjKqyXq                                       |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetPoolServerResponse](../../models/operations/getpoolserverresponse.md)>**


## listPoolServers

Lists all servers for a particular service and pool.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListPoolServersRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const poolId: string = "2Yd1WfiCBPENLloXfXmlO";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";

  const res = await sdk.server.listPoolServers(poolId, serviceId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `poolId`                                                     | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying a Pool.                      | 2Yd1WfiCBPENLloXfXmlO                                        |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.ListPoolServersResponse](../../models/operations/listpoolserversresponse.md)>**


## updatePoolServer

Updates a single server for a particular service and pool.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { Server } from "Fastly/dist/sdk/models/components";
import { UpdatePoolServerRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const poolId: string = "2Yd1WfiCBPENLloXfXmlO";
const serverId: string = "6kEuoknxiaDBCLiAjKqyXq";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const server: Server = {
  comment: "The Football Is Good For Training And Recreational Purposes",
};

  const res = await sdk.server.updatePoolServer(poolId, serverId, serviceId, server);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `poolId`                                                     | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying a Pool.                      | 2Yd1WfiCBPENLloXfXmlO                                        |
| `serverId`                                                   | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying a Server.                    | 6kEuoknxiaDBCLiAjKqyXq                                       |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `server`                                                     | [components.Server](../../models/shared/server.md)           | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.UpdatePoolServerResponse](../../models/operations/updatepoolserverresponse.md)>**


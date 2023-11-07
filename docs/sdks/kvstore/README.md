# KvStore
(*.kvStore*)

## Overview

An kv store is a persistent, globally consistent key-value store accessible to Compute@Edge services during request processing.

<https://developer.fastly.com/reference/api/services/resources/kv-store>
### Available Operations

* [createStore](#createstore) - Create an kv store.
* [deleteStore](#deletestore) - Delete an kv store.
* [getStore](#getstore) - Describe an kv store.
* [getStores](#getstores) - List kv stores.

## createStore

Create a new kv store.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { Store } from "Fastly/dist/sdk/models/components";
import { CreateStoreRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const location: string = "string";
const store: Store = {};

  const res = await sdk.kvStore.createStore(location, store);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `location`                                                   | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `store`                                                      | [components.Store](../../models/shared/store.md)             | :heavy_minus_sign:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateStoreResponse](../../models/operations/createstoreresponse.md)>**


## deleteStore

An kv store must be empty before it can be deleted.  Deleting an kv store that still contains keys will result in a `409` (Conflict).

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteStoreRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const storeId: string = "string";
const force: boolean = false;

  const res = await sdk.kvStore.deleteStore(storeId, force);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `storeId`                                                    | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `force`                                                      | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteStoreResponse](../../models/operations/deletestoreresponse.md)>**


## getStore

Get an kv store by ID.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetStoreRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const storeId: string = "string";

  const res = await sdk.kvStore.getStore(storeId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `storeId`                                                    | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetStoreResponse](../../models/operations/getstoreresponse.md)>**


## getStores

Get all stores for a given customer.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetStoresRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const cursor: string = "string";
const limit: number = 345563;

  const res = await sdk.kvStore.getStores(cursor, limit);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `cursor`                                                     | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `limit`                                                      | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetStoresResponse](../../models/operations/getstoresresponse.md)>**


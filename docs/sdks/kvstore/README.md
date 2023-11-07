# kvStore

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
import { Fastly } from "FastlyTest";
import { CreateStoreResponse } from "FastlyTest/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.kvStore.createStore({
  location: "sunt",
  store: {
    name: "Miss Candice Weimann",
  },
}, {
  token: "",
}).then((res: CreateStoreResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.CreateStoreRequest](../../models/operations/createstorerequest.md)   | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `security`                                                                       | [operations.CreateStoreSecurity](../../models/operations/createstoresecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.CreateStoreResponse](../../models/operations/createstoreresponse.md)>**


## deleteStore

An kv store must be empty before it can be deleted.  Deleting an kv store that still contains keys will result in a `409` (Conflict).

### Example Usage

```typescript
import { Fastly } from "FastlyTest";
import { DeleteStoreResponse } from "FastlyTest/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.kvStore.deleteStore({
  force: false,
  storeId: "nobis",
}, {
  token: "",
}).then((res: DeleteStoreResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.DeleteStoreRequest](../../models/operations/deletestorerequest.md)   | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `security`                                                                       | [operations.DeleteStoreSecurity](../../models/operations/deletestoresecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.DeleteStoreResponse](../../models/operations/deletestoreresponse.md)>**


## getStore

Get an kv store by ID.

### Example Usage

```typescript
import { Fastly } from "FastlyTest";
import { GetStoreResponse } from "FastlyTest/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.kvStore.getStore({
  storeId: "et",
}, {
  token: "",
}).then((res: GetStoreResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.GetStoreRequest](../../models/operations/getstorerequest.md)   | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `security`                                                                 | [operations.GetStoreSecurity](../../models/operations/getstoresecurity.md) | :heavy_check_mark:                                                         | The security requirements to use for the request.                          |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.GetStoreResponse](../../models/operations/getstoreresponse.md)>**


## getStores

Get all stores for a given customer.

### Example Usage

```typescript
import { Fastly } from "FastlyTest";
import { GetStoresResponse } from "FastlyTest/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.kvStore.getStores({
  cursor: "saepe",
  limit: 217450,
}, {
  token: "",
}).then((res: GetStoresResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetStoresRequest](../../models/operations/getstoresrequest.md)   | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `security`                                                                   | [operations.GetStoresSecurity](../../models/operations/getstoressecurity.md) | :heavy_check_mark:                                                           | The security requirements to use for the request.                            |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetStoresResponse](../../models/operations/getstoresresponse.md)>**


# KvStoreItem
(*kvStoreItem*)

## Overview

An item in an kv store.

<https://developer.fastly.com/reference/api/services/resources/kv-store-item>
### Available Operations

* [deleteKeyFromStore](#deletekeyfromstore) - Delete kv store item.
* [getKeys](#getkeys) - List kv store keys.
* [getValueForKey](#getvalueforkey) - Get the value of an kv store item
* [setValueForKey](#setvalueforkey) - Insert an item into an kv store

## deleteKeyFromStore

Delete an item from an kv store

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteKeyFromStoreResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.kvStoreItem.deleteKeyFromStore({
  force: false,
  keyName: "South Recumbent yuppify",
  storeId: "Factors turning Electric",
}).then((res: DeleteKeyFromStoreResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.DeleteKeyFromStoreRequest](../../models/operations/deletekeyfromstorerequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.DeleteKeyFromStoreResponse](../../models/operations/deletekeyfromstoreresponse.md)>**


## getKeys

List the keys of all items within an kv store.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetKeysResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.kvStoreItem.getKeys({
  cursor: "scoot",
  limit: 474500,
  prefix: "asymmetric midst official",
  storeId: "Sports Music Health",
}).then((res: GetKeysResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [operations.GetKeysRequest](../../models/operations/getkeysrequest.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.GetKeysResponse](../../models/operations/getkeysresponse.md)>**


## getValueForKey

Get the value associated with a key.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetValueForKeyResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.kvStoreItem.getValueForKey({
  keyName: "rehome lumen Vista",
  storeId: "turquoise incentivize joule",
}).then((res: GetValueForKeyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetValueForKeyRequest](../../models/operations/getvalueforkeyrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetValueForKeyResponse](../../models/operations/getvalueforkeyresponse.md)>**


## setValueForKey

Set a new value for a new or existing key in an kv store.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { SetValueForKeyResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.kvStoreItem.setValueForKey({
  requestBody: "Cotton Kia",
  add: false,
  append: false,
  backgroundFetch: false,
  ifGenerationMatch: 808354,
  keyName: "ick",
  metadata: "harum Branding joule",
  prepend: false,
  storeId: "lavender override Assimilated",
  timeToLiveSec: 284898,
}).then((res: SetValueForKeyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.SetValueForKeyRequest](../../models/operations/setvalueforkeyrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.SetValueForKeyResponse](../../models/operations/setvalueforkeyresponse.md)>**


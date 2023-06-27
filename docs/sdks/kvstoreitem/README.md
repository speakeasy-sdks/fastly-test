# kvStoreItem

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

const sdk = new Fastly();

sdk.kvStoreItem.deleteKeyFromStore({
  force: false,
  keyName: "veritatis",
  storeId: "nobis",
}, {
  token: "",
}).then((res: DeleteKeyFromStoreResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.DeleteKeyFromStoreRequest](../../models/operations/deletekeyfromstorerequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.DeleteKeyFromStoreSecurity](../../models/operations/deletekeyfromstoresecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.DeleteKeyFromStoreResponse](../../models/operations/deletekeyfromstoreresponse.md)>**


## getKeys

List the keys of all items within an kv store.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetKeysResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.kvStoreItem.getKeys({
  cursor: "quos",
  limit: 731694,
  prefix: "cupiditate",
  storeId: "aperiam",
}, {
  token: "",
}).then((res: GetKeysResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [operations.GetKeysRequest](../../models/operations/getkeysrequest.md)   | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `security`                                                               | [operations.GetKeysSecurity](../../models/operations/getkeyssecurity.md) | :heavy_check_mark:                                                       | The security requirements to use for the request.                        |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.GetKeysResponse](../../models/operations/getkeysresponse.md)>**


## getValueForKey

Get the value associated with a key.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetValueForKeyResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.kvStoreItem.getValueForKey({
  keyName: "delectus",
  storeId: "dolorem",
}, {
  token: "",
}).then((res: GetValueForKeyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetValueForKeyRequest](../../models/operations/getvalueforkeyrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.GetValueForKeySecurity](../../models/operations/getvalueforkeysecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetValueForKeyResponse](../../models/operations/getvalueforkeyresponse.md)>**


## setValueForKey

Set a new value for a new or existing key in an kv store.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { SetValueForKeyResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.kvStoreItem.setValueForKey({
  requestBody: "dolore",
  add: false,
  append: false,
  backgroundFetch: false,
  ifGenerationMatch: 286915,
  keyName: "adipisci",
  metadata: "dolorum",
  prepend: false,
  storeId: "architecto",
  timeToLiveSec: 63038,
}, {
  token: "",
}).then((res: SetValueForKeyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.SetValueForKeyRequest](../../models/operations/setvalueforkeyrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.SetValueForKeySecurity](../../models/operations/setvalueforkeysecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.SetValueForKeyResponse](../../models/operations/setvalueforkeyresponse.md)>**

# KvStoreItem
(*.kvStoreItem*)

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
import { Fastly } from "Fastly";
import { DeleteKeyFromStoreRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const keyName: string = "string";
const storeId: string = "string";
const force: boolean = false;

  const res = await sdk.kvStoreItem.deleteKeyFromStore(keyName, storeId, force);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `keyName`                                                    | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `storeId`                                                    | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `force`                                                      | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteKeyFromStoreResponse](../../models/operations/deletekeyfromstoreresponse.md)>**


## getKeys

List the keys of all items within an kv store.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetKeysRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const storeId: string = "string";
const cursor: string = "string";
const limit: number = 261587;
const prefix: string = "string";

  const res = await sdk.kvStoreItem.getKeys(storeId, cursor, limit, prefix);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `storeId`                                                    | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `cursor`                                                     | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `limit`                                                      | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `prefix`                                                     | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetKeysResponse](../../models/operations/getkeysresponse.md)>**


## getValueForKey

Get the value associated with a key.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetValueForKeyRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const keyName: string = "string";
const storeId: string = "string";

  const res = await sdk.kvStoreItem.getValueForKey(keyName, storeId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `keyName`                                                    | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `storeId`                                                    | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetValueForKeyResponse](../../models/operations/getvalueforkeyresponse.md)>**


## setValueForKey

Set a new value for a new or existing key in an kv store.

### Example Usage

```typescript
import { Fastly } from "Fastly";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.kvStoreItem.setValueForKey({
    keyName: "string",
    storeId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.SetValueForKeyRequest](../../models/operations/setvalueforkeyrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.SetValueForKeyResponse](../../models/operations/setvalueforkeyresponse.md)>**


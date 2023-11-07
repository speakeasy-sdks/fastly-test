# ConfigStoreItem
(*.configStoreItem*)

## Overview

A key-value pair within a config store.

<https://developer.fastly.com/reference/api/services/resources/config-store-item>
### Available Operations

* [bulkUpdateConfigStoreItem](#bulkupdateconfigstoreitem) - Update multiple entries in a config store
* [createConfigStoreItem](#createconfigstoreitem) - Create an entry in a config store
* [deleteConfigStoreItem](#deleteconfigstoreitem) - Delete an item from a config store
* [getConfigStoreItem](#getconfigstoreitem) - Get an item from a config store
* [listConfigStoreItems](#listconfigstoreitems) - List items in a config store
* [updateConfigStoreItem](#updateconfigstoreitem) - Update an entry in a config store
* [upsertConfigStoreItem](#upsertconfigstoreitem) - Insert or update an entry in a config store

## bulkUpdateConfigStoreItem

Add multiple key-value pairs to an individual config store, specified by ID.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  BulkUpdateConfigStoreItem,
  BulkUpdateConfigStoreItemOp,
  BulkUpdateConfigStoreListRequest,
} from "Fastly/dist/sdk/models/components";
import { BulkUpdateConfigStoreItemRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const configStoreId: string = "7Lsb7Y76rChV9hSrv3KgFl";
const bulkUpdateConfigStoreListRequest: BulkUpdateConfigStoreListRequest = {
  items: [
    {
      itemKey: "test-key",
      itemValue: "test-value",
    },
  ],
};

  const res = await sdk.configStoreItem.bulkUpdateConfigStoreItem(configStoreId, bulkUpdateConfigStoreListRequest);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `configStoreId`                                                                                        | *string*                                                                                               | :heavy_check_mark:                                                                                     | An alphanumeric string identifying the config store.                                                   | 7Lsb7Y76rChV9hSrv3KgFl                                                                                 |
| `bulkUpdateConfigStoreListRequest`                                                                     | [components.BulkUpdateConfigStoreListRequest](../../models/shared/bulkupdateconfigstorelistrequest.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |                                                                                                        |


### Response

**Promise<[operations.BulkUpdateConfigStoreItemResponse](../../models/operations/bulkupdateconfigstoreitemresponse.md)>**


## createConfigStoreItem

Add a single key-value pair to an individual config store, specified by ID.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ConfigStoreItem } from "Fastly/dist/sdk/models/components";
import { CreateConfigStoreItemRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const configStoreId: string = "7Lsb7Y76rChV9hSrv3KgFl";
const configStoreItem: ConfigStoreItem = {
  itemKey: "test-key",
  itemValue: "test-value",
};

  const res = await sdk.configStoreItem.createConfigStoreItem(configStoreId, configStoreItem);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `configStoreId`                                                      | *string*                                                             | :heavy_check_mark:                                                   | An alphanumeric string identifying the config store.                 | 7Lsb7Y76rChV9hSrv3KgFl                                               |
| `configStoreItem`                                                    | [components.ConfigStoreItem](../../models/shared/configstoreitem.md) | :heavy_minus_sign:                                                   | N/A                                                                  |                                                                      |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |                                                                      |


### Response

**Promise<[operations.CreateConfigStoreItemResponse](../../models/operations/createconfigstoreitemresponse.md)>**


## deleteConfigStoreItem

Delete an entry in a config store given a config store ID, and item key.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteConfigStoreItemRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const configStoreId: string = "7Lsb7Y76rChV9hSrv3KgFl";
const configStoreItemKey: string = "test-key";

  const res = await sdk.configStoreItem.deleteConfigStoreItem(configStoreId, configStoreItemKey);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `configStoreId`                                              | *string*                                                     | :heavy_check_mark:                                           | An alphanumeric string identifying the config store.         | 7Lsb7Y76rChV9hSrv3KgFl                                       |
| `configStoreItemKey`                                         | *string*                                                     | :heavy_check_mark:                                           | Item key, maximum 256 characters.                            | test-key                                                     |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteConfigStoreItemResponse](../../models/operations/deleteconfigstoreitemresponse.md)>**


## getConfigStoreItem

Retrieve a config store entry given a config store ID and item key.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetConfigStoreItemRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const configStoreId: string = "7Lsb7Y76rChV9hSrv3KgFl";
const configStoreItemKey: string = "test-key";

  const res = await sdk.configStoreItem.getConfigStoreItem(configStoreId, configStoreItemKey);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `configStoreId`                                              | *string*                                                     | :heavy_check_mark:                                           | An alphanumeric string identifying the config store.         | 7Lsb7Y76rChV9hSrv3KgFl                                       |
| `configStoreItemKey`                                         | *string*                                                     | :heavy_check_mark:                                           | Item key, maximum 256 characters.                            | test-key                                                     |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetConfigStoreItemResponse](../../models/operations/getconfigstoreitemresponse.md)>**


## listConfigStoreItems

List the key-value pairs associated with a given config store ID.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListConfigStoreItemsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const configStoreId: string = "7Lsb7Y76rChV9hSrv3KgFl";

  const res = await sdk.configStoreItem.listConfigStoreItems(configStoreId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `configStoreId`                                              | *string*                                                     | :heavy_check_mark:                                           | An alphanumeric string identifying the config store.         | 7Lsb7Y76rChV9hSrv3KgFl                                       |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.ListConfigStoreItemsResponse](../../models/operations/listconfigstoreitemsresponse.md)>**


## updateConfigStoreItem

Update an entry in a config store given a config store ID, item key, and item value.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ConfigStoreItem } from "Fastly/dist/sdk/models/components";
import { UpdateConfigStoreItemRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const configStoreId: string = "7Lsb7Y76rChV9hSrv3KgFl";
const configStoreItemKey: string = "test-key";
const configStoreItem: ConfigStoreItem = {
  itemKey: "test-key",
  itemValue: "test-value",
};

  const res = await sdk.configStoreItem.updateConfigStoreItem(configStoreId, configStoreItemKey, configStoreItem);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `configStoreId`                                                      | *string*                                                             | :heavy_check_mark:                                                   | An alphanumeric string identifying the config store.                 | 7Lsb7Y76rChV9hSrv3KgFl                                               |
| `configStoreItemKey`                                                 | *string*                                                             | :heavy_check_mark:                                                   | Item key, maximum 256 characters.                                    | test-key                                                             |
| `configStoreItem`                                                    | [components.ConfigStoreItem](../../models/shared/configstoreitem.md) | :heavy_minus_sign:                                                   | N/A                                                                  |                                                                      |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |                                                                      |


### Response

**Promise<[operations.UpdateConfigStoreItemResponse](../../models/operations/updateconfigstoreitemresponse.md)>**


## upsertConfigStoreItem

Insert or update an entry in a config store given a config store ID, item key, and item value.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ConfigStoreItem } from "Fastly/dist/sdk/models/components";
import { UpsertConfigStoreItemRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const configStoreId: string = "7Lsb7Y76rChV9hSrv3KgFl";
const configStoreItemKey: string = "test-key";
const configStoreItem: ConfigStoreItem = {
  itemKey: "test-key",
  itemValue: "test-value",
};

  const res = await sdk.configStoreItem.upsertConfigStoreItem(configStoreId, configStoreItemKey, configStoreItem);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `configStoreId`                                                      | *string*                                                             | :heavy_check_mark:                                                   | An alphanumeric string identifying the config store.                 | 7Lsb7Y76rChV9hSrv3KgFl                                               |
| `configStoreItemKey`                                                 | *string*                                                             | :heavy_check_mark:                                                   | Item key, maximum 256 characters.                                    | test-key                                                             |
| `configStoreItem`                                                    | [components.ConfigStoreItem](../../models/shared/configstoreitem.md) | :heavy_minus_sign:                                                   | N/A                                                                  |                                                                      |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |                                                                      |


### Response

**Promise<[operations.UpsertConfigStoreItemResponse](../../models/operations/upsertconfigstoreitemresponse.md)>**


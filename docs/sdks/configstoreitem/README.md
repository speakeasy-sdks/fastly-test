# ConfigStoreItem

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
import { Fastly } from "FastlyTestJS";
import { BulkUpdateConfigStoreItemResponse, BulkUpdateConfigStoreItemSecurity } from "FastlyTestJS/dist/sdk/models/operations";
import { BulkUpdateConfigStoreItemOp } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();
const operationSecurity: BulkUpdateConfigStoreItemSecurity = {
  token: "",
};

sdk.configStoreItem.bulkUpdateConfigStoreItem({
  bulkUpdateConfigStoreListRequest: {
    items: [
      {
        itemKey: "test-key",
        itemValue: "test-value",
        op: BulkUpdateConfigStoreItemOp.Create,
      },
    ],
  },
  configStoreId: "7Lsb7Y76rChV9hSrv3KgFl",
}, operationSecurity).then((res: BulkUpdateConfigStoreItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.BulkUpdateConfigStoreItemRequest](../../models/operations/bulkupdateconfigstoreitemrequest.md)   | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `security`                                                                                                   | [operations.BulkUpdateConfigStoreItemSecurity](../../models/operations/bulkupdateconfigstoreitemsecurity.md) | :heavy_check_mark:                                                                                           | The security requirements to use for the request.                                                            |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.BulkUpdateConfigStoreItemResponse](../../models/operations/bulkupdateconfigstoreitemresponse.md)>**


## createConfigStoreItem

Add a single key-value pair to an individual config store, specified by ID.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateConfigStoreItemResponse, CreateConfigStoreItemSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: CreateConfigStoreItemSecurity = {
  token: "",
};

sdk.configStoreItem.createConfigStoreItem({
  configStoreId: "7Lsb7Y76rChV9hSrv3KgFl",
  configStoreItem: {
    itemKey: "test-key",
    itemValue: "test-value",
  },
}, operationSecurity).then((res: CreateConfigStoreItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.CreateConfigStoreItemRequest](../../models/operations/createconfigstoreitemrequest.md)   | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `security`                                                                                           | [operations.CreateConfigStoreItemSecurity](../../models/operations/createconfigstoreitemsecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.CreateConfigStoreItemResponse](../../models/operations/createconfigstoreitemresponse.md)>**


## deleteConfigStoreItem

Delete an entry in a config store given a config store ID, and item key.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteConfigStoreItemResponse, DeleteConfigStoreItemSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: DeleteConfigStoreItemSecurity = {
  token: "",
};

sdk.configStoreItem.deleteConfigStoreItem({
  configStoreId: "7Lsb7Y76rChV9hSrv3KgFl",
  configStoreItemKey: "test-key",
}, operationSecurity).then((res: DeleteConfigStoreItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.DeleteConfigStoreItemRequest](../../models/operations/deleteconfigstoreitemrequest.md)   | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `security`                                                                                           | [operations.DeleteConfigStoreItemSecurity](../../models/operations/deleteconfigstoreitemsecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.DeleteConfigStoreItemResponse](../../models/operations/deleteconfigstoreitemresponse.md)>**


## getConfigStoreItem

Retrieve a config store entry given a config store ID and item key.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetConfigStoreItemResponse, GetConfigStoreItemSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: GetConfigStoreItemSecurity = {
  token: "",
};

sdk.configStoreItem.getConfigStoreItem({
  configStoreId: "7Lsb7Y76rChV9hSrv3KgFl",
  configStoreItemKey: "test-key",
}, operationSecurity).then((res: GetConfigStoreItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetConfigStoreItemRequest](../../models/operations/getconfigstoreitemrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.GetConfigStoreItemSecurity](../../models/operations/getconfigstoreitemsecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetConfigStoreItemResponse](../../models/operations/getconfigstoreitemresponse.md)>**


## listConfigStoreItems

List the key-value pairs associated with a given config store ID.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListConfigStoreItemsResponse, ListConfigStoreItemsSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: ListConfigStoreItemsSecurity = {
  token: "",
};

sdk.configStoreItem.listConfigStoreItems({
  configStoreId: "7Lsb7Y76rChV9hSrv3KgFl",
}, operationSecurity).then((res: ListConfigStoreItemsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.ListConfigStoreItemsRequest](../../models/operations/listconfigstoreitemsrequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.ListConfigStoreItemsSecurity](../../models/operations/listconfigstoreitemssecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.ListConfigStoreItemsResponse](../../models/operations/listconfigstoreitemsresponse.md)>**


## updateConfigStoreItem

Update an entry in a config store given a config store ID, item key, and item value.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateConfigStoreItemResponse, UpdateConfigStoreItemSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: UpdateConfigStoreItemSecurity = {
  token: "",
};

sdk.configStoreItem.updateConfigStoreItem({
  configStoreId: "7Lsb7Y76rChV9hSrv3KgFl",
  configStoreItem: {
    itemKey: "test-key",
    itemValue: "test-value",
  },
  configStoreItemKey: "test-key",
}, operationSecurity).then((res: UpdateConfigStoreItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.UpdateConfigStoreItemRequest](../../models/operations/updateconfigstoreitemrequest.md)   | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `security`                                                                                           | [operations.UpdateConfigStoreItemSecurity](../../models/operations/updateconfigstoreitemsecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.UpdateConfigStoreItemResponse](../../models/operations/updateconfigstoreitemresponse.md)>**


## upsertConfigStoreItem

Insert or update an entry in a config store given a config store ID, item key, and item value.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpsertConfigStoreItemResponse, UpsertConfigStoreItemSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: UpsertConfigStoreItemSecurity = {
  token: "",
};

sdk.configStoreItem.upsertConfigStoreItem({
  configStoreId: "7Lsb7Y76rChV9hSrv3KgFl",
  configStoreItem: {
    itemKey: "test-key",
    itemValue: "test-value",
  },
  configStoreItemKey: "test-key",
}, operationSecurity).then((res: UpsertConfigStoreItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.UpsertConfigStoreItemRequest](../../models/operations/upsertconfigstoreitemrequest.md)   | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `security`                                                                                           | [operations.UpsertConfigStoreItemSecurity](../../models/operations/upsertconfigstoreitemsecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.UpsertConfigStoreItemResponse](../../models/operations/upsertconfigstoreitemresponse.md)>**


# ConfigStoreItem
(*configStoreItem*)

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
import { BulkUpdateConfigStoreItemOp } from "Fastly/dist/sdk/models/components";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.configStoreItem.bulkUpdateConfigStoreItem({
    bulkUpdateConfigStoreListRequest: {
      items: [
        {
          itemKey: "test-key",
          itemValue: "test-value",
        },
      ],
    },
    configStoreId: "7Lsb7Y76rChV9hSrv3KgFl",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.BulkUpdateConfigStoreItemRequest](../../sdk/models/operations/bulkupdateconfigstoreitemrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.BulkUpdateConfigStoreItemResponse](../../sdk/models/operations/bulkupdateconfigstoreitemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## createConfigStoreItem

Add a single key-value pair to an individual config store, specified by ID.

### Example Usage

```typescript
import { Fastly } from "Fastly";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.configStoreItem.createConfigStoreItem({
    configStoreId: "7Lsb7Y76rChV9hSrv3KgFl",
    configStoreItem: {
      itemKey: "test-key",
      itemValue: "test-value",
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.CreateConfigStoreItemRequest](../../sdk/models/operations/createconfigstoreitemrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.CreateConfigStoreItemResponse](../../sdk/models/operations/createconfigstoreitemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteConfigStoreItem

Delete an entry in a config store given a config store ID, and item key.

### Example Usage

```typescript
import { Fastly } from "Fastly";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.configStoreItem.deleteConfigStoreItem({
    configStoreId: "7Lsb7Y76rChV9hSrv3KgFl",
    configStoreItemKey: "test-key",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.DeleteConfigStoreItemRequest](../../sdk/models/operations/deleteconfigstoreitemrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.DeleteConfigStoreItemResponse](../../sdk/models/operations/deleteconfigstoreitemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getConfigStoreItem

Retrieve a config store entry given a config store ID and item key.

### Example Usage

```typescript
import { Fastly } from "Fastly";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.configStoreItem.getConfigStoreItem({
    configStoreId: "7Lsb7Y76rChV9hSrv3KgFl",
    configStoreItemKey: "test-key",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetConfigStoreItemRequest](../../sdk/models/operations/getconfigstoreitemrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetConfigStoreItemResponse](../../sdk/models/operations/getconfigstoreitemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## listConfigStoreItems

List the key-value pairs associated with a given config store ID.

### Example Usage

```typescript
import { Fastly } from "Fastly";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.configStoreItem.listConfigStoreItems({
    configStoreId: "7Lsb7Y76rChV9hSrv3KgFl",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.ListConfigStoreItemsRequest](../../sdk/models/operations/listconfigstoreitemsrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.ListConfigStoreItemsResponse](../../sdk/models/operations/listconfigstoreitemsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## updateConfigStoreItem

Update an entry in a config store given a config store ID, item key, and item value.

### Example Usage

```typescript
import { Fastly } from "Fastly";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.configStoreItem.updateConfigStoreItem({
    configStoreId: "7Lsb7Y76rChV9hSrv3KgFl",
    configStoreItem: {
      itemKey: "test-key",
      itemValue: "test-value",
    },
    configStoreItemKey: "test-key",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.UpdateConfigStoreItemRequest](../../sdk/models/operations/updateconfigstoreitemrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.UpdateConfigStoreItemResponse](../../sdk/models/operations/updateconfigstoreitemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## upsertConfigStoreItem

Insert or update an entry in a config store given a config store ID, item key, and item value.

### Example Usage

```typescript
import { Fastly } from "Fastly";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.configStoreItem.upsertConfigStoreItem({
    configStoreId: "7Lsb7Y76rChV9hSrv3KgFl",
    configStoreItem: {
      itemKey: "test-key",
      itemValue: "test-value",
    },
    configStoreItemKey: "test-key",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.UpsertConfigStoreItemRequest](../../sdk/models/operations/upsertconfigstoreitemrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.UpsertConfigStoreItemResponse](../../sdk/models/operations/upsertconfigstoreitemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

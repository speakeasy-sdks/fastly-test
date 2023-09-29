# DictionaryItem
(*dictionaryItem*)

## Overview

A Dictionary Item is a single key-value pair that makes up an entry in a Dictionary. Dictionary Items can be added, removed and modified without activating a new version of the associated service.

<https://developer.fastly.com/reference/api/dictionaries/dictionary-item>
### Available Operations

* [bulkUpdateDictionaryItem](#bulkupdatedictionaryitem) - Update multiple entries in an edge dictionary
* [createDictionaryItem](#createdictionaryitem) - Create an entry in an edge dictionary
* [deleteDictionaryItem](#deletedictionaryitem) - Delete an item from an edge dictionary
* [getDictionaryItem](#getdictionaryitem) - Get an item from an edge dictionary
* [listDictionaryItems](#listdictionaryitems) - List items in an edge dictionary
* [updateDictionaryItem](#updatedictionaryitem) - Update an entry in an edge dictionary
* [upsertDictionaryItem](#upsertdictionaryitem) - Insert or update an entry in an edge dictionary

## bulkUpdateDictionaryItem

Update multiple items in the same dictionary. For faster updates to your service, group your changes into large batches. The maximum batch size is 1000 items. [Contact support](https://support.fastly.com/) to discuss raising this limit.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { BulkUpdateDictionaryItemResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { BulkUpdateDictionaryItemOp } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.dictionaryItem.bulkUpdateDictionaryItem({
  bulkUpdateDictionaryListRequest: {
    items: [
      {
        itemKey: "test-key",
        itemValue: "test-value",
        op: BulkUpdateDictionaryItemOp.Delete,
      },
    ],
  },
  dictionaryId: "3vjTN8v1O7nOAY7aNDGOL",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
}).then((res: BulkUpdateDictionaryItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.BulkUpdateDictionaryItemRequest](../../models/operations/bulkupdatedictionaryitemrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.BulkUpdateDictionaryItemResponse](../../models/operations/bulkupdatedictionaryitemresponse.md)>**


## createDictionaryItem

Create DictionaryItem given service, dictionary ID, item key, and item value.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateDictionaryItemResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.dictionaryItem.createDictionaryItem({
  dictionaryId: "3vjTN8v1O7nOAY7aNDGOL",
  dictionaryItem: {
    itemKey: "test-key",
    itemValue: "test-value",
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
}).then((res: CreateDictionaryItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.CreateDictionaryItemRequest](../../models/operations/createdictionaryitemrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.CreateDictionaryItemResponse](../../models/operations/createdictionaryitemresponse.md)>**


## deleteDictionaryItem

Delete DictionaryItem given service, dictionary ID, and item key.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteDictionaryItemResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.dictionaryItem.deleteDictionaryItem({
  dictionaryId: "3vjTN8v1O7nOAY7aNDGOL",
  dictionaryItemKey: "test-key",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
}).then((res: DeleteDictionaryItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.DeleteDictionaryItemRequest](../../models/operations/deletedictionaryitemrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.DeleteDictionaryItemResponse](../../models/operations/deletedictionaryitemresponse.md)>**


## getDictionaryItem

Retrieve a single DictionaryItem given service, dictionary ID and item key.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetDictionaryItemResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.dictionaryItem.getDictionaryItem({
  dictionaryId: "3vjTN8v1O7nOAY7aNDGOL",
  dictionaryItemKey: "test-key",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
}).then((res: GetDictionaryItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetDictionaryItemRequest](../../models/operations/getdictionaryitemrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetDictionaryItemResponse](../../models/operations/getdictionaryitemresponse.md)>**


## listDictionaryItems

List of DictionaryItems given service and dictionary ID.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListDictionaryItemsResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { Direction } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.dictionaryItem.listDictionaryItems({
  dictionaryId: "3vjTN8v1O7nOAY7aNDGOL",
  direction: Direction.Ascend,
  page: 1,
  perPage: 20,
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  sort: "created",
}).then((res: ListDictionaryItemsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.ListDictionaryItemsRequest](../../models/operations/listdictionaryitemsrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ListDictionaryItemsResponse](../../models/operations/listdictionaryitemsresponse.md)>**


## updateDictionaryItem

Update DictionaryItem given service, dictionary ID, item key, and item value.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateDictionaryItemResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.dictionaryItem.updateDictionaryItem({
  dictionaryId: "3vjTN8v1O7nOAY7aNDGOL",
  dictionaryItem: {
    itemKey: "test-key",
    itemValue: "test-value",
  },
  dictionaryItemKey: "test-key",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
}).then((res: UpdateDictionaryItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.UpdateDictionaryItemRequest](../../models/operations/updatedictionaryitemrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.UpdateDictionaryItemResponse](../../models/operations/updatedictionaryitemresponse.md)>**


## upsertDictionaryItem

Upsert DictionaryItem given service, dictionary ID, item key, and item value.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpsertDictionaryItemResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.dictionaryItem.upsertDictionaryItem({
  dictionaryId: "3vjTN8v1O7nOAY7aNDGOL",
  dictionaryItem: {
    itemKey: "test-key",
    itemValue: "test-value",
  },
  dictionaryItemKey: "test-key",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
}).then((res: UpsertDictionaryItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.UpsertDictionaryItemRequest](../../models/operations/upsertdictionaryitemrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.UpsertDictionaryItemResponse](../../models/operations/upsertdictionaryitemresponse.md)>**


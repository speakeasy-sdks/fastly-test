# DictionaryItem
(*.dictionaryItem*)

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
import { Fastly } from "Fastly";
import {
  BulkUpdateDictionaryItem,
  BulkUpdateDictionaryItemOp,
  BulkUpdateDictionaryListRequest,
} from "Fastly/dist/sdk/models/components";
import { BulkUpdateDictionaryItemRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const dictionaryId: string = "3vjTN8v1O7nOAY7aNDGOL";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const bulkUpdateDictionaryListRequest: BulkUpdateDictionaryListRequest = {
  items: [
    {
      itemKey: "test-key",
      itemValue: "test-value",
    },
  ],
};

  const res = await sdk.dictionaryItem.bulkUpdateDictionaryItem(dictionaryId, serviceId, bulkUpdateDictionaryListRequest);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `dictionaryId`                                                                                       | *string*                                                                                             | :heavy_check_mark:                                                                                   | Alphanumeric string identifying a Dictionary.                                                        | 3vjTN8v1O7nOAY7aNDGOL                                                                                |
| `serviceId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | Alphanumeric string identifying the service.                                                         | SU1Z0isxPaozGVKXdv0eY                                                                                |
| `bulkUpdateDictionaryListRequest`                                                                    | [components.BulkUpdateDictionaryListRequest](../../models/shared/bulkupdatedictionarylistrequest.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |                                                                                                      |


### Response

**Promise<[operations.BulkUpdateDictionaryItemResponse](../../models/operations/bulkupdatedictionaryitemresponse.md)>**


## createDictionaryItem

Create DictionaryItem given service, dictionary ID, item key, and item value.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DictionaryItem } from "Fastly/dist/sdk/models/components";
import { CreateDictionaryItemRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const dictionaryId: string = "3vjTN8v1O7nOAY7aNDGOL";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const dictionaryItem: DictionaryItem = {
  itemKey: "test-key",
  itemValue: "test-value",
};

  const res = await sdk.dictionaryItem.createDictionaryItem(dictionaryId, serviceId, dictionaryItem);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `dictionaryId`                                                     | *string*                                                           | :heavy_check_mark:                                                 | Alphanumeric string identifying a Dictionary.                      | 3vjTN8v1O7nOAY7aNDGOL                                              |
| `serviceId`                                                        | *string*                                                           | :heavy_check_mark:                                                 | Alphanumeric string identifying the service.                       | SU1Z0isxPaozGVKXdv0eY                                              |
| `dictionaryItem`                                                   | [components.DictionaryItem](../../models/shared/dictionaryitem.md) | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |                                                                    |


### Response

**Promise<[operations.CreateDictionaryItemResponse](../../models/operations/createdictionaryitemresponse.md)>**


## deleteDictionaryItem

Delete DictionaryItem given service, dictionary ID, and item key.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteDictionaryItemRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const dictionaryId: string = "3vjTN8v1O7nOAY7aNDGOL";
const dictionaryItemKey: string = "test-key";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";

  const res = await sdk.dictionaryItem.deleteDictionaryItem(dictionaryId, dictionaryItemKey, serviceId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `dictionaryId`                                               | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying a Dictionary.                | 3vjTN8v1O7nOAY7aNDGOL                                        |
| `dictionaryItemKey`                                          | *string*                                                     | :heavy_check_mark:                                           | Item key, maximum 256 characters.                            | test-key                                                     |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteDictionaryItemResponse](../../models/operations/deletedictionaryitemresponse.md)>**


## getDictionaryItem

Retrieve a single DictionaryItem given service, dictionary ID and item key.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetDictionaryItemRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const dictionaryId: string = "3vjTN8v1O7nOAY7aNDGOL";
const dictionaryItemKey: string = "test-key";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";

  const res = await sdk.dictionaryItem.getDictionaryItem(dictionaryId, dictionaryItemKey, serviceId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `dictionaryId`                                               | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying a Dictionary.                | 3vjTN8v1O7nOAY7aNDGOL                                        |
| `dictionaryItemKey`                                          | *string*                                                     | :heavy_check_mark:                                           | Item key, maximum 256 characters.                            | test-key                                                     |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetDictionaryItemResponse](../../models/operations/getdictionaryitemresponse.md)>**


## listDictionaryItems

List of DictionaryItems given service and dictionary ID.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { Direction } from "Fastly/dist/sdk/models/components";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.dictionaryItem.listDictionaryItems({
    dictionaryId: "3vjTN8v1O7nOAY7aNDGOL",
    direction: Direction.Ascend,
    page: 1,
    perPage: 20,
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    sort: "created",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { Fastly } from "Fastly";
import { DictionaryItem } from "Fastly/dist/sdk/models/components";
import { UpdateDictionaryItemRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const dictionaryId: string = "3vjTN8v1O7nOAY7aNDGOL";
const dictionaryItemKey: string = "test-key";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const dictionaryItem: DictionaryItem = {
  itemKey: "test-key",
  itemValue: "test-value",
};

  const res = await sdk.dictionaryItem.updateDictionaryItem(dictionaryId, dictionaryItemKey, serviceId, dictionaryItem);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `dictionaryId`                                                     | *string*                                                           | :heavy_check_mark:                                                 | Alphanumeric string identifying a Dictionary.                      | 3vjTN8v1O7nOAY7aNDGOL                                              |
| `dictionaryItemKey`                                                | *string*                                                           | :heavy_check_mark:                                                 | Item key, maximum 256 characters.                                  | test-key                                                           |
| `serviceId`                                                        | *string*                                                           | :heavy_check_mark:                                                 | Alphanumeric string identifying the service.                       | SU1Z0isxPaozGVKXdv0eY                                              |
| `dictionaryItem`                                                   | [components.DictionaryItem](../../models/shared/dictionaryitem.md) | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |                                                                    |


### Response

**Promise<[operations.UpdateDictionaryItemResponse](../../models/operations/updatedictionaryitemresponse.md)>**


## upsertDictionaryItem

Upsert DictionaryItem given service, dictionary ID, item key, and item value.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DictionaryItem } from "Fastly/dist/sdk/models/components";
import { UpsertDictionaryItemRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const dictionaryId: string = "3vjTN8v1O7nOAY7aNDGOL";
const dictionaryItemKey: string = "test-key";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const dictionaryItem: DictionaryItem = {
  itemKey: "test-key",
  itemValue: "test-value",
};

  const res = await sdk.dictionaryItem.upsertDictionaryItem(dictionaryId, dictionaryItemKey, serviceId, dictionaryItem);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `dictionaryId`                                                     | *string*                                                           | :heavy_check_mark:                                                 | Alphanumeric string identifying a Dictionary.                      | 3vjTN8v1O7nOAY7aNDGOL                                              |
| `dictionaryItemKey`                                                | *string*                                                           | :heavy_check_mark:                                                 | Item key, maximum 256 characters.                                  | test-key                                                           |
| `serviceId`                                                        | *string*                                                           | :heavy_check_mark:                                                 | Alphanumeric string identifying the service.                       | SU1Z0isxPaozGVKXdv0eY                                              |
| `dictionaryItem`                                                   | [components.DictionaryItem](../../models/shared/dictionaryitem.md) | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |                                                                    |


### Response

**Promise<[operations.UpsertDictionaryItemResponse](../../models/operations/upsertdictionaryitemresponse.md)>**


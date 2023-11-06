# ConfigStore
(*configStore*)

## Overview

A container that lets you store data in key-value pairs.

<https://developer.fastly.com/reference/api/services/resources/config-store>
### Available Operations

* [createConfigStore](#createconfigstore) - Create a config store
* [deleteConfigStore](#deleteconfigstore) - Delete a config store
* [getConfigStore](#getconfigstore) - Describe a config store
* [getConfigStoreInfo](#getconfigstoreinfo) - Get config store metadata
* [listConfigStoreServices](#listconfigstoreservices) - List linked services
* [listConfigStores](#listconfigstores) - List config stores
* [updateConfigStore](#updateconfigstore) - Update a config store

## createConfigStore

Create a config store.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.configStore.createConfigStore({
    name: "test-config-store",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.ConfigStore](../../models/shared/configstore.md)     | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateConfigStoreResponse](../../models/operations/createconfigstoreresponse.md)>**


## deleteConfigStore

Delete a config store.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.configStore.deleteConfigStore({
    configStoreId: "7Lsb7Y76rChV9hSrv3KgFl",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.DeleteConfigStoreRequest](../../models/operations/deleteconfigstorerequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.DeleteConfigStoreResponse](../../models/operations/deleteconfigstoreresponse.md)>**


## getConfigStore

Describe a config store by its identifier.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.configStore.getConfigStore({
    configStoreId: "7Lsb7Y76rChV9hSrv3KgFl",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetConfigStoreRequest](../../models/operations/getconfigstorerequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetConfigStoreResponse](../../models/operations/getconfigstoreresponse.md)>**


## getConfigStoreInfo

Retrieve metadata for a single config store.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.configStore.getConfigStoreInfo({
    configStoreId: "7Lsb7Y76rChV9hSrv3KgFl",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetConfigStoreInfoRequest](../../models/operations/getconfigstoreinforequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetConfigStoreInfoResponse](../../models/operations/getconfigstoreinforesponse.md)>**


## listConfigStoreServices

List services linked to a config store

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.configStore.listConfigStoreServices({
    configStoreId: "7Lsb7Y76rChV9hSrv3KgFl",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.ListConfigStoreServicesRequest](../../models/operations/listconfigstoreservicesrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.ListConfigStoreServicesResponse](../../models/operations/listconfigstoreservicesresponse.md)>**


## listConfigStores

List config stores.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.configStore.listConfigStores();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListConfigStoresResponse](../../models/operations/listconfigstoresresponse.md)>**


## updateConfigStore

Update a config store.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.configStore.updateConfigStore({
    configStore: {
      name: "test-config-store",
    },
    configStoreId: "7Lsb7Y76rChV9hSrv3KgFl",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.UpdateConfigStoreRequest](../../models/operations/updateconfigstorerequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.UpdateConfigStoreResponse](../../models/operations/updateconfigstoreresponse.md)>**


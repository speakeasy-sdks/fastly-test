# CacheSettings
(*cacheSettings*)

## Overview

Configures cache lifetime for objects stored in the Fastly cache, overriding cache freshness information that would otherwise be determined from cache-related headers on the HTTP response. When used in conjunction with conditions, cache settings objects provide detailed control over how long content persists in the cache.

<https://developer.fastly.com/reference/api/vcl-services/cache-settings>
### Available Operations

* [createCacheSettings](#createcachesettings) - Create a cache settings object
* [deleteCacheSettings](#deletecachesettings) - Delete a cache settings object
* [getCacheSettings](#getcachesettings) - Get a cache settings object
* [listCacheSettings](#listcachesettings) - List cache settings objects
* [updateCacheSettings](#updatecachesettings) - Update a cache settings object

## createCacheSettings

Create a cache settings object.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateCacheSettingsResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { CacheSettingAction } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.cacheSettings.createCacheSettings({
  cacheSetting: {
    action: CacheSettingAction.Restart,
    cacheCondition: "null",
    name: "test-cache-setting",
    staleTtl: 810916,
    ttl: 569974,
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: CreateCacheSettingsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.CreateCacheSettingsRequest](../../models/operations/createcachesettingsrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.CreateCacheSettingsResponse](../../models/operations/createcachesettingsresponse.md)>**


## deleteCacheSettings

Delete a specific cache settings object.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteCacheSettingsResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.cacheSettings.deleteCacheSettings({
  cacheSettingsName: "test-cache-setting",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: DeleteCacheSettingsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.DeleteCacheSettingsRequest](../../models/operations/deletecachesettingsrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.DeleteCacheSettingsResponse](../../models/operations/deletecachesettingsresponse.md)>**


## getCacheSettings

Get a specific cache settings object.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetCacheSettingsResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.cacheSettings.getCacheSettings({
  cacheSettingsName: "test-cache-setting",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: GetCacheSettingsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetCacheSettingsRequest](../../models/operations/getcachesettingsrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetCacheSettingsResponse](../../models/operations/getcachesettingsresponse.md)>**


## listCacheSettings

Get a list of all cache settings for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListCacheSettingsResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.cacheSettings.listCacheSettings({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: ListCacheSettingsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.ListCacheSettingsRequest](../../models/operations/listcachesettingsrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ListCacheSettingsResponse](../../models/operations/listcachesettingsresponse.md)>**


## updateCacheSettings

Update a specific cache settings object.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateCacheSettingsResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { CacheSettingAction } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.cacheSettings.updateCacheSettings({
  cacheSetting: {
    action: CacheSettingAction.Pass,
    cacheCondition: "null",
    name: "test-cache-setting",
    staleTtl: 274991,
    ttl: 744463,
  },
  cacheSettingsName: "test-cache-setting",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: UpdateCacheSettingsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.UpdateCacheSettingsRequest](../../models/operations/updatecachesettingsrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.UpdateCacheSettingsResponse](../../models/operations/updatecachesettingsresponse.md)>**


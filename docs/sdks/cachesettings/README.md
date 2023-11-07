# CacheSettings
(*.cacheSettings*)

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
import { Fastly } from "Fastly";
import { Action, CacheSetting } from "Fastly/dist/sdk/models/components";
import { CreateCacheSettingsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const cacheSetting: CacheSetting = {
  cacheCondition: "null",
  name: "test-cache-setting",
};

  const res = await sdk.cacheSettings.createCacheSettings(serviceId, versionId, cacheSetting);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                      | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `serviceId`                                                    | *string*                                                       | :heavy_check_mark:                                             | Alphanumeric string identifying the service.                   | SU1Z0isxPaozGVKXdv0eY                                          |
| `versionId`                                                    | *number*                                                       | :heavy_check_mark:                                             | Integer identifying a service version.                         | 1                                                              |
| `cacheSetting`                                                 | [components.CacheSetting](../../models/shared/cachesetting.md) | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `config`                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)   | :heavy_minus_sign:                                             | Available config options for making requests.                  |                                                                |


### Response

**Promise<[operations.CreateCacheSettingsResponse](../../models/operations/createcachesettingsresponse.md)>**


## deleteCacheSettings

Delete a specific cache settings object.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteCacheSettingsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const cacheSettingsName: string = "test-cache-setting";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.cacheSettings.deleteCacheSettings(cacheSettingsName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `cacheSettingsName`                                          | *string*                                                     | :heavy_check_mark:                                           | Name for the cache settings object.                          | test-cache-setting                                           |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteCacheSettingsResponse](../../models/operations/deletecachesettingsresponse.md)>**


## getCacheSettings

Get a specific cache settings object.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetCacheSettingsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const cacheSettingsName: string = "test-cache-setting";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.cacheSettings.getCacheSettings(cacheSettingsName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `cacheSettingsName`                                          | *string*                                                     | :heavy_check_mark:                                           | Name for the cache settings object.                          | test-cache-setting                                           |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetCacheSettingsResponse](../../models/operations/getcachesettingsresponse.md)>**


## listCacheSettings

Get a list of all cache settings for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListCacheSettingsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.cacheSettings.listCacheSettings(serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.ListCacheSettingsResponse](../../models/operations/listcachesettingsresponse.md)>**


## updateCacheSettings

Update a specific cache settings object.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { Action, CacheSetting } from "Fastly/dist/sdk/models/components";
import { UpdateCacheSettingsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const cacheSettingsName: string = "test-cache-setting";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const cacheSetting: CacheSetting = {
  cacheCondition: "null",
  name: "test-cache-setting",
};

  const res = await sdk.cacheSettings.updateCacheSettings(cacheSettingsName, serviceId, versionId, cacheSetting);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                      | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `cacheSettingsName`                                            | *string*                                                       | :heavy_check_mark:                                             | Name for the cache settings object.                            | test-cache-setting                                             |
| `serviceId`                                                    | *string*                                                       | :heavy_check_mark:                                             | Alphanumeric string identifying the service.                   | SU1Z0isxPaozGVKXdv0eY                                          |
| `versionId`                                                    | *number*                                                       | :heavy_check_mark:                                             | Integer identifying a service version.                         | 1                                                              |
| `cacheSetting`                                                 | [components.CacheSetting](../../models/shared/cachesetting.md) | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `config`                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)   | :heavy_minus_sign:                                             | Available config options for making requests.                  |                                                                |


### Response

**Promise<[operations.UpdateCacheSettingsResponse](../../models/operations/updatecachesettingsresponse.md)>**


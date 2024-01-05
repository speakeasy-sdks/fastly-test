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
import { Fastly } from "Fastly";
import { Action } from "Fastly/dist/sdk/models/components";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.cacheSettings.createCacheSettings({
    cacheSetting: {
      cacheCondition: "string",
      name: "test-cache-setting",
    },
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.CreateCacheSettingsRequest](../../sdk/models/operations/createcachesettingsrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.CreateCacheSettingsResponse](../../sdk/models/operations/createcachesettingsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## deleteCacheSettings

Delete a specific cache settings object.

### Example Usage

```typescript
import { Fastly } from "Fastly";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.cacheSettings.deleteCacheSettings({
    cacheSettingsName: "test-cache-setting",
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.DeleteCacheSettingsRequest](../../sdk/models/operations/deletecachesettingsrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.DeleteCacheSettingsResponse](../../sdk/models/operations/deletecachesettingsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getCacheSettings

Get a specific cache settings object.

### Example Usage

```typescript
import { Fastly } from "Fastly";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.cacheSettings.getCacheSettings({
    cacheSettingsName: "test-cache-setting",
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetCacheSettingsRequest](../../sdk/models/operations/getcachesettingsrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetCacheSettingsResponse](../../sdk/models/operations/getcachesettingsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listCacheSettings

Get a list of all cache settings for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.cacheSettings.listCacheSettings({
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.ListCacheSettingsRequest](../../sdk/models/operations/listcachesettingsrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ListCacheSettingsResponse](../../sdk/models/operations/listcachesettingsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateCacheSettings

Update a specific cache settings object.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { Action } from "Fastly/dist/sdk/models/components";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.cacheSettings.updateCacheSettings({
    cacheSetting: {
      cacheCondition: "string",
      name: "test-cache-setting",
    },
    cacheSettingsName: "test-cache-setting",
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.UpdateCacheSettingsRequest](../../sdk/models/operations/updatecachesettingsrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.UpdateCacheSettingsResponse](../../sdk/models/operations/updatecachesettingsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

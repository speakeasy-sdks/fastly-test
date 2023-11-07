# Purge
(*.purge*)

## Overview

Instant Purging removes content from Fastly immediately so it can be refreshed from your origin servers. While the default approach for issuing an individual URL Instant Purge uses the Fastly API, `https://api.fastly.com/`, it is not required.

<https://developer.fastly.com/reference/api/purging>
### Available Operations

* [purgeAll](#purgeall) - Purge everything from a service
* [purgeSingleUrl](#purgesingleurl) - Purge a URL
* [purgeTag](#purgetag) - Purge by surrogate key tag

## purgeAll

Instant Purge everything from a service.

Purge-all requests cannot be done in soft mode and will always immediately invalidate all cached content associated with the service. To do a soft-purge-all, consider applying a constant [surrogate key](https://docs.fastly.com/en/guides/getting-started-with-surrogate-keys) tag (e.g., `"all"`) to all objects.


### Example Usage

```typescript
import { Fastly } from "Fastly";
import { PurgeAllRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";

  const res = await sdk.purge.purgeAll(serviceId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.PurgeAllResponse](../../models/operations/purgeallresponse.md)>**


## purgeSingleUrl

Instant Purge an individual URL.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { PurgeSingleUrlRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const cachedUrl: string = "www.example.com/path/to/object-to-purge";
const fastlySoftPurge: number = 1;

  const res = await sdk.purge.purgeSingleUrl(cachedUrl, fastlySoftPurge);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                                              | Type                                                                                                                                                                                                   | Required                                                                                                                                                                                               | Description                                                                                                                                                                                            | Example                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `cachedUrl`                                                                                                                                                                                            | *string*                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                     | URL of object in cache to be purged.                                                                                                                                                                   | www.example.com/path/to/object-to-purge                                                                                                                                                                |
| `fastlySoftPurge`                                                                                                                                                                                      | *number*                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                     | If present, this header triggers the purge to be 'soft', which marks the affected object as stale rather than making it inaccessible.  Typically set to "1" when used, but the value is not important. | 1                                                                                                                                                                                                      |
| `config`                                                                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                     | Available config options for making requests.                                                                                                                                                          |                                                                                                                                                                                                        |


### Response

**Promise<[operations.PurgeSingleUrlResponse](../../models/operations/purgesingleurlresponse.md)>**


## purgeTag

Instant Purge a particular service of items tagged with a Surrogate Key. Only one surrogate key can be purged at a time. Multiple keys can be purged using a batch surrogate key purge request.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { PurgeTagRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const surrogateKey: string = "key_1";
const fastlySoftPurge: number = 1;

  const res = await sdk.purge.purgeTag(serviceId, surrogateKey, fastlySoftPurge);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                                                                                                   | Required                                                                                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                                                                                            | Example                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `serviceId`                                                                                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                                                                                     | Alphanumeric string identifying the service.                                                                                                                                                                                                                                                           | SU1Z0isxPaozGVKXdv0eY                                                                                                                                                                                                                                                                                  |
| `surrogateKey`                                                                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                                                                                     | Surrogate keys are used to efficiently purge content from cache. Instead of purging your entire site or individual URLs, you can tag related assets (like all images and descriptions associated with a single product) with surrogate keys, and these grouped URLs can be purged in a single request. | key_1                                                                                                                                                                                                                                                                                                  |
| `fastlySoftPurge`                                                                                                                                                                                                                                                                                      | *number*                                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                                     | If present, this header triggers the purge to be 'soft', which marks the affected object as stale rather than making it inaccessible.  Typically set to "1" when used, but the value is not important.                                                                                                 | 1                                                                                                                                                                                                                                                                                                      |
| `config`                                                                                                                                                                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                     | Available config options for making requests.                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                        |


### Response

**Promise<[operations.PurgeTagResponse](../../models/operations/purgetagresponse.md)>**


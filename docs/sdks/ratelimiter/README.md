# RateLimiter
(*rateLimiter*)

## Overview

Rate limiters add configurable origin request rate limiting to a service. This information is part of a limited availability release. For more information, see our [product and feature lifecycle](https://docs.fastly.com/products/fastly-product-lifecycle#limited-availability) descriptions. To use this feature you must purchase a Professional or Premier Platform subscription for either [Signal Sciences Cloud WAF](https://docs.fastly.com/products/signal-sciences-cloud-waf) or [Signal Sciences Next-Gen WAF](https://docs.fastly.com/products/signal-sciences-next-gen-waf) and have a [paid account with a contract](https://docs.fastly.com/en/guides/accounts-and-pricing-plans#paid-accounts-with-contractual-commitments) for [full-site delivery](https://docs.fastly.com/products/fastlys-legacy-full-site-delivery-services).

<https://developer.fastly.com/reference/api/vcl-services/rate-limiter>
### Available Operations

* [deleteRateLimiter](#deleteratelimiter) - Delete a rate limiter
* [getRateLimiter](#getratelimiter) - Get a rate limiter
* [listRateLimiters](#listratelimiters) - List rate limiters

## deleteRateLimiter

Delete a rate limiter by its ID.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.rateLimiter.deleteRateLimiter({
    rateLimiterId: "s7aqgcJjqqKhwiTRMaP11",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.DeleteRateLimiterRequest](../../models/operations/deleteratelimiterrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.DeleteRateLimiterResponse](../../models/operations/deleteratelimiterresponse.md)>**


## getRateLimiter

Get a rate limiter by its ID.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.rateLimiter.getRateLimiter({
    rateLimiterId: "s7aqgcJjqqKhwiTRMaP11",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetRateLimiterRequest](../../models/operations/getratelimiterrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetRateLimiterResponse](../../models/operations/getratelimiterresponse.md)>**


## listRateLimiters

List all rate limiters for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.rateLimiter.listRateLimiters({
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.ListRateLimitersRequest](../../models/operations/listratelimitersrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.ListRateLimitersResponse](../../models/operations/listratelimitersresponse.md)>**


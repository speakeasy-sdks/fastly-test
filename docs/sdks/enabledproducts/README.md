# EnabledProducts
(*.enabledProducts*)

## Overview

These endpoints allow you to enable, disable, and check the enablement status of products on your services.

<https://developer.fastly.com/reference/api/products/enablement>
### Available Operations

* [disableProduct](#disableproduct) - Disable a product
* [enableProduct](#enableproduct) - Enable a product
* [getEnabledProduct](#getenabledproduct) - Get enabled product

## disableProduct

Disable a product on a service. Supported product IDs: `brotli_compression`,`domain_inspector`,`fanout`,`image_optimizer`,`origin_inspector`, and `websockets`.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DisableProductRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const productId: string = "origin_inspector";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";

  const res = await sdk.enabledProducts.disableProduct(productId, serviceId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `productId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          | origin_inspector                                             |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DisableProductResponse](../../models/operations/disableproductresponse.md)>**


## enableProduct

Enable a product on a service. Supported product IDs: `brotli_compression`,`domain_inspector`,`fanout`,`image_optimizer`,`origin_inspector`, and `websockets`.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { EnableProductRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const productId: string = "origin_inspector";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";

  const res = await sdk.enabledProducts.enableProduct(productId, serviceId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `productId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          | origin_inspector                                             |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.EnableProductResponse](../../models/operations/enableproductresponse.md)>**


## getEnabledProduct

Get enabled product on a service. Supported product IDs: `brotli_compression`,`domain_inspector`,`fanout`,`image_optimizer`,`origin_inspector`, and `websockets`.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetEnabledProductRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const productId: string = "origin_inspector";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";

  const res = await sdk.enabledProducts.getEnabledProduct(productId, serviceId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `productId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          | origin_inspector                                             |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetEnabledProductResponse](../../models/operations/getenabledproductresponse.md)>**


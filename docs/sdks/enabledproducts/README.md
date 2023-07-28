# enabledProducts

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
import { Fastly } from "FastlyTestJS";
import { DisableProductResponse, DisableProductSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: DisableProductSecurity = {
  token: "",
};

sdk.enabledProducts.disableProduct({
  productId: "origin_inspector",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
}, operationSecurity).then((res: DisableProductResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.DisableProductRequest](../../models/operations/disableproductrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.DisableProductSecurity](../../models/operations/disableproductsecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.DisableProductResponse](../../models/operations/disableproductresponse.md)>**


## enableProduct

Enable a product on a service. Supported product IDs: `brotli_compression`,`domain_inspector`,`fanout`,`image_optimizer`,`origin_inspector`, and `websockets`.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { EnableProductResponse, EnableProductSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: EnableProductSecurity = {
  token: "",
};

sdk.enabledProducts.enableProduct({
  productId: "origin_inspector",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
}, operationSecurity).then((res: EnableProductResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.EnableProductRequest](../../models/operations/enableproductrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.EnableProductSecurity](../../models/operations/enableproductsecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.EnableProductResponse](../../models/operations/enableproductresponse.md)>**


## getEnabledProduct

Get enabled product on a service. Supported product IDs: `brotli_compression`,`domain_inspector`,`fanout`,`image_optimizer`,`origin_inspector`, and `websockets`.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetEnabledProductResponse, GetEnabledProductSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: GetEnabledProductSecurity = {
  token: "",
};

sdk.enabledProducts.getEnabledProduct({
  productId: "origin_inspector",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
}, operationSecurity).then((res: GetEnabledProductResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetEnabledProductRequest](../../models/operations/getenabledproductrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.GetEnabledProductSecurity](../../models/operations/getenabledproductsecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetEnabledProductResponse](../../models/operations/getenabledproductresponse.md)>**


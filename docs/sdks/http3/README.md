# Http3

## Overview

Supports the use of the HTTP/3 (QUIC) protocol.

<https://developer.fastly.com/reference/api/vcl-services/http3>
### Available Operations

* [createHttp3](#createhttp3) - Enable support for HTTP/3
* [deleteHttp3](#deletehttp3) - Disable support for HTTP/3
* [getHttp3](#gethttp3) - Get HTTP/3 status

## createHttp3

Enable HTTP/3 (QUIC) support for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateHttp3Response, CreateHttp3Security } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: CreateHttp3Security = {
  token: "",
};

sdk.http3.createHttp3({
  http3Input: {
    featureRevision: 975522,
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: CreateHttp3Response) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.CreateHttp3Request](../../models/operations/createhttp3request.md)   | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `security`                                                                       | [operations.CreateHttp3Security](../../models/operations/createhttp3security.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.CreateHttp3Response](../../models/operations/createhttp3response.md)>**


## deleteHttp3

Disable HTTP/3 (QUIC) support for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteHttp3Response, DeleteHttp3Security } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: DeleteHttp3Security = {
  token: "",
};

sdk.http3.deleteHttp3({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: DeleteHttp3Response) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.DeleteHttp3Request](../../models/operations/deletehttp3request.md)   | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `security`                                                                       | [operations.DeleteHttp3Security](../../models/operations/deletehttp3security.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.DeleteHttp3Response](../../models/operations/deletehttp3response.md)>**


## getHttp3

Get the status of HTTP/3 (QUIC) support for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetHttp3Response, GetHttp3Security } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: GetHttp3Security = {
  token: "",
};

sdk.http3.getHttp3({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: GetHttp3Response) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.GetHttp3Request](../../models/operations/gethttp3request.md)   | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `security`                                                                 | [operations.GetHttp3Security](../../models/operations/gethttp3security.md) | :heavy_check_mark:                                                         | The security requirements to use for the request.                          |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.GetHttp3Response](../../models/operations/gethttp3response.md)>**


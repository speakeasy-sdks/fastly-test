# Gzip
(*gzip*)

## Overview

Gzip configuration allows you to choose resources to automatically compress.  For more information about compressing and decompressing data with Fastly, check out our [concept guide to compression](https://developer.fastly.com/learning/concepts/compression/).

<https://developer.fastly.com/reference/api/vcl-services/gzip>
### Available Operations

* [createGzipConfig](#creategzipconfig) - Create a gzip configuration
* [deleteGzipConfig](#deletegzipconfig) - Delete a gzip configuration
* [getGzipConfigs](#getgzipconfigs) - Get a gzip configuration
* [listGzipConfigs](#listgzipconfigs) - List gzip configurations
* [updateGzipConfig](#updategzipconfig) - Update a gzip configuration

## createGzipConfig

Create a named gzip configuration on a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateGzipConfigResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.gzip.createGzipConfig({
  gzip: {
    cacheCondition: "null",
    contentTypes: "Automotive violet Analyst",
    extensions: "Indiana beneath",
    name: "test-gzip",
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: CreateGzipConfigResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.CreateGzipConfigRequest](../../models/operations/creategzipconfigrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CreateGzipConfigResponse](../../models/operations/creategzipconfigresponse.md)>**


## deleteGzipConfig

Delete a named gzip configuration on a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteGzipConfigResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.gzip.deleteGzipConfig({
  gzipName: "test-gzip",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: DeleteGzipConfigResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.DeleteGzipConfigRequest](../../models/operations/deletegzipconfigrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DeleteGzipConfigResponse](../../models/operations/deletegzipconfigresponse.md)>**


## getGzipConfigs

Get the gzip configuration for a particular service, version, and name.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetGzipConfigsResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.gzip.getGzipConfigs({
  gzipName: "test-gzip",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: GetGzipConfigsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetGzipConfigsRequest](../../models/operations/getgzipconfigsrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetGzipConfigsResponse](../../models/operations/getgzipconfigsresponse.md)>**


## listGzipConfigs

List all gzip configurations for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListGzipConfigsResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.gzip.listGzipConfigs({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: ListGzipConfigsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.ListGzipConfigsRequest](../../models/operations/listgzipconfigsrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.ListGzipConfigsResponse](../../models/operations/listgzipconfigsresponse.md)>**


## updateGzipConfig

Update a named gzip configuration on a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateGzipConfigResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.gzip.updateGzipConfig({
  gzip: {
    cacheCondition: "null",
    contentTypes: "proactive transition",
    extensions: "Northeast",
    name: "test-gzip",
  },
  gzipName: "test-gzip",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: UpdateGzipConfigResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.UpdateGzipConfigRequest](../../models/operations/updategzipconfigrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UpdateGzipConfigResponse](../../models/operations/updategzipconfigresponse.md)>**


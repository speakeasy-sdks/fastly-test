# Gzip
(*.gzip*)

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
import { Fastly } from "Fastly";
import { Gzip } from "Fastly/dist/sdk/models/components";
import { CreateGzipConfigRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const gzip: Gzip = {
  cacheCondition: "null",
  name: "test-gzip",
};

  const res = await sdk.gzip.createGzipConfig(serviceId, versionId, gzip);


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
| `gzip`                                                       | [components.Gzip](../../models/shared/gzip.md)               | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.CreateGzipConfigResponse](../../models/operations/creategzipconfigresponse.md)>**


## deleteGzipConfig

Delete a named gzip configuration on a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteGzipConfigRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const gzipName: string = "test-gzip";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.gzip.deleteGzipConfig(gzipName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `gzipName`                                                   | *string*                                                     | :heavy_check_mark:                                           | Name of the gzip configuration.                              | test-gzip                                                    |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteGzipConfigResponse](../../models/operations/deletegzipconfigresponse.md)>**


## getGzipConfigs

Get the gzip configuration for a particular service, version, and name.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetGzipConfigsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const gzipName: string = "test-gzip";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.gzip.getGzipConfigs(gzipName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `gzipName`                                                   | *string*                                                     | :heavy_check_mark:                                           | Name of the gzip configuration.                              | test-gzip                                                    |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetGzipConfigsResponse](../../models/operations/getgzipconfigsresponse.md)>**


## listGzipConfigs

List all gzip configurations for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListGzipConfigsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.gzip.listGzipConfigs(serviceId, versionId);


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

**Promise<[operations.ListGzipConfigsResponse](../../models/operations/listgzipconfigsresponse.md)>**


## updateGzipConfig

Update a named gzip configuration on a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { Gzip } from "Fastly/dist/sdk/models/components";
import { UpdateGzipConfigRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const gzipName: string = "test-gzip";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const gzip: Gzip = {
  cacheCondition: "null",
  name: "test-gzip",
};

  const res = await sdk.gzip.updateGzipConfig(gzipName, serviceId, versionId, gzip);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `gzipName`                                                   | *string*                                                     | :heavy_check_mark:                                           | Name of the gzip configuration.                              | test-gzip                                                    |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `gzip`                                                       | [components.Gzip](../../models/shared/gzip.md)               | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.UpdateGzipConfigResponse](../../models/operations/updategzipconfigresponse.md)>**


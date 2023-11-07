# Vcl
(*.vcl*)

## Overview

A VCL is a Varnish configuration file used to customize the configuration for a Service.

<https://developer.fastly.com/reference/api/vcl-services/vcl>
### Available Operations

* [createCustomVcl](#createcustomvcl) - Create a custom VCL file
* [deleteCustomVcl](#deletecustomvcl) - Delete a custom VCL file
* [getCustomVcl](#getcustomvcl) - Get a custom VCL file
* [getCustomVclBoilerplate](#getcustomvclboilerplate) - Get boilerplate VCL
* [getCustomVclGenerated](#getcustomvclgenerated) - Get the generated VCL for a service
* [getCustomVclRaw](#getcustomvclraw) - Download a custom VCL file
* [listCustomVcl](#listcustomvcl) - List custom VCL files
* [setCustomVclMain](#setcustomvclmain) - Set a custom VCL file as main
* [updateCustomVcl](#updatecustomvcl) - Update a custom VCL file

## createCustomVcl

Upload a VCL for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { Vcl } from "Fastly/dist/sdk/models/components";
import { CreateCustomVclRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const vcl: Vcl = {
  name: "test-vcl",
};

  const res = await sdk.vcl.createCustomVcl(serviceId, versionId, vcl);


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
| `vcl`                                                        | [components.Vcl](../../models/shared/vcl.md)                 | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.CreateCustomVclResponse](../../models/operations/createcustomvclresponse.md)>**


## deleteCustomVcl

Delete the uploaded VCL for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteCustomVclRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const vclName: string = "test-vcl";
const versionId: number = 1;

  const res = await sdk.vcl.deleteCustomVcl(serviceId, vclName, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `vclName`                                                    | *string*                                                     | :heavy_check_mark:                                           | The name of this VCL.                                        | test-vcl                                                     |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteCustomVclResponse](../../models/operations/deletecustomvclresponse.md)>**


## getCustomVcl

Get the uploaded VCL for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetCustomVclRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const vclName: string = "test-vcl";
const versionId: number = 1;
const noContent: string = "string";

  const res = await sdk.vcl.getCustomVcl(serviceId, vclName, versionId, noContent);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `vclName`                                                    | *string*                                                     | :heavy_check_mark:                                           | The name of this VCL.                                        | test-vcl                                                     |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `noContent`                                                  | *string*                                                     | :heavy_minus_sign:                                           | Omit VCL content.                                            |                                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetCustomVclResponse](../../models/operations/getcustomvclresponse.md)>**


## getCustomVclBoilerplate

Return boilerplate VCL with the service's TTL from the [settings](/reference/api/vcl-services/settings/).

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetCustomVclBoilerplateRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.vcl.getCustomVclBoilerplate(serviceId, versionId);


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

**Promise<[operations.GetCustomVclBoilerplateResponse](../../models/operations/getcustomvclboilerplateresponse.md)>**


## getCustomVclGenerated

Display the generated VCL for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetCustomVclGeneratedRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.vcl.getCustomVclGenerated(serviceId, versionId);


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

**Promise<[operations.GetCustomVclGeneratedResponse](../../models/operations/getcustomvclgeneratedresponse.md)>**


## getCustomVclRaw

Download the specified VCL.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetCustomVclRawRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const vclName: string = "test-vcl";
const versionId: number = 1;

  const res = await sdk.vcl.getCustomVclRaw(serviceId, vclName, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `vclName`                                                    | *string*                                                     | :heavy_check_mark:                                           | The name of this VCL.                                        | test-vcl                                                     |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetCustomVclRawResponse](../../models/operations/getcustomvclrawresponse.md)>**


## listCustomVcl

List the uploaded VCLs for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListCustomVclRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.vcl.listCustomVcl(serviceId, versionId);


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

**Promise<[operations.ListCustomVclResponse](../../models/operations/listcustomvclresponse.md)>**


## setCustomVclMain

Set the specified VCL as the main.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { SetCustomVclMainRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const vclName: string = "test-vcl";
const versionId: number = 1;

  const res = await sdk.vcl.setCustomVclMain(serviceId, vclName, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `vclName`                                                    | *string*                                                     | :heavy_check_mark:                                           | The name of this VCL.                                        | test-vcl                                                     |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.SetCustomVclMainResponse](../../models/operations/setcustomvclmainresponse.md)>**


## updateCustomVcl

Update the uploaded VCL for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { Vcl } from "Fastly/dist/sdk/models/components";
import { UpdateCustomVclRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const vclName: string = "test-vcl";
const versionId: number = 1;
const vcl: Vcl = {
  name: "test-vcl",
};

  const res = await sdk.vcl.updateCustomVcl(serviceId, vclName, versionId, vcl);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `vclName`                                                    | *string*                                                     | :heavy_check_mark:                                           | The name of this VCL.                                        | test-vcl                                                     |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `vcl`                                                        | [components.Vcl](../../models/shared/vcl.md)                 | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.UpdateCustomVclResponse](../../models/operations/updatecustomvclresponse.md)>**


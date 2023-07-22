# vcl

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
import { Fastly } from "FastlyTestJS";
import { CreateCustomVclResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.vcl.createCustomVcl({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  vcl: {
    content: "reiciendis",
    main: false,
    name: "test-vcl",
  },
  versionId: 1,
}, {
  token: "",
}).then((res: CreateCustomVclResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.CreateCustomVclRequest](../../models/operations/createcustomvclrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.CreateCustomVclSecurity](../../models/operations/createcustomvclsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CreateCustomVclResponse](../../models/operations/createcustomvclresponse.md)>**


## deleteCustomVcl

Delete the uploaded VCL for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteCustomVclResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.vcl.deleteCustomVcl({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  vclName: "test-vcl",
  versionId: 1,
}, {
  token: "",
}).then((res: DeleteCustomVclResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.DeleteCustomVclRequest](../../models/operations/deletecustomvclrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.DeleteCustomVclSecurity](../../models/operations/deletecustomvclsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DeleteCustomVclResponse](../../models/operations/deletecustomvclresponse.md)>**


## getCustomVcl

Get the uploaded VCL for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetCustomVclResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.vcl.getCustomVcl({
  noContent: "vel",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  vclName: "test-vcl",
  versionId: 1,
}, {
  token: "",
}).then((res: GetCustomVclResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetCustomVclRequest](../../models/operations/getcustomvclrequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.GetCustomVclSecurity](../../models/operations/getcustomvclsecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetCustomVclResponse](../../models/operations/getcustomvclresponse.md)>**


## getCustomVclBoilerplate

Return boilerplate VCL with the service's TTL from the [settings](/reference/api/vcl-services/settings/).

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetCustomVclBoilerplateResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.vcl.getCustomVclBoilerplate({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: GetCustomVclBoilerplateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetCustomVclBoilerplateRequest](../../models/operations/getcustomvclboilerplaterequest.md)   | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `security`                                                                                               | [operations.GetCustomVclBoilerplateSecurity](../../models/operations/getcustomvclboilerplatesecurity.md) | :heavy_check_mark:                                                                                       | The security requirements to use for the request.                                                        |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetCustomVclBoilerplateResponse](../../models/operations/getcustomvclboilerplateresponse.md)>**


## getCustomVclGenerated

Display the generated VCL for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetCustomVclGeneratedResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.vcl.getCustomVclGenerated({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: GetCustomVclGeneratedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetCustomVclGeneratedRequest](../../models/operations/getcustomvclgeneratedrequest.md)   | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `security`                                                                                           | [operations.GetCustomVclGeneratedSecurity](../../models/operations/getcustomvclgeneratedsecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetCustomVclGeneratedResponse](../../models/operations/getcustomvclgeneratedresponse.md)>**


## getCustomVclRaw

Download the specified VCL.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetCustomVclRawResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.vcl.getCustomVclRaw({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  vclName: "test-vcl",
  versionId: 1,
}, {
  token: "",
}).then((res: GetCustomVclRawResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetCustomVclRawRequest](../../models/operations/getcustomvclrawrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.GetCustomVclRawSecurity](../../models/operations/getcustomvclrawsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetCustomVclRawResponse](../../models/operations/getcustomvclrawresponse.md)>**


## listCustomVcl

List the uploaded VCLs for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListCustomVclResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.vcl.listCustomVcl({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: ListCustomVclResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.ListCustomVclRequest](../../models/operations/listcustomvclrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.ListCustomVclSecurity](../../models/operations/listcustomvclsecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ListCustomVclResponse](../../models/operations/listcustomvclresponse.md)>**


## setCustomVclMain

Set the specified VCL as the main.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { SetCustomVclMainResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.vcl.setCustomVclMain({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  vclName: "test-vcl",
  versionId: 1,
}, {
  token: "",
}).then((res: SetCustomVclMainResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.SetCustomVclMainRequest](../../models/operations/setcustomvclmainrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.SetCustomVclMainSecurity](../../models/operations/setcustomvclmainsecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.SetCustomVclMainResponse](../../models/operations/setcustomvclmainresponse.md)>**


## updateCustomVcl

Update the uploaded VCL for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateCustomVclResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.vcl.updateCustomVcl({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  vcl: {
    content: "architecto",
    main: false,
    name: "test-vcl",
  },
  vclName: "test-vcl",
  versionId: 1,
}, {
  token: "",
}).then((res: UpdateCustomVclResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.UpdateCustomVclRequest](../../models/operations/updatecustomvclrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.UpdateCustomVclSecurity](../../models/operations/updatecustomvclsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UpdateCustomVclResponse](../../models/operations/updatecustomvclresponse.md)>**


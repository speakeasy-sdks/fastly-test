# version

## Overview

A Version represents a specific instance of the configuration for a service. A Version can be cloned, locked, activated, or deactivated.

<https://developer.fastly.com/reference/api/services/version>
### Available Operations

* [activateServiceVersion](#activateserviceversion) - Activate a service version
* [cloneServiceVersion](#cloneserviceversion) - Clone a service version
* [createServiceVersion](#createserviceversion) - Create a service version
* [deactivateServiceVersion](#deactivateserviceversion) - Deactivate a service version
* [getServiceVersion](#getserviceversion) - Get a version of a service
* [listServiceVersions](#listserviceversions) - List versions of a service
* [lockServiceVersion](#lockserviceversion) - Lock a service version
* [updateServiceVersion](#updateserviceversion) - Update a service version
* [validateServiceVersion](#validateserviceversion) - Validate a service version

## activateServiceVersion

Activate the current version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ActivateServiceVersionResponse, ActivateServiceVersionSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: ActivateServiceVersionSecurity = {
  token: "",
};

sdk.version.activateServiceVersion({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: ActivateServiceVersionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.ActivateServiceVersionRequest](../../models/operations/activateserviceversionrequest.md)   | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `security`                                                                                             | [operations.ActivateServiceVersionSecurity](../../models/operations/activateserviceversionsecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.ActivateServiceVersionResponse](../../models/operations/activateserviceversionresponse.md)>**


## cloneServiceVersion

Clone the current configuration into a new version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CloneServiceVersionResponse, CloneServiceVersionSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: CloneServiceVersionSecurity = {
  token: "",
};

sdk.version.cloneServiceVersion({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: CloneServiceVersionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.CloneServiceVersionRequest](../../models/operations/cloneserviceversionrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.CloneServiceVersionSecurity](../../models/operations/cloneserviceversionsecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.CloneServiceVersionResponse](../../models/operations/cloneserviceversionresponse.md)>**


## createServiceVersion

Create a version for a particular service.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateServiceVersionResponse, CreateServiceVersionSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: CreateServiceVersionSecurity = {
  token: "",
};

sdk.version.createServiceVersion({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
}, operationSecurity).then((res: CreateServiceVersionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.CreateServiceVersionRequest](../../models/operations/createserviceversionrequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.CreateServiceVersionSecurity](../../models/operations/createserviceversionsecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.CreateServiceVersionResponse](../../models/operations/createserviceversionresponse.md)>**


## deactivateServiceVersion

Deactivate the current version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeactivateServiceVersionResponse, DeactivateServiceVersionSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: DeactivateServiceVersionSecurity = {
  token: "",
};

sdk.version.deactivateServiceVersion({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: DeactivateServiceVersionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.DeactivateServiceVersionRequest](../../models/operations/deactivateserviceversionrequest.md)   | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `security`                                                                                                 | [operations.DeactivateServiceVersionSecurity](../../models/operations/deactivateserviceversionsecurity.md) | :heavy_check_mark:                                                                                         | The security requirements to use for the request.                                                          |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.DeactivateServiceVersionResponse](../../models/operations/deactivateserviceversionresponse.md)>**


## getServiceVersion

Get the version for a particular service.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetServiceVersionResponse, GetServiceVersionSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: GetServiceVersionSecurity = {
  token: "",
};

sdk.version.getServiceVersion({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: GetServiceVersionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetServiceVersionRequest](../../models/operations/getserviceversionrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.GetServiceVersionSecurity](../../models/operations/getserviceversionsecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetServiceVersionResponse](../../models/operations/getserviceversionresponse.md)>**


## listServiceVersions

List the versions for a particular service.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListServiceVersionsResponse, ListServiceVersionsSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: ListServiceVersionsSecurity = {
  token: "",
};

sdk.version.listServiceVersions({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
}, operationSecurity).then((res: ListServiceVersionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.ListServiceVersionsRequest](../../models/operations/listserviceversionsrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.ListServiceVersionsSecurity](../../models/operations/listserviceversionssecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.ListServiceVersionsResponse](../../models/operations/listserviceversionsresponse.md)>**


## lockServiceVersion

Locks the specified version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { LockServiceVersionResponse, LockServiceVersionSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: LockServiceVersionSecurity = {
  token: "",
};

sdk.version.lockServiceVersion({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: LockServiceVersionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.LockServiceVersionRequest](../../models/operations/lockserviceversionrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.LockServiceVersionSecurity](../../models/operations/lockserviceversionsecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.LockServiceVersionResponse](../../models/operations/lockserviceversionresponse.md)>**


## updateServiceVersion

Update a particular version for a particular service.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateServiceVersionResponse, UpdateServiceVersionSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: UpdateServiceVersionSecurity = {
  token: "",
};

sdk.version.updateServiceVersion({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionInput: {
    active: false,
    comment: "doloremque",
    deployed: false,
    locked: false,
    staging: false,
    testing: false,
  },
  versionId: 1,
}, operationSecurity).then((res: UpdateServiceVersionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.UpdateServiceVersionRequest](../../models/operations/updateserviceversionrequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.UpdateServiceVersionSecurity](../../models/operations/updateserviceversionsecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.UpdateServiceVersionResponse](../../models/operations/updateserviceversionresponse.md)>**


## validateServiceVersion

Validate the version for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ValidateServiceVersionResponse, ValidateServiceVersionSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: ValidateServiceVersionSecurity = {
  token: "",
};

sdk.version.validateServiceVersion({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: ValidateServiceVersionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.ValidateServiceVersionRequest](../../models/operations/validateserviceversionrequest.md)   | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `security`                                                                                             | [operations.ValidateServiceVersionSecurity](../../models/operations/validateserviceversionsecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.ValidateServiceVersionResponse](../../models/operations/validateserviceversionresponse.md)>**


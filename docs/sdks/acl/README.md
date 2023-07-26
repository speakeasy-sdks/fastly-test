# acl

## Overview

An access control list or "ACL" specifies individual IP addresses or subnet ranges and can be accessed and used from Fastly VCL.

<https://developer.fastly.com/reference/api/acls/acl>
### Available Operations

* [createAcl](#createacl) - Create a new ACL
* [deleteAcl](#deleteacl) - Delete an ACL
* [getAcl](#getacl) - Describe an ACL
* [listAcls](#listacls) - List ACLs
* [updateAcl](#updateacl) - Update an ACL

## createAcl

Create a new ACL attached to the specified service version. A new, empty ACL must be attached to a draft version of a service. The version associated with the ACL must be activated to be used.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateAclResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.acl.createAcl({
  acl: {
    name: "test-acl",
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: CreateAclResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.CreateAclRequest](../../models/operations/createaclrequest.md)   | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `security`                                                                   | [operations.CreateAclSecurity](../../models/operations/createaclsecurity.md) | :heavy_check_mark:                                                           | The security requirements to use for the request.                            |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.CreateAclResponse](../../models/operations/createaclresponse.md)>**


## deleteAcl

Delete an ACL from the specified service version. To remove an ACL from use, the ACL must be deleted from a draft version and the version without the ACL must be activated.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteAclResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.acl.deleteAcl({
  aclName: "test-acl",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: DeleteAclResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.DeleteAclRequest](../../models/operations/deleteaclrequest.md)   | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `security`                                                                   | [operations.DeleteAclSecurity](../../models/operations/deleteaclsecurity.md) | :heavy_check_mark:                                                           | The security requirements to use for the request.                            |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.DeleteAclResponse](../../models/operations/deleteaclresponse.md)>**


## getAcl

Retrieve a single ACL by name for the version and service.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetAclResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.acl.getAcl({
  aclName: "test-acl",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: GetAclResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [operations.GetAclRequest](../../models/operations/getaclrequest.md)   | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `security`                                                             | [operations.GetAclSecurity](../../models/operations/getaclsecurity.md) | :heavy_check_mark:                                                     | The security requirements to use for the request.                      |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.GetAclResponse](../../models/operations/getaclresponse.md)>**


## listAcls

List ACLs.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListAclsResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.acl.listAcls({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: ListAclsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.ListAclsRequest](../../models/operations/listaclsrequest.md)   | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `security`                                                                 | [operations.ListAclsSecurity](../../models/operations/listaclssecurity.md) | :heavy_check_mark:                                                         | The security requirements to use for the request.                          |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.ListAclsResponse](../../models/operations/listaclsresponse.md)>**


## updateAcl

Update an ACL for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateAclResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.acl.updateAcl({
  acl: {
    name: "test-acl",
  },
  aclName: "test-acl",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: UpdateAclResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.UpdateAclRequest](../../models/operations/updateaclrequest.md)   | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `security`                                                                   | [operations.UpdateAclSecurity](../../models/operations/updateaclsecurity.md) | :heavy_check_mark:                                                           | The security requirements to use for the request.                            |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.UpdateAclResponse](../../models/operations/updateaclresponse.md)>**


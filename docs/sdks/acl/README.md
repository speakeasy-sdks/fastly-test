# Acl
(*.acl*)

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
import { Fastly } from "Fastly";
import { Acl } from "Fastly/dist/sdk/models/components";
import { CreateAclRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const acl: Acl = {
  name: "test-acl",
};

  const res = await sdk.acl.createAcl(serviceId, versionId, acl);


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
| `acl`                                                        | [components.Acl](../../models/shared/acl.md)                 | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.CreateAclResponse](../../models/operations/createaclresponse.md)>**


## deleteAcl

Delete an ACL from the specified service version. To remove an ACL from use, the ACL must be deleted from a draft version and the version without the ACL must be activated.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteAclRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const aclName: string = "test-acl";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.acl.deleteAcl(aclName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `aclName`                                                                                                                          | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | Name for the ACL. Must start with an alphanumeric character and contain only alphanumeric characters, underscores, and whitespace. | test-acl                                                                                                                           |
| `serviceId`                                                                                                                        | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | Alphanumeric string identifying the service.                                                                                       | SU1Z0isxPaozGVKXdv0eY                                                                                                              |
| `versionId`                                                                                                                        | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | Integer identifying a service version.                                                                                             | 1                                                                                                                                  |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |                                                                                                                                    |


### Response

**Promise<[operations.DeleteAclResponse](../../models/operations/deleteaclresponse.md)>**


## getAcl

Retrieve a single ACL by name for the version and service.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetAclRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const aclName: string = "test-acl";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.acl.getAcl(aclName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `aclName`                                                                                                                          | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | Name for the ACL. Must start with an alphanumeric character and contain only alphanumeric characters, underscores, and whitespace. | test-acl                                                                                                                           |
| `serviceId`                                                                                                                        | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | Alphanumeric string identifying the service.                                                                                       | SU1Z0isxPaozGVKXdv0eY                                                                                                              |
| `versionId`                                                                                                                        | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | Integer identifying a service version.                                                                                             | 1                                                                                                                                  |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |                                                                                                                                    |


### Response

**Promise<[operations.GetAclResponse](../../models/operations/getaclresponse.md)>**


## listAcls

List ACLs.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListAclsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.acl.listAcls(serviceId, versionId);


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

**Promise<[operations.ListAclsResponse](../../models/operations/listaclsresponse.md)>**


## updateAcl

Update an ACL for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { Acl } from "Fastly/dist/sdk/models/components";
import { UpdateAclRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const aclName: string = "test-acl";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const acl: Acl = {
  name: "test-acl",
};

  const res = await sdk.acl.updateAcl(aclName, serviceId, versionId, acl);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `aclName`                                                                                                                          | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | Name for the ACL. Must start with an alphanumeric character and contain only alphanumeric characters, underscores, and whitespace. | test-acl                                                                                                                           |
| `serviceId`                                                                                                                        | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | Alphanumeric string identifying the service.                                                                                       | SU1Z0isxPaozGVKXdv0eY                                                                                                              |
| `versionId`                                                                                                                        | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | Integer identifying a service version.                                                                                             | 1                                                                                                                                  |
| `acl`                                                                                                                              | [components.Acl](../../models/shared/acl.md)                                                                                       | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |                                                                                                                                    |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |                                                                                                                                    |


### Response

**Promise<[operations.UpdateAclResponse](../../models/operations/updateaclresponse.md)>**


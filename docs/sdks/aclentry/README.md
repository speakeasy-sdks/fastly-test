# AclEntry
(*.aclEntry*)

## Overview

An ACL entry holds an individual IP address or subnet range and is a member of an ACL. ACL entries are versionless, which means they can be created, modified, or deleted without activating a new version of your service.


<https://developer.fastly.com/reference/api/acls/acl-entry>
### Available Operations

* [bulkUpdateAclEntries](#bulkupdateaclentries) - Update multiple ACL entries
* [createAclEntry](#createaclentry) - Create an ACL entry
* [deleteAclEntry](#deleteaclentry) - Delete an ACL entry
* [getAclEntry](#getaclentry) - Describe an ACL entry
* [listAclEntries](#listaclentries) - List ACL entries
* [updateAclEntry](#updateaclentry) - Update an ACL entry

## bulkUpdateAclEntries

Update multiple ACL entries on the same ACL. For faster updates to your service, group your changes into large batches. The maximum batch size is 1000 entries. [Contact support](https://support.fastly.com/) to discuss raising this limit.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { BulkUpdateAclEntryNegated, Op } from "Fastly/dist/sdk/models/components";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.aclEntry.bulkUpdateAclEntries({
    aclId: "6tUXdegLTf5BCig0zGFrU3",
    bulkUpdateAclEntriesRequest: {
      entries: [
        {
          comment: "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
          ip: "127.0.0.1",
          negated: BulkUpdateAclEntryNegated.One,
          subnet: 8,
        },
      ],
    },
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.BulkUpdateAclEntriesRequest](../../models/operations/bulkupdateaclentriesrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.BulkUpdateAclEntriesResponse](../../models/operations/bulkupdateaclentriesresponse.md)>**


## createAclEntry

Add an ACL entry to an ACL.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { Negated } from "Fastly/dist/sdk/models/components";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.aclEntry.createAclEntry({
    aclEntry: {
      comment: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      ip: "127.0.0.1",
      negated: Negated.One,
      subnet: 8,
    },
    aclId: "6tUXdegLTf5BCig0zGFrU3",
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.CreateAclEntryRequest](../../models/operations/createaclentryrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CreateAclEntryResponse](../../models/operations/createaclentryresponse.md)>**


## deleteAclEntry

Delete an ACL entry from a specified ACL.

### Example Usage

```typescript
import { Fastly } from "Fastly";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.aclEntry.deleteAclEntry({
    aclEntryId: "6yxNzlOpW1V7JfSwvLGtOc",
    aclId: "6tUXdegLTf5BCig0zGFrU3",
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.DeleteAclEntryRequest](../../models/operations/deleteaclentryrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.DeleteAclEntryResponse](../../models/operations/deleteaclentryresponse.md)>**


## getAclEntry

Retrieve a single ACL entry.

### Example Usage

```typescript
import { Fastly } from "Fastly";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.aclEntry.getAclEntry({
    aclEntryId: "6yxNzlOpW1V7JfSwvLGtOc",
    aclId: "6tUXdegLTf5BCig0zGFrU3",
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetAclEntryRequest](../../models/operations/getaclentryrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetAclEntryResponse](../../models/operations/getaclentryresponse.md)>**


## listAclEntries

List ACL entries for a specified ACL.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { Direction } from "Fastly/dist/sdk/models/components";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.aclEntry.listAclEntries({
    aclId: "6tUXdegLTf5BCig0zGFrU3",
    direction: Direction.Ascend,
    page: 1,
    perPage: 20,
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    sort: "created",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.ListAclEntriesRequest](../../models/operations/listaclentriesrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ListAclEntriesResponse](../../models/operations/listaclentriesresponse.md)>**


## updateAclEntry

Update an ACL entry for a specified ACL.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { Negated } from "Fastly/dist/sdk/models/components";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.aclEntry.updateAclEntry({
    aclEntry: {
      comment: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      ip: "127.0.0.1",
      negated: Negated.Zero,
      subnet: 8,
    },
    aclEntryId: "6yxNzlOpW1V7JfSwvLGtOc",
    aclId: "6tUXdegLTf5BCig0zGFrU3",
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.UpdateAclEntryRequest](../../models/operations/updateaclentryrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdateAclEntryResponse](../../models/operations/updateaclentryresponse.md)>**


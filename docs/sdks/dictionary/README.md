# Dictionary

## Overview

A Dictionary is a VCL data table that stores key-value pairs accessible to VCL during request processing. New, empty dictionaries can be attached to a draft version of a service, which must be activated for the dictionary to be included in VCL. Once installed, a dictionary's items may be updated via API calls without having to activate a new version of the associated service configuration. To remove a dictionary, delete it on a draft version of a service (one that is not locked and not active). Once removed, activate the draft service version without the dictionary.

<https://developer.fastly.com/reference/api/dictionaries/dictionary>
### Available Operations

* [createDictionary](#createdictionary) - Create an edge dictionary
* [deleteDictionary](#deletedictionary) - Delete an edge dictionary
* [getDictionary](#getdictionary) - Get an edge dictionary
* [listDictionaries](#listdictionaries) - List edge dictionaries
* [updateDictionary](#updatedictionary) - Update an edge dictionary

## createDictionary

Create named dictionary for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateDictionaryResponse, CreateDictionarySecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: CreateDictionarySecurity = {
  token: "",
};

sdk.dictionary.createDictionary({
  dictionary: {
    name: "test_dictionary",
    writeOnly: false,
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: CreateDictionaryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.CreateDictionaryRequest](../../models/operations/createdictionaryrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.CreateDictionarySecurity](../../models/operations/createdictionarysecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CreateDictionaryResponse](../../models/operations/createdictionaryresponse.md)>**


## deleteDictionary

Delete named dictionary for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteDictionaryResponse, DeleteDictionarySecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: DeleteDictionarySecurity = {
  token: "",
};

sdk.dictionary.deleteDictionary({
  dictionaryName: "test_dictionary",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: DeleteDictionaryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.DeleteDictionaryRequest](../../models/operations/deletedictionaryrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.DeleteDictionarySecurity](../../models/operations/deletedictionarysecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.DeleteDictionaryResponse](../../models/operations/deletedictionaryresponse.md)>**


## getDictionary

Retrieve a single dictionary by name for the version and service.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetDictionaryResponse, GetDictionarySecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: GetDictionarySecurity = {
  token: "",
};

sdk.dictionary.getDictionary({
  dictionaryName: "test_dictionary",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: GetDictionaryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetDictionaryRequest](../../models/operations/getdictionaryrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.GetDictionarySecurity](../../models/operations/getdictionarysecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetDictionaryResponse](../../models/operations/getdictionaryresponse.md)>**


## listDictionaries

List all dictionaries for the version of the service.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListDictionariesResponse, ListDictionariesSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: ListDictionariesSecurity = {
  token: "",
};

sdk.dictionary.listDictionaries({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: ListDictionariesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.ListDictionariesRequest](../../models/operations/listdictionariesrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.ListDictionariesSecurity](../../models/operations/listdictionariessecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ListDictionariesResponse](../../models/operations/listdictionariesresponse.md)>**


## updateDictionary

Update named dictionary for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateDictionaryResponse, UpdateDictionarySecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: UpdateDictionarySecurity = {
  token: "",
};

sdk.dictionary.updateDictionary({
  dictionary: {
    name: "test_dictionary",
    writeOnly: false,
  },
  dictionaryName: "test_dictionary",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: UpdateDictionaryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.UpdateDictionaryRequest](../../models/operations/updatedictionaryrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.UpdateDictionarySecurity](../../models/operations/updatedictionarysecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.UpdateDictionaryResponse](../../models/operations/updatedictionaryresponse.md)>**


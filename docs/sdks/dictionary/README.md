# Dictionary
(*.dictionary*)

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
import { Fastly } from "Fastly";
import { Dictionary } from "Fastly/dist/sdk/models/components";
import { CreateDictionaryRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const dictionary: Dictionary = {
  name: "test_dictionary",
};

  const res = await sdk.dictionary.createDictionary(serviceId, versionId, dictionary);


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
| `dictionary`                                                 | [components.Dictionary](../../models/shared/dictionary.md)   | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.CreateDictionaryResponse](../../models/operations/createdictionaryresponse.md)>**


## deleteDictionary

Delete named dictionary for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteDictionaryRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const dictionaryName: string = "test_dictionary";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.dictionary.deleteDictionary(dictionaryName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  | Example                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `dictionaryName`                                                                                                                             | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | Name for the Dictionary (must start with an alphabetic character and can contain only alphanumeric characters, underscores, and whitespace). | test_dictionary                                                                                                                              |
| `serviceId`                                                                                                                                  | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | Alphanumeric string identifying the service.                                                                                                 | SU1Z0isxPaozGVKXdv0eY                                                                                                                        |
| `versionId`                                                                                                                                  | *number*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | Integer identifying a service version.                                                                                                       | 1                                                                                                                                            |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |                                                                                                                                              |


### Response

**Promise<[operations.DeleteDictionaryResponse](../../models/operations/deletedictionaryresponse.md)>**


## getDictionary

Retrieve a single dictionary by name for the version and service.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetDictionaryRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const dictionaryName: string = "test_dictionary";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.dictionary.getDictionary(dictionaryName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  | Example                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `dictionaryName`                                                                                                                             | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | Name for the Dictionary (must start with an alphabetic character and can contain only alphanumeric characters, underscores, and whitespace). | test_dictionary                                                                                                                              |
| `serviceId`                                                                                                                                  | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | Alphanumeric string identifying the service.                                                                                                 | SU1Z0isxPaozGVKXdv0eY                                                                                                                        |
| `versionId`                                                                                                                                  | *number*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | Integer identifying a service version.                                                                                                       | 1                                                                                                                                            |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |                                                                                                                                              |


### Response

**Promise<[operations.GetDictionaryResponse](../../models/operations/getdictionaryresponse.md)>**


## listDictionaries

List all dictionaries for the version of the service.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListDictionariesRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.dictionary.listDictionaries(serviceId, versionId);


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

**Promise<[operations.ListDictionariesResponse](../../models/operations/listdictionariesresponse.md)>**


## updateDictionary

Update named dictionary for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { Dictionary } from "Fastly/dist/sdk/models/components";
import { UpdateDictionaryRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const dictionaryName: string = "test_dictionary";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const dictionary: Dictionary = {
  name: "test_dictionary",
};

  const res = await sdk.dictionary.updateDictionary(dictionaryName, serviceId, versionId, dictionary);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  | Example                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `dictionaryName`                                                                                                                             | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | Name for the Dictionary (must start with an alphabetic character and can contain only alphanumeric characters, underscores, and whitespace). | test_dictionary                                                                                                                              |
| `serviceId`                                                                                                                                  | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | Alphanumeric string identifying the service.                                                                                                 | SU1Z0isxPaozGVKXdv0eY                                                                                                                        |
| `versionId`                                                                                                                                  | *number*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | Integer identifying a service version.                                                                                                       | 1                                                                                                                                            |
| `dictionary`                                                                                                                                 | [components.Dictionary](../../models/shared/dictionary.md)                                                                                   | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |                                                                                                                                              |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |                                                                                                                                              |


### Response

**Promise<[operations.UpdateDictionaryResponse](../../models/operations/updatedictionaryresponse.md)>**


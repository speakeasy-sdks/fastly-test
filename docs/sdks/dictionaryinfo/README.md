# DictionaryInfo
(*.dictionaryInfo*)

## Overview

Dictionary Info is a set of metadata describing properties of a dictionary which change as items are added and removed.

<https://developer.fastly.com/reference/api/dictionaries/dictionary-info>
### Available Operations

* [getDictionaryInfo](#getdictionaryinfo) - Get edge dictionary metadata

## getDictionaryInfo

Retrieve metadata for a single dictionary by ID for a version and service.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetDictionaryInfoRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const dictionaryId: string = "3vjTN8v1O7nOAY7aNDGOL";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.dictionaryInfo.getDictionaryInfo(dictionaryId, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `dictionaryId`                                               | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying a Dictionary.                | 3vjTN8v1O7nOAY7aNDGOL                                        |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetDictionaryInfoResponse](../../models/operations/getdictionaryinforesponse.md)>**


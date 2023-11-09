# DictionaryInfo
(*dictionaryInfo*)

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

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.dictionaryInfo.getDictionaryInfo({
    dictionaryId: "3vjTN8v1O7nOAY7aNDGOL",
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    versionId: 1,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetDictionaryInfoRequest](../../sdk/models/operations/getdictionaryinforequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetDictionaryInfoResponse](../../sdk/models/operations/getdictionaryinforesponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

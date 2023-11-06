# Diff
(*diff*)

## Overview

See the line-by-line changes in configuration between two different versions of a service.

<https://developer.fastly.com/reference/api/utils/diff>
### Available Operations

* [diffServiceVersions](#diffserviceversions) - Diff two service versions

## diffServiceVersions

Get diff between two versions.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { QueryFormat } from "FastlyTestJS/dist/sdk/models/shared";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.diff.diffServiceVersions({
    fromVersionId: 1,
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    toVersionId: 2,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.DiffServiceVersionsRequest](../../models/operations/diffserviceversionsrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.DiffServiceVersionsResponse](../../models/operations/diffserviceversionsresponse.md)>**


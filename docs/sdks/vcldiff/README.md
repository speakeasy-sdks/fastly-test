# VclDiff
(*.vclDiff*)

## Overview

Compare the changes in generated VCL between two versions of a service. This is sometimes called a "diff" because the comparison may highlight "differences" between the versions. To compare the configuration changes between two versions of a service represented in YAML format instead, use the related [diff](/reference/api/utils/diff/#diff-service-versions) endpoint.

<https://developer.fastly.com/reference/api/vcl-services/diff>
### Available Operations

* [vclDiffServiceVersions](#vcldiffserviceversions) - Get a comparison of the VCL changes between two service versions

## vclDiffServiceVersions

Get a comparison of the VCL changes between two service versions.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { QueryFormat } from "Fastly/dist/sdk/models/components";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.vclDiff.vclDiffServiceVersions({
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

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.VclDiffServiceVersionsRequest](../../models/operations/vcldiffserviceversionsrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.VclDiffServiceVersionsResponse](../../models/operations/vcldiffserviceversionsresponse.md)>**


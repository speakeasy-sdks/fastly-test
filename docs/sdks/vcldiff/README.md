# VclDiff
(*vclDiff*)

## Overview

Compare the changes in generated VCL between two versions of a service. This is sometimes called a "diff" because the comparison may highlight "differences" between the versions. To compare the configuration changes between two versions of a service represented in YAML format instead, use the related [diff](/reference/api/utils/diff/#diff-service-versions) endpoint.

<https://developer.fastly.com/reference/api/vcl-services/diff>
### Available Operations

* [vclDiffServiceVersions](#vcldiffserviceversions) - Get a comparison of the VCL changes between two service versions

## vclDiffServiceVersions

Get a comparison of the VCL changes between two service versions.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { VclDiffServiceVersionsResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { QueryFormat } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.vclDiff.vclDiffServiceVersions({
  format: QueryFormat.HtmlSimple,
  fromVersionId: 1,
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  toVersionId: 2,
}).then((res: VclDiffServiceVersionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.VclDiffServiceVersionsRequest](../../models/operations/vcldiffserviceversionsrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.VclDiffServiceVersionsResponse](../../models/operations/vcldiffserviceversionsresponse.md)>**


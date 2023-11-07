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
import { VclDiffServiceVersionsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const fromVersionId: number = 1;
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const toVersionId: number = 2;
const format: QueryFormat = QueryFormat.HtmlSimple;

  const res = await sdk.vclDiff.vclDiffServiceVersions(fromVersionId, serviceId, toVersionId, format);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                                                                | Type                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                 | Description                                                                                                                                                                                                              | Example                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `fromVersionId`                                                                                                                                                                                                          | *number*                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                       | The version number of the service to which changes in the generated VCL are being compared. Can either be a positive number from 1 to your maximum version or a negative number from -1 down (-1 is latest version etc). | 1                                                                                                                                                                                                                        |
| `serviceId`                                                                                                                                                                                                              | *string*                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                       | Alphanumeric string identifying the service.                                                                                                                                                                             | SU1Z0isxPaozGVKXdv0eY                                                                                                                                                                                                    |
| `toVersionId`                                                                                                                                                                                                            | *number*                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                       | The version number of the service from which changes in the generated VCL are being compared. Uses same numbering scheme as `from`.                                                                                      | 2                                                                                                                                                                                                                        |
| `format`                                                                                                                                                                                                                 | [components.QueryFormat](../../models/shared/queryformat.md)                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                       | Optional method to format the diff field.                                                                                                                                                                                |                                                                                                                                                                                                                          |
| `config`                                                                                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                       | Available config options for making requests.                                                                                                                                                                            |                                                                                                                                                                                                                          |


### Response

**Promise<[operations.VclDiffServiceVersionsResponse](../../models/operations/vcldiffserviceversionsresponse.md)>**


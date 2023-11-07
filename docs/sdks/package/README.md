# Package
(*.package*)

## Overview

Compute@Edge is a computation platform capable of running custom binary packages that you compile on your own systems and upload to Fastly. These packages are associated with a service version and are deployed to Fastly's edge network.


<https://developer.fastly.com/reference/api/services/package>
### Available Operations

* [getPackage](#getpackage) - Get details of the service's Compute@Edge package.
* [putPackage](#putpackage) - Upload a Compute@Edge package.

## getPackage

List detailed information about the Compute@Edge package for the specified service.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetPackageRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.package.getPackage(serviceId, versionId);


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

**Promise<[operations.GetPackageResponse](../../models/operations/getpackageresponse.md)>**


## putPackage

Upload a Compute@Edge package associated with the specified service version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { Package, PackageUpload } from "Fastly/dist/sdk/models/components";
import { PutPackageRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const expect: string = "string";
const packageUpload: PackageUpload = {
  package: {
    content: new TextEncoder().encode("0xbb336eEdCd"),
    fileName: "industrial.pdf",
  },
};

  const res = await sdk.package.putPackage(serviceId, versionId, expect, packageUpload);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                                                | Type                                                                                                                                                                                                     | Required                                                                                                                                                                                                 | Description                                                                                                                                                                                              | Example                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `serviceId`                                                                                                                                                                                              | *string*                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                       | Alphanumeric string identifying the service.                                                                                                                                                             | SU1Z0isxPaozGVKXdv0eY                                                                                                                                                                                    |
| `versionId`                                                                                                                                                                                              | *number*                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                       | Integer identifying a service version.                                                                                                                                                                   | 1                                                                                                                                                                                                        |
| `expect`                                                                                                                                                                                                 | *string*                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                       | We recommend using the Expect header because it may identify issues with the request based upon the headers alone instead of requiring you to wait until the entire binary package upload has completed. |                                                                                                                                                                                                          |
| `packageUpload`                                                                                                                                                                                          | [components.PackageUpload](../../models/shared/packageupload.md)                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                       | N/A                                                                                                                                                                                                      |                                                                                                                                                                                                          |
| `config`                                                                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                       | Available config options for making requests.                                                                                                                                                            |                                                                                                                                                                                                          |


### Response

**Promise<[operations.PutPackageResponse](../../models/operations/putpackageresponse.md)>**


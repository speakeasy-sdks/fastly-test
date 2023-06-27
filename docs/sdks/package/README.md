# package

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
import { Fastly } from "FastlyTestJS";
import { GetPackageResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.package.getPackage({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: GetPackageResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetPackageRequest](../../models/operations/getpackagerequest.md)   | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `security`                                                                     | [operations.GetPackageSecurity](../../models/operations/getpackagesecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetPackageResponse](../../models/operations/getpackageresponse.md)>**


## putPackage

Upload a Compute@Edge package associated with the specified service version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { PutPackageResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.package.putPackage({
  expect: "hic",
  packageUpload: {
    package: {
      content: "exercitationem".encode(),
      package: "nobis",
    },
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: PutPackageResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.PutPackageRequest](../../models/operations/putpackagerequest.md)   | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `security`                                                                     | [operations.PutPackageSecurity](../../models/operations/putpackagesecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.PutPackageResponse](../../models/operations/putpackageresponse.md)>**

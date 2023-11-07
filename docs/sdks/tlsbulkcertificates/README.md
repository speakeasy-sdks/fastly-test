# TlsBulkCertificates
(*.tlsBulkCertificates*)

## Overview

Available to Platform TLS customers, these endpoints streamline the upload, deployment and management of large numbers of TLS certificates. A certificate is used to terminate TLS traffic for one or more of your fully qualified domain names (domains). Uploading a new certificate automatically enables TLS for all domains listed as Subject Alternative Names (SAN entries) on the certificate.

<https://developer.fastly.com/reference/api/tls/platform>
### Available Operations

* [deleteBulkTlsCert](#deletebulktlscert) - Delete a certificate
* [getTlsBulkCert](#gettlsbulkcert) - Get a certificate
* [listTlsBulkCerts](#listtlsbulkcerts) - List certificates
* [updateBulkTlsCert](#updatebulktlscert) - Update a certificate
* [uploadTlsBulkCert](#uploadtlsbulkcert) - Upload a certificate

## deleteBulkTlsCert

Destroy a certificate. This disables TLS for all domains listed as SAN entries.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteBulkTlsCertRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const certificateId: string = "cRTguUGZzb2W9Euo4moOr";

  const res = await sdk.tlsBulkCertificates.deleteBulkTlsCert(certificateId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `certificateId`                                              | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying a TLS bulk certificate.      | cRTguUGZzb2W9Euo4moOr                                        |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteBulkTlsCertResponse](../../models/operations/deletebulktlscertresponse.md)>**


## getTlsBulkCert

Retrieve a single certificate.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetTlsBulkCertRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const certificateId: string = "cRTguUGZzb2W9Euo4moOr";

  const res = await sdk.tlsBulkCertificates.getTlsBulkCert(certificateId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `certificateId`                                              | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying a TLS bulk certificate.      | cRTguUGZzb2W9Euo4moOr                                        |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetTlsBulkCertResponse](../../models/operations/gettlsbulkcertresponse.md)>**


## listTlsBulkCerts

List all certificates.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { Sort } from "Fastly/dist/sdk/models/components";
import { ListTlsBulkCertsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const filterTlsDomainId: string = "string";
const pageNumber: number = 1;
const pageSize: number = 20;
const sort: Sort = Sort.CreatedAt;

  const res = await sdk.tlsBulkCertificates.listTlsBulkCerts(filterTlsDomainId, pageNumber, pageSize, sort);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `filterTlsDomainId`                                                 | *string*                                                            | :heavy_minus_sign:                                                  | Filter certificates by their matching, fully-qualified domain name. |                                                                     |
| `pageNumber`                                                        | *number*                                                            | :heavy_minus_sign:                                                  | Current page.                                                       | 1                                                                   |
| `pageSize`                                                          | *number*                                                            | :heavy_minus_sign:                                                  | Number of records per page.                                         | 20                                                                  |
| `sort`                                                              | [components.Sort](../../models/shared/sort.md)                      | :heavy_minus_sign:                                                  | The order in which to list the results by creation date.            |                                                                     |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |                                                                     |


### Response

**Promise<[operations.ListTlsBulkCertsResponse](../../models/operations/listtlsbulkcertsresponse.md)>**


## updateBulkTlsCert

Replace a certificate with a newly reissued certificate. By using this endpoint, the original certificate will cease to be used for future TLS handshakes. Thus, only SAN entries that appear in the replacement certificate will become TLS enabled. Any SAN entries that are missing in the replacement certificate will become disabled.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  TlsBulkCertificate,
  TlsBulkCertificateData,
  TlsBulkCertificateDataAttributes,
  TypeTlsBulkCertificate,
} from "Fastly/dist/sdk/models/components";
import { UpdateBulkTlsCertRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const certificateId: string = "cRTguUGZzb2W9Euo4moOr";
const tlsBulkCertificate: TlsBulkCertificate = {
  data: {
    attributes: {},
    relationships: "string",
  },
};

  const res = await sdk.tlsBulkCertificates.updateBulkTlsCert(certificateId, tlsBulkCertificate);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `certificateId`                                                            | *string*                                                                   | :heavy_check_mark:                                                         | Alphanumeric string identifying a TLS bulk certificate.                    | cRTguUGZzb2W9Euo4moOr                                                      |
| `tlsBulkCertificate`                                                       | [components.TlsBulkCertificate](../../models/shared/tlsbulkcertificate.md) | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |                                                                            |


### Response

**Promise<[operations.UpdateBulkTlsCertResponse](../../models/operations/updatebulktlscertresponse.md)>**


## uploadTlsBulkCert

Upload a new certificate. TLS domains are automatically enabled upon certificate creation. If a domain is already enabled on a previously uploaded certificate, that domain will be updated to use the new certificate for all future TLS handshake requests.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { TypeTlsBulkCertificate } from "Fastly/dist/sdk/models/components";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.tlsBulkCertificates.uploadTlsBulkCert({
    attributes: {},
    relationships: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [components.TlsBulkCertificateData](../../models/shared/tlsbulkcertificatedata.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.UploadTlsBulkCertResponse](../../models/operations/uploadtlsbulkcertresponse.md)>**


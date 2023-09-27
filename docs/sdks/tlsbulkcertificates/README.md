# TlsBulkCertificates
(*tlsBulkCertificates*)

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
import { Fastly } from "FastlyTestJS";
import { DeleteBulkTlsCertResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.tlsBulkCertificates.deleteBulkTlsCert({
  certificateId: "cRTguUGZzb2W9Euo4moOr",
}).then((res: DeleteBulkTlsCertResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.DeleteBulkTlsCertRequest](../../models/operations/deletebulktlscertrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.DeleteBulkTlsCertResponse](../../models/operations/deletebulktlscertresponse.md)>**


## getTlsBulkCert

Retrieve a single certificate.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetTlsBulkCertResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.tlsBulkCertificates.getTlsBulkCert({
  certificateId: "cRTguUGZzb2W9Euo4moOr",
}).then((res: GetTlsBulkCertResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetTlsBulkCertRequest](../../models/operations/gettlsbulkcertrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetTlsBulkCertResponse](../../models/operations/gettlsbulkcertresponse.md)>**


## listTlsBulkCerts

List all certificates.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListTlsBulkCertsResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { Sort } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.tlsBulkCertificates.listTlsBulkCerts({
  filterTlsDomainId: "similique",
  pageNumber: 1,
  pageSize: 20,
  sort: Sort.CreatedAt,
}).then((res: ListTlsBulkCertsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.ListTlsBulkCertsRequest](../../models/operations/listtlsbulkcertsrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.ListTlsBulkCertsResponse](../../models/operations/listtlsbulkcertsresponse.md)>**


## updateBulkTlsCert

Replace a certificate with a newly reissued certificate. By using this endpoint, the original certificate will cease to be used for future TLS handshakes. Thus, only SAN entries that appear in the replacement certificate will become TLS enabled. Any SAN entries that are missing in the replacement certificate will become disabled.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateBulkTlsCertResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { TypeTlsBulkCertificate, TypeTlsConfiguration } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.tlsBulkCertificates.updateBulkTlsCert({
  certificateId: "cRTguUGZzb2W9Euo4moOr",
  tlsBulkCertificateInput: {
    data: {
      attributes: {
        allowUntrustedRoot: false,
        certBlob: "aspernatur",
        intermediatesBlob: "voluptas",
      },
      relationships: {
        tlsConfigurations: {
          data: [
            {
              type: TypeTlsConfiguration.TlsConfiguration,
            },
          ],
        },
      },
      type: TypeTlsBulkCertificate.TlsBulkCertificate,
    },
  },
}).then((res: UpdateBulkTlsCertResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.UpdateBulkTlsCertRequest](../../models/operations/updatebulktlscertrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.UpdateBulkTlsCertResponse](../../models/operations/updatebulktlscertresponse.md)>**


## uploadTlsBulkCert

Upload a new certificate. TLS domains are automatically enabled upon certificate creation. If a domain is already enabled on a previously uploaded certificate, that domain will be updated to use the new certificate for all future TLS handshake requests.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UploadTlsBulkCertResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { TypeTlsBulkCertificate, TypeTlsConfiguration } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.tlsBulkCertificates.uploadTlsBulkCert({
  attributes: {
    allowUntrustedRoot: false,
    certBlob: "voluptas",
    intermediatesBlob: "voluptas",
  },
  relationships: {
    tlsConfigurations: {
      data: [
        {
          type: TypeTlsConfiguration.TlsConfiguration,
        },
      ],
    },
  },
  type: TypeTlsBulkCertificate.TlsBulkCertificate,
}).then((res: UploadTlsBulkCertResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [shared.TlsBulkCertificateDataInput](../../models/shared/tlsbulkcertificatedatainput.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UploadTlsBulkCertResponse](../../models/operations/uploadtlsbulkcertresponse.md)>**


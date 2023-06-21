# tlsDomains

## Overview

TLS domains are all the domains (including wildcard domains) included in any [TLS certificate](#tls_certificates)'s Subject Alternative Names (SAN) list. Included in the response is information about which certificates reference this domain as well as the [TLS activation](#tls_activations) indicating which certificate is enabled to serve TLS traffic for the domain.

<https://developer.fastly.com/reference/api/tls/custom-certs/domains>
### Available Operations

* [listTlsDomains](#listtlsdomains) - List TLS domains

## listTlsDomains

List all TLS domains.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListTlsDomainsResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { Sort, TypeTlsDomain } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.tlsDomains.listTlsDomains({
  filterInUse: "dicta",
  filterTlsCertificatesId: "minima",
  filterTlsSubscriptionsId: "beatae",
  include: "cupiditate",
  pageNumber: 1,
  pageSize: 20,
  sort: Sort.MinusCreatedAt,
}, {
  token: "",
}).then((res: ListTlsDomainsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.ListTlsDomainsRequest](../../models/operations/listtlsdomainsrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.ListTlsDomainsSecurity](../../models/operations/listtlsdomainssecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.ListTlsDomainsResponse](../../models/operations/listtlsdomainsresponse.md)>**


# domainOwnerships

## Overview

A domain ownership is the record that Fastly keeps after a customer has validated control over a domain.

<https://developer.fastly.com/reference/api/services/domain-ownerships>
### Available Operations

* [listDomainOwnerships](#listdomainownerships) - List domain-ownerships

## listDomainOwnerships

List all domain-ownerships.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListDomainOwnershipsResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.domainOwnerships.listDomainOwnerships({
  token: "",
}).then((res: ListDomainOwnershipsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `security`                                                                                         | [operations.ListDomainOwnershipsSecurity](../../models/operations/listdomainownershipssecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.ListDomainOwnershipsResponse](../../models/operations/listdomainownershipsresponse.md)>**


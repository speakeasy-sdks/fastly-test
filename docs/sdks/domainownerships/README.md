# DomainOwnerships
(*domainOwnerships*)

## Overview

A domain ownership is the record that Fastly keeps after a customer has validated control over a domain.

<https://developer.fastly.com/reference/api/services/domain-ownerships>
### Available Operations

* [listDomainOwnerships](#listdomainownerships) - List domain-ownerships

## listDomainOwnerships

List all domain-ownerships.

### Example Usage

```typescript
import { Fastly } from "Fastly";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.domainOwnerships.listDomainOwnerships();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListDomainOwnershipsResponse](../../sdk/models/operations/listdomainownershipsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

# TlsSubscriptions

## Overview

The TLS subscriptions API allows you to programmatically generate TLS certificates that are procured and renewed by Fastly. Once a subscription is created for a given hostname or wildcard domain, DNS records are checked to ensure that the domain on the subscription is owned by the subscription creator. Provided DNS records are maintained, TLS certificates will automatically renew. If Fastly is unable to issue a certificate, we will retry to issue the certificate for 7 days past subscription creation or the latest certificate's not_after date, whichever is later. If after 7 days Fastly is unable to issue a certificate, the subscription state will change to `failed` and Fastly will stop retrying.

<https://developer.fastly.com/reference/api/tls/subs>
### Available Operations

* [createGlobalsignEmailChallenge](#createglobalsignemailchallenge) - Creates a GlobalSign email challenge.
* [createTlsSub](#createtlssub) - Create a TLS subscription
* [deleteGlobalsignEmailChallenge](#deleteglobalsignemailchallenge) - Delete a GlobalSign email challenge
* [deleteTlsSub](#deletetlssub) - Delete a TLS subscription
* [getTlsSub](#gettlssub) - Get a TLS subscription
* [listTlsSubs](#listtlssubs) - List TLS subscriptions
* [patchTlsSub](#patchtlssub) - Update a TLS subscription

## createGlobalsignEmailChallenge

Creates an email challenge for a domain on a GlobalSign subscription. An email challenge will generate an email that can be used to validate domain ownership. If this challenge is created, then the domain can only be validated using email for the given subscription.


### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateGlobalsignEmailChallengeResponse, CreateGlobalsignEmailChallengeSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: CreateGlobalsignEmailChallengeSecurity = {
  token: "",
};

sdk.tlsSubscriptions.createGlobalsignEmailChallenge({
  requestBody: {
    "in": "commodi",
  },
  tlsAuthorizationId: "aU3guUGZzb2W9Euo4Mo0r",
  tlsSubscriptionId: "sU3guUGZzb2W9Euo4Mo0r",
}, operationSecurity).then((res: CreateGlobalsignEmailChallengeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.CreateGlobalsignEmailChallengeRequest](../../models/operations/createglobalsignemailchallengerequest.md)   | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `security`                                                                                                             | [operations.CreateGlobalsignEmailChallengeSecurity](../../models/operations/createglobalsignemailchallengesecurity.md) | :heavy_check_mark:                                                                                                     | The security requirements to use for the request.                                                                      |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.CreateGlobalsignEmailChallengeResponse](../../models/operations/createglobalsignemailchallengeresponse.md)>**


## createTlsSub

Create a new TLS subscription. This response includes a list of possible challenges to verify domain ownership.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateTlsSubResponse, CreateTlsSubSecurity } from "FastlyTestJS/dist/sdk/models/operations";
import {
  TlsSubscriptionDataAttributesCertificateAuthority,
  TypeTlsCertificate,
  TypeTlsConfiguration,
  TypeTlsDomain,
  TypeTlsSubscription,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();
const operationSecurity: CreateTlsSubSecurity = {
  token: "",
};

sdk.tlsSubscriptions.createTlsSub({
  force: true,
  tlsSubscriptionInput: {
    data: {
      attributes: {
        certificateAuthority: TlsSubscriptionDataAttributesCertificateAuthority.Globalsign,
      },
      relationships: {
        tlsConfiguration: {
          data: {
            type: TypeTlsConfiguration.TlsConfiguration,
          },
        },
      },
      type: TypeTlsSubscription.TlsSubscription,
    },
  },
}, operationSecurity).then((res: CreateTlsSubResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.CreateTlsSubRequest](../../models/operations/createtlssubrequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.CreateTlsSubSecurity](../../models/operations/createtlssubsecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.CreateTlsSubResponse](../../models/operations/createtlssubresponse.md)>**


## deleteGlobalsignEmailChallenge

Deletes a GlobalSign email challenge. After a GlobalSign email challenge is deleted, the domain can use HTTP and DNS validation methods again.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteGlobalsignEmailChallengeResponse, DeleteGlobalsignEmailChallengeSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: DeleteGlobalsignEmailChallengeSecurity = {
  token: "",
};

sdk.tlsSubscriptions.deleteGlobalsignEmailChallenge({
  globalsignEmailChallengeId: "voluptas",
  tlsAuthorizationId: "unde",
  tlsSubscriptionId: "architecto",
}, operationSecurity).then((res: DeleteGlobalsignEmailChallengeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.DeleteGlobalsignEmailChallengeRequest](../../models/operations/deleteglobalsignemailchallengerequest.md)   | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `security`                                                                                                             | [operations.DeleteGlobalsignEmailChallengeSecurity](../../models/operations/deleteglobalsignemailchallengesecurity.md) | :heavy_check_mark:                                                                                                     | The security requirements to use for the request.                                                                      |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.DeleteGlobalsignEmailChallengeResponse](../../models/operations/deleteglobalsignemailchallengeresponse.md)>**


## deleteTlsSub

Destroy a TLS subscription. A subscription cannot be destroyed if there are domains in the TLS enabled state.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteTlsSubResponse, DeleteTlsSubSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: DeleteTlsSubSecurity = {
  token: "",
};

sdk.tlsSubscriptions.deleteTlsSub({
  tlsSubscriptionId: "sU3guUGZzb2W9Euo4Mo0r",
}, operationSecurity).then((res: DeleteTlsSubResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.DeleteTlsSubRequest](../../models/operations/deletetlssubrequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.DeleteTlsSubSecurity](../../models/operations/deletetlssubsecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.DeleteTlsSubResponse](../../models/operations/deletetlssubresponse.md)>**


## getTlsSub

Show a TLS subscription.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetTlsSubResponse, GetTlsSubSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: GetTlsSubSecurity = {
  token: "",
};

sdk.tlsSubscriptions.getTlsSub({
  include: "tls_authorizations",
  tlsSubscriptionId: "sU3guUGZzb2W9Euo4Mo0r",
}, operationSecurity).then((res: GetTlsSubResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetTlsSubRequest](../../models/operations/gettlssubrequest.md)   | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `security`                                                                   | [operations.GetTlsSubSecurity](../../models/operations/gettlssubsecurity.md) | :heavy_check_mark:                                                           | The security requirements to use for the request.                            |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetTlsSubResponse](../../models/operations/gettlssubresponse.md)>**


## listTlsSubs

List all TLS subscriptions.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListTlsSubsResponse, ListTlsSubsSecurity } from "FastlyTestJS/dist/sdk/models/operations";
import { Sort } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();
const operationSecurity: ListTlsSubsSecurity = {
  token: "",
};

sdk.tlsSubscriptions.listTlsSubs({
  filterHasActiveOrder: false,
  filterState: "suscipit",
  filterTlsDomainsId: "sapiente",
  include: "tls_authorizations",
  pageNumber: 1,
  pageSize: 20,
  sort: Sort.MinusCreatedAt,
}, operationSecurity).then((res: ListTlsSubsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.ListTlsSubsRequest](../../models/operations/listtlssubsrequest.md)   | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `security`                                                                       | [operations.ListTlsSubsSecurity](../../models/operations/listtlssubssecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ListTlsSubsResponse](../../models/operations/listtlssubsresponse.md)>**


## patchTlsSub

Change the TLS domains or common name associated with this subscription, update the TLS configuration for this set of domains, or retry a subscription with state `failed` by setting the state to `retry`.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { PatchTlsSubResponse, PatchTlsSubSecurity } from "FastlyTestJS/dist/sdk/models/operations";
import {
  TlsSubscriptionDataAttributesCertificateAuthority,
  TypeTlsCertificate,
  TypeTlsConfiguration,
  TypeTlsDomain,
  TypeTlsSubscription,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();
const operationSecurity: PatchTlsSubSecurity = {
  token: "",
};

sdk.tlsSubscriptions.patchTlsSub({
  force: true,
  tlsSubscriptionInput: {
    data: {
      attributes: {
        certificateAuthority: TlsSubscriptionDataAttributesCertificateAuthority.LetsEncrypt,
      },
      relationships: {
        tlsCertificates: {
          data: [
            {
              type: TypeTlsCertificate.TlsCertificate,
            },
          ],
        },
      },
      type: TypeTlsSubscription.TlsSubscription,
    },
  },
  tlsSubscriptionId: "sU3guUGZzb2W9Euo4Mo0r",
}, operationSecurity).then((res: PatchTlsSubResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.PatchTlsSubRequest](../../models/operations/patchtlssubrequest.md)   | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `security`                                                                       | [operations.PatchTlsSubSecurity](../../models/operations/patchtlssubsecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.PatchTlsSubResponse](../../models/operations/patchtlssubresponse.md)>**


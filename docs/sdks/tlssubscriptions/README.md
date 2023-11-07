# TlsSubscriptions
(*.tlsSubscriptions*)

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
import { Fastly } from "Fastly";
import { CreateGlobalsignEmailChallengeRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const tlsAuthorizationId: string = "aU3guUGZzb2W9Euo4Mo0r";
const tlsSubscriptionId: string = "sU3guUGZzb2W9Euo4Mo0r";
const requestBody: Record<string, any> = {
  "key": "string",
};

  const res = await sdk.tlsSubscriptions.createGlobalsignEmailChallenge(tlsAuthorizationId, tlsSubscriptionId, requestBody);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `tlsAuthorizationId`                                         | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying a TLS subscription.          | aU3guUGZzb2W9Euo4Mo0r                                        |
| `tlsSubscriptionId`                                          | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying a TLS subscription.          | sU3guUGZzb2W9Euo4Mo0r                                        |
| `requestBody`                                                | Record<string, *any*>                                        | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.CreateGlobalsignEmailChallengeResponse](../../models/operations/createglobalsignemailchallengeresponse.md)>**


## createTlsSub

Create a new TLS subscription. This response includes a list of possible challenges to verify domain ownership.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  CertificateAuthority,
  TlsSubscription,
  TlsSubscriptionData,
  TlsSubscriptionDataAttributes,
  TypeTlsSubscription,
} from "Fastly/dist/sdk/models/components";
import { CreateTlsSubRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const force: boolean = true;
const tlsSubscription: TlsSubscription = {
  data: {
    attributes: {},
    relationships: "string",
  },
};

  const res = await sdk.tlsSubscriptions.createTlsSub(force, tlsSubscription);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                             | Type                                                                                                                                                                                                                                                                                  | Required                                                                                                                                                                                                                                                                              | Description                                                                                                                                                                                                                                                                           | Example                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `force`                                                                                                                                                                                                                                                                               | *boolean*                                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                    | A flag that allows you to edit and delete a subscription with active domains. Valid to use on PATCH and DELETE actions. As a warning, removing an active domain from a subscription or forcing the deletion of a subscription may result in breaking TLS termination to that domain.<br/> | true                                                                                                                                                                                                                                                                                  |
| `tlsSubscription`                                                                                                                                                                                                                                                                     | [components.TlsSubscription](../../models/shared/tlssubscription.md)                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                                    | N/A                                                                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                       |
| `config`                                                                                                                                                                                                                                                                              | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                                    | Available config options for making requests.                                                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                       |


### Response

**Promise<[operations.CreateTlsSubResponse](../../models/operations/createtlssubresponse.md)>**


## deleteGlobalsignEmailChallenge

Deletes a GlobalSign email challenge. After a GlobalSign email challenge is deleted, the domain can use HTTP and DNS validation methods again.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteGlobalsignEmailChallengeRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const globalsignEmailChallengeId: string = "string";
const tlsAuthorizationId: string = "string";
const tlsSubscriptionId: string = "string";

  const res = await sdk.tlsSubscriptions.deleteGlobalsignEmailChallenge(globalsignEmailChallengeId, tlsAuthorizationId, tlsSubscriptionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `globalsignEmailChallengeId`                                 | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `tlsAuthorizationId`                                         | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `tlsSubscriptionId`                                          | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteGlobalsignEmailChallengeResponse](../../models/operations/deleteglobalsignemailchallengeresponse.md)>**


## deleteTlsSub

Destroy a TLS subscription. A subscription cannot be destroyed if there are domains in the TLS enabled state.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteTlsSubRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const tlsSubscriptionId: string = "sU3guUGZzb2W9Euo4Mo0r";

  const res = await sdk.tlsSubscriptions.deleteTlsSub(tlsSubscriptionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `tlsSubscriptionId`                                          | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying a TLS subscription.          | sU3guUGZzb2W9Euo4Mo0r                                        |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteTlsSubResponse](../../models/operations/deletetlssubresponse.md)>**


## getTlsSub

Show a TLS subscription.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetTlsSubRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const tlsSubscriptionId: string = "sU3guUGZzb2W9Euo4Mo0r";
const include: string = "tls_authorizations";

  const res = await sdk.tlsSubscriptions.getTlsSub(tlsSubscriptionId, include);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                               | Type                                                                                                                                                    | Required                                                                                                                                                | Description                                                                                                                                             | Example                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tlsSubscriptionId`                                                                                                                                     | *string*                                                                                                                                                | :heavy_check_mark:                                                                                                                                      | Alphanumeric string identifying a TLS subscription.                                                                                                     | sU3guUGZzb2W9Euo4Mo0r                                                                                                                                   |
| `include`                                                                                                                                               | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Include related objects. Optional, comma-separated values. Permitted values: `tls_authorizations` and `tls_authorizations.globalsign_email_challenge`.<br/> | tls_authorizations                                                                                                                                      |
| `config`                                                                                                                                                | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                            | :heavy_minus_sign:                                                                                                                                      | Available config options for making requests.                                                                                                           |                                                                                                                                                         |


### Response

**Promise<[operations.GetTlsSubResponse](../../models/operations/gettlssubresponse.md)>**


## listTlsSubs

List all TLS subscriptions.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { Sort } from "Fastly/dist/sdk/models/components";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.tlsSubscriptions.listTlsSubs({
    include: "tls_authorizations",
    pageNumber: 1,
    pageSize: 20,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.ListTlsSubsRequest](../../models/operations/listtlssubsrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.ListTlsSubsResponse](../../models/operations/listtlssubsresponse.md)>**


## patchTlsSub

Change the TLS domains or common name associated with this subscription, update the TLS configuration for this set of domains, or retry a subscription with state `failed` by setting the state to `retry`.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  CertificateAuthority,
  TlsSubscription,
  TlsSubscriptionData,
  TlsSubscriptionDataAttributes,
  TypeTlsSubscription,
} from "Fastly/dist/sdk/models/components";
import { PatchTlsSubRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const tlsSubscriptionId: string = "sU3guUGZzb2W9Euo4Mo0r";
const force: boolean = true;
const tlsSubscription: TlsSubscription = {
  data: {
    attributes: {},
    relationships: "string",
  },
};

  const res = await sdk.tlsSubscriptions.patchTlsSub(tlsSubscriptionId, force, tlsSubscription);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                             | Type                                                                                                                                                                                                                                                                                  | Required                                                                                                                                                                                                                                                                              | Description                                                                                                                                                                                                                                                                           | Example                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tlsSubscriptionId`                                                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                                                    | Alphanumeric string identifying a TLS subscription.                                                                                                                                                                                                                                   | sU3guUGZzb2W9Euo4Mo0r                                                                                                                                                                                                                                                                 |
| `force`                                                                                                                                                                                                                                                                               | *boolean*                                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                    | A flag that allows you to edit and delete a subscription with active domains. Valid to use on PATCH and DELETE actions. As a warning, removing an active domain from a subscription or forcing the deletion of a subscription may result in breaking TLS termination to that domain.<br/> | true                                                                                                                                                                                                                                                                                  |
| `tlsSubscription`                                                                                                                                                                                                                                                                     | [components.TlsSubscription](../../models/shared/tlssubscription.md)                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                                    | N/A                                                                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                       |
| `config`                                                                                                                                                                                                                                                                              | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                                    | Available config options for making requests.                                                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                       |


### Response

**Promise<[operations.PatchTlsSubResponse](../../models/operations/patchtlssubresponse.md)>**


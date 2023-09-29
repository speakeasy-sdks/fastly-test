# Director
(*director*)

## Overview

A Director is responsible for balancing requests among a group of Backends. In addition to simply balancing, Directors can be configured to attempt retrying failed requests. Additionally, Directors have a quorum setting which can be used to determine when the Director as a whole is considered "up", in order to prevent "server whack-a-mole" following an outage as servers come back up. Only directors created via the API can be modified via the API. Directors known as "autodirectors" that are created automatically when load balancing groups of servers together cannot be modified or retrieved via the API.

<https://developer.fastly.com/reference/api/load-balancing/directors/director>
### Available Operations

* [createDirector](#createdirector) - Create a director
* [deleteDirector](#deletedirector) - Delete a director
* [getDirector](#getdirector) - Get a director
* [listDirectors](#listdirectors) - List directors

## createDirector

Create a director for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateDirectorResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { DirectorType } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.director.createDirector({
  director: {
    backends: [
      {
        address: "717 Shyann Court",
        autoLoadbalance: false,
        betweenBytesTimeout: 738047,
        clientCert: "Trinidad Walter",
        comment: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        connectTimeout: 170452,
        firstByteTimeout: 352442,
        healthcheck: "Ford alien",
        hostname: "fuzzy-agency.com",
        ipv4: "114.120.196.94",
        ipv6: "32b3:6d69:96eb:3917:b6f8:6c39:5e53:79ef",
        keepaliveTime: 252718,
        maxConn: 42903,
        maxTlsVersion: "Gorgeous",
        minTlsVersion: "Concrete Wagon Cambridgeshire",
        name: "test-backend",
        overrideHost: "Research vortals Applications",
        port: 173140,
        requestCondition: "Books Hop",
        shield: "for Elta",
        sslCaCert: "Gadolinium Inverse executor",
        sslCertHostname: "ivory since benchmark",
        sslCheckCert: false,
        sslCiphers: "person Louisiana",
        sslClientCert: "Macao Rubber architect",
        sslClientKey: "Branding subdued Generic",
        sslHostname: "if",
        sslSniHostname: "Checking East Fresh",
        useSsl: false,
        weight: 299197,
      },
    ],
    capacity: 835514,
    comment: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    name: "test-director",
    quorum: 124644,
    retries: 725220,
    shield: "Human trim Bicycle",
    type: DirectorType.One,
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: CreateDirectorResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.CreateDirectorRequest](../../models/operations/createdirectorrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CreateDirectorResponse](../../models/operations/createdirectorresponse.md)>**


## deleteDirector

Delete the director for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteDirectorResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.director.deleteDirector({
  directorName: "test-director",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: DeleteDirectorResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.DeleteDirectorRequest](../../models/operations/deletedirectorrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.DeleteDirectorResponse](../../models/operations/deletedirectorresponse.md)>**


## getDirector

Get the director for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetDirectorResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.director.getDirector({
  directorName: "test-director",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: GetDirectorResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetDirectorRequest](../../models/operations/getdirectorrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetDirectorResponse](../../models/operations/getdirectorresponse.md)>**


## listDirectors

List the directors for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListDirectorsResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.director.listDirectors({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: ListDirectorsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.ListDirectorsRequest](../../models/operations/listdirectorsrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.ListDirectorsResponse](../../models/operations/listdirectorsresponse.md)>**


# director

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
import { DirectorResponseType, DirectorType } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.director.createDirector({
  director: {
    backends: [
      {
        address: "77294 Nigel Neck",
        autoLoadbalance: false,
        betweenBytesTimeout: 396098,
        clientCert: "provident",
        comment: "necessitatibus",
        connectTimeout: 572252,
        firstByteTimeout: 638921,
        healthcheck: "dolor",
        hostname: "unimportant-venture.net",
        ipv4: "114.114.216.250",
        ipv6: "b14c:d66a:e395:efb9:ba88:f3a6:6997:074b",
        keepaliveTime: 660174,
        maxConn: 287991,
        maxTlsVersion: "labore",
        minTlsVersion: "suscipit",
        name: "test-backend",
        overrideHost: "natus",
        port: 749170,
        requestCondition: "eum",
        shield: "vero",
        sslCaCert: "aspernatur",
        sslCertHostname: "architecto",
        sslCheckCert: false,
        sslCiphers: "magnam",
        sslClientCert: "et",
        sslClientKey: "excepturi",
        sslHostname: "ullam",
        sslSniHostname: "provident",
        useSsl: false,
        weight: 551816,
      },
      {
        address: "0696 Holden Extensions",
        autoLoadbalance: false,
        betweenBytesTimeout: 896547,
        clientCert: "odit",
        comment: "nemo",
        connectTimeout: 97260,
        firstByteTimeout: 435865,
        healthcheck: "doloribus",
        hostname: "unique-diesel.net",
        ipv4: "137.180.114.25",
        ipv6: "1e5b:7fd2:ed02:8921:cddc:6926:01fb:576b",
        keepaliveTime: 50588,
        maxConn: 866383,
        maxTlsVersion: "nemo",
        minTlsVersion: "voluptatibus",
        name: "test-backend",
        overrideHost: "perferendis",
        port: 855804,
        requestCondition: "amet",
        shield: "aut",
        sslCaCert: "cumque",
        sslCertHostname: "corporis",
        sslCheckCert: false,
        sslCiphers: "hic",
        sslClientCert: "libero",
        sslClientKey: "nobis",
        sslHostname: "dolores",
        sslSniHostname: "quis",
        useSsl: false,
        weight: 521037,
      },
      {
        address: "0311 Cecilia Skyway",
        autoLoadbalance: false,
        betweenBytesTimeout: 463451,
        clientCert: "dolor",
        comment: "vero",
        connectTimeout: 345352,
        firstByteTimeout: 944120,
        healthcheck: "recusandae",
        hostname: "pale-psychoanalyst.name",
        ipv4: "8.200.42.128",
        ipv6: "909b:3fe4:9a8d:9cbf:4863:3323:f9b7:7f3a",
        keepaliveTime: 254356,
        maxConn: 85295,
        maxTlsVersion: "ipsa",
        minTlsVersion: "ipsa",
        name: "test-backend",
        overrideHost: "iure",
        port: 487838,
        requestCondition: "quaerat",
        shield: "accusamus",
        sslCaCert: "quidem",
        sslCertHostname: "voluptatibus",
        sslCheckCert: false,
        sslCiphers: "voluptas",
        sslClientCert: "natus",
        sslClientKey: "eos",
        sslHostname: "atque",
        sslSniHostname: "sit",
        useSsl: false,
        weight: 854614,
      },
    ],
    capacity: 67249,
    comment: "soluta",
    name: "test-director",
    quorum: 679393,
    retries: 478596,
    shield: "voluptate",
    type: DirectorType.Four,
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: CreateDirectorResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.CreateDirectorRequest](../../models/operations/createdirectorrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.CreateDirectorSecurity](../../models/operations/createdirectorsecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CreateDirectorResponse](../../models/operations/createdirectorresponse.md)>**


## deleteDirector

Delete the director for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteDirectorResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.director.deleteDirector({
  directorName: "test-director",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: DeleteDirectorResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.DeleteDirectorRequest](../../models/operations/deletedirectorrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.DeleteDirectorSecurity](../../models/operations/deletedirectorsecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.DeleteDirectorResponse](../../models/operations/deletedirectorresponse.md)>**


## getDirector

Get the director for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetDirectorResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { DirectorResponseType } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.director.getDirector({
  directorName: "test-director",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: GetDirectorResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetDirectorRequest](../../models/operations/getdirectorrequest.md)   | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `security`                                                                       | [operations.GetDirectorSecurity](../../models/operations/getdirectorsecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetDirectorResponse](../../models/operations/getdirectorresponse.md)>**


## listDirectors

List the directors for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListDirectorsResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { DirectorResponseType } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.director.listDirectors({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: ListDirectorsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.ListDirectorsRequest](../../models/operations/listdirectorsrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.ListDirectorsSecurity](../../models/operations/listdirectorssecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ListDirectorsResponse](../../models/operations/listdirectorsresponse.md)>**


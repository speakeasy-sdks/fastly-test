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
        address: "822 Grant Oval",
        autoLoadbalance: false,
        betweenBytesTimeout: 552822,
        clientCert: "perferendis",
        comment: "magni",
        connectTimeout: 828940,
        firstByteTimeout: 369808,
        healthcheck: "alias",
        hostname: "costly-poncho.name",
        ipv4: "69.180.188.73",
        ipv6: "f63c:969e:9a3e:fa77:dfb1:4cd6:6ae3:95ef",
        keepaliveTime: 692532,
        maxConn: 588465,
        maxTlsVersion: "nam",
        minTlsVersion: "id",
        name: "test-backend",
        overrideHost: "blanditiis",
        port: 533206,
        requestCondition: "sapiente",
        shield: "amet",
        sslCaCert: "deserunt",
        sslCertHostname: "nisi",
        sslCheckCert: false,
        sslCiphers: "vel",
        sslClientCert: "natus",
        sslClientKey: "omnis",
        sslHostname: "molestiae",
        sslSniHostname: "perferendis",
        useSsl: false,
        weight: 470132,
      },
    ],
    capacity: 301575,
    comment: "distinctio",
    name: "test-director",
    quorum: 660174,
    retries: 287991,
    shield: "labore",
    type: DirectorType.Three,
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


# Realtime
(*realtime*)

## Overview

The real-time analytics API offers a standardized set of data about traffic received by a specified service in one-second time periods up to the last complete second.

<https://developer.fastly.com/reference/api/metrics-stats/realtime>
### Available Operations

* [getStatsLast120Seconds](#getstatslast120seconds) - Get real-time data for the last 120 seconds
* [getStatsLast120SecondsLimitEntries](#getstatslast120secondslimitentries) - Get a limited number of real-time data entries
* [getStatsLastSecond](#getstatslastsecond) - Get real-time data from specified time

## getStatsLast120Seconds

Get data for the 120 seconds preceding the latest timestamp available for a service.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    security: {
      token: "",
    },
  });

  const res = await sdk.realtime.getStatsLast120Seconds({
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetStatsLast120SecondsRequest](../../models/operations/getstatslast120secondsrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetStatsLast120SecondsResponse](../../models/operations/getstatslast120secondsresponse.md)>**


## getStatsLast120SecondsLimitEntries

Get data for the 120 seconds preceding the latest timestamp available for a service, up to a maximum of `max_entries` entries.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    security: {
      token: "",
    },
  });

  const res = await sdk.realtime.getStatsLast120SecondsLimitEntries({
    maxEntries: 1,
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.GetStatsLast120SecondsLimitEntriesRequest](../../models/operations/getstatslast120secondslimitentriesrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.GetStatsLast120SecondsLimitEntriesResponse](../../models/operations/getstatslast120secondslimitentriesresponse.md)>**


## getStatsLastSecond

Get real-time data for the specified reporting period. Specify `0` to get a single entry for the last complete second. The `Timestamp` field included in the response provides the time index of the latest entry in the dataset and can be provided as the `start_timestamp` of the next request for a seamless continuation of the dataset from one request to the next.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    security: {
      token: "",
    },
  });

  const res = await sdk.realtime.getStatsLastSecond({
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
    timestampInSeconds: 1608560817,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetStatsLastSecondRequest](../../models/operations/getstatslastsecondrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetStatsLastSecondResponse](../../models/operations/getstatslastsecondresponse.md)>**


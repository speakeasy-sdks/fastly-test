# Historical
(*.historical*)

## Overview

The Historical Stats API allows you to programmatically retrieve historical caching statistics derived from your Fastly services. You can use these metrics to help you optimize your site’s data caching and analyze your site’s traffic.

<https://developer.fastly.com/reference/api/metrics-stats/historical-stats>
### Available Operations

* [getHistStats](#gethiststats) - Get historical stats
* [getHistStatsAggregated](#gethiststatsaggregated) - Get aggregated historical stats
* [getHistStatsField](#gethiststatsfield) - Get historical stats for a single field
* [getHistStatsService](#gethiststatsservice) - Get historical stats for a single service
* [getHistStatsServiceField](#gethiststatsservicefield) - Get historical stats for a single service/field combination
* [getRegions](#getregions) - Get region codes
* [getUsage](#getusage) - Get usage statistics
* [getUsageMonth](#getusagemonth) - Get month-to-date usage statistics
* [getUsageService](#getusageservice) - Get usage statistics per service

## getHistStats

Fetches historical stats for each of your Fastly services and groups the results by service ID.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { By, Region } from "Fastly/dist/sdk/models/components";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.historical.getHistStats({
    by: By.Day,
    region: Region.Usa,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetHistStatsRequest](../../models/operations/gethiststatsrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetHistStatsResponse](../../models/operations/gethiststatsresponse.md)>**


## getHistStatsAggregated

Fetches historical stats information aggregated across all of your Fastly services.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { By, Region } from "Fastly/dist/sdk/models/components";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.historical.getHistStatsAggregated({
    by: By.Day,
    region: Region.Usa,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetHistStatsAggregatedRequest](../../models/operations/gethiststatsaggregatedrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetHistStatsAggregatedResponse](../../models/operations/gethiststatsaggregatedresponse.md)>**


## getHistStatsField

Fetches the specified field from the historical stats for each of your services and groups the results by service ID.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { By, Region } from "Fastly/dist/sdk/models/components";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.historical.getHistStatsField({
    by: By.Day,
    field: "hit_ratio",
    region: Region.Usa,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetHistStatsFieldRequest](../../models/operations/gethiststatsfieldrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetHistStatsFieldResponse](../../models/operations/gethiststatsfieldresponse.md)>**


## getHistStatsService

Fetches historical stats for a given service.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { By, Region } from "Fastly/dist/sdk/models/components";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.historical.getHistStatsService({
    by: By.Day,
    region: Region.Usa,
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetHistStatsServiceRequest](../../models/operations/gethiststatsservicerequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetHistStatsServiceResponse](../../models/operations/gethiststatsserviceresponse.md)>**


## getHistStatsServiceField

Fetches the specified field from the historical stats for a given service.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { By, Region } from "Fastly/dist/sdk/models/components";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.historical.getHistStatsServiceField({
    by: By.Day,
    field: "hit_ratio",
    region: Region.Usa,
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetHistStatsServiceFieldRequest](../../models/operations/gethiststatsservicefieldrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetHistStatsServiceFieldResponse](../../models/operations/gethiststatsservicefieldresponse.md)>**


## getRegions

Fetches the list of codes for regions that are covered by the Fastly CDN service.

### Example Usage

```typescript
import { Fastly } from "Fastly";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.historical.getRegions();


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

**Promise<[operations.GetRegionsResponse](../../models/operations/getregionsresponse.md)>**


## getUsage

Returns usage information aggregated across all Fastly services and grouped by region. To aggregate across all Fastly services by time period, see [`/stats/aggregate`](#get-hist-stats-aggregated).

### Example Usage

```typescript
import { Fastly } from "Fastly";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.historical.getUsage({});


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [operations.GetUsageRequest](../../models/operations/getusagerequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.GetUsageResponse](../../models/operations/getusageresponse.md)>**


## getUsageMonth

Returns month-to-date usage details for a given month and year. Usage details are aggregated by service and across all Fastly services, and then grouped by region. This endpoint does not use the `from` or `to` fields for selecting the date for which data is requested. Instead, it uses `month` and `year` integer fields. Both fields are optional and default to the current month and year respectively. When set, an optional `billable_units` field will convert bandwidth to GB and divide requests by 10,000.

### Example Usage

```typescript
import { Fastly } from "Fastly";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.historical.getUsageMonth({
    billableUnits: true,
    month: "05",
    year: "2020",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetUsageMonthRequest](../../models/operations/getusagemonthrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetUsageMonthResponse](../../models/operations/getusagemonthresponse.md)>**


## getUsageService

Returns usage information aggregated by service and grouped by service and region. For service stats by time period, see [`/stats`](#get-hist-stats) and [`/stats/field/:field`](#get-hist-stats-field).

### Example Usage

```typescript
import { Fastly } from "Fastly";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.historical.getUsageService({});


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetUsageServiceRequest](../../models/operations/getusageservicerequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetUsageServiceResponse](../../models/operations/getusageserviceresponse.md)>**


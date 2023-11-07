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
import { GetHistStatsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const by: By = By.Day;
const from: string = "string";
const region: Region = Region.Usa;
const to: string = "string";

  const res = await sdk.historical.getHistStats(by, from, region, to);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                                                                                                  | Example                                                                                                                                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `by`                                                                                                                                                                                                                                                                                                                         | [components.By](../../models/shared/by.md)                                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                           | Duration of sample windows. One of:<br/>  * `hour` - Group data by hour.<br/>  * `minute` - Group data by minute.<br/>  * `day` - Group data by day.<br/>                                                                                                                                                                    | day                                                                                                                                                                                                                                                                                                                          |
| `from`                                                                                                                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                           | Timestamp that defines the start of the window for which to fetch statistics, including the timestamp itself. Accepts Unix timestamps, or any form of input parsable by the [Chronic Ruby library](https://github.com/mojombo/chronic), such as 'yesterday', or 'two weeks ago'. Default varies based on the value of `by`.<br/> |                                                                                                                                                                                                                                                                                                                              |
| `region`                                                                                                                                                                                                                                                                                                                     | [components.Region](../../models/shared/region.md)                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                           | Limit query to a specific geographic region. One of:<br/>  * `usa` - North America.<br/>  * `europe` - Europe.<br/>  * `anzac` - Australia and New Zealand.<br/>  * `asia` - Asia.<br/>  * `asia_india` - India.<br/>  * `asia_southkorea` - South Korea.<br/>  * `africa_std` - Africa.<br/>  * `southamerica_std` - South America.<br/> | usa                                                                                                                                                                                                                                                                                                                          |
| `to`                                                                                                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                           | Timestamp that defines the end of the window for which to fetch statistics. Accepts the same formats as `from`.<br/>                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                                                              |
| `config`                                                                                                                                                                                                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                           | Available config options for making requests.                                                                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                              |


### Response

**Promise<[operations.GetHistStatsResponse](../../models/operations/gethiststatsresponse.md)>**


## getHistStatsAggregated

Fetches historical stats information aggregated across all of your Fastly services.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { By, Region } from "Fastly/dist/sdk/models/components";
import { GetHistStatsAggregatedRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const by: By = By.Day;
const from: string = "string";
const region: Region = Region.Usa;
const to: string = "string";

  const res = await sdk.historical.getHistStatsAggregated(by, from, region, to);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                                                                                                  | Example                                                                                                                                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `by`                                                                                                                                                                                                                                                                                                                         | [components.By](../../models/shared/by.md)                                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                           | Duration of sample windows. One of:<br/>  * `hour` - Group data by hour.<br/>  * `minute` - Group data by minute.<br/>  * `day` - Group data by day.<br/>                                                                                                                                                                    | day                                                                                                                                                                                                                                                                                                                          |
| `from`                                                                                                                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                           | Timestamp that defines the start of the window for which to fetch statistics, including the timestamp itself. Accepts Unix timestamps, or any form of input parsable by the [Chronic Ruby library](https://github.com/mojombo/chronic), such as 'yesterday', or 'two weeks ago'. Default varies based on the value of `by`.<br/> |                                                                                                                                                                                                                                                                                                                              |
| `region`                                                                                                                                                                                                                                                                                                                     | [components.Region](../../models/shared/region.md)                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                           | Limit query to a specific geographic region. One of:<br/>  * `usa` - North America.<br/>  * `europe` - Europe.<br/>  * `anzac` - Australia and New Zealand.<br/>  * `asia` - Asia.<br/>  * `asia_india` - India.<br/>  * `asia_southkorea` - South Korea.<br/>  * `africa_std` - Africa.<br/>  * `southamerica_std` - South America.<br/> | usa                                                                                                                                                                                                                                                                                                                          |
| `to`                                                                                                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                           | Timestamp that defines the end of the window for which to fetch statistics. Accepts the same formats as `from`.<br/>                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                                                              |
| `config`                                                                                                                                                                                                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                           | Available config options for making requests.                                                                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                              |


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
import { GetUsageRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const from: string = "string";
const to: string = "string";

  const res = await sdk.historical.getUsage(from, to);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `from`                                                                                                                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                           | Timestamp that defines the start of the window for which to fetch statistics, including the timestamp itself. Accepts Unix timestamps, or any form of input parsable by the [Chronic Ruby library](https://github.com/mojombo/chronic), such as 'yesterday', or 'two weeks ago'. Default varies based on the value of `by`.<br/> |
| `to`                                                                                                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                           | Timestamp that defines the end of the window for which to fetch statistics. Accepts the same formats as `from`.<br/>                                                                                                                                                                                                         |
| `config`                                                                                                                                                                                                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                           | Available config options for making requests.                                                                                                                                                                                                                                                                                |


### Response

**Promise<[operations.GetUsageResponse](../../models/operations/getusageresponse.md)>**


## getUsageMonth

Returns month-to-date usage details for a given month and year. Usage details are aggregated by service and across all Fastly services, and then grouped by region. This endpoint does not use the `from` or `to` fields for selecting the date for which data is requested. Instead, it uses `month` and `year` integer fields. Both fields are optional and default to the current month and year respectively. When set, an optional `billable_units` field will convert bandwidth to GB and divide requests by 10,000.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetUsageMonthRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const billableUnits: boolean = true;
const month: string = "05";
const year: string = "2020";

  const res = await sdk.historical.getUsageMonth(billableUnits, month, year);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `billableUnits`                                              | *boolean*                                                    | :heavy_minus_sign:                                           | If `true`, return results as billable units.                 | true                                                         |
| `month`                                                      | *string*                                                     | :heavy_minus_sign:                                           | 2-digit month.                                               | 05                                                           |
| `year`                                                       | *string*                                                     | :heavy_minus_sign:                                           | 4-digit year.                                                | 2020                                                         |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetUsageMonthResponse](../../models/operations/getusagemonthresponse.md)>**


## getUsageService

Returns usage information aggregated by service and grouped by service and region. For service stats by time period, see [`/stats`](#get-hist-stats) and [`/stats/field/:field`](#get-hist-stats-field).

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetUsageServiceRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const from: string = "string";
const to: string = "string";

  const res = await sdk.historical.getUsageService(from, to);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `from`                                                                                                                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                           | Timestamp that defines the start of the window for which to fetch statistics, including the timestamp itself. Accepts Unix timestamps, or any form of input parsable by the [Chronic Ruby library](https://github.com/mojombo/chronic), such as 'yesterday', or 'two weeks ago'. Default varies based on the value of `by`.<br/> |
| `to`                                                                                                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                           | Timestamp that defines the end of the window for which to fetch statistics. Accepts the same formats as `from`.<br/>                                                                                                                                                                                                         |
| `config`                                                                                                                                                                                                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                           | Available config options for making requests.                                                                                                                                                                                                                                                                                |


### Response

**Promise<[operations.GetUsageServiceResponse](../../models/operations/getusageserviceresponse.md)>**


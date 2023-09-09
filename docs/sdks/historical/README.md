# historical

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
import { Fastly } from "FastlyTestJS";
import { GetHistStatsResponse, GetHistStatsSecurity } from "FastlyTestJS/dist/sdk/models/operations";
import { By, Region } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();
const operationSecurity: GetHistStatsSecurity = {
  token: "",
};

sdk.historical.getHistStats({
  by: By.Day,
  from: "excepturi",
  region: Region.Usa,
  to: "odit",
}, operationSecurity).then((res: GetHistStatsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetHistStatsRequest](../../models/operations/gethiststatsrequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.GetHistStatsSecurity](../../models/operations/gethiststatssecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetHistStatsResponse](../../models/operations/gethiststatsresponse.md)>**


## getHistStatsAggregated

Fetches historical stats information aggregated across all of your Fastly services.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetHistStatsAggregatedResponse, GetHistStatsAggregatedSecurity } from "FastlyTestJS/dist/sdk/models/operations";
import { By, Region } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();
const operationSecurity: GetHistStatsAggregatedSecurity = {
  token: "",
};

sdk.historical.getHistStatsAggregated({
  by: By.Day,
  from: "ea",
  region: Region.Usa,
  to: "accusantium",
}, operationSecurity).then((res: GetHistStatsAggregatedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetHistStatsAggregatedRequest](../../models/operations/gethiststatsaggregatedrequest.md)   | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `security`                                                                                             | [operations.GetHistStatsAggregatedSecurity](../../models/operations/gethiststatsaggregatedsecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetHistStatsAggregatedResponse](../../models/operations/gethiststatsaggregatedresponse.md)>**


## getHistStatsField

Fetches the specified field from the historical stats for each of your services and groups the results by service ID.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetHistStatsFieldResponse, GetHistStatsFieldSecurity } from "FastlyTestJS/dist/sdk/models/operations";
import { By, Region } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();
const operationSecurity: GetHistStatsFieldSecurity = {
  token: "",
};

sdk.historical.getHistStatsField({
  by: By.Day,
  field: "hit_ratio",
  from: "ab",
  region: Region.Usa,
  to: "maiores",
}, operationSecurity).then((res: GetHistStatsFieldResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetHistStatsFieldRequest](../../models/operations/gethiststatsfieldrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.GetHistStatsFieldSecurity](../../models/operations/gethiststatsfieldsecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetHistStatsFieldResponse](../../models/operations/gethiststatsfieldresponse.md)>**


## getHistStatsService

Fetches historical stats for a given service.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetHistStatsServiceResponse, GetHistStatsServiceSecurity } from "FastlyTestJS/dist/sdk/models/operations";
import { By, Region } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();
const operationSecurity: GetHistStatsServiceSecurity = {
  token: "",
};

sdk.historical.getHistStatsService({
  by: By.Day,
  from: "quidem",
  region: Region.Usa,
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  to: "ipsam",
}, operationSecurity).then((res: GetHistStatsServiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetHistStatsServiceRequest](../../models/operations/gethiststatsservicerequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.GetHistStatsServiceSecurity](../../models/operations/gethiststatsservicesecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetHistStatsServiceResponse](../../models/operations/gethiststatsserviceresponse.md)>**


## getHistStatsServiceField

Fetches the specified field from the historical stats for a given service.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetHistStatsServiceFieldResponse, GetHistStatsServiceFieldSecurity } from "FastlyTestJS/dist/sdk/models/operations";
import { By, Region } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();
const operationSecurity: GetHistStatsServiceFieldSecurity = {
  token: "",
};

sdk.historical.getHistStatsServiceField({
  by: By.Day,
  field: "hit_ratio",
  from: "voluptate",
  region: Region.Usa,
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  to: "autem",
}, operationSecurity).then((res: GetHistStatsServiceFieldResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GetHistStatsServiceFieldRequest](../../models/operations/gethiststatsservicefieldrequest.md)   | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `security`                                                                                                 | [operations.GetHistStatsServiceFieldSecurity](../../models/operations/gethiststatsservicefieldsecurity.md) | :heavy_check_mark:                                                                                         | The security requirements to use for the request.                                                          |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GetHistStatsServiceFieldResponse](../../models/operations/gethiststatsservicefieldresponse.md)>**


## getRegions

Fetches the list of codes for regions that are covered by the Fastly CDN service.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetRegionsResponse, GetRegionsSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: GetRegionsSecurity = {
  token: "",
};

sdk.historical.getRegions(operationSecurity).then((res: GetRegionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `security`                                                                     | [operations.GetRegionsSecurity](../../models/operations/getregionssecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetRegionsResponse](../../models/operations/getregionsresponse.md)>**


## getUsage

Returns usage information aggregated across all Fastly services and grouped by region. To aggregate across all Fastly services by time period, see [`/stats/aggregate`](#get-hist-stats-aggregated).

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetUsageResponse, GetUsageSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: GetUsageSecurity = {
  token: "",
};

sdk.historical.getUsage({
  from: "nam",
  to: "eaque",
}, operationSecurity).then((res: GetUsageResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.GetUsageRequest](../../models/operations/getusagerequest.md)   | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `security`                                                                 | [operations.GetUsageSecurity](../../models/operations/getusagesecurity.md) | :heavy_check_mark:                                                         | The security requirements to use for the request.                          |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.GetUsageResponse](../../models/operations/getusageresponse.md)>**


## getUsageMonth

Returns month-to-date usage details for a given month and year. Usage details are aggregated by service and across all Fastly services, and then grouped by region. This endpoint does not use the `from` or `to` fields for selecting the date for which data is requested. Instead, it uses `month` and `year` integer fields. Both fields are optional and default to the current month and year respectively. When set, an optional `billable_units` field will convert bandwidth to GB and divide requests by 10,000.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetUsageMonthResponse, GetUsageMonthSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: GetUsageMonthSecurity = {
  token: "",
};

sdk.historical.getUsageMonth({
  billableUnits: true,
  month: "05",
  year: "2020",
}, operationSecurity).then((res: GetUsageMonthResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetUsageMonthRequest](../../models/operations/getusagemonthrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.GetUsageMonthSecurity](../../models/operations/getusagemonthsecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetUsageMonthResponse](../../models/operations/getusagemonthresponse.md)>**


## getUsageService

Returns usage information aggregated by service and grouped by service and region. For service stats by time period, see [`/stats`](#get-hist-stats) and [`/stats/field/:field`](#get-hist-stats-field).

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetUsageServiceResponse, GetUsageServiceSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: GetUsageServiceSecurity = {
  token: "",
};

sdk.historical.getUsageService({
  from: "pariatur",
  to: "nemo",
}, operationSecurity).then((res: GetUsageServiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetUsageServiceRequest](../../models/operations/getusageservicerequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.GetUsageServiceSecurity](../../models/operations/getusageservicesecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetUsageServiceResponse](../../models/operations/getusageserviceresponse.md)>**


# pop

## Overview

List Fastly POPs and their locations.

<https://developer.fastly.com/reference/api/utils/pops>
### Available Operations

* [listPops](#listpops) - List Fastly POPs

## listPops

Get a list of all Fastly POPs.

### Example Usage

```typescript
import { Fastly } from "FastlyTest";
import { ListPopsResponse } from "FastlyTest/dist/sdk/models/operations";
import { PopBillingRegion, PopRegion, PopStatsRegion } from "FastlyTest/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.pop.listPops({
  token: "",
}).then((res: ListPopsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `security`                                                                 | [operations.ListPopsSecurity](../../models/operations/listpopssecurity.md) | :heavy_check_mark:                                                         | The security requirements to use for the request.                          |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.ListPopsResponse](../../models/operations/listpopsresponse.md)>**


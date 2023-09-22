# Pop

## Overview

List Fastly POPs and their locations.

<https://developer.fastly.com/reference/api/utils/pops>
### Available Operations

* [listPops](#listpops) - List Fastly POPs

## listPops

Get a list of all Fastly POPs.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListPopsResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.pop.listPops().then((res: ListPopsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListPopsResponse](../../models/operations/listpopsresponse.md)>**


# PublicIpList
(*publicIpList*)

## Overview

To help you manage firewall rules for connections from Fastly to your origin, we provide access to the [list of Fastly's assigned IP ranges](https://api.fastly.com/public-ip-list). Changes to this list will be announced in advance as an "IP address announcement" along with other service announcements to our [status page](https://fastlystatus.com/), which you can [subscribe](https://docs.fastly.com/en/guides/fastlys-network-status#subscribing-to-notifications) to. This list is exhaustive and includes all Fastly-owned IP ranges, so any client connections, log streaming reports, and origin connections should use these addresses.

<https://developer.fastly.com/reference/api/utils/public-ip-list>
### Available Operations

* [listFastlyIps](#listfastlyips) - List Fastly's public IPs

## listFastlyIps

List the public IP addresses for the Fastly network.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    security: {
      token: "",
    },
  });

  const res = await sdk.publicIpList.listFastlyIps();

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

**Promise<[operations.ListFastlyIpsResponse](../../models/operations/listfastlyipsresponse.md)>**


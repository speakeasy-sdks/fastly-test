<!-- Start SDK Example Usage -->


```typescript
import { Fastly } from "Fastly";
import { DeleteApexRedirectRequest } from "Fastly/dist/sdk/models/operations";

(async () => {
    const sdk = new Fastly({
        token: "",
    });
    const apexRedirectId: string = "string";

    const res = await sdk.apexRedirect.deleteApexRedirect(apexRedirectId);

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->
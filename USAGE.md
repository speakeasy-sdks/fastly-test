<!-- Start SDK Example Usage -->
```typescript
import { Fastly } from "Fastly";

(async () => {
    const sdk = new Fastly({
        token: "",
    });

    const res = await sdk.apexRedirect.deleteApexRedirect({
        apexRedirectId: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->
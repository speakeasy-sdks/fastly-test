<!-- Start SDK Example Usage [usage] -->
```typescript
import { Fastly } from "Fastly";

async function run() {
    const sdk = new Fastly({
        token: "<YOUR_API_KEY_HERE>",
    });

    const res = await sdk.apexRedirect.deleteApexRedirect({
        apexRedirectId: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->
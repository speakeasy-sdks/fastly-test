/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { objectToClass, SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";

export class BillingEstimateResponseLinesLine extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "client_plan_id" })
    clientPlanId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "client_service_id" })
    clientServiceId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "per_unit_cost" })
    perUnitCost?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "plan_no" })
    planNo?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "service_no" })
    serviceNo?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "service_type" })
    serviceType?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "units" })
    units?: number;
}

export class BillingEstimateResponseLines extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "line" })
    @Type(() => BillingEstimateResponseLinesLine)
    line?: BillingEstimateResponseLinesLine;
}

export class BillingEstimateResponseRegionsTiers extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "price" })
    price?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "total" })
    total?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "units" })
    units?: number;
}

export class BillingEstimateResponseRegions extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: BillingEstimateResponseRegionsTiers })
    @Expose({ name: "tiers" })
    @Type(() => BillingEstimateResponseRegionsTiers)
    tiers?: BillingEstimateResponseRegionsTiers[];

    @SpeakeasyMetadata()
    @Expose({ name: "total" })
    total?: number;
}

/**
 * What the current status of this invoice can be.
 */
export enum BillingEstimateResponseStatusStatus {
    Pending = "Pending",
    Outstanding = "Outstanding",
    Paid = "Paid",
    Mtd = "MTD",
}

export class BillingEstimateResponseStatus extends SpeakeasyBase {
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sent_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    sentAt?: Date;

    /**
     * What the current status of this invoice can be.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: BillingEstimateResponseStatusStatus;
}

export class BillingEstimateResponseTotalExtras extends SpeakeasyBase {
    /**
     * The name of this extra cost.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * Recurring monthly cost in USD. Not present if $0.0.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "recurring" })
    recurring?: number;

    /**
     * Initial set up cost in USD. Not present if $0.0 or this is not the month the extra was added.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "setup" })
    setup?: number;
}

/**
 * Complete summary of the billing information.
 */
export class BillingEstimateResponseTotal extends SpeakeasyBase {
    /**
     * The total amount of bandwidth used this month (See bandwidth_units for measurement).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "bandwidth" })
    bandwidth?: number;

    /**
     * The cost of the bandwidth used this month in USD.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "bandwidth_cost" })
    bandwidthCost?: number;

    /**
     * Bandwidth measurement units based on billing plan.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "bandwidth_units" })
    bandwidthUnits?: string;

    /**
     * The final amount to be paid.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "cost" })
    cost?: number;

    /**
     * Total incurred cost plus extras cost.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "cost_before_discount" })
    costBeforeDiscount?: number;

    /**
     * Calculated discount rate.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "discount" })
    discount?: number;

    /**
     * A list of any extras for this invoice.
     */
    @SpeakeasyMetadata({ elemType: BillingEstimateResponseTotalExtras })
    @Expose({ name: "extras" })
    @Type(() => BillingEstimateResponseTotalExtras)
    extras?: BillingEstimateResponseTotalExtras[];

    /**
     * Total cost of all extras.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "extras_cost" })
    extrasCost?: number;

    /**
     * The total cost of bandwidth and requests used this month.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "incurred_cost" })
    incurredCost?: number;

    /**
     * How much over the plan minimum has been incurred.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "overage" })
    overage?: number;

    /**
     * The short code the plan this invoice was generated under.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "plan_code" })
    planCode?: string;

    /**
     * The minimum cost of this plan.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "plan_minimum" })
    planMinimum?: number;

    /**
     * The name of the plan this invoice was generated under.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "plan_name" })
    planName?: string;

    /**
     * The total number of requests used this month.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "requests" })
    requests?: number;

    /**
     * The cost of the requests used this month.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "requests_cost" })
    requestsCost?: number;

    /**
     * Payment terms. Almost always Net15.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "terms" })
    terms?: string;
}

export class BillingEstimateResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "customer_id" })
    customerId?: string;

    /**
     * Date and time in ISO 8601 format.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "end_time" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    endTime?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "invoice_id" })
    invoiceId?: string;

    @SpeakeasyMetadata({ elemType: BillingEstimateResponseLines })
    @Expose({ name: "lines" })
    @Type(() => BillingEstimateResponseLines)
    lines?: BillingEstimateResponseLines[];

    /**
     * Breakdown of regional data for products that are region based.
     */
    @SpeakeasyMetadata({ elemType: BillingEstimateResponseRegions, elemDepth: 2 })
    @Expose({ name: "regions" })
    @Transform(
        ({ value }) => {
            const obj: Record<string, Record<string, BillingEstimateResponseRegions>> = {};
            for (const key in value) {
                obj[key] = objectToClass(value[key], BillingEstimateResponseRegions);
            }
            return obj;
        },
        { toClassOnly: true }
    )
    regions?: Record<string, Record<string, BillingEstimateResponseRegions>>;

    /**
     * Date and time in ISO 8601 format.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "start_time" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    startTime?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    @Type(() => BillingEstimateResponseStatus)
    status?: BillingEstimateResponseStatus;

    /**
     * Complete summary of the billing information.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total" })
    @Type(() => BillingEstimateResponseTotal)
    total?: BillingEstimateResponseTotal;

    /**
     * The current state of our third-party billing vendor. One of `up` or `down`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "vendor_state" })
    vendorState?: string;
}

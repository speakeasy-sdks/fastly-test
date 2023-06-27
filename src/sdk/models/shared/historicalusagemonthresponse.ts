/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { objectToClass, SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { HistoricalUsageResults } from "./historicalusageresults";
import { Expose, Transform, Type } from "class-transformer";

export class HistoricalUsageMonthResponseData extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "customer_id" })
    customerId?: string;

    @SpeakeasyMetadata({ elemType: HistoricalUsageResults, elemDepth: 2 })
    @Expose({ name: "services" })
    @Transform(
        ({ value }) => {
            const obj: Record<string, Record<string, HistoricalUsageResults>> = {};
            for (const key in value) {
                obj[key] = objectToClass(value[key], HistoricalUsageResults);
            }
            return obj;
        },
        { toClassOnly: true }
    )
    services?: Record<string, Record<string, HistoricalUsageResults>>;

    @SpeakeasyMetadata()
    @Expose({ name: "total" })
    @Type(() => HistoricalUsageResults)
    total?: HistoricalUsageResults;
}

/**
 * Meta information about the scope of the query in a human readable format.
 */
export class HistoricalUsageMonthResponseMeta extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "by" })
    by?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "from" })
    from?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "region" })
    region?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "to" })
    to?: string;
}

/**
 * OK
 */
export class HistoricalUsageMonthResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => HistoricalUsageMonthResponseData)
    data?: HistoricalUsageMonthResponseData;

    /**
     * Meta information about the scope of the query in a human readable format.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "meta" })
    @Type(() => HistoricalUsageMonthResponseMeta)
    meta?: HistoricalUsageMonthResponseMeta;

    /**
     * If the query was not successful, this will provide a string that explains why.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "msg" })
    msg?: string;

    /**
     * Whether or not we were able to successfully execute the query.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: string;
}
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ReportsApi {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List campaign reports
     * Get campaign reports.
     * @returns any
     * @throws ApiError
     */
    public getReports({
        fields,
        excludeFields,
        count = 10,
        offset,
        type,
        beforeSendTime,
        sinceSendTime,
    }: {
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
        /**
         * The number of records to return. Default value is 10. Maximum value is 1000
         */
        count?: number,
        /**
         * Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
         */
        offset?: number,
        /**
         * The campaign type.
         */
        type?: 'regular' | 'plaintext' | 'absplit' | 'rss' | 'variate',
        /**
         * Restrict the response to campaigns sent before the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
         */
        beforeSendTime?: string,
        /**
         * Restrict the response to campaigns sent after the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
         */
        sinceSendTime?: string,
    }): CancelablePromise<{
        /**
         * An array of objects, each representing a report resource.
         */
        reports?: Array<{
            /**
             * A string that uniquely identifies this campaign.
             */
            id?: string;
            /**
             * The title of the campaign.
             */
            readonly campaign_title?: string;
            /**
             * The type of campaign (regular, plain-text, ab_split, rss, automation, variate, or auto).
             */
            type?: string;
            /**
             * The unique list id.
             */
            readonly list_id?: string;
            /**
             * The status of the list used, namely if it's deleted or disabled.
             */
            readonly list_is_active?: boolean;
            /**
             * The name of the list.
             */
            readonly list_name?: string;
            /**
             * The subject line for the campaign.
             */
            readonly subject_line?: string;
            /**
             * The preview text for the campaign.
             */
            preview_text?: string;
            /**
             * The total number of emails sent for this campaign.
             */
            emails_sent?: number;
            /**
             * The number of abuse reports generated for this campaign.
             */
            abuse_reports?: number;
            /**
             * The total number of unsubscribed members for this campaign.
             */
            readonly unsubscribed?: number;
            /**
             * The date and time a campaign was sent in ISO 8601 format.
             */
            readonly send_time?: string;
            /**
             * For RSS campaigns, the date and time of the last send in ISO 8601 format.
             */
            readonly rss_last_send?: string;
            /**
             * An object describing the bounce summary for the campaign.
             */
            bounces?: {
                /**
                 * The total number of hard bounced email addresses.
                 */
                hard_bounces?: number;
                /**
                 * The total number of soft bounced email addresses.
                 */
                soft_bounces?: number;
                /**
                 * The total number of addresses that were syntax-related bounces.
                 */
                syntax_errors?: number;
            };
            /**
             * An object describing the forwards and forward activity for the campaign.
             */
            forwards?: {
                /**
                 * How many times the campaign has been forwarded.
                 */
                forwards_count?: number;
                /**
                 * How many times the forwarded campaign has been opened.
                 */
                forwards_opens?: number;
            };
            /**
             * An object describing the open activity for the campaign.
             */
            opens?: {
                /**
                 * The total number of opens for a campaign.
                 */
                opens_total?: number;
                /**
                 * The total number of unique opens.
                 */
                unique_opens?: number;
                /**
                 * The number of unique opens divided by the total number of successful deliveries.
                 */
                open_rate?: number;
                /**
                 * The date and time of the last recorded open in ISO 8601 format.
                 */
                last_open?: string;
            };
            /**
             * An object describing the click activity for the campaign.
             */
            clicks?: {
                /**
                 * The total number of clicks for the campaign.
                 */
                clicks_total?: number;
                /**
                 * The total number of unique clicks for links across a campaign.
                 */
                unique_clicks?: number;
                /**
                 * The total number of subscribers who clicked on a campaign.
                 */
                unique_subscriber_clicks?: number;
                /**
                 * The number of unique clicks divided by the total number of successful deliveries.
                 */
                click_rate?: number;
                /**
                 * The date and time of the last recorded click for the campaign in ISO 8601 format.
                 */
                last_click?: string;
            };
            /**
             * An object describing campaign engagement on Facebook.
             */
            facebook_likes?: {
                /**
                 * The number of recipients who liked the campaign on Facebook.
                 */
                recipient_likes?: number;
                /**
                 * The number of unique likes.
                 */
                unique_likes?: number;
                /**
                 * The number of Facebook likes for the campaign.
                 */
                facebook_likes?: number;
            };
            /**
             * The average campaign statistics for your industry.
             */
            industry_stats?: {
                /**
                 * The type of business industry associated with your account. For example: retail, education, etc.
                 */
                type?: string;
                /**
                 * The industry open rate.
                 */
                open_rate?: number;
                /**
                 * The industry click rate.
                 */
                click_rate?: number;
                /**
                 * The industry bounce rate.
                 */
                bounce_rate?: number;
                /**
                 * The industry unopened rate.
                 */
                unopen_rate?: number;
                /**
                 * The industry unsubscribe rate.
                 */
                unsub_rate?: number;
                /**
                 * The industry abuse rate.
                 */
                abuse_rate?: number;
            };
            /**
             * The average campaign statistics for your list. This won't be present if we haven't calculated it yet for this list.
             */
            list_stats?: {
                /**
                 * The average number of subscriptions per month for the list.
                 */
                readonly sub_rate?: number;
                /**
                 * The average number of unsubscriptions per month for the list.
                 */
                readonly unsub_rate?: number;
                /**
                 * The average open rate (a percentage represented as a number between 0 and 100) per campaign for the list.
                 */
                readonly open_rate?: number;
                /**
                 * The average click rate (a percentage represented as a number between 0 and 100) per campaign for the list.
                 */
                readonly click_rate?: number;
            };
            /**
             * General stats about different groups of an A/B Split campaign. Does not return information about Multivariate Campaigns.
             */
            ab_split?: {
                /**
                 * Stats for Campaign A.
                 */
                'a'?: {
                    /**
                     * Bounces for Campaign A.
                     */
                    bounces?: number;
                    /**
                     * Abuse reports for Campaign A.
                     */
                    abuse_reports?: number;
                    /**
                     * Unsubscribes for Campaign A.
                     */
                    unsubs?: number;
                    /**
                     * Recipient Clicks for Campaign A.
                     */
                    recipient_clicks?: number;
                    /**
                     * Forwards for Campaign A.
                     */
                    forwards?: number;
                    /**
                     * Opens from forwards for Campaign A.
                     */
                    forwards_opens?: number;
                    /**
                     * Opens for Campaign A.
                     */
                    opens?: number;
                    /**
                     * The last open for Campaign A.
                     */
                    last_open?: string;
                    /**
                     * Unique opens for Campaign A.
                     */
                    unique_opens?: number;
                };
                /**
                 * Stats for Campaign B.
                 */
                'b'?: {
                    /**
                     * Bounces for Campaign B.
                     */
                    bounces?: number;
                    /**
                     * Abuse reports for Campaign B.
                     */
                    abuse_reports?: number;
                    /**
                     * Unsubscribes for Campaign B.
                     */
                    unsubs?: number;
                    /**
                     * Recipients clicks for Campaign B.
                     */
                    recipient_clicks?: number;
                    /**
                     * Forwards for Campaign B.
                     */
                    forwards?: number;
                    /**
                     * Opens for forwards from Campaign B.
                     */
                    forwards_opens?: number;
                    /**
                     * Opens for Campaign B.
                     */
                    opens?: number;
                    /**
                     * The last open for Campaign B.
                     */
                    last_open?: string;
                    /**
                     * Unique opens for Campaign B.
                     */
                    unique_opens?: number;
                };
            };
            /**
             * An hourly breakdown of sends, opens, and clicks if a campaign is sent using timewarp.
             */
            timewarp?: Array<{
                /**
                 * For campaigns sent with timewarp, the time zone group the member is apart of.
                 */
                gmt_offset?: number;
                /**
                 * The number of opens.
                 */
                opens?: number;
                /**
                 * The date and time of the last open in ISO 8601 format.
                 */
                last_open?: string;
                /**
                 * The number of unique opens.
                 */
                unique_opens?: number;
                /**
                 * The number of clicks.
                 */
                clicks?: number;
                /**
                 * The date and time of the last click in ISO 8601 format.
                 */
                last_click?: string;
                /**
                 * The number of unique clicks.
                 */
                unique_clicks?: number;
                /**
                 * The number of bounces.
                 */
                bounces?: number;
            }>;
            /**
             * An hourly breakdown of the performance of the campaign over the first 24 hours.
             */
            timeseries?: Array<{
                /**
                 * The date and time for the series in ISO 8601 format.
                 */
                timestamp?: string;
                /**
                 * The number of emails sent in the timeseries.
                 */
                emails_sent?: number;
                /**
                 * The number of unique opens in the timeseries.
                 */
                unique_opens?: number;
                /**
                 * The number of clicks in the timeseries.
                 */
                recipients_clicks?: number;
            }>;
            /**
             * The url and password for the [VIP report](https://mailchimp.com/help/share-a-campaign-report/).
             */
            share_report?: {
                /**
                 * The URL for the VIP report.
                 */
                readonly share_url?: string;
                /**
                 * If password protected, the password for the VIP report.
                 */
                readonly share_password?: string;
            };
            /**
             * E-Commerce stats for a campaign.
             */
            ecommerce?: {
                /**
                 * The total orders for a campaign.
                 */
                readonly total_orders?: number;
                /**
                 * The total spent for a campaign. Calculated as the sum of all order totals with no deductions.
                 */
                readonly total_spent?: number;
                /**
                 * The total revenue for a campaign. Calculated as the sum of all order totals minus shipping and tax totals.
                 */
                readonly total_revenue?: number;
                readonly currency_code?: string;
            };
            /**
             * Updates on campaigns in the process of sending.
             */
            delivery_status?: {
                /**
                 * Whether Campaign Delivery Status is enabled for this account and campaign.
                 */
                readonly enabled?: boolean;
                /**
                 * Whether a campaign send can be canceled.
                 */
                readonly can_cancel?: boolean;
                /**
                 * The current state of a campaign delivery.
                 */
                readonly status?: 'delivering' | 'delivered' | 'canceling' | 'canceled';
                /**
                 * The total number of emails confirmed sent for this campaign so far.
                 */
                readonly emails_sent?: number;
                /**
                 * The total number of emails canceled for this campaign.
                 */
                readonly emails_canceled?: number;
            };
            /**
             * A list of link types and descriptions for the API schema documents.
             */
            readonly _links?: Array<{
                /**
                 * As with an HTML 'rel' attribute, this describes the type of link.
                 */
                readonly rel?: string;
                /**
                 * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
                 */
                readonly href?: string;
                /**
                 * The HTTP method that should be used when accessing the URL defined in 'href'.
                 */
                readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
                /**
                 * For GETs, this is a URL representing the schema that the response should conform to.
                 */
                readonly targetSchema?: string;
                /**
                 * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
                 */
                readonly schema?: string;
            }>;
        }>;
        /**
         * The total number of items matching the query regardless of pagination.
         */
        readonly total_items?: number;
        /**
         * A list of link types and descriptions for the API schema documents.
         */
        readonly _links?: Array<{
            /**
             * As with an HTML 'rel' attribute, this describes the type of link.
             */
            readonly rel?: string;
            /**
             * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
             */
            readonly href?: string;
            /**
             * The HTTP method that should be used when accessing the URL defined in 'href'.
             */
            readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
            /**
             * For GETs, this is a URL representing the schema that the response should conform to.
             */
            readonly targetSchema?: string;
            /**
             * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
             */
            readonly schema?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reports',
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'count': count,
                'offset': offset,
                'type': type,
                'before_send_time': beforeSendTime,
                'since_send_time': sinceSendTime,
            },
        });
    }

    /**
     * Get campaign report
     * Get report details for a specific sent campaign.
     * @returns any
     * @throws ApiError
     */
    public getReportsId({
        campaignId,
        fields,
        excludeFields,
    }: {
        /**
         * The unique id for the campaign.
         */
        campaignId: string,
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
    }): CancelablePromise<{
        /**
         * A string that uniquely identifies this campaign.
         */
        id?: string;
        /**
         * The title of the campaign.
         */
        readonly campaign_title?: string;
        /**
         * The type of campaign (regular, plain-text, ab_split, rss, automation, variate, or auto).
         */
        type?: string;
        /**
         * The unique list id.
         */
        readonly list_id?: string;
        /**
         * The status of the list used, namely if it's deleted or disabled.
         */
        readonly list_is_active?: boolean;
        /**
         * The name of the list.
         */
        readonly list_name?: string;
        /**
         * The subject line for the campaign.
         */
        readonly subject_line?: string;
        /**
         * The preview text for the campaign.
         */
        preview_text?: string;
        /**
         * The total number of emails sent for this campaign.
         */
        emails_sent?: number;
        /**
         * The number of abuse reports generated for this campaign.
         */
        abuse_reports?: number;
        /**
         * The total number of unsubscribed members for this campaign.
         */
        readonly unsubscribed?: number;
        /**
         * The date and time a campaign was sent in ISO 8601 format.
         */
        readonly send_time?: string;
        /**
         * For RSS campaigns, the date and time of the last send in ISO 8601 format.
         */
        readonly rss_last_send?: string;
        /**
         * An object describing the bounce summary for the campaign.
         */
        bounces?: {
            /**
             * The total number of hard bounced email addresses.
             */
            hard_bounces?: number;
            /**
             * The total number of soft bounced email addresses.
             */
            soft_bounces?: number;
            /**
             * The total number of addresses that were syntax-related bounces.
             */
            syntax_errors?: number;
        };
        /**
         * An object describing the forwards and forward activity for the campaign.
         */
        forwards?: {
            /**
             * How many times the campaign has been forwarded.
             */
            forwards_count?: number;
            /**
             * How many times the forwarded campaign has been opened.
             */
            forwards_opens?: number;
        };
        /**
         * An object describing the open activity for the campaign.
         */
        opens?: {
            /**
             * The total number of opens for a campaign.
             */
            opens_total?: number;
            /**
             * The total number of unique opens.
             */
            unique_opens?: number;
            /**
             * The number of unique opens divided by the total number of successful deliveries.
             */
            open_rate?: number;
            /**
             * The date and time of the last recorded open in ISO 8601 format.
             */
            last_open?: string;
        };
        /**
         * An object describing the click activity for the campaign.
         */
        clicks?: {
            /**
             * The total number of clicks for the campaign.
             */
            clicks_total?: number;
            /**
             * The total number of unique clicks for links across a campaign.
             */
            unique_clicks?: number;
            /**
             * The total number of subscribers who clicked on a campaign.
             */
            unique_subscriber_clicks?: number;
            /**
             * The number of unique clicks divided by the total number of successful deliveries.
             */
            click_rate?: number;
            /**
             * The date and time of the last recorded click for the campaign in ISO 8601 format.
             */
            last_click?: string;
        };
        /**
         * An object describing campaign engagement on Facebook.
         */
        facebook_likes?: {
            /**
             * The number of recipients who liked the campaign on Facebook.
             */
            recipient_likes?: number;
            /**
             * The number of unique likes.
             */
            unique_likes?: number;
            /**
             * The number of Facebook likes for the campaign.
             */
            facebook_likes?: number;
        };
        /**
         * The average campaign statistics for your industry.
         */
        industry_stats?: {
            /**
             * The type of business industry associated with your account. For example: retail, education, etc.
             */
            type?: string;
            /**
             * The industry open rate.
             */
            open_rate?: number;
            /**
             * The industry click rate.
             */
            click_rate?: number;
            /**
             * The industry bounce rate.
             */
            bounce_rate?: number;
            /**
             * The industry unopened rate.
             */
            unopen_rate?: number;
            /**
             * The industry unsubscribe rate.
             */
            unsub_rate?: number;
            /**
             * The industry abuse rate.
             */
            abuse_rate?: number;
        };
        /**
         * The average campaign statistics for your list. This won't be present if we haven't calculated it yet for this list.
         */
        list_stats?: {
            /**
             * The average number of subscriptions per month for the list.
             */
            readonly sub_rate?: number;
            /**
             * The average number of unsubscriptions per month for the list.
             */
            readonly unsub_rate?: number;
            /**
             * The average open rate (a percentage represented as a number between 0 and 100) per campaign for the list.
             */
            readonly open_rate?: number;
            /**
             * The average click rate (a percentage represented as a number between 0 and 100) per campaign for the list.
             */
            readonly click_rate?: number;
        };
        /**
         * General stats about different groups of an A/B Split campaign. Does not return information about Multivariate Campaigns.
         */
        ab_split?: {
            /**
             * Stats for Campaign A.
             */
            'a'?: {
                /**
                 * Bounces for Campaign A.
                 */
                bounces?: number;
                /**
                 * Abuse reports for Campaign A.
                 */
                abuse_reports?: number;
                /**
                 * Unsubscribes for Campaign A.
                 */
                unsubs?: number;
                /**
                 * Recipient Clicks for Campaign A.
                 */
                recipient_clicks?: number;
                /**
                 * Forwards for Campaign A.
                 */
                forwards?: number;
                /**
                 * Opens from forwards for Campaign A.
                 */
                forwards_opens?: number;
                /**
                 * Opens for Campaign A.
                 */
                opens?: number;
                /**
                 * The last open for Campaign A.
                 */
                last_open?: string;
                /**
                 * Unique opens for Campaign A.
                 */
                unique_opens?: number;
            };
            /**
             * Stats for Campaign B.
             */
            'b'?: {
                /**
                 * Bounces for Campaign B.
                 */
                bounces?: number;
                /**
                 * Abuse reports for Campaign B.
                 */
                abuse_reports?: number;
                /**
                 * Unsubscribes for Campaign B.
                 */
                unsubs?: number;
                /**
                 * Recipients clicks for Campaign B.
                 */
                recipient_clicks?: number;
                /**
                 * Forwards for Campaign B.
                 */
                forwards?: number;
                /**
                 * Opens for forwards from Campaign B.
                 */
                forwards_opens?: number;
                /**
                 * Opens for Campaign B.
                 */
                opens?: number;
                /**
                 * The last open for Campaign B.
                 */
                last_open?: string;
                /**
                 * Unique opens for Campaign B.
                 */
                unique_opens?: number;
            };
        };
        /**
         * An hourly breakdown of sends, opens, and clicks if a campaign is sent using timewarp.
         */
        timewarp?: Array<{
            /**
             * For campaigns sent with timewarp, the time zone group the member is apart of.
             */
            gmt_offset?: number;
            /**
             * The number of opens.
             */
            opens?: number;
            /**
             * The date and time of the last open in ISO 8601 format.
             */
            last_open?: string;
            /**
             * The number of unique opens.
             */
            unique_opens?: number;
            /**
             * The number of clicks.
             */
            clicks?: number;
            /**
             * The date and time of the last click in ISO 8601 format.
             */
            last_click?: string;
            /**
             * The number of unique clicks.
             */
            unique_clicks?: number;
            /**
             * The number of bounces.
             */
            bounces?: number;
        }>;
        /**
         * An hourly breakdown of the performance of the campaign over the first 24 hours.
         */
        timeseries?: Array<{
            /**
             * The date and time for the series in ISO 8601 format.
             */
            timestamp?: string;
            /**
             * The number of emails sent in the timeseries.
             */
            emails_sent?: number;
            /**
             * The number of unique opens in the timeseries.
             */
            unique_opens?: number;
            /**
             * The number of clicks in the timeseries.
             */
            recipients_clicks?: number;
        }>;
        /**
         * The url and password for the [VIP report](https://mailchimp.com/help/share-a-campaign-report/).
         */
        share_report?: {
            /**
             * The URL for the VIP report.
             */
            readonly share_url?: string;
            /**
             * If password protected, the password for the VIP report.
             */
            readonly share_password?: string;
        };
        /**
         * E-Commerce stats for a campaign.
         */
        ecommerce?: {
            /**
             * The total orders for a campaign.
             */
            readonly total_orders?: number;
            /**
             * The total spent for a campaign. Calculated as the sum of all order totals with no deductions.
             */
            readonly total_spent?: number;
            /**
             * The total revenue for a campaign. Calculated as the sum of all order totals minus shipping and tax totals.
             */
            readonly total_revenue?: number;
            readonly currency_code?: string;
        };
        /**
         * Updates on campaigns in the process of sending.
         */
        delivery_status?: {
            /**
             * Whether Campaign Delivery Status is enabled for this account and campaign.
             */
            readonly enabled?: boolean;
            /**
             * Whether a campaign send can be canceled.
             */
            readonly can_cancel?: boolean;
            /**
             * The current state of a campaign delivery.
             */
            readonly status?: 'delivering' | 'delivered' | 'canceling' | 'canceled';
            /**
             * The total number of emails confirmed sent for this campaign so far.
             */
            readonly emails_sent?: number;
            /**
             * The total number of emails canceled for this campaign.
             */
            readonly emails_canceled?: number;
        };
        /**
         * A list of link types and descriptions for the API schema documents.
         */
        readonly _links?: Array<{
            /**
             * As with an HTML 'rel' attribute, this describes the type of link.
             */
            readonly rel?: string;
            /**
             * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
             */
            readonly href?: string;
            /**
             * The HTTP method that should be used when accessing the URL defined in 'href'.
             */
            readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
            /**
             * For GETs, this is a URL representing the schema that the response should conform to.
             */
            readonly targetSchema?: string;
            /**
             * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
             */
            readonly schema?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reports/{campaign_id}',
            path: {
                'campaign_id': campaignId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * List abuse reports
     * Get a list of abuse complaints for a specific campaign.
     * @returns any
     * @throws ApiError
     */
    public getReportsIdAbuseReportsId({
        campaignId,
        fields,
        excludeFields,
    }: {
        /**
         * The unique id for the campaign.
         */
        campaignId: string,
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
    }): CancelablePromise<{
        /**
         * An array of objects, each representing an abuse report resource.
         */
        abuse_reports?: Array<{
            /**
             * The id for the abuse report
             */
            readonly id?: number;
            /**
             * The campaign id for the abuse report
             */
            readonly campaign_id?: string;
            /**
             * The unique id of the list for the abuse report.
             */
            readonly list_id?: string;
            /**
             * The status of the list used, namely if it's deleted or disabled.
             */
            readonly list_is_active?: boolean;
            /**
             * The MD5 hash of the lowercase version of the list member's email address.
             */
            readonly email_id?: string;
            /**
             * Email address for a subscriber.
             */
            readonly email_address?: string;
            /**
             * A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure.
             */
            merge_fields?: Record<string, any>;
            /**
             * [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber.
             */
            readonly vip?: boolean;
            /**
             * Date for the abuse report
             */
            readonly date?: string;
            /**
             * A list of link types and descriptions for the API schema documents.
             */
            readonly _links?: Array<{
                /**
                 * As with an HTML 'rel' attribute, this describes the type of link.
                 */
                readonly rel?: string;
                /**
                 * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
                 */
                readonly href?: string;
                /**
                 * The HTTP method that should be used when accessing the URL defined in 'href'.
                 */
                readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
                /**
                 * For GETs, this is a URL representing the schema that the response should conform to.
                 */
                readonly targetSchema?: string;
                /**
                 * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
                 */
                readonly schema?: string;
            }>;
        }>;
        /**
         * The campaign id.
         */
        readonly campaign_id?: string;
        /**
         * The total number of items matching the query regardless of pagination.
         */
        readonly total_items?: number;
        /**
         * A list of link types and descriptions for the API schema documents.
         */
        readonly _links?: Array<{
            /**
             * As with an HTML 'rel' attribute, this describes the type of link.
             */
            readonly rel?: string;
            /**
             * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
             */
            readonly href?: string;
            /**
             * The HTTP method that should be used when accessing the URL defined in 'href'.
             */
            readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
            /**
             * For GETs, this is a URL representing the schema that the response should conform to.
             */
            readonly targetSchema?: string;
            /**
             * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
             */
            readonly schema?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reports/{campaign_id}/abuse-reports',
            path: {
                'campaign_id': campaignId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * Get abuse report
     * Get information about a specific abuse report for a campaign.
     * @returns any
     * @throws ApiError
     */
    public getReportsIdAbuseReportsIdId({
        campaignId,
        reportId,
        fields,
        excludeFields,
    }: {
        /**
         * The unique id for the campaign.
         */
        campaignId: string,
        /**
         * The id for the abuse report.
         */
        reportId: string,
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
    }): CancelablePromise<{
        /**
         * The id for the abuse report
         */
        readonly id?: number;
        /**
         * The campaign id for the abuse report
         */
        readonly campaign_id?: string;
        /**
         * The unique id of the list for the abuse report.
         */
        readonly list_id?: string;
        /**
         * The status of the list used, namely if it's deleted or disabled.
         */
        readonly list_is_active?: boolean;
        /**
         * The MD5 hash of the lowercase version of the list member's email address.
         */
        readonly email_id?: string;
        /**
         * Email address for a subscriber.
         */
        readonly email_address?: string;
        /**
         * A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure.
         */
        merge_fields?: Record<string, any>;
        /**
         * [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber.
         */
        readonly vip?: boolean;
        /**
         * Date for the abuse report
         */
        readonly date?: string;
        /**
         * A list of link types and descriptions for the API schema documents.
         */
        readonly _links?: Array<{
            /**
             * As with an HTML 'rel' attribute, this describes the type of link.
             */
            readonly rel?: string;
            /**
             * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
             */
            readonly href?: string;
            /**
             * The HTTP method that should be used when accessing the URL defined in 'href'.
             */
            readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
            /**
             * For GETs, this is a URL representing the schema that the response should conform to.
             */
            readonly targetSchema?: string;
            /**
             * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
             */
            readonly schema?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reports/{campaign_id}/abuse-reports/{report_id}',
            path: {
                'campaign_id': campaignId,
                'report_id': reportId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * List campaign feedback
     * Get feedback based on a campaign's statistics. Advice feedback is based on campaign stats like opens, clicks, unsubscribes, bounces, and more.
     * @returns any
     * @throws ApiError
     */
    public getReportsIdAdvice({
        campaignId,
        fields,
        excludeFields,
    }: {
        /**
         * The unique id for the campaign.
         */
        campaignId: string,
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
    }): CancelablePromise<{
        /**
         * An array of objects, each representing a point of campaign feedback.
         */
        advice?: Array<{
            /**
             * The sentiment type for a feedback message.
             */
            readonly type?: 'negative' | 'positive' | 'neutral';
            /**
             * The advice message.
             */
            readonly message?: string;
            /**
             * A list of link types and descriptions for the API schema documents.
             */
            readonly _links?: Array<{
                /**
                 * As with an HTML 'rel' attribute, this describes the type of link.
                 */
                readonly rel?: string;
                /**
                 * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
                 */
                readonly href?: string;
                /**
                 * The HTTP method that should be used when accessing the URL defined in 'href'.
                 */
                readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
                /**
                 * For GETs, this is a URL representing the schema that the response should conform to.
                 */
                readonly targetSchema?: string;
                /**
                 * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
                 */
                readonly schema?: string;
            }>;
        }>;
        /**
         * The campaign id.
         */
        readonly campaign_id?: string;
        /**
         * The total number of items matching the query regardless of pagination.
         */
        readonly total_items?: number;
        /**
         * A list of link types and descriptions for the API schema documents.
         */
        readonly _links?: Array<{
            /**
             * As with an HTML 'rel' attribute, this describes the type of link.
             */
            readonly rel?: string;
            /**
             * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
             */
            readonly href?: string;
            /**
             * The HTTP method that should be used when accessing the URL defined in 'href'.
             */
            readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
            /**
             * For GETs, this is a URL representing the schema that the response should conform to.
             */
            readonly targetSchema?: string;
            /**
             * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
             */
            readonly schema?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reports/{campaign_id}/advice',
            path: {
                'campaign_id': campaignId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * List campaign details
     * Get information about clicks on specific links in your Mailchimp campaigns.
     * @returns any
     * @throws ApiError
     */
    public getReportsIdClickDetails({
        campaignId,
        fields,
        excludeFields,
        count = 10,
        offset,
    }: {
        /**
         * The unique id for the campaign.
         */
        campaignId: string,
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
        /**
         * The number of records to return. Default value is 10. Maximum value is 1000
         */
        count?: number,
        /**
         * Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
         */
        offset?: number,
    }): CancelablePromise<{
        /**
         * An array of objects, each representing a specific URL contained in the campaign.
         */
        urls_clicked?: Array<{
            /**
             * The unique id for the link.
             */
            readonly id?: string;
            /**
             * The URL for the link in the campaign.
             */
            readonly url?: string;
            /**
             * The number of total clicks for a link.
             */
            readonly total_clicks?: number;
            /**
             * The percentage of total clicks a link generated for a campaign.
             */
            readonly click_percentage?: number;
            /**
             * Number of unique clicks for a link.
             */
            readonly unique_clicks?: number;
            /**
             * The percentage of unique clicks a link generated for a campaign.
             */
            readonly unique_click_percentage?: number;
            /**
             * The date and time for the last recorded click for a link in ISO 8601 format.
             */
            readonly last_click?: string;
            /**
             * A breakdown of clicks by different groups of an A/B Split campaign. Does not return information about Multivariate Campaigns.
             */
            ab_split?: {
                /**
                 * Stats for Group A.
                 */
                'a'?: {
                    /**
                     * The total number of clicks for Group A.
                     */
                    readonly total_clicks_a?: number;
                    /**
                     * The percentage of total clicks for Group A.
                     */
                    readonly click_percentage_a?: number;
                    /**
                     * The number of unique clicks for Group A.
                     */
                    readonly unique_clicks_a?: number;
                    /**
                     * The percentage of unique clicks for Group A.
                     */
                    readonly unique_click_percentage_a?: number;
                };
                /**
                 * Stats for Group B.
                 */
                'b'?: {
                    /**
                     * The total number of clicks for Group B.
                     */
                    readonly total_clicks_b?: number;
                    /**
                     * The percentage of total clicks for Group B.
                     */
                    readonly click_percentage_b?: number;
                    /**
                     * The number of unique clicks for Group B.
                     */
                    readonly unique_clicks_b?: number;
                    /**
                     * The percentage of unique clicks for Group B.
                     */
                    readonly unique_click_percentage_b?: number;
                };
            };
            /**
             * The campaign id.
             */
            readonly campaign_id?: string;
            /**
             * A list of link types and descriptions for the API schema documents.
             */
            readonly _links?: Array<{
                /**
                 * As with an HTML 'rel' attribute, this describes the type of link.
                 */
                readonly rel?: string;
                /**
                 * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
                 */
                readonly href?: string;
                /**
                 * The HTTP method that should be used when accessing the URL defined in 'href'.
                 */
                readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
                /**
                 * For GETs, this is a URL representing the schema that the response should conform to.
                 */
                readonly targetSchema?: string;
                /**
                 * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
                 */
                readonly schema?: string;
            }>;
        }>;
        /**
         * The campaign id.
         */
        readonly campaign_id?: string;
        /**
         * The total number of items matching the query regardless of pagination.
         */
        readonly total_items?: number;
        /**
         * A list of link types and descriptions for the API schema documents.
         */
        readonly _links?: Array<{
            /**
             * As with an HTML 'rel' attribute, this describes the type of link.
             */
            readonly rel?: string;
            /**
             * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
             */
            readonly href?: string;
            /**
             * The HTTP method that should be used when accessing the URL defined in 'href'.
             */
            readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
            /**
             * For GETs, this is a URL representing the schema that the response should conform to.
             */
            readonly targetSchema?: string;
            /**
             * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
             */
            readonly schema?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reports/{campaign_id}/click-details',
            path: {
                'campaign_id': campaignId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'count': count,
                'offset': offset,
            },
        });
    }

    /**
     * Get campaign link details
     * Get click details for a specific link in a campaign.
     * @returns any
     * @throws ApiError
     */
    public getReportsIdClickDetailsId({
        campaignId,
        linkId,
        fields,
        excludeFields,
    }: {
        /**
         * The unique id for the campaign.
         */
        campaignId: string,
        /**
         * The id for the link.
         */
        linkId: string,
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
    }): CancelablePromise<{
        /**
         * The unique id for the link.
         */
        readonly id?: string;
        /**
         * The URL for the link in the campaign.
         */
        readonly url?: string;
        /**
         * The number of total clicks for a link.
         */
        readonly total_clicks?: number;
        /**
         * The percentage of total clicks a link generated for a campaign.
         */
        readonly click_percentage?: number;
        /**
         * Number of unique clicks for a link.
         */
        readonly unique_clicks?: number;
        /**
         * The percentage of unique clicks a link generated for a campaign.
         */
        readonly unique_click_percentage?: number;
        /**
         * The date and time for the last recorded click for a link in ISO 8601 format.
         */
        readonly last_click?: string;
        /**
         * A breakdown of clicks by different groups of an A/B Split campaign. Does not return information about Multivariate Campaigns.
         */
        ab_split?: {
            /**
             * Stats for Group A.
             */
            'a'?: {
                /**
                 * The total number of clicks for Group A.
                 */
                readonly total_clicks_a?: number;
                /**
                 * The percentage of total clicks for Group A.
                 */
                readonly click_percentage_a?: number;
                /**
                 * The number of unique clicks for Group A.
                 */
                readonly unique_clicks_a?: number;
                /**
                 * The percentage of unique clicks for Group A.
                 */
                readonly unique_click_percentage_a?: number;
            };
            /**
             * Stats for Group B.
             */
            'b'?: {
                /**
                 * The total number of clicks for Group B.
                 */
                readonly total_clicks_b?: number;
                /**
                 * The percentage of total clicks for Group B.
                 */
                readonly click_percentage_b?: number;
                /**
                 * The number of unique clicks for Group B.
                 */
                readonly unique_clicks_b?: number;
                /**
                 * The percentage of unique clicks for Group B.
                 */
                readonly unique_click_percentage_b?: number;
            };
        };
        /**
         * The campaign id.
         */
        readonly campaign_id?: string;
        /**
         * A list of link types and descriptions for the API schema documents.
         */
        readonly _links?: Array<{
            /**
             * As with an HTML 'rel' attribute, this describes the type of link.
             */
            readonly rel?: string;
            /**
             * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
             */
            readonly href?: string;
            /**
             * The HTTP method that should be used when accessing the URL defined in 'href'.
             */
            readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
            /**
             * For GETs, this is a URL representing the schema that the response should conform to.
             */
            readonly targetSchema?: string;
            /**
             * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
             */
            readonly schema?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reports/{campaign_id}/click-details/{link_id}',
            path: {
                'campaign_id': campaignId,
                'link_id': linkId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * List clicked link subscribers
     * Get information about list members who clicked on a specific link in a campaign.
     * @returns any
     * @throws ApiError
     */
    public getReportsIdClickDetailsIdMembers({
        campaignId,
        linkId,
        fields,
        excludeFields,
        count = 10,
        offset,
    }: {
        /**
         * The unique id for the campaign.
         */
        campaignId: string,
        /**
         * The id for the link.
         */
        linkId: string,
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
        /**
         * The number of records to return. Default value is 10. Maximum value is 1000
         */
        count?: number,
        /**
         * Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
         */
        offset?: number,
    }): CancelablePromise<{
        /**
         * An array of objects, each representing a member who clicked a specific link within a campaign.
         */
        members?: Array<{
            /**
             * The MD5 hash of the lowercase version of the list member's email address.
             */
            readonly email_id?: string;
            /**
             * Email address for a subscriber.
             */
            readonly email_address?: string;
            /**
             * A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure.
             */
            merge_fields?: Record<string, any>;
            /**
             * [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber.
             */
            readonly vip?: boolean;
            /**
             * The total number of times the subscriber clicked on the link.
             */
            readonly clicks?: number;
            /**
             * The campaign id.
             */
            readonly campaign_id?: string;
            /**
             * The id for the tracked URL in the campaign.
             */
            readonly url_id?: string;
            /**
             * The list id.
             */
            readonly list_id?: string;
            /**
             * The status of the list used, namely if it's deleted or disabled.
             */
            readonly list_is_active?: boolean;
            /**
             * The status of the member, namely if they are subscribed, unsubscribed, deleted, non-subscribed, transactional, pending, or need reconfirmation.
             */
            readonly contact_status?: string;
            /**
             * A list of link types and descriptions for the API schema documents.
             */
            readonly _links?: Array<{
                /**
                 * As with an HTML 'rel' attribute, this describes the type of link.
                 */
                readonly rel?: string;
                /**
                 * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
                 */
                readonly href?: string;
                /**
                 * The HTTP method that should be used when accessing the URL defined in 'href'.
                 */
                readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
                /**
                 * For GETs, this is a URL representing the schema that the response should conform to.
                 */
                readonly targetSchema?: string;
                /**
                 * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
                 */
                readonly schema?: string;
            }>;
        }>;
        /**
         * The campaign id.
         */
        readonly campaign_id?: string;
        /**
         * The total number of items matching the query regardless of pagination.
         */
        readonly total_items?: number;
        /**
         * A list of link types and descriptions for the API schema documents.
         */
        readonly _links?: Array<{
            /**
             * As with an HTML 'rel' attribute, this describes the type of link.
             */
            readonly rel?: string;
            /**
             * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
             */
            readonly href?: string;
            /**
             * The HTTP method that should be used when accessing the URL defined in 'href'.
             */
            readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
            /**
             * For GETs, this is a URL representing the schema that the response should conform to.
             */
            readonly targetSchema?: string;
            /**
             * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
             */
            readonly schema?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reports/{campaign_id}/click-details/{link_id}/members',
            path: {
                'campaign_id': campaignId,
                'link_id': linkId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'count': count,
                'offset': offset,
            },
        });
    }

    /**
     * Get clicked link subscriber
     * Get information about a specific subscriber who clicked a link in a specific campaign.
     * @returns any
     * @throws ApiError
     */
    public getReportsIdClickDetailsIdMembersId({
        campaignId,
        linkId,
        subscriberHash,
        fields,
        excludeFields,
    }: {
        /**
         * The unique id for the campaign.
         */
        campaignId: string,
        /**
         * The id for the link.
         */
        linkId: string,
        /**
         * The MD5 hash of the lowercase version of the list member's email address.
         */
        subscriberHash: string,
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
    }): CancelablePromise<{
        /**
         * The MD5 hash of the lowercase version of the list member's email address.
         */
        readonly email_id?: string;
        /**
         * Email address for a subscriber.
         */
        readonly email_address?: string;
        /**
         * A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure.
         */
        merge_fields?: Record<string, any>;
        /**
         * [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber.
         */
        readonly vip?: boolean;
        /**
         * The total number of times the subscriber clicked on the link.
         */
        readonly clicks?: number;
        /**
         * The campaign id.
         */
        readonly campaign_id?: string;
        /**
         * The id for the tracked URL in the campaign.
         */
        readonly url_id?: string;
        /**
         * The list id.
         */
        readonly list_id?: string;
        /**
         * The status of the list used, namely if it's deleted or disabled.
         */
        readonly list_is_active?: boolean;
        /**
         * The status of the member, namely if they are subscribed, unsubscribed, deleted, non-subscribed, transactional, pending, or need reconfirmation.
         */
        readonly contact_status?: string;
        /**
         * A list of link types and descriptions for the API schema documents.
         */
        readonly _links?: Array<{
            /**
             * As with an HTML 'rel' attribute, this describes the type of link.
             */
            readonly rel?: string;
            /**
             * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
             */
            readonly href?: string;
            /**
             * The HTTP method that should be used when accessing the URL defined in 'href'.
             */
            readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
            /**
             * For GETs, this is a URL representing the schema that the response should conform to.
             */
            readonly targetSchema?: string;
            /**
             * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
             */
            readonly schema?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reports/{campaign_id}/click-details/{link_id}/members/{subscriber_hash}',
            path: {
                'campaign_id': campaignId,
                'link_id': linkId,
                'subscriber_hash': subscriberHash,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * List campaign open details
     * Get detailed information about any campaign emails that were opened by a list member.
     * @returns any
     * @throws ApiError
     */
    public getReportsIdOpenDetails({
        campaignId,
        fields,
        excludeFields,
        count = 10,
        offset,
        since,
    }: {
        /**
         * The unique id for the campaign.
         */
        campaignId: string,
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
        /**
         * The number of records to return. Default value is 10. Maximum value is 1000
         */
        count?: number,
        /**
         * Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
         */
        offset?: number,
        /**
         * Restrict results to campaign open events that occur after a specific time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
         */
        since?: string,
    }): CancelablePromise<{
        /**
         * An array of objects, each representing a list member who opened a campaign email. Each members object will contain information about the number of total opens by a single member, as well as timestamps for each open event.
         */
        members?: Array<{
            /**
             * The unique id for the campaign.
             */
            readonly campaign_id?: string;
            /**
             * The unique id for the list.
             */
            readonly list_id?: string;
            /**
             * The status of the list used, namely if it's deleted or disabled.
             */
            readonly list_is_active?: boolean;
            /**
             * The status of the member, namely if they are subscribed, unsubscribed, deleted, non-subscribed, transactional, pending, or need reconfirmation.
             */
            readonly contact_status?: string;
            /**
             * The MD5 hash of the lowercase version of the list member's email address.
             */
            readonly email_id?: string;
            /**
             * Email address for a subscriber.
             */
            readonly email_address?: string;
            /**
             * A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure.
             */
            merge_fields?: Record<string, any>;
            /**
             * [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber.
             */
            readonly vip?: boolean;
            /**
             * The total number of times the this campaign was opened by the list member.
             */
            readonly opens_count?: number;
            /**
             * An array of timestamps for each time a list member opened the campaign. If a list member opens an email multiple times, this will return a separate timestamp for each open event.
             */
            opens?: Array<{
                /**
                 * The date and time recorded for the action in ISO 8601 format.
                 */
                timestamp?: string;
            }>;
            /**
             * A list of link types and descriptions for the API schema documents.
             */
            readonly _links?: Array<{
                /**
                 * As with an HTML 'rel' attribute, this describes the type of link.
                 */
                readonly rel?: string;
                /**
                 * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
                 */
                readonly href?: string;
                /**
                 * The HTTP method that should be used when accessing the URL defined in 'href'.
                 */
                readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
                /**
                 * For GETs, this is a URL representing the schema that the response should conform to.
                 */
                readonly targetSchema?: string;
                /**
                 * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
                 */
                readonly schema?: string;
            }>;
        }>;
        /**
         * The campaign id.
         */
        readonly campaign_id?: string;
        /**
         * The total number of opens matching the query regardless of pagination.
         */
        total_opens?: number;
        /**
         * The total number of items matching the query regardless of pagination.
         */
        readonly total_items?: number;
        /**
         * A list of link types and descriptions for the API schema documents.
         */
        readonly _links?: Array<{
            /**
             * As with an HTML 'rel' attribute, this describes the type of link.
             */
            readonly rel?: string;
            /**
             * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
             */
            readonly href?: string;
            /**
             * The HTTP method that should be used when accessing the URL defined in 'href'.
             */
            readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
            /**
             * For GETs, this is a URL representing the schema that the response should conform to.
             */
            readonly targetSchema?: string;
            /**
             * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
             */
            readonly schema?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reports/{campaign_id}/open-details',
            path: {
                'campaign_id': campaignId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'count': count,
                'offset': offset,
                'since': since,
            },
        });
    }

    /**
     * Get opened campaign subscriber
     * Get information about a specific subscriber who opened a campaign.
     * @returns any
     * @throws ApiError
     */
    public getReportsIdOpenDetailsIdMembersId({
        campaignId,
        subscriberHash,
        fields,
        excludeFields,
    }: {
        /**
         * The unique id for the campaign.
         */
        campaignId: string,
        /**
         * The MD5 hash of the lowercase version of the list member's email address.
         */
        subscriberHash: string,
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
    }): CancelablePromise<{
        /**
         * The unique id for the campaign.
         */
        readonly campaign_id?: string;
        /**
         * The unique id for the list.
         */
        readonly list_id?: string;
        /**
         * The status of the list used, namely if it's deleted or disabled.
         */
        readonly list_is_active?: boolean;
        /**
         * The status of the member, namely if they are subscribed, unsubscribed, deleted, non-subscribed, transactional, pending, or need reconfirmation.
         */
        readonly contact_status?: string;
        /**
         * The MD5 hash of the lowercase version of the list member's email address.
         */
        readonly email_id?: string;
        /**
         * Email address for a subscriber.
         */
        readonly email_address?: string;
        /**
         * A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure.
         */
        merge_fields?: Record<string, any>;
        /**
         * [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber.
         */
        readonly vip?: boolean;
        /**
         * The total number of times the this campaign was opened by the list member.
         */
        readonly opens_count?: number;
        /**
         * An array of timestamps for each time a list member opened the campaign. If a list member opens an email multiple times, this will return a separate timestamp for each open event.
         */
        opens?: Array<{
            /**
             * The date and time recorded for the action in ISO 8601 format.
             */
            timestamp?: string;
        }>;
        /**
         * A list of link types and descriptions for the API schema documents.
         */
        readonly _links?: Array<{
            /**
             * As with an HTML 'rel' attribute, this describes the type of link.
             */
            readonly rel?: string;
            /**
             * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
             */
            readonly href?: string;
            /**
             * The HTTP method that should be used when accessing the URL defined in 'href'.
             */
            readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
            /**
             * For GETs, this is a URL representing the schema that the response should conform to.
             */
            readonly targetSchema?: string;
            /**
             * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
             */
            readonly schema?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reports/{campaign_id}/open-details/{subscriber_hash}',
            path: {
                'campaign_id': campaignId,
                'subscriber_hash': subscriberHash,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * List domain performance stats
     * Get statistics for the top-performing email domains in a campaign.
     * @returns any
     * @throws ApiError
     */
    public getReportsIdDomainPerformance({
        campaignId,
        fields,
        excludeFields,
    }: {
        /**
         * The unique id for the campaign.
         */
        campaignId: string,
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
    }): CancelablePromise<{
        /**
         * The top 5 email domains based on total delivered emails.
         */
        readonly domains?: Array<{
            /**
             * The name of the domain (gmail.com, hotmail.com, yahoo.com).
             */
            readonly domain?: string;
            /**
             * The number of emails sent to that specific domain.
             */
            readonly emails_sent?: number;
            /**
             * The number of bounces at a domain.
             */
            readonly bounces?: number;
            /**
             * The number of opens for a domain.
             */
            readonly opens?: number;
            /**
             * The number of clicks for a domain.
             */
            readonly clicks?: number;
            /**
             * The total number of unsubscribes for a domain.
             */
            readonly unsubs?: number;
            /**
             * The number of successful deliveries for a domain.
             */
            readonly delivered?: number;
            /**
             * The percentage of total emails that went to this domain.
             */
            readonly emails_pct?: number;
            /**
             * The percentage of total bounces from this domain.
             */
            readonly bounces_pct?: number;
            /**
             * The percentage of total opens from this domain.
             */
            readonly opens_pct?: number;
            /**
             * The percentage of total clicks from this domain.
             */
            readonly clicks_pct?: number;
            /**
             * The percentage of total unsubscribes from this domain.
             */
            readonly unsubs_pct?: number;
        }>;
        /**
         * The total number of emails sent for the campaign.
         */
        readonly total_sent?: number;
        /**
         * The unique id for the campaign.
         */
        readonly campaign_id?: string;
        /**
         * The total number of items matching the query regardless of pagination.
         */
        readonly total_items?: number;
        /**
         * A list of link types and descriptions for the API schema documents.
         */
        readonly _links?: Array<{
            /**
             * As with an HTML 'rel' attribute, this describes the type of link.
             */
            readonly rel?: string;
            /**
             * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
             */
            readonly href?: string;
            /**
             * The HTTP method that should be used when accessing the URL defined in 'href'.
             */
            readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
            /**
             * For GETs, this is a URL representing the schema that the response should conform to.
             */
            readonly targetSchema?: string;
            /**
             * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
             */
            readonly schema?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reports/{campaign_id}/domain-performance',
            path: {
                'campaign_id': campaignId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * List EepURL activity
     * Get a summary of social activity for the campaign, tracked by EepURL.
     * @returns any
     * @throws ApiError
     */
    public getReportsIdEepurl({
        campaignId,
        fields,
        excludeFields,
    }: {
        /**
         * The unique id for the campaign.
         */
        campaignId: string,
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
    }): CancelablePromise<{
        /**
         * A summary of Twitter activity for a campaign.
         */
        twitter?: {
            /**
             * The number of tweets including a link to the campaign.
             */
            readonly tweets?: number;
            /**
             * The day and time of the first recorded tweet with a link to the campaign.
             */
            readonly first_tweet?: string;
            /**
             * The day and time of the last recorded tweet with a link to the campaign.
             */
            readonly last_tweet?: string;
            /**
             * The number of retweets that include a link to the campaign.
             */
            readonly retweets?: number;
            /**
             * A summary of tweets that include a link to the campaign.
             */
            readonly statuses?: Array<{
                /**
                 * The body of the tweet.
                 */
                readonly status?: string;
                /**
                 * The Twitter handle for the author of the tweet.
                 */
                readonly screen_name?: string;
                /**
                 * The individual id for the tweet.
                 */
                readonly status_id?: string;
                /**
                 * A timestamp for the tweet.
                 */
                readonly datetime?: string;
                /**
                 * A 'true' or 'false' status of whether the tweet is a retweet.
                 */
                readonly is_retweet?: boolean;
            }>;
        };
        /**
         * A summary of the click-throughs on the campaign's URL.
         */
        readonly clicks?: {
            /**
             * The total number of clicks to the campaign's URL.
             */
            readonly clicks?: number;
            /**
             * The timestamp for the first click to the URL.
             */
            readonly first_click?: string;
            /**
             * The timestamp for the last click to the URL.
             */
            readonly last_click?: string;
            /**
             * A summary of the top click locations.
             */
            readonly locations?: Array<{
                /**
                 * The two-digit country code for a recorded click.
                 */
                country?: string;
                /**
                 * If available, a specific region where the click was recorded.
                 */
                region?: string;
            }>;
        };
        /**
         * A summary of the top referrers for the campaign.
         */
        readonly referrers?: Array<{
            /**
             * A referrer (truncated to 100 bytes).
             */
            referrer?: string;
            /**
             * The number of clicks a single referrer generated.
             */
            clicks?: number;
            /**
             * The timestamp for the first click from this referrer.
             */
            first_click?: string;
            /**
             * The timestamp for the last click from this referrer.
             */
            last_click?: string;
        }>;
        /**
         * The shortened link used for tracking.
         */
        readonly eepurl?: string;
        /**
         * The unique id for the campaign.
         */
        readonly campaign_id?: string;
        /**
         * The total number of items matching the query regardless of pagination.
         */
        readonly total_items?: number;
        /**
         * A list of link types and descriptions for the API schema documents.
         */
        readonly _links?: Array<{
            /**
             * As with an HTML 'rel' attribute, this describes the type of link.
             */
            readonly rel?: string;
            /**
             * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
             */
            readonly href?: string;
            /**
             * The HTTP method that should be used when accessing the URL defined in 'href'.
             */
            readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
            /**
             * For GETs, this is a URL representing the schema that the response should conform to.
             */
            readonly targetSchema?: string;
            /**
             * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
             */
            readonly schema?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reports/{campaign_id}/eepurl',
            path: {
                'campaign_id': campaignId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * List email activity
     * Get a list of member's subscriber activity in a specific campaign.
     * @returns any
     * @throws ApiError
     */
    public getReportsIdEmailActivity({
        campaignId,
        fields,
        excludeFields,
        count = 10,
        offset,
        since,
    }: {
        /**
         * The unique id for the campaign.
         */
        campaignId: string,
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
        /**
         * The number of records to return. Default value is 10. Maximum value is 1000
         */
        count?: number,
        /**
         * Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
         */
        offset?: number,
        /**
         * Restrict results to email activity events that occur after a specific time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
         */
        since?: string,
    }): CancelablePromise<{
        /**
         * An array of members that were sent the campaign.
         */
        emails?: Array<{
            /**
             * The unique id for the campaign.
             */
            readonly campaign_id?: string;
            /**
             * The unique id for the list.
             */
            readonly list_id?: string;
            /**
             * The status of the list used, namely if it's deleted or disabled.
             */
            readonly list_is_active?: boolean;
            /**
             * The MD5 hash of the lowercase version of the list member's email address.
             */
            readonly email_id?: string;
            /**
             * Email address for a subscriber.
             */
            readonly email_address?: string;
            /**
             * An array of objects, each showing an interaction with the email.
             */
            activity?: Array<{
                /**
                 * One of the following actions: 'open', 'click', or 'bounce'
                 */
                action?: string;
                /**
                 * If the action is a 'bounce', the type of bounce received: 'hard', 'soft'.
                 */
                type?: string;
                /**
                 * The date and time recorded for the action in ISO 8601 format.
                 */
                timestamp?: string;
                /**
                 * If the action is a 'click', the URL on which the member clicked.
                 */
                url?: string;
                /**
                 * The IP address recorded for the action.
                 */
                ip?: string;
            }>;
            /**
             * A list of link types and descriptions for the API schema documents.
             */
            readonly _links?: Array<{
                /**
                 * As with an HTML 'rel' attribute, this describes the type of link.
                 */
                readonly rel?: string;
                /**
                 * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
                 */
                readonly href?: string;
                /**
                 * The HTTP method that should be used when accessing the URL defined in 'href'.
                 */
                readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
                /**
                 * For GETs, this is a URL representing the schema that the response should conform to.
                 */
                readonly targetSchema?: string;
                /**
                 * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
                 */
                readonly schema?: string;
            }>;
        }>;
        /**
         * The unique id for the sent campaign.
         */
        readonly campaign_id?: string;
        /**
         * The total number of items matching the query regardless of pagination.
         */
        readonly total_items?: number;
        /**
         * A list of link types and descriptions for the API schema documents.
         */
        readonly _links?: Array<{
            /**
             * As with an HTML 'rel' attribute, this describes the type of link.
             */
            readonly rel?: string;
            /**
             * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
             */
            readonly href?: string;
            /**
             * The HTTP method that should be used when accessing the URL defined in 'href'.
             */
            readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
            /**
             * For GETs, this is a URL representing the schema that the response should conform to.
             */
            readonly targetSchema?: string;
            /**
             * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
             */
            readonly schema?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reports/{campaign_id}/email-activity',
            path: {
                'campaign_id': campaignId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'count': count,
                'offset': offset,
                'since': since,
            },
        });
    }

    /**
     * Get subscriber email activity
     * Get a specific list member's activity in a campaign including opens, clicks, and bounces.
     * @returns any
     * @throws ApiError
     */
    public getReportsIdEmailActivityId({
        campaignId,
        subscriberHash,
        fields,
        excludeFields,
        since,
    }: {
        /**
         * The unique id for the campaign.
         */
        campaignId: string,
        /**
         * The MD5 hash of the lowercase version of the list member's email address.
         */
        subscriberHash: string,
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
        /**
         * Restrict results to email activity events that occur after a specific time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
         */
        since?: string,
    }): CancelablePromise<{
        /**
         * The unique id for the campaign.
         */
        readonly campaign_id?: string;
        /**
         * The unique id for the list.
         */
        readonly list_id?: string;
        /**
         * The status of the list used, namely if it's deleted or disabled.
         */
        readonly list_is_active?: boolean;
        /**
         * The MD5 hash of the lowercase version of the list member's email address.
         */
        readonly email_id?: string;
        /**
         * Email address for a subscriber.
         */
        readonly email_address?: string;
        /**
         * An array of objects, each showing an interaction with the email.
         */
        activity?: Array<{
            /**
             * One of the following actions: 'open', 'click', or 'bounce'
             */
            action?: string;
            /**
             * If the action is a 'bounce', the type of bounce received: 'hard', 'soft'.
             */
            type?: string;
            /**
             * The date and time recorded for the action in ISO 8601 format.
             */
            timestamp?: string;
            /**
             * If the action is a 'click', the URL on which the member clicked.
             */
            url?: string;
            /**
             * The IP address recorded for the action.
             */
            ip?: string;
        }>;
        /**
         * A list of link types and descriptions for the API schema documents.
         */
        readonly _links?: Array<{
            /**
             * As with an HTML 'rel' attribute, this describes the type of link.
             */
            readonly rel?: string;
            /**
             * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
             */
            readonly href?: string;
            /**
             * The HTTP method that should be used when accessing the URL defined in 'href'.
             */
            readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
            /**
             * For GETs, this is a URL representing the schema that the response should conform to.
             */
            readonly targetSchema?: string;
            /**
             * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
             */
            readonly schema?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reports/{campaign_id}/email-activity/{subscriber_hash}',
            path: {
                'campaign_id': campaignId,
                'subscriber_hash': subscriberHash,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'since': since,
            },
        });
    }

    /**
     * List top open activities
     * Get top open locations for a specific campaign.
     * @returns any
     * @throws ApiError
     */
    public getReportsIdLocations({
        campaignId,
        fields,
        excludeFields,
        count = 10,
        offset,
    }: {
        /**
         * The unique id for the campaign.
         */
        campaignId: string,
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
        /**
         * The number of records to return. Default value is 10. Maximum value is 1000
         */
        count?: number,
        /**
         * Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
         */
        offset?: number,
    }): CancelablePromise<{
        /**
         * An array of objects, each representing a top location for opens.
         */
        locations?: Array<{
            /**
             * The ISO 3166 2 digit country code.
             */
            readonly country_code?: string;
            /**
             * An internal code for the region representing the more specific location area such as city or state. When this is blank, it indicates we know the country, but not the region.
             */
            readonly region?: string;
            /**
             * The name of the region, if we have one. For blank "region" values, this will be "Rest of Country".
             */
            readonly region_name?: string;
            /**
             * The number of unique campaign opens for a region.
             */
            readonly opens?: number;
        }>;
        /**
         * The campaign id.
         */
        readonly campaign_id?: string;
        /**
         * The total number of items matching the query regardless of pagination.
         */
        readonly total_items?: number;
        /**
         * A list of link types and descriptions for the API schema documents.
         */
        readonly _links?: Array<{
            /**
             * As with an HTML 'rel' attribute, this describes the type of link.
             */
            readonly rel?: string;
            /**
             * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
             */
            readonly href?: string;
            /**
             * The HTTP method that should be used when accessing the URL defined in 'href'.
             */
            readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
            /**
             * For GETs, this is a URL representing the schema that the response should conform to.
             */
            readonly targetSchema?: string;
            /**
             * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
             */
            readonly schema?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reports/{campaign_id}/locations',
            path: {
                'campaign_id': campaignId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'count': count,
                'offset': offset,
            },
        });
    }

    /**
     * List campaign recipients
     * Get information about campaign recipients.
     * @returns any
     * @throws ApiError
     */
    public getReportsIdSentTo({
        campaignId,
        fields,
        excludeFields,
        count = 10,
        offset,
    }: {
        /**
         * The unique id for the campaign.
         */
        campaignId: string,
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
        /**
         * The number of records to return. Default value is 10. Maximum value is 1000
         */
        count?: number,
        /**
         * Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
         */
        offset?: number,
    }): CancelablePromise<{
        /**
         * An array of objects, each representing a campaign recipient.
         */
        sent_to?: Array<{
            /**
             * The MD5 hash of the lowercase version of the list member's email address.
             */
            readonly email_id?: string;
            /**
             * Email address for a subscriber.
             */
            readonly email_address?: string;
            /**
             * A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure.
             */
            merge_fields?: Record<string, any>;
            /**
             * [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber.
             */
            readonly vip?: boolean;
            /**
             * The status of the member ('sent', 'hard' for hard bounce, or 'soft' for soft bounce).
             */
            status?: string;
            /**
             * The number of times a campaign was opened by this member.
             */
            open_count?: number;
            /**
             * The date and time of the last open for this member in ISO 8601 format.
             */
            last_open?: string;
            /**
             * For A/B Split Campaigns, the group the member was apart of ('a', 'b', or 'winner').
             */
            absplit_group?: string;
            /**
             * For campaigns sent with timewarp, the time zone group the member is apart of.
             */
            gmt_offset?: number;
            /**
             * The campaign id.
             */
            readonly campaign_id?: string;
            /**
             * The unique list id.
             */
            readonly list_id?: string;
            /**
             * The status of the list used, namely if it's deleted or disabled.
             */
            readonly list_is_active?: boolean;
            /**
             * A list of link types and descriptions for the API schema documents.
             */
            readonly _links?: Array<{
                /**
                 * As with an HTML 'rel' attribute, this describes the type of link.
                 */
                readonly rel?: string;
                /**
                 * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
                 */
                readonly href?: string;
                /**
                 * The HTTP method that should be used when accessing the URL defined in 'href'.
                 */
                readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
                /**
                 * For GETs, this is a URL representing the schema that the response should conform to.
                 */
                readonly targetSchema?: string;
                /**
                 * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
                 */
                readonly schema?: string;
            }>;
        }>;
        /**
         * The campaign id.
         */
        readonly campaign_id?: string;
        /**
         * The total number of items matching the query regardless of pagination.
         */
        readonly total_items?: number;
        /**
         * A list of link types and descriptions for the API schema documents.
         */
        readonly _links?: Array<{
            /**
             * As with an HTML 'rel' attribute, this describes the type of link.
             */
            readonly rel?: string;
            /**
             * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
             */
            readonly href?: string;
            /**
             * The HTTP method that should be used when accessing the URL defined in 'href'.
             */
            readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
            /**
             * For GETs, this is a URL representing the schema that the response should conform to.
             */
            readonly targetSchema?: string;
            /**
             * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
             */
            readonly schema?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reports/{campaign_id}/sent-to',
            path: {
                'campaign_id': campaignId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'count': count,
                'offset': offset,
            },
        });
    }

    /**
     * Get campaign recipient info
     * Get information about a specific campaign recipient.
     * @returns any
     * @throws ApiError
     */
    public getReportsIdSentToId({
        campaignId,
        subscriberHash,
        fields,
        excludeFields,
    }: {
        /**
         * The unique id for the campaign.
         */
        campaignId: string,
        /**
         * The MD5 hash of the lowercase version of the list member's email address.
         */
        subscriberHash: string,
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
    }): CancelablePromise<{
        /**
         * The MD5 hash of the lowercase version of the list member's email address.
         */
        readonly email_id?: string;
        /**
         * Email address for a subscriber.
         */
        readonly email_address?: string;
        /**
         * A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure.
         */
        merge_fields?: Record<string, any>;
        /**
         * [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber.
         */
        readonly vip?: boolean;
        /**
         * The status of the member ('sent', 'hard' for hard bounce, or 'soft' for soft bounce).
         */
        status?: string;
        /**
         * The number of times a campaign was opened by this member.
         */
        open_count?: number;
        /**
         * The date and time of the last open for this member in ISO 8601 format.
         */
        last_open?: string;
        /**
         * For A/B Split Campaigns, the group the member was apart of ('a', 'b', or 'winner').
         */
        absplit_group?: string;
        /**
         * For campaigns sent with timewarp, the time zone group the member is apart of.
         */
        gmt_offset?: number;
        /**
         * The campaign id.
         */
        readonly campaign_id?: string;
        /**
         * The unique list id.
         */
        readonly list_id?: string;
        /**
         * The status of the list used, namely if it's deleted or disabled.
         */
        readonly list_is_active?: boolean;
        /**
         * A list of link types and descriptions for the API schema documents.
         */
        readonly _links?: Array<{
            /**
             * As with an HTML 'rel' attribute, this describes the type of link.
             */
            readonly rel?: string;
            /**
             * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
             */
            readonly href?: string;
            /**
             * The HTTP method that should be used when accessing the URL defined in 'href'.
             */
            readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
            /**
             * For GETs, this is a URL representing the schema that the response should conform to.
             */
            readonly targetSchema?: string;
            /**
             * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
             */
            readonly schema?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reports/{campaign_id}/sent-to/{subscriber_hash}',
            path: {
                'campaign_id': campaignId,
                'subscriber_hash': subscriberHash,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * List child campaign reports
     * Get a list of reports with child campaigns for a specific parent campaign.
     * @returns any
     * @throws ApiError
     */
    public getReportsIdSubReportsId({
        campaignId,
        fields,
        excludeFields,
    }: {
        /**
         * The unique id for the campaign.
         */
        campaignId: string,
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
    }): CancelablePromise<{
        /**
         * An array of objects, each representing a report resource.
         */
        reports?: Array<{
            /**
             * A string that uniquely identifies this campaign.
             */
            id?: string;
            /**
             * The title of the campaign.
             */
            readonly campaign_title?: string;
            /**
             * The type of campaign (regular, plain-text, ab_split, rss, automation, variate, or auto).
             */
            type?: string;
            /**
             * The unique list id.
             */
            readonly list_id?: string;
            /**
             * The status of the list used, namely if it's deleted or disabled.
             */
            readonly list_is_active?: boolean;
            /**
             * The name of the list.
             */
            readonly list_name?: string;
            /**
             * The subject line for the campaign.
             */
            readonly subject_line?: string;
            /**
             * The preview text for the campaign.
             */
            preview_text?: string;
            /**
             * The total number of emails sent for this campaign.
             */
            emails_sent?: number;
            /**
             * The number of abuse reports generated for this campaign.
             */
            abuse_reports?: number;
            /**
             * The total number of unsubscribed members for this campaign.
             */
            readonly unsubscribed?: number;
            /**
             * The date and time a campaign was sent in ISO 8601 format.
             */
            readonly send_time?: string;
            /**
             * For RSS campaigns, the date and time of the last send in ISO 8601 format.
             */
            readonly rss_last_send?: string;
            /**
             * An object describing the bounce summary for the campaign.
             */
            bounces?: {
                /**
                 * The total number of hard bounced email addresses.
                 */
                hard_bounces?: number;
                /**
                 * The total number of soft bounced email addresses.
                 */
                soft_bounces?: number;
                /**
                 * The total number of addresses that were syntax-related bounces.
                 */
                syntax_errors?: number;
            };
            /**
             * An object describing the forwards and forward activity for the campaign.
             */
            forwards?: {
                /**
                 * How many times the campaign has been forwarded.
                 */
                forwards_count?: number;
                /**
                 * How many times the forwarded campaign has been opened.
                 */
                forwards_opens?: number;
            };
            /**
             * An object describing the open activity for the campaign.
             */
            opens?: {
                /**
                 * The total number of opens for a campaign.
                 */
                opens_total?: number;
                /**
                 * The total number of unique opens.
                 */
                unique_opens?: number;
                /**
                 * The number of unique opens divided by the total number of successful deliveries.
                 */
                open_rate?: number;
                /**
                 * The date and time of the last recorded open in ISO 8601 format.
                 */
                last_open?: string;
            };
            /**
             * An object describing the click activity for the campaign.
             */
            clicks?: {
                /**
                 * The total number of clicks for the campaign.
                 */
                clicks_total?: number;
                /**
                 * The total number of unique clicks for links across a campaign.
                 */
                unique_clicks?: number;
                /**
                 * The total number of subscribers who clicked on a campaign.
                 */
                unique_subscriber_clicks?: number;
                /**
                 * The number of unique clicks divided by the total number of successful deliveries.
                 */
                click_rate?: number;
                /**
                 * The date and time of the last recorded click for the campaign in ISO 8601 format.
                 */
                last_click?: string;
            };
            /**
             * An object describing campaign engagement on Facebook.
             */
            facebook_likes?: {
                /**
                 * The number of recipients who liked the campaign on Facebook.
                 */
                recipient_likes?: number;
                /**
                 * The number of unique likes.
                 */
                unique_likes?: number;
                /**
                 * The number of Facebook likes for the campaign.
                 */
                facebook_likes?: number;
            };
            /**
             * The average campaign statistics for your industry.
             */
            industry_stats?: {
                /**
                 * The type of business industry associated with your account. For example: retail, education, etc.
                 */
                type?: string;
                /**
                 * The industry open rate.
                 */
                open_rate?: number;
                /**
                 * The industry click rate.
                 */
                click_rate?: number;
                /**
                 * The industry bounce rate.
                 */
                bounce_rate?: number;
                /**
                 * The industry unopened rate.
                 */
                unopen_rate?: number;
                /**
                 * The industry unsubscribe rate.
                 */
                unsub_rate?: number;
                /**
                 * The industry abuse rate.
                 */
                abuse_rate?: number;
            };
            /**
             * The average campaign statistics for your list. This won't be present if we haven't calculated it yet for this list.
             */
            list_stats?: {
                /**
                 * The average number of subscriptions per month for the list.
                 */
                readonly sub_rate?: number;
                /**
                 * The average number of unsubscriptions per month for the list.
                 */
                readonly unsub_rate?: number;
                /**
                 * The average open rate (a percentage represented as a number between 0 and 100) per campaign for the list.
                 */
                readonly open_rate?: number;
                /**
                 * The average click rate (a percentage represented as a number between 0 and 100) per campaign for the list.
                 */
                readonly click_rate?: number;
            };
            /**
             * General stats about different groups of an A/B Split campaign. Does not return information about Multivariate Campaigns.
             */
            ab_split?: {
                /**
                 * Stats for Campaign A.
                 */
                'a'?: {
                    /**
                     * Bounces for Campaign A.
                     */
                    bounces?: number;
                    /**
                     * Abuse reports for Campaign A.
                     */
                    abuse_reports?: number;
                    /**
                     * Unsubscribes for Campaign A.
                     */
                    unsubs?: number;
                    /**
                     * Recipient Clicks for Campaign A.
                     */
                    recipient_clicks?: number;
                    /**
                     * Forwards for Campaign A.
                     */
                    forwards?: number;
                    /**
                     * Opens from forwards for Campaign A.
                     */
                    forwards_opens?: number;
                    /**
                     * Opens for Campaign A.
                     */
                    opens?: number;
                    /**
                     * The last open for Campaign A.
                     */
                    last_open?: string;
                    /**
                     * Unique opens for Campaign A.
                     */
                    unique_opens?: number;
                };
                /**
                 * Stats for Campaign B.
                 */
                'b'?: {
                    /**
                     * Bounces for Campaign B.
                     */
                    bounces?: number;
                    /**
                     * Abuse reports for Campaign B.
                     */
                    abuse_reports?: number;
                    /**
                     * Unsubscribes for Campaign B.
                     */
                    unsubs?: number;
                    /**
                     * Recipients clicks for Campaign B.
                     */
                    recipient_clicks?: number;
                    /**
                     * Forwards for Campaign B.
                     */
                    forwards?: number;
                    /**
                     * Opens for forwards from Campaign B.
                     */
                    forwards_opens?: number;
                    /**
                     * Opens for Campaign B.
                     */
                    opens?: number;
                    /**
                     * The last open for Campaign B.
                     */
                    last_open?: string;
                    /**
                     * Unique opens for Campaign B.
                     */
                    unique_opens?: number;
                };
            };
            /**
             * An hourly breakdown of sends, opens, and clicks if a campaign is sent using timewarp.
             */
            timewarp?: Array<{
                /**
                 * For campaigns sent with timewarp, the time zone group the member is apart of.
                 */
                gmt_offset?: number;
                /**
                 * The number of opens.
                 */
                opens?: number;
                /**
                 * The date and time of the last open in ISO 8601 format.
                 */
                last_open?: string;
                /**
                 * The number of unique opens.
                 */
                unique_opens?: number;
                /**
                 * The number of clicks.
                 */
                clicks?: number;
                /**
                 * The date and time of the last click in ISO 8601 format.
                 */
                last_click?: string;
                /**
                 * The number of unique clicks.
                 */
                unique_clicks?: number;
                /**
                 * The number of bounces.
                 */
                bounces?: number;
            }>;
            /**
             * An hourly breakdown of the performance of the campaign over the first 24 hours.
             */
            timeseries?: Array<{
                /**
                 * The date and time for the series in ISO 8601 format.
                 */
                timestamp?: string;
                /**
                 * The number of emails sent in the timeseries.
                 */
                emails_sent?: number;
                /**
                 * The number of unique opens in the timeseries.
                 */
                unique_opens?: number;
                /**
                 * The number of clicks in the timeseries.
                 */
                recipients_clicks?: number;
            }>;
            /**
             * The url and password for the [VIP report](https://mailchimp.com/help/share-a-campaign-report/).
             */
            share_report?: {
                /**
                 * The URL for the VIP report.
                 */
                readonly share_url?: string;
                /**
                 * If password protected, the password for the VIP report.
                 */
                readonly share_password?: string;
            };
            /**
             * E-Commerce stats for a campaign.
             */
            ecommerce?: {
                /**
                 * The total orders for a campaign.
                 */
                readonly total_orders?: number;
                /**
                 * The total spent for a campaign. Calculated as the sum of all order totals with no deductions.
                 */
                readonly total_spent?: number;
                /**
                 * The total revenue for a campaign. Calculated as the sum of all order totals minus shipping and tax totals.
                 */
                readonly total_revenue?: number;
                readonly currency_code?: string;
            };
            /**
             * Updates on campaigns in the process of sending.
             */
            delivery_status?: {
                /**
                 * Whether Campaign Delivery Status is enabled for this account and campaign.
                 */
                readonly enabled?: boolean;
                /**
                 * Whether a campaign send can be canceled.
                 */
                readonly can_cancel?: boolean;
                /**
                 * The current state of a campaign delivery.
                 */
                readonly status?: 'delivering' | 'delivered' | 'canceling' | 'canceled';
                /**
                 * The total number of emails confirmed sent for this campaign so far.
                 */
                readonly emails_sent?: number;
                /**
                 * The total number of emails canceled for this campaign.
                 */
                readonly emails_canceled?: number;
            };
            /**
             * A list of link types and descriptions for the API schema documents.
             */
            readonly _links?: Array<{
                /**
                 * As with an HTML 'rel' attribute, this describes the type of link.
                 */
                readonly rel?: string;
                /**
                 * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
                 */
                readonly href?: string;
                /**
                 * The HTTP method that should be used when accessing the URL defined in 'href'.
                 */
                readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
                /**
                 * For GETs, this is a URL representing the schema that the response should conform to.
                 */
                readonly targetSchema?: string;
                /**
                 * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
                 */
                readonly schema?: string;
            }>;
        }>;
        /**
         * Unique identifier of the parent campaign
         */
        campaign_id?: string;
        /**
         * The total number of items matching the query regardless of pagination.
         */
        readonly total_items?: number;
        /**
         * A list of link types and descriptions for the API schema documents.
         */
        readonly _links?: Array<{
            /**
             * As with an HTML 'rel' attribute, this describes the type of link.
             */
            readonly rel?: string;
            /**
             * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
             */
            readonly href?: string;
            /**
             * The HTTP method that should be used when accessing the URL defined in 'href'.
             */
            readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
            /**
             * For GETs, this is a URL representing the schema that the response should conform to.
             */
            readonly targetSchema?: string;
            /**
             * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
             */
            readonly schema?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reports/{campaign_id}/sub-reports',
            path: {
                'campaign_id': campaignId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * List unsubscribed members
     * Get information about members who have unsubscribed from a specific campaign.
     * @returns any
     * @throws ApiError
     */
    public getReportsIdUnsubscribed({
        campaignId,
        fields,
        excludeFields,
        count = 10,
        offset,
    }: {
        /**
         * The unique id for the campaign.
         */
        campaignId: string,
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
        /**
         * The number of records to return. Default value is 10. Maximum value is 1000
         */
        count?: number,
        /**
         * Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
         */
        offset?: number,
    }): CancelablePromise<{
        /**
         * An array of objects, each representing a member who unsubscribed from a campaign.
         */
        unsubscribes?: Array<{
            /**
             * The MD5 hash of the lowercase version of the list member's email address.
             */
            readonly email_id?: string;
            /**
             * Email address for a subscriber.
             */
            readonly email_address?: string;
            /**
             * A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure.
             */
            merge_fields?: Record<string, any>;
            /**
             * [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber.
             */
            readonly vip?: boolean;
            /**
             * The date and time the member opted-out in ISO 8601 format.
             */
            readonly timestamp?: string;
            /**
             * If available, the reason listed by the member for unsubscribing.
             */
            readonly reason?: string;
            /**
             * The campaign id.
             */
            readonly campaign_id?: string;
            /**
             * The list id.
             */
            readonly list_id?: string;
            /**
             * The status of the list used, namely if it's deleted or disabled.
             */
            readonly list_is_active?: boolean;
            /**
             * A list of link types and descriptions for the API schema documents.
             */
            readonly _links?: Array<{
                /**
                 * As with an HTML 'rel' attribute, this describes the type of link.
                 */
                readonly rel?: string;
                /**
                 * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
                 */
                readonly href?: string;
                /**
                 * The HTTP method that should be used when accessing the URL defined in 'href'.
                 */
                readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
                /**
                 * For GETs, this is a URL representing the schema that the response should conform to.
                 */
                readonly targetSchema?: string;
                /**
                 * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
                 */
                readonly schema?: string;
            }>;
        }>;
        /**
         * The campaign id.
         */
        readonly campaign_id?: string;
        /**
         * The total number of items matching the query regardless of pagination.
         */
        readonly total_items?: number;
        /**
         * A list of link types and descriptions for the API schema documents.
         */
        readonly _links?: Array<{
            /**
             * As with an HTML 'rel' attribute, this describes the type of link.
             */
            readonly rel?: string;
            /**
             * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
             */
            readonly href?: string;
            /**
             * The HTTP method that should be used when accessing the URL defined in 'href'.
             */
            readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
            /**
             * For GETs, this is a URL representing the schema that the response should conform to.
             */
            readonly targetSchema?: string;
            /**
             * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
             */
            readonly schema?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reports/{campaign_id}/unsubscribed',
            path: {
                'campaign_id': campaignId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'count': count,
                'offset': offset,
            },
        });
    }

    /**
     * Get unsubscribed member
     * Get information about a specific list member who unsubscribed from a campaign.
     * @returns any
     * @throws ApiError
     */
    public getReportsIdUnsubscribedId({
        campaignId,
        subscriberHash,
        fields,
        excludeFields,
    }: {
        /**
         * The unique id for the campaign.
         */
        campaignId: string,
        /**
         * The MD5 hash of the lowercase version of the list member's email address.
         */
        subscriberHash: string,
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
    }): CancelablePromise<{
        /**
         * The MD5 hash of the lowercase version of the list member's email address.
         */
        readonly email_id?: string;
        /**
         * Email address for a subscriber.
         */
        readonly email_address?: string;
        /**
         * A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure.
         */
        merge_fields?: Record<string, any>;
        /**
         * [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber.
         */
        readonly vip?: boolean;
        /**
         * The date and time the member opted-out in ISO 8601 format.
         */
        readonly timestamp?: string;
        /**
         * If available, the reason listed by the member for unsubscribing.
         */
        readonly reason?: string;
        /**
         * The campaign id.
         */
        readonly campaign_id?: string;
        /**
         * The list id.
         */
        readonly list_id?: string;
        /**
         * The status of the list used, namely if it's deleted or disabled.
         */
        readonly list_is_active?: boolean;
        /**
         * A list of link types and descriptions for the API schema documents.
         */
        readonly _links?: Array<{
            /**
             * As with an HTML 'rel' attribute, this describes the type of link.
             */
            readonly rel?: string;
            /**
             * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
             */
            readonly href?: string;
            /**
             * The HTTP method that should be used when accessing the URL defined in 'href'.
             */
            readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
            /**
             * For GETs, this is a URL representing the schema that the response should conform to.
             */
            readonly targetSchema?: string;
            /**
             * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
             */
            readonly schema?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reports/{campaign_id}/unsubscribed/{subscriber_hash}',
            path: {
                'campaign_id': campaignId,
                'subscriber_hash': subscriberHash,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * List campaign product activity
     * Get breakdown of product activity for a campaign
     * @returns any Ecommerce Product Activity Instance
     * @throws ApiError
     */
    public getReportsIdEcommerceProductActivity({
        campaignId,
        fields,
        excludeFields,
        count = 10,
        offset,
        sortField,
    }: {
        /**
         * The unique id for the campaign.
         */
        campaignId: string,
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
        /**
         * The number of records to return. Default value is 10. Maximum value is 1000
         */
        count?: number,
        /**
         * Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
         */
        offset?: number,
        /**
         * Returns files sorted by the specified field.
         */
        sortField?: 'title' | 'total_revenue' | 'total_purchased',
    }): CancelablePromise<{
        products?: Array<{
            title?: string;
            sku?: string;
            image_url?: string;
            total_revenue?: number;
            total_purchased?: number;
            currency_code?: string;
            recommendation_total?: number;
            recommendation_purchased?: number;
        }>;
        /**
         * The total number of items matching the query regardless of pagination.
         */
        readonly total_items?: number;
        /**
         * A list of link types and descriptions for the API schema documents.
         */
        readonly _links?: Array<{
            /**
             * As with an HTML 'rel' attribute, this describes the type of link.
             */
            readonly rel?: string;
            /**
             * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
             */
            readonly href?: string;
            /**
             * The HTTP method that should be used when accessing the URL defined in 'href'.
             */
            readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
            /**
             * For GETs, this is a URL representing the schema that the response should conform to.
             */
            readonly targetSchema?: string;
            /**
             * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
             */
            readonly schema?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reports/{campaign_id}/ecommerce-product-activity',
            path: {
                'campaign_id': campaignId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'count': count,
                'offset': offset,
                'sort_field': sortField,
            },
        });
    }

}

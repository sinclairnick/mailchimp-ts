/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SearchCampaignsApi {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Search campaigns
     * Search all campaigns for the specified query terms.
     * @returns any
     * @throws ApiError
     */
    public getSearchCampaigns({
        query,
        fields,
        excludeFields,
    }: {
        /**
         * The search query used to filter results.
         */
        query: string,
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
         * An array of matching campaigns and snippets.
         */
        results?: Array<{
            /**
             * A summary of an individual campaign's settings and content.
             */
            campaign?: {
                /**
                 * A string that uniquely identifies this campaign.
                 */
                readonly id?: string;
                /**
                 * The ID used in the Mailchimp web application. View this campaign in your Mailchimp account at `https://{dc}.admin.mailchimp.com/campaigns/show/?id={web_id}`.
                 */
                readonly web_id?: number;
                /**
                 * If this campaign is the child of another campaign, this identifies the parent campaign. For Example, for RSS or Automation children.
                 */
                readonly parent_campaign_id?: string;
                /**
                 * There are four types of [campaigns](https://mailchimp.com/help/getting-started-with-campaigns/) you can create in Mailchimp. A/B Split campaigns have been deprecated and variate campaigns should be used instead.
                 */
                type?: 'regular' | 'plaintext' | 'absplit' | 'rss' | 'variate';
                /**
                 * The date and time the campaign was created in ISO 8601 format.
                 */
                readonly create_time?: string;
                /**
                 * The link to the campaign's archive version in ISO 8601 format.
                 */
                readonly archive_url?: string;
                /**
                 * The original link to the campaign's archive version.
                 */
                readonly long_archive_url?: string;
                /**
                 * The current status of the campaign.
                 */
                readonly status?: 'save' | 'paused' | 'schedule' | 'sending' | 'sent' | 'canceled' | 'canceling' | 'archived';
                /**
                 * The total number of emails sent for this campaign.
                 */
                readonly emails_sent?: number;
                /**
                 * The date and time a campaign was sent.
                 */
                readonly send_time?: string;
                /**
                 * How the campaign's content is put together.
                 */
                content_type?: 'template' | 'html' | 'url' | 'multichannel';
                /**
                 * Determines if the campaign needs its blocks refreshed by opening the web-based campaign editor. Deprecated and will always return false.
                 */
                readonly needs_block_refresh?: boolean;
                /**
                 * Determines if the campaign qualifies to be resent to non-openers.
                 */
                readonly resendable?: boolean;
                /**
                 * List settings for the campaign.
                 */
                recipients?: {
                    /**
                     * The unique list id.
                     */
                    list_id?: string;
                    /**
                     * The status of the list used, namely if it's deleted or disabled.
                     */
                    readonly list_is_active?: boolean;
                    /**
                     * The name of the list.
                     */
                    readonly list_name?: string;
                    /**
                     * A description of the [segment](https://mailchimp.com/help/create-and-send-to-a-segment/) used for the campaign. Formatted as a string marked up with HTML.
                     */
                    readonly segment_text?: string;
                    /**
                     * Count of the recipients on the associated list. Formatted as an integer.
                     */
                    readonly recipient_count?: number;
                    /**
                     * An object representing all segmentation options. This object should contain a `saved_segment_id` to use an existing segment, or you can create a new segment by including both `match` and `conditions` options.
                     */
                    segment_opts?: {
                        /**
                         * The id for an existing saved segment.
                         */
                        saved_segment_id?: number;
                        /**
                         * The prebuilt segment id, if a prebuilt segment has been designated for this campaign.
                         */
                        prebuilt_segment_id?: string;
                        /**
                         * Segment match type.
                         */
                        match?: 'any' | 'all';
                        /**
                         * Segment match conditions. There are multiple possible types, see the [condition types documentation](https://mailchimp.com/developer/marketing/docs/alternative-schemas/#segment-condition-schemas).
                         */
                        conditions?: Array<any>;
                    };
                };
                /**
                 * The settings for your campaign, including subject, from name, reply-to address, and more.
                 */
                settings?: {
                    /**
                     * The subject line for the campaign.
                     */
                    subject_line?: string;
                    /**
                     * The preview text for the campaign.
                     */
                    preview_text?: string;
                    /**
                     * The title of the campaign.
                     */
                    title?: string;
                    /**
                     * The 'from' name on the campaign (not an email address).
                     */
                    from_name?: string;
                    /**
                     * The reply-to email address for the campaign.
                     */
                    reply_to?: string;
                    /**
                     * Use Mailchimp Conversation feature to manage out-of-office replies.
                     */
                    use_conversation?: boolean;
                    /**
                     * The campaign's custom 'To' name. Typically the first name [audience field](https://mailchimp.com/help/getting-started-with-merge-tags/).
                     */
                    to_name?: string;
                    /**
                     * If the campaign is listed in a folder, the id for that folder.
                     */
                    folder_id?: string;
                    /**
                     * Whether Mailchimp [authenticated](https://mailchimp.com/help/about-email-authentication/) the campaign. Defaults to `true`.
                     */
                    authenticate?: boolean;
                    /**
                     * Automatically append Mailchimp's [default footer](https://mailchimp.com/help/about-campaign-footers/) to the campaign.
                     */
                    auto_footer?: boolean;
                    /**
                     * Automatically inline the CSS included with the campaign content.
                     */
                    inline_css?: boolean;
                    /**
                     * Automatically tweet a link to the [campaign archive](https://mailchimp.com/help/about-email-campaign-archives-and-pages/) page when the campaign is sent.
                     */
                    auto_tweet?: boolean;
                    /**
                     * An array of [Facebook](https://mailchimp.com/help/connect-or-disconnect-the-facebook-integration/) page ids to auto-post to.
                     */
                    auto_fb_post?: Array<string>;
                    /**
                     * Allows Facebook comments on the campaign (also force-enables the Campaign Archive toolbar). Defaults to `true`.
                     */
                    fb_comments?: boolean;
                    /**
                     * Send this campaign using [Timewarp](https://mailchimp.com/help/use-timewarp/).
                     */
                    readonly timewarp?: boolean;
                    /**
                     * The id for the template used in this campaign.
                     */
                    template_id?: number;
                    /**
                     * Whether the campaign uses the drag-and-drop editor.
                     */
                    readonly drag_and_drop?: boolean;
                };
                /**
                 * The settings specific to A/B test campaigns.
                 */
                variate_settings?: {
                    /**
                     * ID for the winning combination.
                     */
                    readonly winning_combination_id?: string;
                    /**
                     * ID of the campaign that was sent to the remaining recipients based on the winning combination.
                     */
                    readonly winning_campaign_id?: string;
                    /**
                     * The combination that performs the best. This may be determined automatically by click rate, open rate, or total revenue -- or you may choose manually based on the reporting data you find the most valuable. For Multivariate Campaigns testing send_time, winner_criteria is ignored. For Multivariate Campaigns with 'manual' as the winner_criteria, the winner must be chosen in the Mailchimp web application.
                     */
                    winner_criteria?: 'opens' | 'clicks' | 'manual' | 'total_revenue';
                    /**
                     * The number of minutes to wait before choosing the winning campaign. The value of wait_time must be greater than 0 and in whole hours, specified in minutes.
                     */
                    wait_time?: number;
                    /**
                     * The percentage of recipients to send the test combinations to, must be a value between 10 and 100.
                     */
                    test_size?: number;
                    /**
                     * The possible subject lines to test. If no subject lines are provided, settings.subject_line will be used.
                     */
                    subject_lines?: Array<string>;
                    /**
                     * The possible send times to test. The times provided should be in the format YYYY-MM-DD HH:MM:SS. If send_times are provided to test, the test_size will be set to 100% and winner_criteria will be ignored.
                     */
                    send_times?: Array<string>;
                    /**
                     * The possible from names. The number of from_names provided must match the number of reply_to_addresses. If no from_names are provided, settings.from_name will be used.
                     */
                    from_names?: Array<string>;
                    /**
                     * The possible reply-to addresses. The number of reply_to_addresses provided must match the number of from_names. If no reply_to_addresses are provided, settings.reply_to will be used.
                     */
                    reply_to_addresses?: Array<string>;
                    /**
                     * Descriptions of possible email contents. To set campaign contents, make a PUT request to /campaigns/{campaign_id}/content with the field 'variate_contents'.
                     */
                    readonly contents?: Array<string>;
                    /**
                     * Combinations of possible variables used to build emails.
                     */
                    readonly combinations?: Array<{
                        /**
                         * Unique ID for the combination.
                         */
                        id?: string;
                        /**
                         * The index of `variate_settings.subject_lines` used.
                         */
                        subject_line?: number;
                        /**
                         * The index of `variate_settings.send_times` used.
                         */
                        send_time?: number;
                        /**
                         * The index of `variate_settings.from_names` used.
                         */
                        from_name?: number;
                        /**
                         * The index of `variate_settings.reply_to_addresses` used.
                         */
                        reply_to?: number;
                        /**
                         * The index of `variate_settings.contents` used.
                         */
                        content_description?: number;
                        /**
                         * The number of recipients for this combination.
                         */
                        recipients?: number;
                    }>;
                };
                /**
                 * The tracking options for a campaign.
                 */
                tracking?: {
                    /**
                     * Whether to [track opens](https://mailchimp.com/help/about-open-tracking/). Defaults to `true`. Cannot be set to false for variate campaigns.
                     */
                    opens?: boolean;
                    /**
                     * Whether to [track clicks](https://mailchimp.com/help/enable-and-view-click-tracking/) in the HTML version of the campaign. Defaults to `true`. Cannot be set to false for variate campaigns.
                     */
                    html_clicks?: boolean;
                    /**
                     * Whether to [track clicks](https://mailchimp.com/help/enable-and-view-click-tracking/) in the plain-text version of the campaign. Defaults to `true`. Cannot be set to false for variate campaigns.
                     */
                    text_clicks?: boolean;
                    /**
                     * Deprecated
                     */
                    goal_tracking?: boolean;
                    /**
                     * Whether to enable e-commerce tracking.
                     */
                    ecomm360?: boolean;
                    /**
                     * The custom slug for [Google Analytics](https://mailchimp.com/help/integrate-google-analytics-with-mailchimp/) tracking (max of 50 bytes).
                     */
                    google_analytics?: string;
                    /**
                     * The custom slug for [ClickTale](https://mailchimp.com/help/additional-tracking-options-for-campaigns/) tracking (max of 50 bytes).
                     */
                    clicktale?: string;
                    /**
                     * Deprecated
                     */
                    salesforce?: {
                        /**
                         * Create a campaign in a connected Salesforce account.
                         */
                        campaign?: boolean;
                        /**
                         * Update contact notes for a campaign based on subscriber email addresses.
                         */
                        notes?: boolean;
                    };
                    /**
                     * Deprecated
                     */
                    capsule?: {
                        /**
                         * Update contact notes for a campaign based on subscriber email addresses.
                         */
                        notes?: boolean;
                    };
                };
                /**
                 * [RSS](https://mailchimp.com/help/share-your-blog-posts-with-mailchimp/) options for a campaign.
                 */
                rss_opts?: {
                    /**
                     * The URL for the RSS feed.
                     */
                    feed_url?: string;
                    /**
                     * The frequency of the RSS Campaign.
                     */
                    frequency?: 'daily' | 'weekly' | 'monthly';
                    /**
                     * The schedule for sending the RSS Campaign.
                     */
                    schedule?: {
                        /**
                         * The hour to send the campaign in local time. Acceptable hours are 0-23. For example, '4' would be 4am in [your account's default time zone](https://mailchimp.com/help/set-account-defaults/).
                         */
                        hour?: number;
                        /**
                         * The days of the week to send a daily RSS Campaign.
                         */
                        daily_send?: {
                            /**
                             * Sends the daily RSS Campaign on Sundays.
                             */
                            sunday?: boolean;
                            /**
                             * Sends the daily RSS Campaign on Mondays.
                             */
                            monday?: boolean;
                            /**
                             * Sends the daily RSS Campaign on Tuesdays.
                             */
                            tuesday?: boolean;
                            /**
                             * Sends the daily RSS Campaign on Wednesdays.
                             */
                            wednesday?: boolean;
                            /**
                             * Sends the daily RSS Campaign on Thursdays.
                             */
                            thursday?: boolean;
                            /**
                             * Sends the daily RSS Campaign on Fridays.
                             */
                            friday?: boolean;
                            /**
                             * Sends the daily RSS Campaign on Saturdays.
                             */
                            saturday?: boolean;
                        };
                        /**
                         * The day of the week to send a weekly RSS Campaign.
                         */
                        weekly_send_day?: 'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday';
                        /**
                         * The day of the month to send a monthly RSS Campaign. Acceptable days are 0-31, where '0' is always the last day of a month. Months with fewer than the selected number of days will not have an RSS campaign sent out that day. For example, RSS Campaigns set to send on the 30th will not go out in February.
                         */
                        monthly_send_date?: number;
                    };
                    /**
                     * The date the campaign was last sent.
                     */
                    readonly last_sent?: string;
                    /**
                     * Whether to add CSS to images in the RSS feed to constrain their width in campaigns.
                     */
                    constrain_rss_img?: boolean;
                };
                /**
                 * [A/B Testing](https://mailchimp.com/help/about-ab-testing-campaigns/) options for a campaign.
                 */
                readonly ab_split_opts?: {
                    /**
                     * The type of AB split to run.
                     */
                    split_test?: 'subject' | 'from_name' | 'schedule';
                    /**
                     * How we should evaluate a winner. Based on 'opens', 'clicks', or 'manual'.
                     */
                    pick_winner?: 'opens' | 'clicks' | 'manual';
                    /**
                     * How unit of time for measuring the winner ('hours' or 'days'). This cannot be changed after a campaign is sent.
                     */
                    wait_units?: 'hours' | 'days';
                    /**
                     * The amount of time to wait before picking a winner. This cannot be changed after a campaign is sent.
                     */
                    wait_time?: number;
                    /**
                     * The size of the split groups. Campaigns split based on 'schedule' are forced to have a 50/50 split. Valid split integers are between 1-50.
                     */
                    split_size?: number;
                    /**
                     * For campaigns split on 'From Name', the name for Group A.
                     */
                    from_name_a?: string;
                    /**
                     * For campaigns split on 'From Name', the name for Group B.
                     */
                    from_name_b?: string;
                    /**
                     * For campaigns split on 'From Name', the reply-to address for Group A.
                     */
                    reply_email_a?: string;
                    /**
                     * For campaigns split on 'From Name', the reply-to address for Group B.
                     */
                    reply_email_b?: string;
                    /**
                     * For campaigns split on 'Subject Line', the subject line for Group A.
                     */
                    subject_a?: string;
                    /**
                     * For campaigns split on 'Subject Line', the subject line for Group B.
                     */
                    subject_b?: string;
                    /**
                     * The send time for Group A.
                     */
                    send_time_a?: string;
                    /**
                     * The send time for Group B.
                     */
                    send_time_b?: string;
                    /**
                     * The send time for the winning version.
                     */
                    send_time_winner?: string;
                };
                /**
                 * The preview for the campaign, rendered by social networks like Facebook and Twitter. [Learn more](https://mailchimp.com/help/enable-and-customize-social-cards/).
                 */
                social_card?: {
                    /**
                     * The url for the header image for the card.
                     */
                    image_url?: string;
                    /**
                     * A short summary of the campaign to display.
                     */
                    description?: string;
                    /**
                     * The title for the card. Typically the subject line of the campaign.
                     */
                    title?: string;
                };
                /**
                 * For sent campaigns, a summary of opens, clicks, and e-commerce data.
                 */
                report_summary?: {
                    /**
                     * The total number of opens for a campaign.
                     */
                    readonly opens?: number;
                    /**
                     * The number of unique opens.
                     */
                    readonly unique_opens?: number;
                    /**
                     * The number of unique opens divided by the total number of successful deliveries.
                     */
                    readonly open_rate?: number;
                    /**
                     * The total number of clicks for an campaign.
                     */
                    readonly clicks?: number;
                    /**
                     * The number of unique clicks.
                     */
                    readonly subscriber_clicks?: number;
                    /**
                     * The number of unique clicks divided by the total number of successful deliveries.
                     */
                    readonly click_rate?: number;
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
                    };
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
            };
            snippet?: string;
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
            url: '/search-campaigns',
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'query': query,
            },
        });
    }

}

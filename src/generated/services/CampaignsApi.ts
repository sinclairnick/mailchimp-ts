/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CampaignsApi {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List campaigns
     * Get all campaigns in an account.
     * @returns any
     * @throws ApiError
     */
    public getCampaigns({
        fields,
        excludeFields,
        count = 10,
        offset,
        type,
        status,
        beforeSendTime,
        sinceSendTime,
        beforeCreateTime,
        sinceCreateTime,
        listId,
        folderId,
        memberId,
        sortField,
        sortDir,
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
         * The status of the campaign.
         */
        status?: 'save' | 'paused' | 'schedule' | 'sending' | 'sent',
        /**
         * Restrict the response to campaigns sent before the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
         */
        beforeSendTime?: string,
        /**
         * Restrict the response to campaigns sent after the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
         */
        sinceSendTime?: string,
        /**
         * Restrict the response to campaigns created before the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
         */
        beforeCreateTime?: string,
        /**
         * Restrict the response to campaigns created after the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
         */
        sinceCreateTime?: string,
        /**
         * The unique id for the list.
         */
        listId?: string,
        /**
         * The unique folder id.
         */
        folderId?: string,
        /**
         * Retrieve campaigns sent to a particular list member. Member ID is The MD5 hash of the lowercase version of the list member’s email address.
         */
        memberId?: string,
        /**
         * Returns files sorted by the specified field.
         */
        sortField?: 'create_time' | 'send_time',
        /**
         * Determines the order direction for sorted results.
         */
        sortDir?: 'ASC' | 'DESC',
    }): CancelablePromise<{
        /**
         * An array of campaigns.
         */
        campaigns?: Array<{
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
            url: '/campaigns',
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'count': count,
                'offset': offset,
                'type': type,
                'status': status,
                'before_send_time': beforeSendTime,
                'since_send_time': sinceSendTime,
                'before_create_time': beforeCreateTime,
                'since_create_time': sinceCreateTime,
                'list_id': listId,
                'folder_id': folderId,
                'member_id': memberId,
                'sort_field': sortField,
                'sort_dir': sortDir,
            },
        });
    }

    /**
     * Add campaign
     * Create a new Mailchimp campaign.
     * @returns any
     * @throws ApiError
     */
    public postCampaigns({
        body,
    }: {
        body: {
            /**
             * There are four types of [campaigns](https://mailchimp.com/help/getting-started-with-campaigns/) you can create in Mailchimp. A/B Split campaigns have been deprecated and variate campaigns should be used instead.
             */
            type: 'regular' | 'plaintext' | 'absplit' | 'rss' | 'variate';
            /**
             * List settings for the campaign.
             */
            recipients?: {
                /**
                 * The unique list id.
                 */
                list_id: string;
                /**
                 * An object representing all segmentation options. This object should contain a `saved_segment_id` to use an existing segment, or you can create a new segment by including both `match` and `conditions` options.
                 */
                segment_opts?: {
                    /**
                     * The id for an existing saved segment.
                     */
                    saved_segment_id?: number;
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
                 * The reply-to email address for the campaign. Note: while this field is not required for campaign creation, it is required for sending.
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
                 * The id of the template to use.
                 */
                template_id?: number;
            };
            /**
             * The settings specific to A/B test campaigns.
             */
            variate_settings?: {
                /**
                 * The combination that performs the best. This may be determined automatically by click rate, open rate, or total revenue -- or you may choose manually based on the reporting data you find the most valuable. For Multivariate Campaigns testing send_time, winner_criteria is ignored. For Multivariate Campaigns with 'manual' as the winner_criteria, the winner must be chosen in the Mailchimp web application.
                 */
                winner_criteria: 'opens' | 'clicks' | 'manual' | 'total_revenue';
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
             * [RSS](https://mailchimp.com/help/share-your-blog-posts-with-mailchimp/) options, specific to an RSS campaign.
             */
            rss_opts?: {
                /**
                 * The URL for the RSS feed.
                 */
                feed_url: string;
                /**
                 * The frequency of the RSS Campaign.
                 */
                frequency: 'daily' | 'weekly' | 'monthly';
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
                 * Whether to add CSS to images in the RSS feed to constrain their width in campaigns.
                 */
                constrain_rss_img?: boolean;
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
             * How the campaign's content is put together. The old drag and drop editor uses 'template' while the new editor uses 'multichannel'. Defaults to template.
             */
            content_type?: 'template' | 'multichannel';
        },
    }): CancelablePromise<{
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
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/campaigns',
            body: body,
        });
    }

    /**
     * Get campaign info
     * Get information about a specific campaign.
     * @returns any
     * @throws ApiError
     */
    public getCampaignsId({
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
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/campaigns/{campaign_id}',
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
     * Update campaign settings
     * Update some or all of the settings for a specific campaign.
     * @returns any
     * @throws ApiError
     */
    public patchCampaignsId({
        campaignId,
        body,
    }: {
        /**
         * The unique id for the campaign.
         */
        campaignId: string,
        body: {
            /**
             * List settings for the campaign.
             */
            recipients?: {
                /**
                 * The unique list id.
                 */
                list_id: string;
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
            settings: {
                /**
                 * The subject line for the campaign.
                 */
                subject_line: string;
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
                from_name: string;
                /**
                 * The reply-to email address for the campaign.
                 */
                reply_to: string;
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
                 * The id of the template to use.
                 */
                template_id?: number;
            };
            /**
             * The settings specific to A/B test campaigns.
             */
            variate_settings?: {
                /**
                 * The combination that performs the best. This may be determined automatically by click rate, open rate, or total revenue -- or you may choose manually based on the reporting data you find the most valuable. For Multivariate Campaigns testing send_time, winner_criteria is ignored. For Multivariate Campaigns with 'manual' as the winner_criteria, the winner must be chosen in the Mailchimp web application.
                 */
                winner_criteria: 'opens' | 'clicks' | 'manual' | 'total_revenue';
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
                feed_url: string;
                /**
                 * The frequency of the RSS Campaign.
                 */
                frequency: 'daily' | 'weekly' | 'monthly';
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
                 * Whether to add CSS to images in the RSS feed to constrain their width in campaigns.
                 */
                constrain_rss_img?: boolean;
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
        },
    }): CancelablePromise<{
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
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/campaigns/{campaign_id}',
            path: {
                'campaign_id': campaignId,
            },
            body: body,
        });
    }

    /**
     * Delete campaign
     * Remove a campaign from your Mailchimp account.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public deleteCampaignsId({
        campaignId,
    }: {
        /**
         * The unique id for the campaign.
         */
        campaignId: string,
    }): CancelablePromise<{
        /**
         * An absolute URI that identifies the problem type. When dereferenced, it should provide human-readable documentation for the problem type.
         */
        type: string;
        /**
         * A short, human-readable summary of the problem type. It shouldn't change based on the occurrence of the problem, except for purposes of localization.
         */
        title: string;
        /**
         * The HTTP status code (RFC2616, Section 6) generated by the origin server for this occurrence of the problem.
         */
        status: number;
        /**
         * A human-readable explanation specific to this occurrence of the problem. [Learn more about errors](/developer/guides/get-started-with-mailchimp-api-3/#Errors).
         */
        detail: string;
        /**
         * A string that identifies this specific occurrence of the problem. Please provide this ID when contacting support.
         */
        instance: string;
    }> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/campaigns/{campaign_id}',
            path: {
                'campaign_id': campaignId,
            },
        });
    }

    /**
     * Cancel campaign
     * Cancel a Regular or Plain-Text Campaign after you send, before all of your recipients receive it. This feature is included with Mailchimp Pro.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public postCampaignsIdActionsCancelSend({
        campaignId,
    }: {
        /**
         * The unique id for the campaign.
         */
        campaignId: string,
    }): CancelablePromise<{
        /**
         * An absolute URI that identifies the problem type. When dereferenced, it should provide human-readable documentation for the problem type.
         */
        type: string;
        /**
         * A short, human-readable summary of the problem type. It shouldn't change based on the occurrence of the problem, except for purposes of localization.
         */
        title: string;
        /**
         * The HTTP status code (RFC2616, Section 6) generated by the origin server for this occurrence of the problem.
         */
        status: number;
        /**
         * A human-readable explanation specific to this occurrence of the problem. [Learn more about errors](/developer/guides/get-started-with-mailchimp-api-3/#Errors).
         */
        detail: string;
        /**
         * A string that identifies this specific occurrence of the problem. Please provide this ID when contacting support.
         */
        instance: string;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/campaigns/{campaign_id}/actions/cancel-send',
            path: {
                'campaign_id': campaignId,
            },
        });
    }

    /**
     * Replicate campaign
     * Replicate a campaign in saved or send status.
     * @returns any
     * @throws ApiError
     */
    public postCampaignsIdActionsReplicate({
        campaignId,
    }: {
        /**
         * The unique id for the campaign.
         */
        campaignId: string,
    }): CancelablePromise<{
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
        type: 'regular' | 'plaintext' | 'absplit' | 'rss' | 'variate';
        /**
         * The date and time the campaign was created in ISO 8601 format.
         */
        readonly create_time?: string;
        /**
         * The link to the campaign's archive version.
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
         * The date and time a campaign was sent in ISO 8601 format.
         */
        readonly send_time?: string;
        /**
         * How the campaign's content is put together ('template', 'drag_and_drop', 'html', 'url').
         */
        readonly content_type?: string;
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
            list_id: string;
            /**
             * The name of the list.
             */
            readonly list_name?: string;
            /**
             * A description of the [segment](https://mailchimp.com/help/save-and-manage-segments/) used for the campaign. Formatted as a string marked up with HTML.
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
             * Use Mailchimp Conversation feature to manage replies.
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
            readonly template_id?: number;
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
            winner_criteria: 'opens' | 'clicks' | 'manual' | 'total_revenue';
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
            feed_url: string;
            /**
             * The frequency of the RSS Campaign.
             */
            frequency: 'daily' | 'weekly' | 'monthly';
            /**
             * The schedule for sending the RSS Campaign.
             */
            schedule?: {
                /**
                 * The hour to send the campaign in local time. Acceptable hours are 0-23. For example, '4' would be 4am in [your account's default time zone](https://mailchimp.com/help/set-account-details/).
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
         * For sent campaigns, a summary of opens and clicks.
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
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/campaigns/{campaign_id}/actions/replicate',
            path: {
                'campaign_id': campaignId,
            },
        });
    }

    /**
     * Send campaign
     * Send a Mailchimp campaign. For RSS Campaigns, the campaign will send according to its schedule. All other campaigns will send immediately.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public postCampaignsIdActionsSend({
        campaignId,
    }: {
        /**
         * The unique id for the campaign.
         */
        campaignId: string,
    }): CancelablePromise<{
        /**
         * An absolute URI that identifies the problem type. When dereferenced, it should provide human-readable documentation for the problem type.
         */
        type: string;
        /**
         * A short, human-readable summary of the problem type. It shouldn't change based on the occurrence of the problem, except for purposes of localization.
         */
        title: string;
        /**
         * The HTTP status code (RFC2616, Section 6) generated by the origin server for this occurrence of the problem.
         */
        status: number;
        /**
         * A human-readable explanation specific to this occurrence of the problem. [Learn more about errors](/developer/guides/get-started-with-mailchimp-api-3/#Errors).
         */
        detail: string;
        /**
         * A string that identifies this specific occurrence of the problem. Please provide this ID when contacting support.
         */
        instance: string;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/campaigns/{campaign_id}/actions/send',
            path: {
                'campaign_id': campaignId,
            },
        });
    }

    /**
     * Schedule campaign
     * Schedule a campaign for delivery. If you're using Multivariate Campaigns to test send times or sending RSS Campaigns, use the send action instead.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public postCampaignsIdActionsSchedule({
        campaignId,
        body,
    }: {
        /**
         * The unique id for the campaign.
         */
        campaignId: string,
        body: {
            /**
             * The UTC date and time to schedule the campaign for delivery in ISO 8601 format. Campaigns may only be scheduled to send on the quarter-hour (:00, :15, :30, :45).
             */
            schedule_time: string;
            /**
             * Choose whether the campaign should use [Timewarp](https://mailchimp.com/help/use-timewarp/) when sending. Campaigns scheduled with Timewarp are localized based on the recipients' time zones. For example, a Timewarp campaign with a `schedule_time` of 13:00 will be sent to each recipient at 1:00pm in their local time. Cannot be set to `true` for campaigns using [Batch Delivery](https://mailchimp.com/help/schedule-batch-delivery/).
             */
            timewarp?: boolean;
            /**
             * Choose whether the campaign should use [Batch Delivery](https://mailchimp.com/help/schedule-batch-delivery/). Cannot be set to `true` for campaigns using [Timewarp](https://mailchimp.com/help/use-timewarp/).
             */
            batch_delivery?: {
                /**
                 * The delay, in minutes, between batches.
                 */
                batch_delay: number;
                /**
                 * The number of batches for the campaign send.
                 */
                batch_count: number;
            };
        },
    }): CancelablePromise<{
        /**
         * An absolute URI that identifies the problem type. When dereferenced, it should provide human-readable documentation for the problem type.
         */
        type: string;
        /**
         * A short, human-readable summary of the problem type. It shouldn't change based on the occurrence of the problem, except for purposes of localization.
         */
        title: string;
        /**
         * The HTTP status code (RFC2616, Section 6) generated by the origin server for this occurrence of the problem.
         */
        status: number;
        /**
         * A human-readable explanation specific to this occurrence of the problem. [Learn more about errors](/developer/guides/get-started-with-mailchimp-api-3/#Errors).
         */
        detail: string;
        /**
         * A string that identifies this specific occurrence of the problem. Please provide this ID when contacting support.
         */
        instance: string;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/campaigns/{campaign_id}/actions/schedule',
            path: {
                'campaign_id': campaignId,
            },
            body: body,
        });
    }

    /**
     * Unschedule campaign
     * Unschedule a scheduled campaign that hasn't started sending.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public postCampaignsIdActionsUnschedule({
        campaignId,
    }: {
        /**
         * The unique id for the campaign.
         */
        campaignId: string,
    }): CancelablePromise<{
        /**
         * An absolute URI that identifies the problem type. When dereferenced, it should provide human-readable documentation for the problem type.
         */
        type: string;
        /**
         * A short, human-readable summary of the problem type. It shouldn't change based on the occurrence of the problem, except for purposes of localization.
         */
        title: string;
        /**
         * The HTTP status code (RFC2616, Section 6) generated by the origin server for this occurrence of the problem.
         */
        status: number;
        /**
         * A human-readable explanation specific to this occurrence of the problem. [Learn more about errors](/developer/guides/get-started-with-mailchimp-api-3/#Errors).
         */
        detail: string;
        /**
         * A string that identifies this specific occurrence of the problem. Please provide this ID when contacting support.
         */
        instance: string;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/campaigns/{campaign_id}/actions/unschedule',
            path: {
                'campaign_id': campaignId,
            },
        });
    }

    /**
     * Send test email
     * Send a test email.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public postCampaignsIdActionsTest({
        campaignId,
        body,
    }: {
        /**
         * The unique id for the campaign.
         */
        campaignId: string,
        body: {
            /**
             * An array of email addresses to send the test email to.
             */
            test_emails: Array<string>;
            /**
             * Choose the type of test email to send.
             */
            send_type: 'html' | 'plaintext';
        },
    }): CancelablePromise<{
        /**
         * An absolute URI that identifies the problem type. When dereferenced, it should provide human-readable documentation for the problem type.
         */
        type: string;
        /**
         * A short, human-readable summary of the problem type. It shouldn't change based on the occurrence of the problem, except for purposes of localization.
         */
        title: string;
        /**
         * The HTTP status code (RFC2616, Section 6) generated by the origin server for this occurrence of the problem.
         */
        status: number;
        /**
         * A human-readable explanation specific to this occurrence of the problem. [Learn more about errors](/developer/guides/get-started-with-mailchimp-api-3/#Errors).
         */
        detail: string;
        /**
         * A string that identifies this specific occurrence of the problem. Please provide this ID when contacting support.
         */
        instance: string;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/campaigns/{campaign_id}/actions/test',
            path: {
                'campaign_id': campaignId,
            },
            body: body,
        });
    }

    /**
     * Pause rss campaign
     * Pause an RSS-Driven campaign.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public postCampaignsIdActionsPause({
        campaignId,
    }: {
        /**
         * The unique id for the campaign.
         */
        campaignId: string,
    }): CancelablePromise<{
        /**
         * An absolute URI that identifies the problem type. When dereferenced, it should provide human-readable documentation for the problem type.
         */
        type: string;
        /**
         * A short, human-readable summary of the problem type. It shouldn't change based on the occurrence of the problem, except for purposes of localization.
         */
        title: string;
        /**
         * The HTTP status code (RFC2616, Section 6) generated by the origin server for this occurrence of the problem.
         */
        status: number;
        /**
         * A human-readable explanation specific to this occurrence of the problem. [Learn more about errors](/developer/guides/get-started-with-mailchimp-api-3/#Errors).
         */
        detail: string;
        /**
         * A string that identifies this specific occurrence of the problem. Please provide this ID when contacting support.
         */
        instance: string;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/campaigns/{campaign_id}/actions/pause',
            path: {
                'campaign_id': campaignId,
            },
        });
    }

    /**
     * Resume rss campaign
     * Resume an RSS-Driven campaign.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public postCampaignsIdActionsResume({
        campaignId,
    }: {
        /**
         * The unique id for the campaign.
         */
        campaignId: string,
    }): CancelablePromise<{
        /**
         * An absolute URI that identifies the problem type. When dereferenced, it should provide human-readable documentation for the problem type.
         */
        type: string;
        /**
         * A short, human-readable summary of the problem type. It shouldn't change based on the occurrence of the problem, except for purposes of localization.
         */
        title: string;
        /**
         * The HTTP status code (RFC2616, Section 6) generated by the origin server for this occurrence of the problem.
         */
        status: number;
        /**
         * A human-readable explanation specific to this occurrence of the problem. [Learn more about errors](/developer/guides/get-started-with-mailchimp-api-3/#Errors).
         */
        detail: string;
        /**
         * A string that identifies this specific occurrence of the problem. Please provide this ID when contacting support.
         */
        instance: string;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/campaigns/{campaign_id}/actions/resume',
            path: {
                'campaign_id': campaignId,
            },
        });
    }

    /**
     * Resend campaign
     * Creates a Resend to Non-Openers version of this campaign. We will also check if this campaign meets the criteria for Resend to Non-Openers campaigns.
     * @returns any
     * @throws ApiError
     */
    public postCampaignsIdActionsCreateResend({
        campaignId,
    }: {
        /**
         * The unique id for the campaign.
         */
        campaignId: string,
    }): CancelablePromise<{
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
        type: 'regular' | 'plaintext' | 'absplit' | 'rss' | 'variate';
        /**
         * The date and time the campaign was created in ISO 8601 format.
         */
        readonly create_time?: string;
        /**
         * The link to the campaign's archive version.
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
         * The date and time a campaign was sent in ISO 8601 format.
         */
        readonly send_time?: string;
        /**
         * How the campaign's content is put together ('template', 'drag_and_drop', 'html', 'url').
         */
        readonly content_type?: string;
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
            list_id: string;
            /**
             * The name of the list.
             */
            readonly list_name?: string;
            /**
             * A description of the [segment](https://mailchimp.com/help/save-and-manage-segments/) used for the campaign. Formatted as a string marked up with HTML.
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
             * Use Mailchimp Conversation feature to manage replies.
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
            readonly template_id?: number;
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
            winner_criteria: 'opens' | 'clicks' | 'manual' | 'total_revenue';
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
            feed_url: string;
            /**
             * The frequency of the RSS Campaign.
             */
            frequency: 'daily' | 'weekly' | 'monthly';
            /**
             * The schedule for sending the RSS Campaign.
             */
            schedule?: {
                /**
                 * The hour to send the campaign in local time. Acceptable hours are 0-23. For example, '4' would be 4am in [your account's default time zone](https://mailchimp.com/help/set-account-details/).
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
         * For sent campaigns, a summary of opens and clicks.
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
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/campaigns/{campaign_id}/actions/create-resend',
            path: {
                'campaign_id': campaignId,
            },
        });
    }

    /**
     * Get campaign content
     * Get the the HTML and plain-text content for a campaign.
     * @returns any
     * @throws ApiError
     */
    public getCampaignsIdContent({
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
         * Content options for multivariate campaigns.
         */
        variate_contents?: Array<{
            /**
             * Label used to identify the content option.
             */
            content_label?: string;
            /**
             * The plain-text portion of the campaign. If left unspecified, we'll generate this automatically.
             */
            plain_text?: string;
            /**
             * The raw HTML for the campaign.
             */
            html?: string;
        }>;
        /**
         * The plain-text portion of the campaign. If left unspecified, we'll generate this automatically.
         */
        plain_text?: string;
        /**
         * The raw HTML for the campaign.
         */
        html?: string;
        /**
         * The Archive HTML for the campaign.
         */
        archive_html?: string;
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
            url: '/campaigns/{campaign_id}/content',
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
     * Set campaign content
     * Set the content for a campaign.
     * @returns any
     * @throws ApiError
     */
    public putCampaignsIdContent({
        campaignId,
        body,
    }: {
        /**
         * The unique id for the campaign.
         */
        campaignId: string,
        body: {
            /**
             * The plain-text portion of the campaign. If left unspecified, we'll generate this automatically.
             */
            plain_text?: string;
            /**
             * The raw HTML for the campaign.
             */
            html?: string;
            /**
             * When importing a campaign, the URL where the HTML lives.
             */
            url?: string;
            /**
             * Use this template to generate the HTML content of the campaign
             */
            template?: {
                /**
                 * The id of the template to use.
                 */
                id: number;
                /**
                 * Content for the sections of the template. Each key should be the unique [mc:edit area](https://mailchimp.com/help/create-editable-content-areas-with-mailchimps-template-language/) name from the template.
                 */
                sections?: any;
            };
            /**
             * Available when uploading an archive to create campaign content. The archive should include all campaign content and images. [Learn more](https://mailchimp.com/help/import-a-custom-html-template/).
             */
            archive?: {
                /**
                 * The base64-encoded representation of the archive file.
                 */
                archive_content: string;
                /**
                 * The type of encoded file. Defaults to zip.
                 */
                archive_type?: 'zip' | 'tar.gz' | 'tar.bz2' | 'tar' | 'tgz' | 'tbz';
            };
            /**
             * Content options for [Multivariate Campaigns](https://mailchimp.com/help/about-multivariate-campaigns/). Each content option must provide HTML content and may optionally provide plain text. For campaigns not testing content, only one object should be provided.
             */
            variate_contents?: Array<{
                /**
                 * The label used to identify the content option.
                 */
                content_label: string;
                /**
                 * The plain-text portion of the campaign. If left unspecified, we'll generate this automatically.
                 */
                plain_text?: string;
                /**
                 * The raw HTML for the campaign.
                 */
                html?: string;
                /**
                 * When importing a campaign, the URL for the HTML.
                 */
                url?: string;
                /**
                 * Use this template to generate the HTML content for the campaign.
                 */
                template?: {
                    /**
                     * The id of the template to use.
                     */
                    id: number;
                    /**
                     * Content for the sections of the template. Each key should be the unique [mc:edit area](https://mailchimp.com/help/create-editable-content-areas-with-mailchimps-template-language/) name from the template.
                     */
                    sections?: any;
                };
                /**
                 * Available when uploading an archive to create campaign content. The archive should include all campaign content and images. [Learn more](https://mailchimp.com/help/import-a-custom-html-template/).
                 */
                archive?: {
                    /**
                     * The base64-encoded representation of the archive file.
                     */
                    archive_content: string;
                    /**
                     * The type of encoded file. Defaults to zip.
                     */
                    archive_type?: 'zip' | 'tar.gz' | 'tar.bz2' | 'tar' | 'tgz' | 'tbz';
                };
            }>;
        },
    }): CancelablePromise<{
        /**
         * Content options for multivariate campaigns.
         */
        variate_contents?: Array<{
            /**
             * Label used to identify the content option.
             */
            content_label?: string;
            /**
             * The plain-text portion of the campaign. If left unspecified, we'll generate this automatically.
             */
            plain_text?: string;
            /**
             * The raw HTML for the campaign.
             */
            html?: string;
        }>;
        /**
         * The plain-text portion of the campaign. If left unspecified, we'll generate this automatically.
         */
        plain_text?: string;
        /**
         * The raw HTML for the campaign.
         */
        html?: string;
        /**
         * The Archive HTML for the campaign.
         */
        archive_html?: string;
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
            method: 'PUT',
            url: '/campaigns/{campaign_id}/content',
            path: {
                'campaign_id': campaignId,
            },
            body: body,
        });
    }

    /**
     * List campaign feedback
     * Get team feedback while you're working together on a Mailchimp campaign.
     * @returns any
     * @throws ApiError
     */
    public getCampaignsIdFeedback({
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
         * A collection of feedback items for a campaign.
         */
        feedback?: Array<{
            /**
             * The individual id for the feedback item.
             */
            readonly feedback_id?: number;
            /**
             * If a reply, the id of the parent feedback item.
             */
            readonly parent_id?: number;
            /**
             * The block id for the editable block that the feedback addresses.
             */
            block_id?: number;
            /**
             * The content of the feedback.
             */
            message: string;
            /**
             * The status of feedback.
             */
            is_complete?: boolean;
            /**
             * The login name of the user who created the feedback.
             */
            readonly created_by?: string;
            /**
             * The date and time the feedback item was created in ISO 8601 format.
             */
            readonly created_at?: string;
            /**
             * The date and time the feedback was last updated in ISO 8601 format.
             */
            readonly updated_at?: string;
            /**
             * The source of the feedback.
             */
            readonly source?: 'api' | 'email' | 'sms' | 'web' | 'ios' | 'android';
            /**
             * The unique id for the campaign.
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
            url: '/campaigns/{campaign_id}/feedback',
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
     * Add campaign feedback
     * Add feedback on a specific campaign.
     * @returns any
     * @throws ApiError
     */
    public postCampaignsIdFeedback({
        campaignId,
        body,
    }: {
        /**
         * The unique id for the campaign.
         */
        campaignId: string,
        body: {
            /**
             * The block id for the editable block that the feedback addresses.
             */
            block_id?: number;
            /**
             * The content of the feedback.
             */
            message: string;
            /**
             * The status of feedback.
             */
            is_complete?: boolean;
        },
    }): CancelablePromise<{
        /**
         * The individual id for the feedback item.
         */
        readonly feedback_id?: number;
        /**
         * If a reply, the id of the parent feedback item.
         */
        readonly parent_id?: number;
        /**
         * The block id for the editable block that the feedback addresses.
         */
        block_id?: number;
        /**
         * The content of the feedback.
         */
        message?: string;
        /**
         * The status of feedback.
         */
        is_complete?: boolean;
        /**
         * The login name of the user who created the feedback.
         */
        readonly created_by?: string;
        /**
         * The date and time the feedback item was created in ISO 8601 format.
         */
        readonly created_at?: string;
        /**
         * The date and time the feedback was last updated in ISO 8601 format.
         */
        readonly updated_at?: string;
        /**
         * The source of the feedback.
         */
        readonly source?: 'api' | 'email' | 'sms' | 'web' | 'ios' | 'android';
        /**
         * The unique id for the campaign.
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
            method: 'POST',
            url: '/campaigns/{campaign_id}/feedback',
            path: {
                'campaign_id': campaignId,
            },
            body: body,
        });
    }

    /**
     * Get campaign feedback message
     * Get a specific feedback message from a campaign.
     * @returns any
     * @throws ApiError
     */
    public getCampaignsIdFeedbackId({
        campaignId,
        feedbackId,
        fields,
        excludeFields,
    }: {
        /**
         * The unique id for the campaign.
         */
        campaignId: string,
        /**
         * The unique id for the feedback message.
         */
        feedbackId: string,
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
         * The individual id for the feedback item.
         */
        readonly feedback_id?: number;
        /**
         * If a reply, the id of the parent feedback item.
         */
        readonly parent_id?: number;
        /**
         * The block id for the editable block that the feedback addresses.
         */
        block_id?: number;
        /**
         * The content of the feedback.
         */
        message?: string;
        /**
         * The status of feedback.
         */
        is_complete?: boolean;
        /**
         * The login name of the user who created the feedback.
         */
        readonly created_by?: string;
        /**
         * The date and time the feedback item was created in ISO 8601 format.
         */
        readonly created_at?: string;
        /**
         * The date and time the feedback was last updated in ISO 8601 format.
         */
        readonly updated_at?: string;
        /**
         * The source of the feedback.
         */
        readonly source?: 'api' | 'email' | 'sms' | 'web' | 'ios' | 'android';
        /**
         * The unique id for the campaign.
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
            url: '/campaigns/{campaign_id}/feedback/{feedback_id}',
            path: {
                'campaign_id': campaignId,
                'feedback_id': feedbackId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * Update campaign feedback message
     * Update a specific feedback message for a campaign.
     * @returns any
     * @throws ApiError
     */
    public patchCampaignsIdFeedbackId({
        campaignId,
        feedbackId,
        body,
    }: {
        /**
         * The unique id for the campaign.
         */
        campaignId: string,
        /**
         * The unique id for the feedback message.
         */
        feedbackId: string,
        body: {
            /**
             * The block id for the editable block that the feedback addresses.
             */
            block_id?: number;
            /**
             * The content of the feedback.
             */
            message?: string;
            /**
             * The status of feedback.
             */
            is_complete?: boolean;
        },
    }): CancelablePromise<{
        /**
         * The individual id for the feedback item.
         */
        readonly feedback_id?: number;
        /**
         * If a reply, the id of the parent feedback item.
         */
        readonly parent_id?: number;
        /**
         * The block id for the editable block that the feedback addresses.
         */
        block_id?: number;
        /**
         * The content of the feedback.
         */
        message?: string;
        /**
         * The status of feedback.
         */
        is_complete?: boolean;
        /**
         * The login name of the user who created the feedback.
         */
        readonly created_by?: string;
        /**
         * The date and time the feedback item was created in ISO 8601 format.
         */
        readonly created_at?: string;
        /**
         * The date and time the feedback was last updated in ISO 8601 format.
         */
        readonly updated_at?: string;
        /**
         * The source of the feedback.
         */
        readonly source?: 'api' | 'email' | 'sms' | 'web' | 'ios' | 'android';
        /**
         * The unique id for the campaign.
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
            method: 'PATCH',
            url: '/campaigns/{campaign_id}/feedback/{feedback_id}',
            path: {
                'campaign_id': campaignId,
                'feedback_id': feedbackId,
            },
            body: body,
        });
    }

    /**
     * Delete campaign feedback message
     * Remove a specific feedback message for a campaign.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public deleteCampaignsIdFeedbackId({
        campaignId,
        feedbackId,
    }: {
        /**
         * The unique id for the campaign.
         */
        campaignId: string,
        /**
         * The unique id for the feedback message.
         */
        feedbackId: string,
    }): CancelablePromise<{
        /**
         * An absolute URI that identifies the problem type. When dereferenced, it should provide human-readable documentation for the problem type.
         */
        type: string;
        /**
         * A short, human-readable summary of the problem type. It shouldn't change based on the occurrence of the problem, except for purposes of localization.
         */
        title: string;
        /**
         * The HTTP status code (RFC2616, Section 6) generated by the origin server for this occurrence of the problem.
         */
        status: number;
        /**
         * A human-readable explanation specific to this occurrence of the problem. [Learn more about errors](/developer/guides/get-started-with-mailchimp-api-3/#Errors).
         */
        detail: string;
        /**
         * A string that identifies this specific occurrence of the problem. Please provide this ID when contacting support.
         */
        instance: string;
    }> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/campaigns/{campaign_id}/feedback/{feedback_id}',
            path: {
                'campaign_id': campaignId,
                'feedback_id': feedbackId,
            },
        });
    }

    /**
     * Get campaign send checklist
     * Review the send checklist for a campaign, and resolve any issues before sending.
     * @returns any
     * @throws ApiError
     */
    public getCampaignsIdSendChecklist({
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
         * Whether the campaign is ready to send.
         */
        is_ready?: boolean;
        /**
         * A list of feedback items to review before sending your campaign.
         */
        items?: Array<{
            /**
             * The item type.
             */
            type?: 'success' | 'warning' | 'error';
            /**
             * The ID for the specific item.
             */
            id?: number;
            /**
             * The heading for the specific item.
             */
            heading?: string;
            /**
             * Details about the specific feedback item.
             */
            details?: string;
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
            url: '/campaigns/{campaign_id}/send-checklist',
            path: {
                'campaign_id': campaignId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

}

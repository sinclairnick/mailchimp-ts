/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RootApi {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List api root resources
     * Get links to all other resources available in the API.
     * @returns any
     * @throws ApiError
     */
    public getRoot({
        fields,
        excludeFields,
    }: {
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
         * The Mailchimp account ID.
         */
        readonly account_id?: string;
        /**
         * The ID associated with the user who owns this API key. If you can login to multiple accounts, this ID will be the same for each account.
         */
        readonly login_id?: string;
        /**
         * The name of the account.
         */
        readonly account_name?: string;
        /**
         * The account email address.
         */
        readonly email?: string;
        /**
         * The first name tied to the account.
         */
        readonly first_name?: string;
        /**
         * The last name tied to the account.
         */
        readonly last_name?: string;
        /**
         * The username tied to the account.
         */
        readonly username?: string;
        /**
         * URL of the avatar for the user.
         */
        readonly avatar_url?: string;
        /**
         * The [user role](https://mailchimp.com/help/manage-user-levels-in-your-account/) for the account.
         */
        readonly role?: string;
        /**
         * The date and time that the account was created in ISO 8601 format.
         */
        readonly member_since?: string;
        /**
         * The type of pricing plan the account is on.
         */
        readonly pricing_plan_type?: 'monthly' | 'pay_as_you_go' | 'forever_free';
        /**
         * Date of first payment for monthly plans.
         */
        readonly first_payment?: string;
        /**
         * The timezone currently set for the account.
         */
        readonly account_timezone?: string;
        /**
         * The user-specified industry associated with the account.
         */
        readonly account_industry?: string;
        /**
         * Information about the account contact.
         */
        readonly contact?: {
            /**
             * The company name for the account.
             */
            readonly company?: string;
            /**
             * The street address for the account contact.
             */
            readonly addr1?: string;
            /**
             * The street address for the account contact.
             */
            readonly addr2?: string;
            /**
             * The city for the account contact.
             */
            readonly city?: string;
            /**
             * The state for the account contact.
             */
            readonly state?: string;
            /**
             * The zip code for the account contact.
             */
            readonly zip?: string;
            /**
             * The country for the account contact.
             */
            readonly country?: string;
        };
        /**
         * Legacy - whether the account includes [Mailchimp Pro](https://mailchimp.com/help/about-mailchimp-pro/).
         */
        readonly pro_enabled?: boolean;
        /**
         * The date and time of the last login for this account in ISO 8601 format.
         */
        readonly last_login?: string;
        /**
         * The total number of subscribers across all lists in the account.
         */
        readonly total_subscribers?: number;
        /**
         * The [average campaign statistics](https://mailchimp.com/resources/research/email-marketing-benchmarks/?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for all campaigns in the account's specified industry.
         */
        readonly industry_stats?: {
            /**
             * The average unique open rate for all campaigns in the account's specified industry.
             */
            readonly open_rate?: number;
            /**
             * The average bounce rate for all campaigns in the account's specified industry.
             */
            readonly bounce_rate?: number;
            /**
             * The average unique click rate for all campaigns in the account's specified industry.
             */
            readonly click_rate?: number;
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
            url: '/',
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

}

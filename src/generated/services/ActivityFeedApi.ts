/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ActivityFeedApi {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get latest chimp chatter
     * Return the Chimp Chatter for this account ordered by most recent.
     * @returns any ChimpChatter Collection
     * @throws ApiError
     */
    public getActivityFeedChimpChatter({
        count = 10,
        offset,
    }: {
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
         * An array of Chimp Chatter messages. There's a maximum of 200 messages present for an account.
         */
        readonly chimp_chatter?: Array<{
            readonly title?: string;
            readonly message?: string;
            /**
             * The type of activity
             */
            readonly type?: 'lists:new-subscriber' | 'lists:unsubscribes' | 'lists:profile-updates' | 'campaigns:facebook-likes' | 'campaigns:forward-to-friend' | 'lists:imports';
            /**
             * The date and time this activity was updated.
             */
            readonly update_time?: string;
            /**
             * URL to a report that includes this activity
             */
            readonly url?: string;
            /**
             * If it exists, list ID for the associated list
             */
            readonly list_id?: string;
            /**
             * If it exists, campaign ID for the associated campaign
             */
            readonly campaign_id?: string;
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
            url: '/activity-feed/chimp-chatter',
            query: {
                'count': count,
                'offset': offset,
            },
        });
    }

}

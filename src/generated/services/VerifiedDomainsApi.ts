/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class VerifiedDomainsApi {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get domain info
     * Get the details for a single domain on the account.
     * @returns any
     * @throws ApiError
     */
    public getVerifiedDomain({
        domainName,
    }: {
        /**
         * The domain name.
         */
        domainName: string,
    }): CancelablePromise<{
        /**
         * The name of this domain.
         */
        readonly domain?: string;
        /**
         * Whether the domain has been verified for sending.
         */
        readonly verified?: boolean;
        /**
         * Whether domain authentication is enabled for this domain.
         */
        readonly authenticated?: boolean;
        /**
         * The e-mail address receiving the two-factor challenge for this domain.
         */
        readonly verification_email?: string;
        /**
         * The date/time that the two-factor challenge was sent to the verification email.
         */
        readonly verification_sent?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/verified-domains/{domain_name}',
            path: {
                'domain_name': domainName,
            },
        });
    }

    /**
     * Delete domain
     * Delete a verified domain from the account.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public deleteVerifiedDomain({
        domainName,
    }: {
        /**
         * The domain name.
         */
        domainName: string,
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
            url: '/verified-domains/{domain_name}',
            path: {
                'domain_name': domainName,
            },
        });
    }

    /**
     * Verify domain
     * Verify a domain for sending.
     * @returns any The domain being verified for sending.
     * @throws ApiError
     */
    public verifyDomain({
        domainName,
        body,
    }: {
        /**
         * The domain name.
         */
        domainName: string,
        body: {
            /**
             * The code that was sent to the email address provided when adding a new domain to verify.
             */
            code: string;
        },
    }): CancelablePromise<{
        /**
         * The name of this domain.
         */
        readonly domain?: string;
        /**
         * Whether the domain has been verified for sending.
         */
        readonly verified?: boolean;
        /**
         * Whether domain authentication is enabled for this domain.
         */
        readonly authenticated?: boolean;
        /**
         * The e-mail address receiving the two-factor challenge for this domain.
         */
        readonly verification_email?: string;
        /**
         * The date/time that the two-factor challenge was sent to the verification email.
         */
        readonly verification_sent?: string;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/verified-domains/{domain_name}/actions/verify',
            path: {
                'domain_name': domainName,
            },
            body: body,
        });
    }

    /**
     * List sending domains
     * Get all of the sending domains on the account.
     * @returns any The domains on the account.
     * @throws ApiError
     */
    public getVerifiedDomains(): CancelablePromise<{
        /**
         * The domains on the account
         */
        readonly domains?: Array<{
            /**
             * The name of this domain.
             */
            readonly domain?: string;
            /**
             * Whether the domain has been verified for sending.
             */
            readonly verified?: boolean;
            /**
             * Whether domain authentication is enabled for this domain.
             */
            readonly authenticated?: boolean;
            /**
             * The e-mail address receiving the two-factor challenge for this domain.
             */
            readonly verification_email?: string;
            /**
             * The date/time that the two-factor challenge was sent to the verification email.
             */
            readonly verification_sent?: string;
        }>;
        /**
         * The total number of items matching the query regardless of pagination.
         */
        readonly total_items?: number;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/verified-domains',
        });
    }

    /**
     * Add domain to account
     * Add a domain to the account.
     * @returns any The newly-created domain.
     * @throws ApiError
     */
    public createVerifiedDomain({
        body,
    }: {
        body: {
            /**
             * The e-mail address at the domain you want to verify. This will receive a two-factor challenge to be used in the verify action.
             */
            verification_email: string;
        },
    }): CancelablePromise<{
        /**
         * The name of this domain.
         */
        readonly domain?: string;
        /**
         * Whether the domain has been verified for sending.
         */
        readonly verified?: boolean;
        /**
         * Whether domain authentication is enabled for this domain.
         */
        readonly authenticated?: boolean;
        /**
         * The e-mail address receiving the two-factor challenge for this domain.
         */
        readonly verification_email?: string;
        /**
         * The date/time that the two-factor challenge was sent to the verification email.
         */
        readonly verification_sent?: string;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/verified-domains',
            body: body,
        });
    }

}

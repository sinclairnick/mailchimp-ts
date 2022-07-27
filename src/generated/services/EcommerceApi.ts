/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class EcommerceApi {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List account orders
     * Get information about an account's orders.
     * @returns any
     * @throws ApiError
     */
    public getEcommerceOrders({
        fields,
        excludeFields,
        count = 10,
        offset,
        campaignId,
        outreachId,
        customerId,
        hasOutreach,
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
         * Restrict results to orders with a specific `campaign_id` value.
         */
        campaignId?: string,
        /**
         * Restrict results to orders with a specific `outreach_id` value.
         */
        outreachId?: string,
        /**
         * Restrict results to orders made by a specific customer.
         */
        customerId?: string,
        /**
         * Restrict results to orders that have an outreach attached. For example, an email campaign or Facebook ad.
         */
        hasOutreach?: boolean,
    }): CancelablePromise<{
        /**
         * An array of objects, each representing an order resource.
         */
        orders?: Array<{
            /**
             * A unique identifier for the order.
             */
            readonly id?: string;
            /**
             * Information about a specific customer.
             */
            customer?: {
                /**
                 * A unique identifier for the customer.
                 */
                readonly id?: string;
                /**
                 * The customer's email address.
                 */
                readonly email_address?: string;
                /**
                 * The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing Mailchimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your Mailchimp list [will be added as `Transactional` members](https://mailchimp.com/developer/marketing/docs/e-commerce/#customers).
                 */
                opt_in_status?: boolean;
                /**
                 * The customer's company.
                 */
                company?: string;
                /**
                 * The customer's first name.
                 */
                first_name?: string;
                /**
                 * The customer's last name.
                 */
                last_name?: string;
                /**
                 * The customer's total order count.
                 */
                readonly orders_count?: number;
                /**
                 * The total amount the customer has spent.
                 */
                readonly total_spent?: number;
                /**
                 * The customer's address.
                 */
                address?: {
                    /**
                     * The mailing address of the customer.
                     */
                    address1?: string;
                    /**
                     * An additional field for the customer's mailing address.
                     */
                    address2?: string;
                    /**
                     * The city the customer is located in.
                     */
                    city?: string;
                    /**
                     * The customer's state name or normalized province.
                     */
                    province?: string;
                    /**
                     * The two-letter code for the customer's province or state.
                     */
                    province_code?: string;
                    /**
                     * The customer's postal or zip code.
                     */
                    postal_code?: string;
                    /**
                     * The customer's country.
                     */
                    country?: string;
                    /**
                     * The two-letter code for the customer's country.
                     */
                    country_code?: string;
                };
                /**
                 * The date and time the customer was created in ISO 8601 format.
                 */
                readonly created_at?: string;
                /**
                 * The date and time the customer was last updated in ISO 8601 format.
                 */
                readonly updated_at?: string;
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
            /**
             * The unique identifier for the store.
             */
            readonly store_id?: string;
            /**
             * A string that uniquely identifies the campaign associated with an order.
             */
            campaign_id?: string;
            /**
             * The URL for the page where the buyer landed when entering the shop.
             */
            landing_site?: string;
            /**
             * The order status. Use this parameter to trigger [Order Notifications](https://mailchimp.com/developer/marketing/docs/e-commerce/#order-notifications).
             */
            financial_status?: string;
            /**
             * The fulfillment status for the order. Use this parameter to trigger [Order Notifications](https://mailchimp.com/developer/marketing/docs/e-commerce/#order-notifications).
             */
            fulfillment_status?: string;
            /**
             * The three-letter ISO 4217 code for the currency that the store accepts.
             */
            currency_code?: string;
            /**
             * The order total associated with an order.
             */
            order_total?: number;
            /**
             * The URL for the order.
             */
            order_url?: string;
            /**
             * The total amount of the discounts to be applied to the price of the order.
             */
            discount_total?: number;
            /**
             * The tax total associated with an order.
             */
            tax_total?: number;
            /**
             * The shipping total for the order.
             */
            shipping_total?: number;
            /**
             * The Mailchimp tracking code for the order. Uses the 'mc_tc' parameter in E-Commerce tracking URLs.
             */
            tracking_code?: 'prec';
            /**
             * The date and time the order was processed in ISO 8601 format.
             */
            processed_at_foreign?: string;
            /**
             * The date and time the order was cancelled in ISO 8601 format.
             */
            cancelled_at_foreign?: string;
            /**
             * The date and time the order was updated in ISO 8601 format.
             */
            updated_at_foreign?: string;
            /**
             * The shipping address for the order.
             */
            shipping_address?: {
                /**
                 * The name associated with an order's shipping address.
                 */
                name?: string;
                /**
                 * The shipping address for the order.
                 */
                address1?: string;
                /**
                 * An additional field for the shipping address.
                 */
                address2?: string;
                /**
                 * The city in the order's shipping address.
                 */
                city?: string;
                /**
                 * The state or normalized province in the order's shipping address.
                 */
                province?: string;
                /**
                 * The two-letter code for the province or state the order's shipping address is located in.
                 */
                province_code?: string;
                /**
                 * The postal or zip code in the order's shipping address.
                 */
                postal_code?: string;
                /**
                 * The country in the order's shipping address.
                 */
                country?: string;
                /**
                 * The two-letter code for the country in the shipping address.
                 */
                country_code?: string;
                /**
                 * The longitude for the shipping address location.
                 */
                longitude?: number;
                /**
                 * The latitude for the shipping address location.
                 */
                latitude?: number;
                /**
                 * The phone number for the order's shipping address
                 */
                phone?: string;
                /**
                 * The company associated with an order's shipping address.
                 */
                company?: string;
            };
            /**
             * The billing address for the order.
             */
            billing_address?: {
                /**
                 * The name associated with an order's billing address.
                 */
                name?: string;
                /**
                 * The billing address for the order.
                 */
                address1?: string;
                /**
                 * An additional field for the billing address.
                 */
                address2?: string;
                /**
                 * The city in the billing address.
                 */
                city?: string;
                /**
                 * The state or normalized province in the billing address.
                 */
                province?: string;
                /**
                 * The two-letter code for the province or state in the billing address.
                 */
                province_code?: string;
                /**
                 * The postal or zip code in the billing address.
                 */
                postal_code?: string;
                /**
                 * The country in the billing address.
                 */
                country?: string;
                /**
                 * The two-letter code for the country in the billing address.
                 */
                country_code?: string;
                /**
                 * The longitude for the billing address location.
                 */
                longitude?: number;
                /**
                 * The latitude for the billing address location.
                 */
                latitude?: number;
                /**
                 * The phone number for the billing address.
                 */
                phone?: string;
                /**
                 * The company associated with the billing address.
                 */
                company?: string;
            };
            /**
             * The promo codes applied on the order
             */
            promos?: Array<{
                /**
                 * The Promo Code
                 */
                code?: string;
                /**
                 * The amount of discount applied on the total price. For example if the total cost was $100 and the customer paid $95.5, amount_discounted will be 4.5 For free shipping set amount_discounted to 0
                 */
                amount_discounted?: number;
                /**
                 * Type of discount. For free shipping set type to fixed
                 */
                type?: 'fixed' | 'percentage';
            }>;
            /**
             * An array of the order's line items.
             */
            lines?: Array<{
                /**
                 * A unique identifier for an order line item.
                 */
                readonly id?: string;
                /**
                 * A unique identifier for the product associated with an order line item.
                 */
                product_id?: string;
                /**
                 * The name of the product for an order line item.
                 */
                readonly product_title?: string;
                /**
                 * A unique identifier for the product variant associated with an order line item.
                 */
                product_variant_id?: string;
                /**
                 * The name of the product variant for an order line item.
                 */
                readonly product_variant_title?: string;
                /**
                 * The image URL for a product.
                 */
                readonly image_url?: string;
                /**
                 * The order line item quantity.
                 */
                quantity?: number;
                /**
                 * The order line item price.
                 */
                price?: number;
                /**
                 * The total discount amount applied to a line item.
                 */
                discount?: number;
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
             * The outreach associated with this order. For example, an email campaign or Facebook ad.
             */
            outreach?: {
                /**
                 * A unique identifier for the outreach. Can be an email campaign ID.
                 */
                id?: string;
                /**
                 * The name for the outreach.
                 */
                readonly name?: string;
                /**
                 * The type of the outreach.
                 */
                readonly type?: string;
                /**
                 * The date and time the Outreach was published in ISO 8601 format.
                 */
                readonly published_time?: string;
            };
            /**
             * The tracking number associated with the order.
             */
            tracking_number?: string;
            /**
             * The tracking carrier associated with the order.
             */
            tracking_carrier?: string;
            /**
             * The tracking URL associated with the order.
             */
            tracking_url?: string;
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
            url: '/ecommerce/orders',
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'count': count,
                'offset': offset,
                'campaign_id': campaignId,
                'outreach_id': outreachId,
                'customer_id': customerId,
                'has_outreach': hasOutreach,
            },
        });
    }

    /**
     * List stores
     * Get information about all stores in the account.
     * @returns any
     * @throws ApiError
     */
    public getEcommerceStores({
        fields,
        excludeFields,
        count = 10,
        offset,
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
    }): CancelablePromise<{
        /**
         * An array of objects, each representing a store.
         */
        stores?: Array<{
            /**
             * The unique identifier for the store.
             */
            readonly id?: string;
            /**
             * The unique identifier for the list that's associated with the store. The `list_id` for a specific store can't change.
             */
            readonly list_id?: string;
            /**
             * The name of the store.
             */
            name?: string;
            /**
             * The e-commerce platform of the store.
             */
            platform?: string;
            /**
             * The store domain.  The store domain must be unique within a user account.
             */
            domain?: string;
            /**
             * Whether to disable automations because the store is currently [syncing](https://mailchimp.com/developer/marketing/docs/e-commerce/#pausing-store-automations).
             */
            is_syncing?: boolean;
            /**
             * The email address for the store.
             */
            email_address?: string;
            /**
             * The three-letter ISO 4217 code for the currency that the store accepts.
             */
            currency_code?: string;
            /**
             * The currency format for the store. For example: `$`, `£`, etc.
             */
            money_format?: string;
            /**
             * The primary locale for the store. For example: `en`, `de`, etc.
             */
            primary_locale?: string;
            /**
             * The timezone for the store.
             */
            timezone?: string;
            /**
             * The store phone number.
             */
            phone?: string;
            /**
             * The store address.
             */
            address?: {
                /**
                 * The store's mailing address.
                 */
                address1?: string;
                /**
                 * An additional field for the store's mailing address.
                 */
                address2?: string;
                /**
                 * The city the store is located in.
                 */
                city?: string;
                /**
                 * The store's state name or normalized province.
                 */
                province?: string;
                /**
                 * The two-letter code for the store's province or state.
                 */
                province_code?: string;
                /**
                 * The store's postal or zip code.
                 */
                postal_code?: string;
                /**
                 * The store's country.
                 */
                country?: string;
                /**
                 * The two-letter code for to the store's country.
                 */
                country_code?: string;
                /**
                 * The longitude of the store location.
                 */
                longitude?: number;
                /**
                 * The latitude of the store location.
                 */
                latitude?: number;
            };
            /**
             * The Connected Site associated with the store.
             */
            readonly connected_site?: {
                /**
                 * The unique identifier for the connected site.
                 */
                readonly site_foreign_id?: string;
                /**
                 * The script used to connect your site with Mailchimp.
                 */
                readonly site_script?: {
                    /**
                     * The URL used for any integrations that offer built-in support for connected sites.
                     */
                    readonly url?: string;
                    /**
                     * A pre-built script that you can copy-and-paste into your site to integrate it with Mailchimp.
                     */
                    readonly fragment?: string;
                };
            };
            /**
             * Details for the automations attached to this store.
             */
            readonly automations?: {
                /**
                 * abandonedCart automation details.
                 */
                readonly abandoned_cart?: {
                    /**
                     * Whether this store supports the abandonedCart automation.
                     */
                    readonly is_supported?: boolean;
                    /**
                     * Unique ID of automation parent campaign.
                     */
                    readonly id?: string;
                    /**
                     * Status of the abandonedCart automation.
                     */
                    readonly status?: 'save' | 'sending' | 'paused';
                };
                /**
                 * abandonedBrowse automation details. abandonedBrowse is also known as Product Retargeting Email or Retarget Site Visitors on the web.
                 */
                readonly abandoned_browse?: {
                    /**
                     * Whether this store supports the abandonedBrowse automation.
                     */
                    readonly is_supported?: boolean;
                    /**
                     * Unique ID of automation parent campaign.
                     */
                    readonly id?: string;
                    /**
                     * Status of the abandonedBrowse automation.
                     */
                    readonly status?: 'save' | 'sending' | 'paused';
                };
            };
            /**
             * The status of the list connected to the store, namely if it's deleted or disabled.
             */
            readonly list_is_active?: boolean;
            /**
             * The date and time the store was created in ISO 8601 format.
             */
            readonly created_at?: string;
            /**
             * The date and time the store was last updated in ISO 8601 format.
             */
            readonly updated_at?: string;
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
            url: '/ecommerce/stores',
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'count': count,
                'offset': offset,
            },
        });
    }

    /**
     * Add store
     * Add a new store to your Mailchimp account.
     * @returns any
     * @throws ApiError
     */
    public postEcommerceStores({
        body,
    }: {
        body: {
            /**
             * The unique identifier for the store.
             */
            id: string;
            /**
             * The unique identifier for the list associated with the store. The `list_id` for a specific store cannot change.
             */
            list_id: string;
            /**
             * The name of the store.
             */
            name: string;
            /**
             * The e-commerce platform of the store.
             */
            platform?: string;
            /**
             * The store domain. This parameter is required for Connected Sites and Google Ads.
             */
            domain?: string;
            /**
             * Whether to disable automations because the store is currently [syncing](https://mailchimp.com/developer/marketing/docs/e-commerce/#pausing-store-automations).
             */
            is_syncing?: boolean;
            /**
             * The email address for the store.
             */
            email_address?: string;
            /**
             * The three-letter ISO 4217 code for the currency that the store accepts.
             */
            currency_code: string;
            /**
             * The currency format for the store. For example: `$`, `£`, etc.
             */
            money_format?: string;
            /**
             * The primary locale for the store. For example: `en`, `de`, etc.
             */
            primary_locale?: string;
            /**
             * The timezone for the store.
             */
            timezone?: string;
            /**
             * The store phone number.
             */
            phone?: string;
            /**
             * The store address.
             */
            address?: {
                /**
                 * The store's mailing address.
                 */
                address1?: string;
                /**
                 * An additional field for the store's mailing address.
                 */
                address2?: string;
                /**
                 * The city the store is located in.
                 */
                city?: string;
                /**
                 * The store's state name or normalized province.
                 */
                province?: string;
                /**
                 * The two-letter code for the store's province or state.
                 */
                province_code?: string;
                /**
                 * The store's postal or zip code.
                 */
                postal_code?: string;
                /**
                 * The store's country.
                 */
                country?: string;
                /**
                 * The two-letter code for to the store's country.
                 */
                country_code?: string;
                /**
                 * The longitude of the store location.
                 */
                longitude?: number;
                /**
                 * The latitude of the store location.
                 */
                latitude?: number;
            };
        },
    }): CancelablePromise<{
        /**
         * The unique identifier for the store.
         */
        readonly id?: string;
        /**
         * The unique identifier for the list that's associated with the store. The `list_id` for a specific store can't change.
         */
        readonly list_id?: string;
        /**
         * The name of the store.
         */
        name?: string;
        /**
         * The e-commerce platform of the store.
         */
        platform?: string;
        /**
         * The store domain.  The store domain must be unique within a user account.
         */
        domain?: string;
        /**
         * Whether to disable automations because the store is currently [syncing](https://mailchimp.com/developer/marketing/docs/e-commerce/#pausing-store-automations).
         */
        is_syncing?: boolean;
        /**
         * The email address for the store.
         */
        email_address?: string;
        /**
         * The three-letter ISO 4217 code for the currency that the store accepts.
         */
        currency_code?: string;
        /**
         * The currency format for the store. For example: `$`, `£`, etc.
         */
        money_format?: string;
        /**
         * The primary locale for the store. For example: `en`, `de`, etc.
         */
        primary_locale?: string;
        /**
         * The timezone for the store.
         */
        timezone?: string;
        /**
         * The store phone number.
         */
        phone?: string;
        /**
         * The store address.
         */
        address?: {
            /**
             * The store's mailing address.
             */
            address1?: string;
            /**
             * An additional field for the store's mailing address.
             */
            address2?: string;
            /**
             * The city the store is located in.
             */
            city?: string;
            /**
             * The store's state name or normalized province.
             */
            province?: string;
            /**
             * The two-letter code for the store's province or state.
             */
            province_code?: string;
            /**
             * The store's postal or zip code.
             */
            postal_code?: string;
            /**
             * The store's country.
             */
            country?: string;
            /**
             * The two-letter code for to the store's country.
             */
            country_code?: string;
            /**
             * The longitude of the store location.
             */
            longitude?: number;
            /**
             * The latitude of the store location.
             */
            latitude?: number;
        };
        /**
         * The Connected Site associated with the store.
         */
        readonly connected_site?: {
            /**
             * The unique identifier for the connected site.
             */
            readonly site_foreign_id?: string;
            /**
             * The script used to connect your site with Mailchimp.
             */
            readonly site_script?: {
                /**
                 * The URL used for any integrations that offer built-in support for connected sites.
                 */
                readonly url?: string;
                /**
                 * A pre-built script that you can copy-and-paste into your site to integrate it with Mailchimp.
                 */
                readonly fragment?: string;
            };
        };
        /**
         * Details for the automations attached to this store.
         */
        readonly automations?: {
            /**
             * abandonedCart automation details.
             */
            readonly abandoned_cart?: {
                /**
                 * Whether this store supports the abandonedCart automation.
                 */
                readonly is_supported?: boolean;
                /**
                 * Unique ID of automation parent campaign.
                 */
                readonly id?: string;
                /**
                 * Status of the abandonedCart automation.
                 */
                readonly status?: 'save' | 'sending' | 'paused';
            };
            /**
             * abandonedBrowse automation details. abandonedBrowse is also known as Product Retargeting Email or Retarget Site Visitors on the web.
             */
            readonly abandoned_browse?: {
                /**
                 * Whether this store supports the abandonedBrowse automation.
                 */
                readonly is_supported?: boolean;
                /**
                 * Unique ID of automation parent campaign.
                 */
                readonly id?: string;
                /**
                 * Status of the abandonedBrowse automation.
                 */
                readonly status?: 'save' | 'sending' | 'paused';
            };
        };
        /**
         * The status of the list connected to the store, namely if it's deleted or disabled.
         */
        readonly list_is_active?: boolean;
        /**
         * The date and time the store was created in ISO 8601 format.
         */
        readonly created_at?: string;
        /**
         * The date and time the store was last updated in ISO 8601 format.
         */
        readonly updated_at?: string;
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
            url: '/ecommerce/stores',
            body: body,
        });
    }

    /**
     * Get store info
     * Get information about a specific store.
     * @returns any
     * @throws ApiError
     */
    public getEcommerceStoresId({
        storeId,
        fields,
        excludeFields,
    }: {
        /**
         * The store id.
         */
        storeId: string,
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
         * The unique identifier for the store.
         */
        readonly id?: string;
        /**
         * The unique identifier for the list that's associated with the store. The `list_id` for a specific store can't change.
         */
        readonly list_id?: string;
        /**
         * The name of the store.
         */
        name?: string;
        /**
         * The e-commerce platform of the store.
         */
        platform?: string;
        /**
         * The store domain.  The store domain must be unique within a user account.
         */
        domain?: string;
        /**
         * Whether to disable automations because the store is currently [syncing](https://mailchimp.com/developer/marketing/docs/e-commerce/#pausing-store-automations).
         */
        is_syncing?: boolean;
        /**
         * The email address for the store.
         */
        email_address?: string;
        /**
         * The three-letter ISO 4217 code for the currency that the store accepts.
         */
        currency_code?: string;
        /**
         * The currency format for the store. For example: `$`, `£`, etc.
         */
        money_format?: string;
        /**
         * The primary locale for the store. For example: `en`, `de`, etc.
         */
        primary_locale?: string;
        /**
         * The timezone for the store.
         */
        timezone?: string;
        /**
         * The store phone number.
         */
        phone?: string;
        /**
         * The store address.
         */
        address?: {
            /**
             * The store's mailing address.
             */
            address1?: string;
            /**
             * An additional field for the store's mailing address.
             */
            address2?: string;
            /**
             * The city the store is located in.
             */
            city?: string;
            /**
             * The store's state name or normalized province.
             */
            province?: string;
            /**
             * The two-letter code for the store's province or state.
             */
            province_code?: string;
            /**
             * The store's postal or zip code.
             */
            postal_code?: string;
            /**
             * The store's country.
             */
            country?: string;
            /**
             * The two-letter code for to the store's country.
             */
            country_code?: string;
            /**
             * The longitude of the store location.
             */
            longitude?: number;
            /**
             * The latitude of the store location.
             */
            latitude?: number;
        };
        /**
         * The Connected Site associated with the store.
         */
        readonly connected_site?: {
            /**
             * The unique identifier for the connected site.
             */
            readonly site_foreign_id?: string;
            /**
             * The script used to connect your site with Mailchimp.
             */
            readonly site_script?: {
                /**
                 * The URL used for any integrations that offer built-in support for connected sites.
                 */
                readonly url?: string;
                /**
                 * A pre-built script that you can copy-and-paste into your site to integrate it with Mailchimp.
                 */
                readonly fragment?: string;
            };
        };
        /**
         * Details for the automations attached to this store.
         */
        readonly automations?: {
            /**
             * abandonedCart automation details.
             */
            readonly abandoned_cart?: {
                /**
                 * Whether this store supports the abandonedCart automation.
                 */
                readonly is_supported?: boolean;
                /**
                 * Unique ID of automation parent campaign.
                 */
                readonly id?: string;
                /**
                 * Status of the abandonedCart automation.
                 */
                readonly status?: 'save' | 'sending' | 'paused';
            };
            /**
             * abandonedBrowse automation details. abandonedBrowse is also known as Product Retargeting Email or Retarget Site Visitors on the web.
             */
            readonly abandoned_browse?: {
                /**
                 * Whether this store supports the abandonedBrowse automation.
                 */
                readonly is_supported?: boolean;
                /**
                 * Unique ID of automation parent campaign.
                 */
                readonly id?: string;
                /**
                 * Status of the abandonedBrowse automation.
                 */
                readonly status?: 'save' | 'sending' | 'paused';
            };
        };
        /**
         * The status of the list connected to the store, namely if it's deleted or disabled.
         */
        readonly list_is_active?: boolean;
        /**
         * The date and time the store was created in ISO 8601 format.
         */
        readonly created_at?: string;
        /**
         * The date and time the store was last updated in ISO 8601 format.
         */
        readonly updated_at?: string;
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
            url: '/ecommerce/stores/{store_id}',
            path: {
                'store_id': storeId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * Update store
     * Update a store.
     * @returns any
     * @throws ApiError
     */
    public patchEcommerceStoresId({
        storeId,
        body,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        body: {
            /**
             * The name of the store.
             */
            name?: string;
            /**
             * The e-commerce platform of the store.
             */
            platform?: string;
            /**
             * The store domain.
             */
            domain?: string;
            /**
             * Whether to disable automations because the store is currently [syncing](https://mailchimp.com/developer/marketing/docs/e-commerce/#pausing-store-automations).
             */
            is_syncing?: boolean;
            /**
             * The email address for the store.
             */
            email_address?: string;
            /**
             * The three-letter ISO 4217 code for the currency that the store accepts.
             */
            currency_code?: string;
            /**
             * The currency format for the store. For example: `$`, `£`, etc.
             */
            money_format?: string;
            /**
             * The primary locale for the store. For example: `en`, `de`, etc.
             */
            primary_locale?: string;
            /**
             * The timezone for the store.
             */
            timezone?: string;
            /**
             * The store phone number.
             */
            phone?: string;
            /**
             * The store address.
             */
            address?: {
                /**
                 * The store's mailing address.
                 */
                address1?: string;
                /**
                 * An additional field for the store's mailing address.
                 */
                address2?: string;
                /**
                 * The city the store is located in.
                 */
                city?: string;
                /**
                 * The store's state name or normalized province.
                 */
                province?: string;
                /**
                 * The two-letter code for the store's province or state.
                 */
                province_code?: string;
                /**
                 * The store's postal or zip code.
                 */
                postal_code?: string;
                /**
                 * The store's country.
                 */
                country?: string;
                /**
                 * The two-letter code for to the store's country.
                 */
                country_code?: string;
                /**
                 * The longitude of the store location.
                 */
                longitude?: number;
                /**
                 * The latitude of the store location.
                 */
                latitude?: number;
            };
        },
    }): CancelablePromise<{
        /**
         * The unique identifier for the store.
         */
        readonly id?: string;
        /**
         * The unique identifier for the list that's associated with the store. The `list_id` for a specific store can't change.
         */
        readonly list_id?: string;
        /**
         * The name of the store.
         */
        name?: string;
        /**
         * The e-commerce platform of the store.
         */
        platform?: string;
        /**
         * The store domain.  The store domain must be unique within a user account.
         */
        domain?: string;
        /**
         * Whether to disable automations because the store is currently [syncing](https://mailchimp.com/developer/marketing/docs/e-commerce/#pausing-store-automations).
         */
        is_syncing?: boolean;
        /**
         * The email address for the store.
         */
        email_address?: string;
        /**
         * The three-letter ISO 4217 code for the currency that the store accepts.
         */
        currency_code?: string;
        /**
         * The currency format for the store. For example: `$`, `£`, etc.
         */
        money_format?: string;
        /**
         * The primary locale for the store. For example: `en`, `de`, etc.
         */
        primary_locale?: string;
        /**
         * The timezone for the store.
         */
        timezone?: string;
        /**
         * The store phone number.
         */
        phone?: string;
        /**
         * The store address.
         */
        address?: {
            /**
             * The store's mailing address.
             */
            address1?: string;
            /**
             * An additional field for the store's mailing address.
             */
            address2?: string;
            /**
             * The city the store is located in.
             */
            city?: string;
            /**
             * The store's state name or normalized province.
             */
            province?: string;
            /**
             * The two-letter code for the store's province or state.
             */
            province_code?: string;
            /**
             * The store's postal or zip code.
             */
            postal_code?: string;
            /**
             * The store's country.
             */
            country?: string;
            /**
             * The two-letter code for to the store's country.
             */
            country_code?: string;
            /**
             * The longitude of the store location.
             */
            longitude?: number;
            /**
             * The latitude of the store location.
             */
            latitude?: number;
        };
        /**
         * The Connected Site associated with the store.
         */
        readonly connected_site?: {
            /**
             * The unique identifier for the connected site.
             */
            readonly site_foreign_id?: string;
            /**
             * The script used to connect your site with Mailchimp.
             */
            readonly site_script?: {
                /**
                 * The URL used for any integrations that offer built-in support for connected sites.
                 */
                readonly url?: string;
                /**
                 * A pre-built script that you can copy-and-paste into your site to integrate it with Mailchimp.
                 */
                readonly fragment?: string;
            };
        };
        /**
         * Details for the automations attached to this store.
         */
        readonly automations?: {
            /**
             * abandonedCart automation details.
             */
            readonly abandoned_cart?: {
                /**
                 * Whether this store supports the abandonedCart automation.
                 */
                readonly is_supported?: boolean;
                /**
                 * Unique ID of automation parent campaign.
                 */
                readonly id?: string;
                /**
                 * Status of the abandonedCart automation.
                 */
                readonly status?: 'save' | 'sending' | 'paused';
            };
            /**
             * abandonedBrowse automation details. abandonedBrowse is also known as Product Retargeting Email or Retarget Site Visitors on the web.
             */
            readonly abandoned_browse?: {
                /**
                 * Whether this store supports the abandonedBrowse automation.
                 */
                readonly is_supported?: boolean;
                /**
                 * Unique ID of automation parent campaign.
                 */
                readonly id?: string;
                /**
                 * Status of the abandonedBrowse automation.
                 */
                readonly status?: 'save' | 'sending' | 'paused';
            };
        };
        /**
         * The status of the list connected to the store, namely if it's deleted or disabled.
         */
        readonly list_is_active?: boolean;
        /**
         * The date and time the store was created in ISO 8601 format.
         */
        readonly created_at?: string;
        /**
         * The date and time the store was last updated in ISO 8601 format.
         */
        readonly updated_at?: string;
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
            url: '/ecommerce/stores/{store_id}',
            path: {
                'store_id': storeId,
            },
            body: body,
        });
    }

    /**
     * Delete store
     * Delete a store. Deleting a store will also delete any associated subresources, including Customers, Orders, Products, and Carts.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public deleteEcommerceStoresId({
        storeId,
    }: {
        /**
         * The store id.
         */
        storeId: string,
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
            url: '/ecommerce/stores/{store_id}',
            path: {
                'store_id': storeId,
            },
        });
    }

    /**
     * List carts
     * Get information about a store's carts.
     * @returns any
     * @throws ApiError
     */
    public getEcommerceStoresIdCarts({
        storeId,
        fields,
        excludeFields,
        count = 10,
        offset,
    }: {
        /**
         * The store id.
         */
        storeId: string,
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
         * The store id.
         */
        store_id?: string;
        /**
         * An array of objects, each representing a cart.
         */
        carts?: Array<{
            /**
             * A unique identifier for the cart.
             */
            readonly id?: string;
            /**
             * Information about a specific customer.
             */
            customer?: {
                /**
                 * A unique identifier for the customer.
                 */
                readonly id?: string;
                /**
                 * The customer's email address.
                 */
                readonly email_address?: string;
                /**
                 * The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing Mailchimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your Mailchimp list [will be added as `Transactional` members](https://mailchimp.com/developer/marketing/docs/e-commerce/#customers).
                 */
                opt_in_status?: boolean;
                /**
                 * The customer's company.
                 */
                company?: string;
                /**
                 * The customer's first name.
                 */
                first_name?: string;
                /**
                 * The customer's last name.
                 */
                last_name?: string;
                /**
                 * The customer's total order count.
                 */
                readonly orders_count?: number;
                /**
                 * The total amount the customer has spent.
                 */
                readonly total_spent?: number;
                /**
                 * The customer's address.
                 */
                address?: {
                    /**
                     * The mailing address of the customer.
                     */
                    address1?: string;
                    /**
                     * An additional field for the customer's mailing address.
                     */
                    address2?: string;
                    /**
                     * The city the customer is located in.
                     */
                    city?: string;
                    /**
                     * The customer's state name or normalized province.
                     */
                    province?: string;
                    /**
                     * The two-letter code for the customer's province or state.
                     */
                    province_code?: string;
                    /**
                     * The customer's postal or zip code.
                     */
                    postal_code?: string;
                    /**
                     * The customer's country.
                     */
                    country?: string;
                    /**
                     * The two-letter code for the customer's country.
                     */
                    country_code?: string;
                };
                /**
                 * The date and time the customer was created in ISO 8601 format.
                 */
                readonly created_at?: string;
                /**
                 * The date and time the customer was last updated in ISO 8601 format.
                 */
                readonly updated_at?: string;
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
            /**
             * A string that uniquely identifies the campaign associated with a cart.
             */
            campaign_id?: string;
            /**
             * The URL for the cart. This parameter is required for [Abandoned Cart](https://mailchimp.com/help/create-an-abandoned-cart-email/) automations.
             */
            checkout_url?: string;
            /**
             * The three-letter ISO 4217 code for the currency that the cart uses.
             */
            currency_code?: string;
            /**
             * The order total for the cart.
             */
            order_total?: number;
            /**
             * The total tax for the cart.
             */
            tax_total?: number;
            /**
             * An array of the cart's line items.
             */
            lines?: Array<{
                /**
                 * A unique identifier for the cart line item.
                 */
                readonly id?: string;
                /**
                 * A unique identifier for the product associated with the cart line item.
                 */
                product_id?: string;
                /**
                 * The name of the product for the cart line item.
                 */
                readonly product_title?: string;
                /**
                 * A unique identifier for the product variant associated with the cart line item.
                 */
                product_variant_id?: string;
                /**
                 * The name of the product variant for the cart line item.
                 */
                readonly product_variant_title?: string;
                /**
                 * The quantity of a cart line item.
                 */
                quantity?: number;
                /**
                 * The price of a cart line item.
                 */
                price?: number;
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
             * The date and time the cart was created in ISO 8601 format.
             */
            readonly created_at?: string;
            /**
             * The date and time the cart was last updated in ISO 8601 format.
             */
            readonly updated_at?: string;
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
            url: '/ecommerce/stores/{store_id}/carts',
            path: {
                'store_id': storeId,
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
     * Add cart
     * Add a new cart to a store.
     * @returns any
     * @throws ApiError
     */
    public postEcommerceStoresIdCarts({
        storeId,
        body,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        body: {
            /**
             * A unique identifier for the cart.
             */
            id: string;
            /**
             * Information about a specific customer. For existing customers include only the `id` parameter in the `customer` object body.
             */
            customer: {
                /**
                 * A unique identifier for the customer. Limited to 50 characters.
                 */
                id: string;
                /**
                 * The customer's email address.
                 */
                email_address?: string;
                /**
                 * The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing Mailchimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your Mailchimp list [will be added as `Transactional` members](https://mailchimp.com/developer/marketing/docs/e-commerce/#customers).
                 */
                opt_in_status?: boolean;
                /**
                 * The customer's company.
                 */
                company?: string;
                /**
                 * The customer's first name.
                 */
                first_name?: string;
                /**
                 * The customer's last name.
                 */
                last_name?: string;
                /**
                 * The customer's address.
                 */
                address?: {
                    /**
                     * The mailing address of the customer.
                     */
                    address1?: string;
                    /**
                     * An additional field for the customer's mailing address.
                     */
                    address2?: string;
                    /**
                     * The city the customer is located in.
                     */
                    city?: string;
                    /**
                     * The customer's state name or normalized province.
                     */
                    province?: string;
                    /**
                     * The two-letter code for the customer's province or state.
                     */
                    province_code?: string;
                    /**
                     * The customer's postal or zip code.
                     */
                    postal_code?: string;
                    /**
                     * The customer's country.
                     */
                    country?: string;
                    /**
                     * The two-letter code for the customer's country.
                     */
                    country_code?: string;
                };
            };
            /**
             * A string that uniquely identifies the campaign for a cart.
             */
            campaign_id?: string;
            /**
             * The URL for the cart. This parameter is required for [Abandoned Cart](https://mailchimp.com/help/create-an-abandoned-cart-email/) automations.
             */
            checkout_url?: string;
            /**
             * The three-letter ISO 4217 code for the currency that the cart uses.
             */
            currency_code: string;
            /**
             * The order total for the cart.
             */
            order_total: number;
            /**
             * The total tax for the cart.
             */
            tax_total?: number;
            /**
             * An array of the cart's line items.
             */
            lines: Array<{
                /**
                 * A unique identifier for the cart line item.
                 */
                id: string;
                /**
                 * A unique identifier for the product associated with the cart line item.
                 */
                product_id: string;
                /**
                 * A unique identifier for the product variant associated with the cart line item.
                 */
                product_variant_id: string;
                /**
                 * The quantity of a cart line item.
                 */
                quantity: number;
                /**
                 * The price of a cart line item.
                 */
                price: number;
            }>;
        },
    }): CancelablePromise<{
        /**
         * A unique identifier for the cart.
         */
        readonly id?: string;
        /**
         * Information about a specific customer.
         */
        customer?: {
            /**
             * A unique identifier for the customer.
             */
            readonly id?: string;
            /**
             * The customer's email address.
             */
            readonly email_address?: string;
            /**
             * The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing Mailchimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your Mailchimp list [will be added as `Transactional` members](https://mailchimp.com/developer/marketing/docs/e-commerce/#customers).
             */
            opt_in_status?: boolean;
            /**
             * The customer's company.
             */
            company?: string;
            /**
             * The customer's first name.
             */
            first_name?: string;
            /**
             * The customer's last name.
             */
            last_name?: string;
            /**
             * The customer's total order count.
             */
            readonly orders_count?: number;
            /**
             * The total amount the customer has spent.
             */
            readonly total_spent?: number;
            /**
             * The customer's address.
             */
            address?: {
                /**
                 * The mailing address of the customer.
                 */
                address1?: string;
                /**
                 * An additional field for the customer's mailing address.
                 */
                address2?: string;
                /**
                 * The city the customer is located in.
                 */
                city?: string;
                /**
                 * The customer's state name or normalized province.
                 */
                province?: string;
                /**
                 * The two-letter code for the customer's province or state.
                 */
                province_code?: string;
                /**
                 * The customer's postal or zip code.
                 */
                postal_code?: string;
                /**
                 * The customer's country.
                 */
                country?: string;
                /**
                 * The two-letter code for the customer's country.
                 */
                country_code?: string;
            };
            /**
             * The date and time the customer was created in ISO 8601 format.
             */
            readonly created_at?: string;
            /**
             * The date and time the customer was last updated in ISO 8601 format.
             */
            readonly updated_at?: string;
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
        /**
         * A string that uniquely identifies the campaign associated with a cart.
         */
        campaign_id?: string;
        /**
         * The URL for the cart. This parameter is required for [Abandoned Cart](https://mailchimp.com/help/create-an-abandoned-cart-email/) automations.
         */
        checkout_url?: string;
        /**
         * The three-letter ISO 4217 code for the currency that the cart uses.
         */
        currency_code?: string;
        /**
         * The order total for the cart.
         */
        order_total?: number;
        /**
         * The total tax for the cart.
         */
        tax_total?: number;
        /**
         * An array of the cart's line items.
         */
        lines?: Array<{
            /**
             * A unique identifier for the cart line item.
             */
            readonly id?: string;
            /**
             * A unique identifier for the product associated with the cart line item.
             */
            product_id?: string;
            /**
             * The name of the product for the cart line item.
             */
            readonly product_title?: string;
            /**
             * A unique identifier for the product variant associated with the cart line item.
             */
            product_variant_id?: string;
            /**
             * The name of the product variant for the cart line item.
             */
            readonly product_variant_title?: string;
            /**
             * The quantity of a cart line item.
             */
            quantity?: number;
            /**
             * The price of a cart line item.
             */
            price?: number;
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
         * The date and time the cart was created in ISO 8601 format.
         */
        readonly created_at?: string;
        /**
         * The date and time the cart was last updated in ISO 8601 format.
         */
        readonly updated_at?: string;
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
            url: '/ecommerce/stores/{store_id}/carts',
            path: {
                'store_id': storeId,
            },
            body: body,
        });
    }

    /**
     * Get cart info
     * Get information about a specific cart.
     * @returns any
     * @throws ApiError
     */
    public getEcommerceStoresIdCartsId({
        storeId,
        cartId,
        fields,
        excludeFields,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        /**
         * The id for the cart.
         */
        cartId: string,
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
         * A unique identifier for the cart.
         */
        readonly id?: string;
        /**
         * Information about a specific customer.
         */
        customer?: {
            /**
             * A unique identifier for the customer.
             */
            readonly id?: string;
            /**
             * The customer's email address.
             */
            readonly email_address?: string;
            /**
             * The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing Mailchimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your Mailchimp list [will be added as `Transactional` members](https://mailchimp.com/developer/marketing/docs/e-commerce/#customers).
             */
            opt_in_status?: boolean;
            /**
             * The customer's company.
             */
            company?: string;
            /**
             * The customer's first name.
             */
            first_name?: string;
            /**
             * The customer's last name.
             */
            last_name?: string;
            /**
             * The customer's total order count.
             */
            readonly orders_count?: number;
            /**
             * The total amount the customer has spent.
             */
            readonly total_spent?: number;
            /**
             * The customer's address.
             */
            address?: {
                /**
                 * The mailing address of the customer.
                 */
                address1?: string;
                /**
                 * An additional field for the customer's mailing address.
                 */
                address2?: string;
                /**
                 * The city the customer is located in.
                 */
                city?: string;
                /**
                 * The customer's state name or normalized province.
                 */
                province?: string;
                /**
                 * The two-letter code for the customer's province or state.
                 */
                province_code?: string;
                /**
                 * The customer's postal or zip code.
                 */
                postal_code?: string;
                /**
                 * The customer's country.
                 */
                country?: string;
                /**
                 * The two-letter code for the customer's country.
                 */
                country_code?: string;
            };
            /**
             * The date and time the customer was created in ISO 8601 format.
             */
            readonly created_at?: string;
            /**
             * The date and time the customer was last updated in ISO 8601 format.
             */
            readonly updated_at?: string;
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
        /**
         * A string that uniquely identifies the campaign associated with a cart.
         */
        campaign_id?: string;
        /**
         * The URL for the cart. This parameter is required for [Abandoned Cart](https://mailchimp.com/help/create-an-abandoned-cart-email/) automations.
         */
        checkout_url?: string;
        /**
         * The three-letter ISO 4217 code for the currency that the cart uses.
         */
        currency_code?: string;
        /**
         * The order total for the cart.
         */
        order_total?: number;
        /**
         * The total tax for the cart.
         */
        tax_total?: number;
        /**
         * An array of the cart's line items.
         */
        lines?: Array<{
            /**
             * A unique identifier for the cart line item.
             */
            readonly id?: string;
            /**
             * A unique identifier for the product associated with the cart line item.
             */
            product_id?: string;
            /**
             * The name of the product for the cart line item.
             */
            readonly product_title?: string;
            /**
             * A unique identifier for the product variant associated with the cart line item.
             */
            product_variant_id?: string;
            /**
             * The name of the product variant for the cart line item.
             */
            readonly product_variant_title?: string;
            /**
             * The quantity of a cart line item.
             */
            quantity?: number;
            /**
             * The price of a cart line item.
             */
            price?: number;
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
         * The date and time the cart was created in ISO 8601 format.
         */
        readonly created_at?: string;
        /**
         * The date and time the cart was last updated in ISO 8601 format.
         */
        readonly updated_at?: string;
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
            url: '/ecommerce/stores/{store_id}/carts/{cart_id}',
            path: {
                'store_id': storeId,
                'cart_id': cartId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * Update cart
     * Update a specific cart.
     * @returns any
     * @throws ApiError
     */
    public patchEcommerceStoresIdCartsId({
        storeId,
        cartId,
        body,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        /**
         * The id for the cart.
         */
        cartId: string,
        body: {
            /**
             * Information about a specific customer. Orders for existing customers should include only the `id` parameter in the `customer` object body.
             */
            customer?: {
                /**
                 * The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing Mailchimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your Mailchimp list [will be added as `Transactional` members](https://mailchimp.com/developer/marketing/docs/e-commerce/#customers).
                 */
                opt_in_status?: boolean;
                /**
                 * The customer's company.
                 */
                company?: string;
                /**
                 * The customer's first name.
                 */
                first_name?: string;
                /**
                 * The customer's last name.
                 */
                last_name?: string;
                /**
                 * The customer's address.
                 */
                address?: {
                    /**
                     * The mailing address of the customer.
                     */
                    address1?: string;
                    /**
                     * An additional field for the customer's mailing address.
                     */
                    address2?: string;
                    /**
                     * The city the customer is located in.
                     */
                    city?: string;
                    /**
                     * The customer's state name or normalized province.
                     */
                    province?: string;
                    /**
                     * The two-letter code for the customer's province or state.
                     */
                    province_code?: string;
                    /**
                     * The customer's postal or zip code.
                     */
                    postal_code?: string;
                    /**
                     * The customer's country.
                     */
                    country?: string;
                    /**
                     * The two-letter code for the customer's country.
                     */
                    country_code?: string;
                };
            };
            /**
             * A string that uniquely identifies the campaign associated with a cart.
             */
            campaign_id?: string;
            /**
             * The URL for the cart. This parameter is required for [Abandoned Cart](https://mailchimp.com/help/create-an-abandoned-cart-email/) automations.
             */
            checkout_url?: string;
            /**
             * The three-letter ISO 4217 code for the currency that the cart uses.
             */
            currency_code?: string;
            /**
             * The order total for the cart.
             */
            order_total?: number;
            /**
             * The total tax for the cart.
             */
            tax_total?: number;
            /**
             * An array of the cart's line items.
             */
            lines?: Array<{
                /**
                 * A unique identifier for the product associated with the cart line item.
                 */
                product_id?: string;
                /**
                 * A unique identifier for the product variant associated with the cart line item.
                 */
                product_variant_id?: string;
                /**
                 * The quantity of a cart line item.
                 */
                quantity?: number;
                /**
                 * The price of a cart line item.
                 */
                price?: number;
            }>;
        },
    }): CancelablePromise<{
        /**
         * A unique identifier for the cart.
         */
        readonly id?: string;
        /**
         * Information about a specific customer.
         */
        customer?: {
            /**
             * A unique identifier for the customer.
             */
            readonly id?: string;
            /**
             * The customer's email address.
             */
            readonly email_address?: string;
            /**
             * The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing Mailchimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your Mailchimp list [will be added as `Transactional` members](https://mailchimp.com/developer/marketing/docs/e-commerce/#customers).
             */
            opt_in_status?: boolean;
            /**
             * The customer's company.
             */
            company?: string;
            /**
             * The customer's first name.
             */
            first_name?: string;
            /**
             * The customer's last name.
             */
            last_name?: string;
            /**
             * The customer's total order count.
             */
            readonly orders_count?: number;
            /**
             * The total amount the customer has spent.
             */
            readonly total_spent?: number;
            /**
             * The customer's address.
             */
            address?: {
                /**
                 * The mailing address of the customer.
                 */
                address1?: string;
                /**
                 * An additional field for the customer's mailing address.
                 */
                address2?: string;
                /**
                 * The city the customer is located in.
                 */
                city?: string;
                /**
                 * The customer's state name or normalized province.
                 */
                province?: string;
                /**
                 * The two-letter code for the customer's province or state.
                 */
                province_code?: string;
                /**
                 * The customer's postal or zip code.
                 */
                postal_code?: string;
                /**
                 * The customer's country.
                 */
                country?: string;
                /**
                 * The two-letter code for the customer's country.
                 */
                country_code?: string;
            };
            /**
             * The date and time the customer was created in ISO 8601 format.
             */
            readonly created_at?: string;
            /**
             * The date and time the customer was last updated in ISO 8601 format.
             */
            readonly updated_at?: string;
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
        /**
         * A string that uniquely identifies the campaign associated with a cart.
         */
        campaign_id?: string;
        /**
         * The URL for the cart. This parameter is required for [Abandoned Cart](https://mailchimp.com/help/create-an-abandoned-cart-email/) automations.
         */
        checkout_url?: string;
        /**
         * The three-letter ISO 4217 code for the currency that the cart uses.
         */
        currency_code?: string;
        /**
         * The order total for the cart.
         */
        order_total?: number;
        /**
         * The total tax for the cart.
         */
        tax_total?: number;
        /**
         * An array of the cart's line items.
         */
        lines?: Array<{
            /**
             * A unique identifier for the cart line item.
             */
            readonly id?: string;
            /**
             * A unique identifier for the product associated with the cart line item.
             */
            product_id?: string;
            /**
             * The name of the product for the cart line item.
             */
            readonly product_title?: string;
            /**
             * A unique identifier for the product variant associated with the cart line item.
             */
            product_variant_id?: string;
            /**
             * The name of the product variant for the cart line item.
             */
            readonly product_variant_title?: string;
            /**
             * The quantity of a cart line item.
             */
            quantity?: number;
            /**
             * The price of a cart line item.
             */
            price?: number;
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
         * The date and time the cart was created in ISO 8601 format.
         */
        readonly created_at?: string;
        /**
         * The date and time the cart was last updated in ISO 8601 format.
         */
        readonly updated_at?: string;
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
            url: '/ecommerce/stores/{store_id}/carts/{cart_id}',
            path: {
                'store_id': storeId,
                'cart_id': cartId,
            },
            body: body,
        });
    }

    /**
     * Delete cart
     * Delete a cart.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public deleteEcommerceStoresIdCartsId({
        storeId,
        cartId,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        /**
         * The id for the cart.
         */
        cartId: string,
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
            url: '/ecommerce/stores/{store_id}/carts/{cart_id}',
            path: {
                'store_id': storeId,
                'cart_id': cartId,
            },
        });
    }

    /**
     * List cart line items
     * Get information about a cart's line items.
     * @returns any
     * @throws ApiError
     */
    public getEcommerceStoresIdCartsIdLines({
        storeId,
        cartId,
        fields,
        excludeFields,
        count = 10,
        offset,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        /**
         * The id for the cart.
         */
        cartId: string,
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
         * The store id.
         */
        store_id?: string;
        /**
         * The cart id.
         */
        cart_id?: string;
        /**
         * An array of objects, each representing a cart's line item.
         */
        lines?: Array<{
            /**
             * A unique identifier for the cart line item.
             */
            readonly id?: string;
            /**
             * A unique identifier for the product associated with the cart line item.
             */
            product_id?: string;
            /**
             * The name of the product for the cart line item.
             */
            readonly product_title?: string;
            /**
             * A unique identifier for the product variant associated with the cart line item.
             */
            product_variant_id?: string;
            /**
             * The name of the product variant for the cart line item.
             */
            readonly product_variant_title?: string;
            /**
             * The quantity of a cart line item.
             */
            quantity?: number;
            /**
             * The price of a cart line item.
             */
            price?: number;
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
            url: '/ecommerce/stores/{store_id}/carts/{cart_id}/lines',
            path: {
                'store_id': storeId,
                'cart_id': cartId,
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
     * Add cart line item
     * Add a new line item to an existing cart.
     * @returns any
     * @throws ApiError
     */
    public postEcommerceStoresIdCartsIdLines({
        storeId,
        cartId,
        body,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        /**
         * The id for the cart.
         */
        cartId: string,
        body: {
            /**
             * A unique identifier for the cart line item.
             */
            id: string;
            /**
             * A unique identifier for the product associated with the cart line item.
             */
            product_id: string;
            /**
             * A unique identifier for the product variant associated with the cart line item.
             */
            product_variant_id: string;
            /**
             * The quantity of a cart line item.
             */
            quantity: number;
            /**
             * The price of a cart line item.
             */
            price: number;
        },
    }): CancelablePromise<{
        /**
         * A unique identifier for the cart line item.
         */
        readonly id?: string;
        /**
         * A unique identifier for the product associated with the cart line item.
         */
        product_id?: string;
        /**
         * The name of the product for the cart line item.
         */
        readonly product_title?: string;
        /**
         * A unique identifier for the product variant associated with the cart line item.
         */
        product_variant_id?: string;
        /**
         * The name of the product variant for the cart line item.
         */
        readonly product_variant_title?: string;
        /**
         * The quantity of a cart line item.
         */
        quantity?: number;
        /**
         * The price of a cart line item.
         */
        price?: number;
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
            url: '/ecommerce/stores/{store_id}/carts/{cart_id}/lines',
            path: {
                'store_id': storeId,
                'cart_id': cartId,
            },
            body: body,
        });
    }

    /**
     * Get cart line item
     * Get information about a specific cart line item.
     * @returns any
     * @throws ApiError
     */
    public getEcommerceStoresIdCartsIdLinesId({
        storeId,
        cartId,
        lineId,
        fields,
        excludeFields,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        /**
         * The id for the cart.
         */
        cartId: string,
        /**
         * The id for the line item of a cart.
         */
        lineId: string,
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
         * A unique identifier for the cart line item.
         */
        readonly id?: string;
        /**
         * A unique identifier for the product associated with the cart line item.
         */
        product_id?: string;
        /**
         * The name of the product for the cart line item.
         */
        readonly product_title?: string;
        /**
         * A unique identifier for the product variant associated with the cart line item.
         */
        product_variant_id?: string;
        /**
         * The name of the product variant for the cart line item.
         */
        readonly product_variant_title?: string;
        /**
         * The quantity of a cart line item.
         */
        quantity?: number;
        /**
         * The price of a cart line item.
         */
        price?: number;
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
            url: '/ecommerce/stores/{store_id}/carts/{cart_id}/lines/{line_id}',
            path: {
                'store_id': storeId,
                'cart_id': cartId,
                'line_id': lineId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * Update cart line item
     * Update a specific cart line item.
     * @returns any
     * @throws ApiError
     */
    public patchEcommerceStoresIdCartsIdLinesId({
        storeId,
        cartId,
        lineId,
        body,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        /**
         * The id for the cart.
         */
        cartId: string,
        /**
         * The id for the line item of a cart.
         */
        lineId: string,
        body: {
            /**
             * A unique identifier for the product associated with the cart line item.
             */
            product_id?: string;
            /**
             * A unique identifier for the product variant associated with the cart line item.
             */
            product_variant_id?: string;
            /**
             * The quantity of a cart line item.
             */
            quantity?: number;
            /**
             * The price of a cart line item.
             */
            price?: number;
        },
    }): CancelablePromise<{
        /**
         * A unique identifier for the cart line item.
         */
        readonly id?: string;
        /**
         * A unique identifier for the product associated with the cart line item.
         */
        product_id?: string;
        /**
         * The name of the product for the cart line item.
         */
        readonly product_title?: string;
        /**
         * A unique identifier for the product variant associated with the cart line item.
         */
        product_variant_id?: string;
        /**
         * The name of the product variant for the cart line item.
         */
        readonly product_variant_title?: string;
        /**
         * The quantity of a cart line item.
         */
        quantity?: number;
        /**
         * The price of a cart line item.
         */
        price?: number;
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
            url: '/ecommerce/stores/{store_id}/carts/{cart_id}/lines/{line_id}',
            path: {
                'store_id': storeId,
                'cart_id': cartId,
                'line_id': lineId,
            },
            body: body,
        });
    }

    /**
     * Delete cart line item
     * Delete a specific cart line item.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public deleteEcommerceStoresIdCartsLinesId({
        storeId,
        cartId,
        lineId,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        /**
         * The id for the cart.
         */
        cartId: string,
        /**
         * The id for the line item of a cart.
         */
        lineId: string,
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
            url: '/ecommerce/stores/{store_id}/carts/{cart_id}/lines/{line_id}',
            path: {
                'store_id': storeId,
                'cart_id': cartId,
                'line_id': lineId,
            },
        });
    }

    /**
     * List customers
     * Get information about a store's customers.
     * @returns any
     * @throws ApiError
     */
    public getEcommerceStoresIdCustomers({
        storeId,
        fields,
        excludeFields,
        count = 10,
        offset,
        emailAddress,
    }: {
        /**
         * The store id.
         */
        storeId: string,
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
         * Restrict the response to customers with the email address.
         */
        emailAddress?: string,
    }): CancelablePromise<{
        /**
         * The store id.
         */
        store_id?: string;
        /**
         * An array of objects, each representing a customer of a store.
         */
        customers?: Array<{
            /**
             * A unique identifier for the customer.
             */
            readonly id?: string;
            /**
             * The customer's email address.
             */
            readonly email_address?: string;
            /**
             * The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing Mailchimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your Mailchimp list [will be added as `Transactional` members](https://mailchimp.com/developer/marketing/docs/e-commerce/#customers).
             */
            opt_in_status?: boolean;
            /**
             * The customer's company.
             */
            company?: string;
            /**
             * The customer's first name.
             */
            first_name?: string;
            /**
             * The customer's last name.
             */
            last_name?: string;
            /**
             * The customer's total order count.
             */
            readonly orders_count?: number;
            /**
             * The total amount the customer has spent.
             */
            readonly total_spent?: number;
            /**
             * The customer's address.
             */
            address?: {
                /**
                 * The mailing address of the customer.
                 */
                address1?: string;
                /**
                 * An additional field for the customer's mailing address.
                 */
                address2?: string;
                /**
                 * The city the customer is located in.
                 */
                city?: string;
                /**
                 * The customer's state name or normalized province.
                 */
                province?: string;
                /**
                 * The two-letter code for the customer's province or state.
                 */
                province_code?: string;
                /**
                 * The customer's postal or zip code.
                 */
                postal_code?: string;
                /**
                 * The customer's country.
                 */
                country?: string;
                /**
                 * The two-letter code for the customer's country.
                 */
                country_code?: string;
            };
            /**
             * The date and time the customer was created in ISO 8601 format.
             */
            readonly created_at?: string;
            /**
             * The date and time the customer was last updated in ISO 8601 format.
             */
            readonly updated_at?: string;
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
            url: '/ecommerce/stores/{store_id}/customers',
            path: {
                'store_id': storeId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'count': count,
                'offset': offset,
                'email_address': emailAddress,
            },
        });
    }

    /**
     * Add customer
     * Add a new customer to a store.
     * @returns any
     * @throws ApiError
     */
    public postEcommerceStoresIdCustomers({
        storeId,
        body,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        body: {
            /**
             * A unique identifier for the customer. Limited to 50 characters.
             */
            id: string;
            /**
             * The customer's email address.
             */
            email_address: string;
            /**
             * The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing Mailchimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your Mailchimp list [will be added as `Transactional` members](https://mailchimp.com/developer/marketing/docs/e-commerce/#customers).
             */
            opt_in_status: boolean;
            /**
             * The customer's company.
             */
            company?: string;
            /**
             * The customer's first name.
             */
            first_name?: string;
            /**
             * The customer's last name.
             */
            last_name?: string;
            /**
             * The customer's address.
             */
            address?: {
                /**
                 * The mailing address of the customer.
                 */
                address1?: string;
                /**
                 * An additional field for the customer's mailing address.
                 */
                address2?: string;
                /**
                 * The city the customer is located in.
                 */
                city?: string;
                /**
                 * The customer's state name or normalized province.
                 */
                province?: string;
                /**
                 * The two-letter code for the customer's province or state.
                 */
                province_code?: string;
                /**
                 * The customer's postal or zip code.
                 */
                postal_code?: string;
                /**
                 * The customer's country.
                 */
                country?: string;
                /**
                 * The two-letter code for the customer's country.
                 */
                country_code?: string;
            };
        },
    }): CancelablePromise<{
        /**
         * A unique identifier for the customer.
         */
        readonly id?: string;
        /**
         * The customer's email address.
         */
        readonly email_address?: string;
        /**
         * The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing Mailchimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your Mailchimp list [will be added as `Transactional` members](https://mailchimp.com/developer/marketing/docs/e-commerce/#customers).
         */
        opt_in_status?: boolean;
        /**
         * The customer's company.
         */
        company?: string;
        /**
         * The customer's first name.
         */
        first_name?: string;
        /**
         * The customer's last name.
         */
        last_name?: string;
        /**
         * The customer's total order count.
         */
        readonly orders_count?: number;
        /**
         * The total amount the customer has spent.
         */
        readonly total_spent?: number;
        /**
         * The customer's address.
         */
        address?: {
            /**
             * The mailing address of the customer.
             */
            address1?: string;
            /**
             * An additional field for the customer's mailing address.
             */
            address2?: string;
            /**
             * The city the customer is located in.
             */
            city?: string;
            /**
             * The customer's state name or normalized province.
             */
            province?: string;
            /**
             * The two-letter code for the customer's province or state.
             */
            province_code?: string;
            /**
             * The customer's postal or zip code.
             */
            postal_code?: string;
            /**
             * The customer's country.
             */
            country?: string;
            /**
             * The two-letter code for the customer's country.
             */
            country_code?: string;
        };
        /**
         * The date and time the customer was created in ISO 8601 format.
         */
        readonly created_at?: string;
        /**
         * The date and time the customer was last updated in ISO 8601 format.
         */
        readonly updated_at?: string;
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
            url: '/ecommerce/stores/{store_id}/customers',
            path: {
                'store_id': storeId,
            },
            body: body,
        });
    }

    /**
     * Get customer info
     * Get information about a specific customer.
     * @returns any
     * @throws ApiError
     */
    public getEcommerceStoresIdCustomersId({
        storeId,
        customerId,
        fields,
        excludeFields,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        /**
         * The id for the customer of a store.
         */
        customerId: string,
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
         * A unique identifier for the customer.
         */
        readonly id?: string;
        /**
         * The customer's email address.
         */
        readonly email_address?: string;
        /**
         * The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing Mailchimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your Mailchimp list [will be added as `Transactional` members](https://mailchimp.com/developer/marketing/docs/e-commerce/#customers).
         */
        opt_in_status?: boolean;
        /**
         * The customer's company.
         */
        company?: string;
        /**
         * The customer's first name.
         */
        first_name?: string;
        /**
         * The customer's last name.
         */
        last_name?: string;
        /**
         * The customer's total order count.
         */
        readonly orders_count?: number;
        /**
         * The total amount the customer has spent.
         */
        readonly total_spent?: number;
        /**
         * The customer's address.
         */
        address?: {
            /**
             * The mailing address of the customer.
             */
            address1?: string;
            /**
             * An additional field for the customer's mailing address.
             */
            address2?: string;
            /**
             * The city the customer is located in.
             */
            city?: string;
            /**
             * The customer's state name or normalized province.
             */
            province?: string;
            /**
             * The two-letter code for the customer's province or state.
             */
            province_code?: string;
            /**
             * The customer's postal or zip code.
             */
            postal_code?: string;
            /**
             * The customer's country.
             */
            country?: string;
            /**
             * The two-letter code for the customer's country.
             */
            country_code?: string;
        };
        /**
         * The date and time the customer was created in ISO 8601 format.
         */
        readonly created_at?: string;
        /**
         * The date and time the customer was last updated in ISO 8601 format.
         */
        readonly updated_at?: string;
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
            url: '/ecommerce/stores/{store_id}/customers/{customer_id}',
            path: {
                'store_id': storeId,
                'customer_id': customerId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * Add or update customer
     * Add or update a customer.
     * @returns any
     * @throws ApiError
     */
    public putEcommerceStoresIdCustomersId({
        storeId,
        customerId,
        body,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        /**
         * The id for the customer of a store.
         */
        customerId: string,
        body: {
            /**
             * A unique identifier for the customer. Limited to 50 characters.
             */
            id: string;
            /**
             * The customer's email address.
             */
            email_address: string;
            /**
             * The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing Mailchimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your Mailchimp list [will be added as `Transactional` members](https://mailchimp.com/developer/marketing/docs/e-commerce/#customers).
             */
            opt_in_status: boolean;
            /**
             * The customer's company.
             */
            company?: string;
            /**
             * The customer's first name.
             */
            first_name?: string;
            /**
             * The customer's last name.
             */
            last_name?: string;
            /**
             * The customer's address.
             */
            address?: {
                /**
                 * The mailing address of the customer.
                 */
                address1?: string;
                /**
                 * An additional field for the customer's mailing address.
                 */
                address2?: string;
                /**
                 * The city the customer is located in.
                 */
                city?: string;
                /**
                 * The customer's state name or normalized province.
                 */
                province?: string;
                /**
                 * The two-letter code for the customer's province or state.
                 */
                province_code?: string;
                /**
                 * The customer's postal or zip code.
                 */
                postal_code?: string;
                /**
                 * The customer's country.
                 */
                country?: string;
                /**
                 * The two-letter code for the customer's country.
                 */
                country_code?: string;
            };
        },
    }): CancelablePromise<{
        /**
         * A unique identifier for the customer.
         */
        readonly id?: string;
        /**
         * The customer's email address.
         */
        readonly email_address?: string;
        /**
         * The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing Mailchimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your Mailchimp list [will be added as `Transactional` members](https://mailchimp.com/developer/marketing/docs/e-commerce/#customers).
         */
        opt_in_status?: boolean;
        /**
         * The customer's company.
         */
        company?: string;
        /**
         * The customer's first name.
         */
        first_name?: string;
        /**
         * The customer's last name.
         */
        last_name?: string;
        /**
         * The customer's total order count.
         */
        readonly orders_count?: number;
        /**
         * The total amount the customer has spent.
         */
        readonly total_spent?: number;
        /**
         * The customer's address.
         */
        address?: {
            /**
             * The mailing address of the customer.
             */
            address1?: string;
            /**
             * An additional field for the customer's mailing address.
             */
            address2?: string;
            /**
             * The city the customer is located in.
             */
            city?: string;
            /**
             * The customer's state name or normalized province.
             */
            province?: string;
            /**
             * The two-letter code for the customer's province or state.
             */
            province_code?: string;
            /**
             * The customer's postal or zip code.
             */
            postal_code?: string;
            /**
             * The customer's country.
             */
            country?: string;
            /**
             * The two-letter code for the customer's country.
             */
            country_code?: string;
        };
        /**
         * The date and time the customer was created in ISO 8601 format.
         */
        readonly created_at?: string;
        /**
         * The date and time the customer was last updated in ISO 8601 format.
         */
        readonly updated_at?: string;
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
            url: '/ecommerce/stores/{store_id}/customers/{customer_id}',
            path: {
                'store_id': storeId,
                'customer_id': customerId,
            },
            body: body,
        });
    }

    /**
     * Update customer
     * Update a customer.
     * @returns any
     * @throws ApiError
     */
    public patchEcommerceStoresIdCustomersId({
        storeId,
        customerId,
        body,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        /**
         * The id for the customer of a store.
         */
        customerId: string,
        body: {
            /**
             * The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing Mailchimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your Mailchimp list [will be added as `Transactional` members](https://mailchimp.com/developer/marketing/docs/e-commerce/#customers).
             */
            opt_in_status?: boolean;
            /**
             * The customer's company.
             */
            company?: string;
            /**
             * The customer's first name.
             */
            first_name?: string;
            /**
             * The customer's last name.
             */
            last_name?: string;
            /**
             * The customer's address.
             */
            address?: {
                /**
                 * The mailing address of the customer.
                 */
                address1?: string;
                /**
                 * An additional field for the customer's mailing address.
                 */
                address2?: string;
                /**
                 * The city the customer is located in.
                 */
                city?: string;
                /**
                 * The customer's state name or normalized province.
                 */
                province?: string;
                /**
                 * The two-letter code for the customer's province or state.
                 */
                province_code?: string;
                /**
                 * The customer's postal or zip code.
                 */
                postal_code?: string;
                /**
                 * The customer's country.
                 */
                country?: string;
                /**
                 * The two-letter code for the customer's country.
                 */
                country_code?: string;
            };
        },
    }): CancelablePromise<{
        /**
         * A unique identifier for the customer.
         */
        readonly id?: string;
        /**
         * The customer's email address.
         */
        readonly email_address?: string;
        /**
         * The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing Mailchimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your Mailchimp list [will be added as `Transactional` members](https://mailchimp.com/developer/marketing/docs/e-commerce/#customers).
         */
        opt_in_status?: boolean;
        /**
         * The customer's company.
         */
        company?: string;
        /**
         * The customer's first name.
         */
        first_name?: string;
        /**
         * The customer's last name.
         */
        last_name?: string;
        /**
         * The customer's total order count.
         */
        readonly orders_count?: number;
        /**
         * The total amount the customer has spent.
         */
        readonly total_spent?: number;
        /**
         * The customer's address.
         */
        address?: {
            /**
             * The mailing address of the customer.
             */
            address1?: string;
            /**
             * An additional field for the customer's mailing address.
             */
            address2?: string;
            /**
             * The city the customer is located in.
             */
            city?: string;
            /**
             * The customer's state name or normalized province.
             */
            province?: string;
            /**
             * The two-letter code for the customer's province or state.
             */
            province_code?: string;
            /**
             * The customer's postal or zip code.
             */
            postal_code?: string;
            /**
             * The customer's country.
             */
            country?: string;
            /**
             * The two-letter code for the customer's country.
             */
            country_code?: string;
        };
        /**
         * The date and time the customer was created in ISO 8601 format.
         */
        readonly created_at?: string;
        /**
         * The date and time the customer was last updated in ISO 8601 format.
         */
        readonly updated_at?: string;
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
            url: '/ecommerce/stores/{store_id}/customers/{customer_id}',
            path: {
                'store_id': storeId,
                'customer_id': customerId,
            },
            body: body,
        });
    }

    /**
     * Delete customer
     * Delete a customer from a store.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public deleteEcommerceStoresIdCustomersId({
        storeId,
        customerId,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        /**
         * The id for the customer of a store.
         */
        customerId: string,
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
            url: '/ecommerce/stores/{store_id}/customers/{customer_id}',
            path: {
                'store_id': storeId,
                'customer_id': customerId,
            },
        });
    }

    /**
     * List promo rules
     * Get information about a store's promo rules.
     * @returns any
     * @throws ApiError
     */
    public getEcommerceStoresIdPromorules({
        storeId,
        fields,
        excludeFields,
        count = 10,
        offset,
    }: {
        /**
         * The store id.
         */
        storeId: string,
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
         * The store id.
         */
        store_id?: string;
        /**
         * An array of objects, each representing promo rules defined for a store.
         */
        promo_rules?: Array<{
            /**
             * A unique identifier for the promo rule. If Ecommerce platform does not support promo rule, use promo code id as promo rule id. Restricted to UTF-8 characters with max length 50.
             */
            readonly id?: string;
            /**
             * The title that will show up in promotion campaign. Restricted to UTF-8 characters with max length of 100 bytes.
             */
            title?: string;
            /**
             * The description of a promotion restricted to UTF-8 characters with max length 255.
             */
            description?: string;
            /**
             * The date and time when the promotion is in effect in ISO 8601 format.
             */
            starts_at?: string;
            /**
             * The date and time when the promotion ends. Must be after starts_at and in ISO 8601 format.
             */
            ends_at?: string;
            /**
             * The amount of the promo code discount. If 'type' is 'fixed', the amount is treated as a monetary value. If 'type' is 'percentage', amount must be a decimal value between 0.0 and 1.0, inclusive.
             */
            amount?: number;
            /**
             * Type of discount. For free shipping set type to fixed.
             */
            type?: 'fixed' | 'percentage';
            /**
             * The target that the discount applies to.
             */
            target?: 'per_item' | 'total' | 'shipping';
            /**
             * Whether the promo rule is currently enabled.
             */
            enabled?: boolean;
            /**
             * The date and time the promotion was created in ISO 8601 format.
             */
            created_at_foreign?: string;
            /**
             * The date and time the promotion was updated in ISO 8601 format.
             */
            updated_at_foreign?: string;
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
            url: '/ecommerce/stores/{store_id}/promo-rules',
            path: {
                'store_id': storeId,
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
     * Add promo rule
     * Add a new promo rule to a store.
     * @returns any
     * @throws ApiError
     */
    public postEcommerceStoresIdPromorules({
        storeId,
        body,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        body: {
            /**
             * A unique identifier for the promo rule. If Ecommerce platform does not support promo rule, use promo code id as promo rule id. Restricted to UTF-8 characters with max length 50.
             */
            id: string;
            /**
             * The title that will show up in promotion campaign. Restricted to UTF-8 characters with max length of 100 bytes.
             */
            title?: string;
            /**
             * The description of a promotion restricted to UTF-8 characters with max length 255.
             */
            description: string;
            /**
             * The date and time when the promotion is in effect in ISO 8601 format.
             */
            starts_at?: string;
            /**
             * The date and time when the promotion ends. Must be after starts_at and in ISO 8601 format.
             */
            ends_at?: string;
            /**
             * The amount of the promo code discount. If 'type' is 'fixed', the amount is treated as a monetary value. If 'type' is 'percentage', amount must be a decimal value between 0.0 and 1.0, inclusive.
             */
            amount: number;
            /**
             * Type of discount. For free shipping set type to fixed.
             */
            type: 'fixed' | 'percentage';
            /**
             * The target that the discount applies to.
             */
            target: 'per_item' | 'total' | 'shipping';
            /**
             * Whether the promo rule is currently enabled.
             */
            enabled?: boolean;
            /**
             * The date and time the promotion was created in ISO 8601 format.
             */
            created_at_foreign?: string;
            /**
             * The date and time the promotion was updated in ISO 8601 format.
             */
            updated_at_foreign?: string;
        },
    }): CancelablePromise<{
        /**
         * A unique identifier for the promo rule. If Ecommerce platform does not support promo rule, use promo code id as promo rule id. Restricted to UTF-8 characters with max length 50.
         */
        readonly id?: string;
        /**
         * The title that will show up in promotion campaign. Restricted to UTF-8 characters with max length of 100 bytes.
         */
        title?: string;
        /**
         * The description of a promotion restricted to UTF-8 characters with max length 255.
         */
        description?: string;
        /**
         * The date and time when the promotion is in effect in ISO 8601 format.
         */
        starts_at?: string;
        /**
         * The date and time when the promotion ends. Must be after starts_at and in ISO 8601 format.
         */
        ends_at?: string;
        /**
         * The amount of the promo code discount. If 'type' is 'fixed', the amount is treated as a monetary value. If 'type' is 'percentage', amount must be a decimal value between 0.0 and 1.0, inclusive.
         */
        amount?: number;
        /**
         * Type of discount. For free shipping set type to fixed.
         */
        type?: 'fixed' | 'percentage';
        /**
         * The target that the discount applies to.
         */
        target?: 'per_item' | 'total' | 'shipping';
        /**
         * Whether the promo rule is currently enabled.
         */
        enabled?: boolean;
        /**
         * The date and time the promotion was created in ISO 8601 format.
         */
        created_at_foreign?: string;
        /**
         * The date and time the promotion was updated in ISO 8601 format.
         */
        updated_at_foreign?: string;
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
            url: '/ecommerce/stores/{store_id}/promo-rules',
            path: {
                'store_id': storeId,
            },
            body: body,
        });
    }

    /**
     * Get promo rule
     * Get information about a specific promo rule.
     * @returns any
     * @throws ApiError
     */
    public getEcommerceStoresIdPromorulesId({
        storeId,
        promoRuleId,
        fields,
        excludeFields,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        /**
         * The id for the promo rule of a store.
         */
        promoRuleId: string,
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
         * A unique identifier for the promo rule. If Ecommerce platform does not support promo rule, use promo code id as promo rule id. Restricted to UTF-8 characters with max length 50.
         */
        readonly id?: string;
        /**
         * The title that will show up in promotion campaign. Restricted to UTF-8 characters with max length of 100 bytes.
         */
        title?: string;
        /**
         * The description of a promotion restricted to UTF-8 characters with max length 255.
         */
        description?: string;
        /**
         * The date and time when the promotion is in effect in ISO 8601 format.
         */
        starts_at?: string;
        /**
         * The date and time when the promotion ends. Must be after starts_at and in ISO 8601 format.
         */
        ends_at?: string;
        /**
         * The amount of the promo code discount. If 'type' is 'fixed', the amount is treated as a monetary value. If 'type' is 'percentage', amount must be a decimal value between 0.0 and 1.0, inclusive.
         */
        amount?: number;
        /**
         * Type of discount. For free shipping set type to fixed.
         */
        type?: 'fixed' | 'percentage';
        /**
         * The target that the discount applies to.
         */
        target?: 'per_item' | 'total' | 'shipping';
        /**
         * Whether the promo rule is currently enabled.
         */
        enabled?: boolean;
        /**
         * The date and time the promotion was created in ISO 8601 format.
         */
        created_at_foreign?: string;
        /**
         * The date and time the promotion was updated in ISO 8601 format.
         */
        updated_at_foreign?: string;
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
            url: '/ecommerce/stores/{store_id}/promo-rules/{promo_rule_id}',
            path: {
                'store_id': storeId,
                'promo_rule_id': promoRuleId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * Update promo rule
     * Update a promo rule.
     * @returns any
     * @throws ApiError
     */
    public patchEcommerceStoresIdPromorulesId({
        storeId,
        promoRuleId,
        body,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        /**
         * The id for the promo rule of a store.
         */
        promoRuleId: string,
        body: {
            /**
             * The title that will show up in promotion campaign. Restricted to UTF-8 characters with max length of 100 bytes.
             */
            title?: string;
            /**
             * The description of a promotion restricted to UTF-8 characters with max length 255.
             */
            description?: string;
            /**
             * The date and time when the promotion is in effect in ISO 8601 format.
             */
            starts_at?: string;
            /**
             * The date and time when the promotion ends. Must be after starts_at and in ISO 8601 format.
             */
            ends_at?: string;
            /**
             * The amount of the promo code discount. If 'type' is 'fixed', the amount is treated as a monetary value. If 'type' is 'percentage', amount must be a decimal value between 0.0 and 1.0, inclusive.
             */
            amount?: number;
            /**
             * Type of discount. For free shipping set type to fixed.
             */
            type?: 'fixed' | 'percentage';
            /**
             * The target that the discount applies to.
             */
            target?: 'per_item' | 'total' | 'shipping';
            /**
             * Whether the promo rule is currently enabled.
             */
            enabled?: boolean;
            /**
             * The date and time the promotion was created in ISO 8601 format.
             */
            created_at_foreign?: string;
            /**
             * The date and time the promotion was updated in ISO 8601 format.
             */
            updated_at_foreign?: string;
        },
    }): CancelablePromise<{
        /**
         * A unique identifier for the promo rule. If Ecommerce platform does not support promo rule, use promo code id as promo rule id. Restricted to UTF-8 characters with max length 50.
         */
        readonly id?: string;
        /**
         * The title that will show up in promotion campaign. Restricted to UTF-8 characters with max length of 100 bytes.
         */
        title?: string;
        /**
         * The description of a promotion restricted to UTF-8 characters with max length 255.
         */
        description?: string;
        /**
         * The date and time when the promotion is in effect in ISO 8601 format.
         */
        starts_at?: string;
        /**
         * The date and time when the promotion ends. Must be after starts_at and in ISO 8601 format.
         */
        ends_at?: string;
        /**
         * The amount of the promo code discount. If 'type' is 'fixed', the amount is treated as a monetary value. If 'type' is 'percentage', amount must be a decimal value between 0.0 and 1.0, inclusive.
         */
        amount?: number;
        /**
         * Type of discount. For free shipping set type to fixed.
         */
        type?: 'fixed' | 'percentage';
        /**
         * The target that the discount applies to.
         */
        target?: 'per_item' | 'total' | 'shipping';
        /**
         * Whether the promo rule is currently enabled.
         */
        enabled?: boolean;
        /**
         * The date and time the promotion was created in ISO 8601 format.
         */
        created_at_foreign?: string;
        /**
         * The date and time the promotion was updated in ISO 8601 format.
         */
        updated_at_foreign?: string;
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
            url: '/ecommerce/stores/{store_id}/promo-rules/{promo_rule_id}',
            path: {
                'store_id': storeId,
                'promo_rule_id': promoRuleId,
            },
            body: body,
        });
    }

    /**
     * Delete promo rule
     * Delete a promo rule from a store.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public deleteEcommerceStoresIdPromorulesId({
        storeId,
        promoRuleId,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        /**
         * The id for the promo rule of a store.
         */
        promoRuleId: string,
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
            url: '/ecommerce/stores/{store_id}/promo-rules/{promo_rule_id}',
            path: {
                'store_id': storeId,
                'promo_rule_id': promoRuleId,
            },
        });
    }

    /**
     * List promo codes
     * Get information about a store's promo codes.
     * @returns any
     * @throws ApiError
     */
    public getEcommerceStoresIdPromocodes({
        promoRuleId,
        storeId,
        fields,
        excludeFields,
        count = 10,
        offset,
    }: {
        /**
         * The id for the promo rule of a store.
         */
        promoRuleId: string,
        /**
         * The store id.
         */
        storeId: string,
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
         * The store id.
         */
        store_id?: string;
        /**
         * An array of objects, each representing promo codes defined for a store.
         */
        promo_codes?: Array<{
            /**
             * A unique identifier for the promo Code.
             */
            readonly id?: string;
            /**
             * The discount code. Restricted to UTF-8 characters with max length 50.
             */
            code?: string;
            /**
             * The url that should be used in the promotion campaign restricted to UTF-8 characters with max length 2000.
             */
            redemption_url?: string;
            /**
             * Number of times promo code has been used.
             */
            usage_count?: number;
            /**
             * Whether the promo code is currently enabled.
             */
            enabled?: boolean;
            /**
             * The date and time the promotion was created in ISO 8601 format.
             */
            created_at_foreign?: string;
            /**
             * The date and time the promotion was updated in ISO 8601 format.
             */
            updated_at_foreign?: string;
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
            url: '/ecommerce/stores/{store_id}/promo-rules/{promo_rule_id}/promo-codes',
            path: {
                'promo_rule_id': promoRuleId,
                'store_id': storeId,
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
     * Add promo code
     * Add a new promo code to a store.
     * @returns any
     * @throws ApiError
     */
    public postEcommerceStoresIdPromocodes({
        storeId,
        promoRuleId,
        body,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        /**
         * The id for the promo rule of a store.
         */
        promoRuleId: string,
        body: {
            /**
             * A unique identifier for the promo code. Restricted to UTF-8 characters with max length 50.
             */
            id: string;
            /**
             * The discount code. Restricted to UTF-8 characters with max length 50.
             */
            code: string;
            /**
             * The url that should be used in the promotion campaign restricted to UTF-8 characters with max length 2000.
             */
            redemption_url: string;
            /**
             * Number of times promo code has been used.
             */
            usage_count?: number;
            /**
             * Whether the promo code is currently enabled.
             */
            enabled?: boolean;
            /**
             * The date and time the promotion was created in ISO 8601 format.
             */
            created_at_foreign?: string;
            /**
             * The date and time the promotion was updated in ISO 8601 format.
             */
            updated_at_foreign?: string;
        },
    }): CancelablePromise<{
        /**
         * A unique identifier for the promo Code.
         */
        readonly id?: string;
        /**
         * The discount code. Restricted to UTF-8 characters with max length 50.
         */
        code?: string;
        /**
         * The url that should be used in the promotion campaign restricted to UTF-8 characters with max length 2000.
         */
        redemption_url?: string;
        /**
         * Number of times promo code has been used.
         */
        usage_count?: number;
        /**
         * Whether the promo code is currently enabled.
         */
        enabled?: boolean;
        /**
         * The date and time the promotion was created in ISO 8601 format.
         */
        created_at_foreign?: string;
        /**
         * The date and time the promotion was updated in ISO 8601 format.
         */
        updated_at_foreign?: string;
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
            url: '/ecommerce/stores/{store_id}/promo-rules/{promo_rule_id}/promo-codes',
            path: {
                'store_id': storeId,
                'promo_rule_id': promoRuleId,
            },
            body: body,
        });
    }

    /**
     * Get promo code
     * Get information about a specific promo code.
     * @returns any
     * @throws ApiError
     */
    public getEcommerceStoresIdPromocodesId({
        storeId,
        promoRuleId,
        promoCodeId,
        fields,
        excludeFields,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        /**
         * The id for the promo rule of a store.
         */
        promoRuleId: string,
        /**
         * The id for the promo code of a store.
         */
        promoCodeId: string,
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
         * A unique identifier for the promo Code.
         */
        readonly id?: string;
        /**
         * The discount code. Restricted to UTF-8 characters with max length 50.
         */
        code?: string;
        /**
         * The url that should be used in the promotion campaign restricted to UTF-8 characters with max length 2000.
         */
        redemption_url?: string;
        /**
         * Number of times promo code has been used.
         */
        usage_count?: number;
        /**
         * Whether the promo code is currently enabled.
         */
        enabled?: boolean;
        /**
         * The date and time the promotion was created in ISO 8601 format.
         */
        created_at_foreign?: string;
        /**
         * The date and time the promotion was updated in ISO 8601 format.
         */
        updated_at_foreign?: string;
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
            url: '/ecommerce/stores/{store_id}/promo-rules/{promo_rule_id}/promo-codes/{promo_code_id}',
            path: {
                'store_id': storeId,
                'promo_rule_id': promoRuleId,
                'promo_code_id': promoCodeId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * Update promo code
     * Update a promo code.
     * @returns any
     * @throws ApiError
     */
    public patchEcommerceStoresIdPromocodesId({
        storeId,
        promoRuleId,
        promoCodeId,
        body,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        /**
         * The id for the promo rule of a store.
         */
        promoRuleId: string,
        /**
         * The id for the promo code of a store.
         */
        promoCodeId: string,
        body: {
            /**
             * The discount code. Restricted to UTF-8 characters with max length 50.
             */
            code?: string;
            /**
             * The url that should be used in the promotion campaign restricted to UTF-8 characters with max length 2000.
             */
            redemption_url?: string;
            /**
             * Number of times promo code has been used.
             */
            usage_count?: number;
            /**
             * Whether the promo code is currently enabled.
             */
            enabled?: boolean;
            /**
             * The date and time the promotion was created in ISO 8601 format.
             */
            created_at_foreign?: string;
            /**
             * The date and time the promotion was updated in ISO 8601 format.
             */
            updated_at_foreign?: string;
        },
    }): CancelablePromise<{
        /**
         * A unique identifier for the promo Code.
         */
        readonly id?: string;
        /**
         * The discount code. Restricted to UTF-8 characters with max length 50.
         */
        code?: string;
        /**
         * The url that should be used in the promotion campaign restricted to UTF-8 characters with max length 2000.
         */
        redemption_url?: string;
        /**
         * Number of times promo code has been used.
         */
        usage_count?: number;
        /**
         * Whether the promo code is currently enabled.
         */
        enabled?: boolean;
        /**
         * The date and time the promotion was created in ISO 8601 format.
         */
        created_at_foreign?: string;
        /**
         * The date and time the promotion was updated in ISO 8601 format.
         */
        updated_at_foreign?: string;
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
            url: '/ecommerce/stores/{store_id}/promo-rules/{promo_rule_id}/promo-codes/{promo_code_id}',
            path: {
                'store_id': storeId,
                'promo_rule_id': promoRuleId,
                'promo_code_id': promoCodeId,
            },
            body: body,
        });
    }

    /**
     * Delete promo code
     * Delete a promo code from a store.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public deleteEcommerceStoresIdPromocodesId({
        storeId,
        promoRuleId,
        promoCodeId,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        /**
         * The id for the promo rule of a store.
         */
        promoRuleId: string,
        /**
         * The id for the promo code of a store.
         */
        promoCodeId: string,
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
            url: '/ecommerce/stores/{store_id}/promo-rules/{promo_rule_id}/promo-codes/{promo_code_id}',
            path: {
                'store_id': storeId,
                'promo_rule_id': promoRuleId,
                'promo_code_id': promoCodeId,
            },
        });
    }

    /**
     * List orders
     * Get information about a store's orders.
     * @returns any
     * @throws ApiError
     */
    public getEcommerceStoresIdOrders({
        storeId,
        fields,
        excludeFields,
        count = 10,
        offset,
        customerId,
        hasOutreach,
        campaignId,
        outreachId,
    }: {
        /**
         * The store id.
         */
        storeId: string,
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
         * Restrict results to orders made by a specific customer.
         */
        customerId?: string,
        /**
         * Restrict results to orders that have an outreach attached. For example, an email campaign or Facebook ad.
         */
        hasOutreach?: boolean,
        /**
         * Restrict results to orders with a specific `campaign_id` value.
         */
        campaignId?: string,
        /**
         * Restrict results to orders with a specific `outreach_id` value.
         */
        outreachId?: string,
    }): CancelablePromise<{
        /**
         * The unique identifier for the store.
         */
        store_id?: string;
        /**
         * An array of objects, each representing an order in a store.
         */
        orders?: Array<{
            /**
             * A unique identifier for the order.
             */
            readonly id?: string;
            /**
             * Information about a specific customer.
             */
            customer?: {
                /**
                 * A unique identifier for the customer.
                 */
                readonly id?: string;
                /**
                 * The customer's email address.
                 */
                readonly email_address?: string;
                /**
                 * The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing Mailchimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your Mailchimp list [will be added as `Transactional` members](https://mailchimp.com/developer/marketing/docs/e-commerce/#customers).
                 */
                opt_in_status?: boolean;
                /**
                 * The customer's company.
                 */
                company?: string;
                /**
                 * The customer's first name.
                 */
                first_name?: string;
                /**
                 * The customer's last name.
                 */
                last_name?: string;
                /**
                 * The customer's total order count.
                 */
                readonly orders_count?: number;
                /**
                 * The total amount the customer has spent.
                 */
                readonly total_spent?: number;
                /**
                 * The customer's address.
                 */
                address?: {
                    /**
                     * The mailing address of the customer.
                     */
                    address1?: string;
                    /**
                     * An additional field for the customer's mailing address.
                     */
                    address2?: string;
                    /**
                     * The city the customer is located in.
                     */
                    city?: string;
                    /**
                     * The customer's state name or normalized province.
                     */
                    province?: string;
                    /**
                     * The two-letter code for the customer's province or state.
                     */
                    province_code?: string;
                    /**
                     * The customer's postal or zip code.
                     */
                    postal_code?: string;
                    /**
                     * The customer's country.
                     */
                    country?: string;
                    /**
                     * The two-letter code for the customer's country.
                     */
                    country_code?: string;
                };
                /**
                 * The date and time the customer was created in ISO 8601 format.
                 */
                readonly created_at?: string;
                /**
                 * The date and time the customer was last updated in ISO 8601 format.
                 */
                readonly updated_at?: string;
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
            /**
             * The unique identifier for the store.
             */
            readonly store_id?: string;
            /**
             * A string that uniquely identifies the campaign associated with an order.
             */
            campaign_id?: string;
            /**
             * The URL for the page where the buyer landed when entering the shop.
             */
            landing_site?: string;
            /**
             * The order status. Use this parameter to trigger [Order Notifications](https://mailchimp.com/developer/marketing/docs/e-commerce/#order-notifications).
             */
            financial_status?: string;
            /**
             * The fulfillment status for the order. Use this parameter to trigger [Order Notifications](https://mailchimp.com/developer/marketing/docs/e-commerce/#order-notifications).
             */
            fulfillment_status?: string;
            /**
             * The three-letter ISO 4217 code for the currency that the store accepts.
             */
            currency_code?: string;
            /**
             * The order total associated with an order.
             */
            order_total?: number;
            /**
             * The URL for the order.
             */
            order_url?: string;
            /**
             * The total amount of the discounts to be applied to the price of the order.
             */
            discount_total?: number;
            /**
             * The tax total associated with an order.
             */
            tax_total?: number;
            /**
             * The shipping total for the order.
             */
            shipping_total?: number;
            /**
             * The Mailchimp tracking code for the order. Uses the 'mc_tc' parameter in E-Commerce tracking URLs.
             */
            tracking_code?: 'prec';
            /**
             * The date and time the order was processed in ISO 8601 format.
             */
            processed_at_foreign?: string;
            /**
             * The date and time the order was cancelled in ISO 8601 format.
             */
            cancelled_at_foreign?: string;
            /**
             * The date and time the order was updated in ISO 8601 format.
             */
            updated_at_foreign?: string;
            /**
             * The shipping address for the order.
             */
            shipping_address?: {
                /**
                 * The name associated with an order's shipping address.
                 */
                name?: string;
                /**
                 * The shipping address for the order.
                 */
                address1?: string;
                /**
                 * An additional field for the shipping address.
                 */
                address2?: string;
                /**
                 * The city in the order's shipping address.
                 */
                city?: string;
                /**
                 * The state or normalized province in the order's shipping address.
                 */
                province?: string;
                /**
                 * The two-letter code for the province or state the order's shipping address is located in.
                 */
                province_code?: string;
                /**
                 * The postal or zip code in the order's shipping address.
                 */
                postal_code?: string;
                /**
                 * The country in the order's shipping address.
                 */
                country?: string;
                /**
                 * The two-letter code for the country in the shipping address.
                 */
                country_code?: string;
                /**
                 * The longitude for the shipping address location.
                 */
                longitude?: number;
                /**
                 * The latitude for the shipping address location.
                 */
                latitude?: number;
                /**
                 * The phone number for the order's shipping address
                 */
                phone?: string;
                /**
                 * The company associated with an order's shipping address.
                 */
                company?: string;
            };
            /**
             * The billing address for the order.
             */
            billing_address?: {
                /**
                 * The name associated with an order's billing address.
                 */
                name?: string;
                /**
                 * The billing address for the order.
                 */
                address1?: string;
                /**
                 * An additional field for the billing address.
                 */
                address2?: string;
                /**
                 * The city in the billing address.
                 */
                city?: string;
                /**
                 * The state or normalized province in the billing address.
                 */
                province?: string;
                /**
                 * The two-letter code for the province or state in the billing address.
                 */
                province_code?: string;
                /**
                 * The postal or zip code in the billing address.
                 */
                postal_code?: string;
                /**
                 * The country in the billing address.
                 */
                country?: string;
                /**
                 * The two-letter code for the country in the billing address.
                 */
                country_code?: string;
                /**
                 * The longitude for the billing address location.
                 */
                longitude?: number;
                /**
                 * The latitude for the billing address location.
                 */
                latitude?: number;
                /**
                 * The phone number for the billing address.
                 */
                phone?: string;
                /**
                 * The company associated with the billing address.
                 */
                company?: string;
            };
            /**
             * The promo codes applied on the order
             */
            promos?: Array<{
                /**
                 * The Promo Code
                 */
                code?: string;
                /**
                 * The amount of discount applied on the total price. For example if the total cost was $100 and the customer paid $95.5, amount_discounted will be 4.5 For free shipping set amount_discounted to 0
                 */
                amount_discounted?: number;
                /**
                 * Type of discount. For free shipping set type to fixed
                 */
                type?: 'fixed' | 'percentage';
            }>;
            /**
             * An array of the order's line items.
             */
            lines?: Array<{
                /**
                 * A unique identifier for an order line item.
                 */
                readonly id?: string;
                /**
                 * A unique identifier for the product associated with an order line item.
                 */
                product_id?: string;
                /**
                 * The name of the product for an order line item.
                 */
                readonly product_title?: string;
                /**
                 * A unique identifier for the product variant associated with an order line item.
                 */
                product_variant_id?: string;
                /**
                 * The name of the product variant for an order line item.
                 */
                readonly product_variant_title?: string;
                /**
                 * The image URL for a product.
                 */
                readonly image_url?: string;
                /**
                 * The order line item quantity.
                 */
                quantity?: number;
                /**
                 * The order line item price.
                 */
                price?: number;
                /**
                 * The total discount amount applied to a line item.
                 */
                discount?: number;
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
             * The outreach associated with this order. For example, an email campaign or Facebook ad.
             */
            outreach?: {
                /**
                 * A unique identifier for the outreach. Can be an email campaign ID.
                 */
                id?: string;
                /**
                 * The name for the outreach.
                 */
                readonly name?: string;
                /**
                 * The type of the outreach.
                 */
                readonly type?: string;
                /**
                 * The date and time the Outreach was published in ISO 8601 format.
                 */
                readonly published_time?: string;
            };
            /**
             * The tracking number associated with the order.
             */
            tracking_number?: string;
            /**
             * The tracking carrier associated with the order.
             */
            tracking_carrier?: string;
            /**
             * The tracking URL associated with the order.
             */
            tracking_url?: string;
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
            url: '/ecommerce/stores/{store_id}/orders',
            path: {
                'store_id': storeId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'count': count,
                'offset': offset,
                'customer_id': customerId,
                'has_outreach': hasOutreach,
                'campaign_id': campaignId,
                'outreach_id': outreachId,
            },
        });
    }

    /**
     * Add order
     * Add a new order to a store.
     * @returns any
     * @throws ApiError
     */
    public postEcommerceStoresIdOrders({
        storeId,
        body,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        body: {
            /**
             * A unique identifier for the order.
             */
            id: string;
            /**
             * Information about a specific customer. For existing customers include only the `id` parameter in the `customer` object body.
             */
            customer: {
                /**
                 * A unique identifier for the customer. Limited to 50 characters.
                 */
                id: string;
                /**
                 * The customer's email address.
                 */
                email_address?: string;
                /**
                 * The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing Mailchimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your Mailchimp list [will be added as `Transactional` members](https://mailchimp.com/developer/marketing/docs/e-commerce/#customers).
                 */
                opt_in_status?: boolean;
                /**
                 * The customer's company.
                 */
                company?: string;
                /**
                 * The customer's first name.
                 */
                first_name?: string;
                /**
                 * The customer's last name.
                 */
                last_name?: string;
                /**
                 * The customer's address.
                 */
                address?: {
                    /**
                     * The mailing address of the customer.
                     */
                    address1?: string;
                    /**
                     * An additional field for the customer's mailing address.
                     */
                    address2?: string;
                    /**
                     * The city the customer is located in.
                     */
                    city?: string;
                    /**
                     * The customer's state name or normalized province.
                     */
                    province?: string;
                    /**
                     * The two-letter code for the customer's province or state.
                     */
                    province_code?: string;
                    /**
                     * The customer's postal or zip code.
                     */
                    postal_code?: string;
                    /**
                     * The customer's country.
                     */
                    country?: string;
                    /**
                     * The two-letter code for the customer's country.
                     */
                    country_code?: string;
                };
            };
            /**
             * A string that uniquely identifies the campaign for an order.
             */
            campaign_id?: string;
            /**
             * The URL for the page where the buyer landed when entering the shop.
             */
            landing_site?: string;
            /**
             * The order status. Use this parameter to trigger [Order Notifications](https://mailchimp.com/developer/marketing/docs/e-commerce/#order-notifications).
             */
            financial_status?: string;
            /**
             * The fulfillment status for the order. Use this parameter to trigger [Order Notifications](https://mailchimp.com/developer/marketing/docs/e-commerce/#order-notifications).
             */
            fulfillment_status?: string;
            /**
             * The three-letter ISO 4217 code for the currency that the store accepts.
             */
            currency_code: string;
            /**
             * The total for the order.
             */
            order_total: number;
            /**
             * The URL for the order.
             */
            order_url?: string;
            /**
             * The total amount of the discounts to be applied to the price of the order.
             */
            discount_total?: number;
            /**
             * The tax total for the order.
             */
            tax_total?: number;
            /**
             * The shipping total for the order.
             */
            shipping_total?: number;
            /**
             * The Mailchimp tracking code for the order. Uses the 'mc_tc' parameter in E-Commerce tracking URLs.
             */
            tracking_code?: 'prec';
            /**
             * The date and time the order was processed in ISO 8601 format.
             */
            processed_at_foreign?: string;
            /**
             * The date and time the order was cancelled in ISO 8601 format. Note: passing a value for this parameter will cancel the order being created.
             */
            cancelled_at_foreign?: string;
            /**
             * The date and time the order was updated in ISO 8601 format.
             */
            updated_at_foreign?: string;
            /**
             * The shipping address for the order.
             */
            shipping_address?: {
                /**
                 * The name associated with an order's shipping address.
                 */
                name?: string;
                /**
                 * The shipping address for the order.
                 */
                address1?: string;
                /**
                 * An additional field for the shipping address.
                 */
                address2?: string;
                /**
                 * The city in the order's shipping address.
                 */
                city?: string;
                /**
                 * The state or normalized province in the order's shipping address.
                 */
                province?: string;
                /**
                 * The two-letter code for the province or state in the shipping address.
                 */
                province_code?: string;
                /**
                 * The postal or zip code in the shipping address.
                 */
                postal_code?: string;
                /**
                 * The country in the shipping address.
                 */
                country?: string;
                /**
                 * The two-letter code for the country in the shipping address.
                 */
                country_code?: string;
                /**
                 * The longitude for the shipping address location.
                 */
                longitude?: number;
                /**
                 * The latitude for the shipping address location.
                 */
                latitude?: number;
                /**
                 * The phone number for the order's shipping address.
                 */
                phone?: string;
                /**
                 * The company associated with the shipping address.
                 */
                company?: string;
            };
            /**
             * The billing address for the order.
             */
            billing_address?: {
                /**
                 * The name associated with the billing address.
                 */
                name?: string;
                /**
                 * The billing address for the order.
                 */
                address1?: string;
                /**
                 * An additional field for the billing address.
                 */
                address2?: string;
                /**
                 * The city in the billing address.
                 */
                city?: string;
                /**
                 * The state or normalized province in the billing address.
                 */
                province?: string;
                /**
                 * The two-letter code for the province in the billing address.
                 */
                province_code?: string;
                /**
                 * The postal or zip code in the billing address.
                 */
                postal_code?: string;
                /**
                 * The country in the billing address.
                 */
                country?: string;
                /**
                 * The two-letter code for the country in the billing address.
                 */
                country_code?: string;
                /**
                 * The longitude for the billing address location.
                 */
                longitude?: number;
                /**
                 * The latitude for the billing address location.
                 */
                latitude?: number;
                /**
                 * The phone number for the billing address
                 */
                phone?: string;
                /**
                 * The company associated with the billing address.
                 */
                company?: string;
            };
            /**
             * The promo codes applied on the order
             */
            promos?: Array<{
                /**
                 * The Promo Code
                 */
                code: string;
                /**
                 * The amount of discount applied on the total price. For example if the total cost was $100 and the customer paid $95.5, amount_discounted will be 4.5 For free shipping set amount_discounted to 0
                 */
                amount_discounted: number;
                /**
                 * Type of discount. For free shipping set type to fixed
                 */
                type: 'fixed' | 'percentage';
            }>;
            /**
             * An array of the order's line items.
             */
            lines: Array<{
                /**
                 * A unique identifier for the order line item.
                 */
                id: string;
                /**
                 * A unique identifier for the product associated with the order line item.
                 */
                product_id: string;
                /**
                 * A unique identifier for the product variant associated with the order line item.
                 */
                product_variant_id: string;
                /**
                 * The quantity of an order line item.
                 */
                quantity: number;
                /**
                 * The price of an order line item.
                 */
                price: number;
                /**
                 * The total discount amount applied to this line item.
                 */
                discount?: number;
            }>;
            /**
             * The outreach associated with this order. For example, an email campaign or Facebook ad.
             */
            outreach?: {
                /**
                 * A unique identifier for the outreach. Can be an email campaign ID.
                 */
                id?: string;
            };
            /**
             * The tracking number associated with the order.
             */
            tracking_number?: string;
            /**
             * The tracking carrier associated with the order.
             */
            tracking_carrier?: string;
            /**
             * The tracking URL associated with the order.
             */
            tracking_url?: string;
        },
    }): CancelablePromise<{
        /**
         * A unique identifier for the order.
         */
        readonly id?: string;
        /**
         * Information about a specific customer.
         */
        customer?: {
            /**
             * A unique identifier for the customer.
             */
            readonly id?: string;
            /**
             * The customer's email address.
             */
            readonly email_address?: string;
            /**
             * The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing Mailchimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your Mailchimp list [will be added as `Transactional` members](https://mailchimp.com/developer/marketing/docs/e-commerce/#customers).
             */
            opt_in_status?: boolean;
            /**
             * The customer's company.
             */
            company?: string;
            /**
             * The customer's first name.
             */
            first_name?: string;
            /**
             * The customer's last name.
             */
            last_name?: string;
            /**
             * The customer's total order count.
             */
            readonly orders_count?: number;
            /**
             * The total amount the customer has spent.
             */
            readonly total_spent?: number;
            /**
             * The customer's address.
             */
            address?: {
                /**
                 * The mailing address of the customer.
                 */
                address1?: string;
                /**
                 * An additional field for the customer's mailing address.
                 */
                address2?: string;
                /**
                 * The city the customer is located in.
                 */
                city?: string;
                /**
                 * The customer's state name or normalized province.
                 */
                province?: string;
                /**
                 * The two-letter code for the customer's province or state.
                 */
                province_code?: string;
                /**
                 * The customer's postal or zip code.
                 */
                postal_code?: string;
                /**
                 * The customer's country.
                 */
                country?: string;
                /**
                 * The two-letter code for the customer's country.
                 */
                country_code?: string;
            };
            /**
             * The date and time the customer was created in ISO 8601 format.
             */
            readonly created_at?: string;
            /**
             * The date and time the customer was last updated in ISO 8601 format.
             */
            readonly updated_at?: string;
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
        /**
         * The unique identifier for the store.
         */
        readonly store_id?: string;
        /**
         * A string that uniquely identifies the campaign associated with an order.
         */
        campaign_id?: string;
        /**
         * The URL for the page where the buyer landed when entering the shop.
         */
        landing_site?: string;
        /**
         * The order status. Use this parameter to trigger [Order Notifications](https://mailchimp.com/developer/marketing/docs/e-commerce/#order-notifications).
         */
        financial_status?: string;
        /**
         * The fulfillment status for the order. Use this parameter to trigger [Order Notifications](https://mailchimp.com/developer/marketing/docs/e-commerce/#order-notifications).
         */
        fulfillment_status?: string;
        /**
         * The three-letter ISO 4217 code for the currency that the store accepts.
         */
        currency_code?: string;
        /**
         * The order total associated with an order.
         */
        order_total?: number;
        /**
         * The URL for the order.
         */
        order_url?: string;
        /**
         * The total amount of the discounts to be applied to the price of the order.
         */
        discount_total?: number;
        /**
         * The tax total associated with an order.
         */
        tax_total?: number;
        /**
         * The shipping total for the order.
         */
        shipping_total?: number;
        /**
         * The Mailchimp tracking code for the order. Uses the 'mc_tc' parameter in E-Commerce tracking URLs.
         */
        tracking_code?: 'prec';
        /**
         * The date and time the order was processed in ISO 8601 format.
         */
        processed_at_foreign?: string;
        /**
         * The date and time the order was cancelled in ISO 8601 format.
         */
        cancelled_at_foreign?: string;
        /**
         * The date and time the order was updated in ISO 8601 format.
         */
        updated_at_foreign?: string;
        /**
         * The shipping address for the order.
         */
        shipping_address?: {
            /**
             * The name associated with an order's shipping address.
             */
            name?: string;
            /**
             * The shipping address for the order.
             */
            address1?: string;
            /**
             * An additional field for the shipping address.
             */
            address2?: string;
            /**
             * The city in the order's shipping address.
             */
            city?: string;
            /**
             * The state or normalized province in the order's shipping address.
             */
            province?: string;
            /**
             * The two-letter code for the province or state the order's shipping address is located in.
             */
            province_code?: string;
            /**
             * The postal or zip code in the order's shipping address.
             */
            postal_code?: string;
            /**
             * The country in the order's shipping address.
             */
            country?: string;
            /**
             * The two-letter code for the country in the shipping address.
             */
            country_code?: string;
            /**
             * The longitude for the shipping address location.
             */
            longitude?: number;
            /**
             * The latitude for the shipping address location.
             */
            latitude?: number;
            /**
             * The phone number for the order's shipping address
             */
            phone?: string;
            /**
             * The company associated with an order's shipping address.
             */
            company?: string;
        };
        /**
         * The billing address for the order.
         */
        billing_address?: {
            /**
             * The name associated with an order's billing address.
             */
            name?: string;
            /**
             * The billing address for the order.
             */
            address1?: string;
            /**
             * An additional field for the billing address.
             */
            address2?: string;
            /**
             * The city in the billing address.
             */
            city?: string;
            /**
             * The state or normalized province in the billing address.
             */
            province?: string;
            /**
             * The two-letter code for the province or state in the billing address.
             */
            province_code?: string;
            /**
             * The postal or zip code in the billing address.
             */
            postal_code?: string;
            /**
             * The country in the billing address.
             */
            country?: string;
            /**
             * The two-letter code for the country in the billing address.
             */
            country_code?: string;
            /**
             * The longitude for the billing address location.
             */
            longitude?: number;
            /**
             * The latitude for the billing address location.
             */
            latitude?: number;
            /**
             * The phone number for the billing address.
             */
            phone?: string;
            /**
             * The company associated with the billing address.
             */
            company?: string;
        };
        /**
         * The promo codes applied on the order
         */
        promos?: Array<{
            /**
             * The Promo Code
             */
            code?: string;
            /**
             * The amount of discount applied on the total price. For example if the total cost was $100 and the customer paid $95.5, amount_discounted will be 4.5 For free shipping set amount_discounted to 0
             */
            amount_discounted?: number;
            /**
             * Type of discount. For free shipping set type to fixed
             */
            type?: 'fixed' | 'percentage';
        }>;
        /**
         * An array of the order's line items.
         */
        lines?: Array<{
            /**
             * A unique identifier for an order line item.
             */
            readonly id?: string;
            /**
             * A unique identifier for the product associated with an order line item.
             */
            product_id?: string;
            /**
             * The name of the product for an order line item.
             */
            readonly product_title?: string;
            /**
             * A unique identifier for the product variant associated with an order line item.
             */
            product_variant_id?: string;
            /**
             * The name of the product variant for an order line item.
             */
            readonly product_variant_title?: string;
            /**
             * The image URL for a product.
             */
            readonly image_url?: string;
            /**
             * The order line item quantity.
             */
            quantity?: number;
            /**
             * The order line item price.
             */
            price?: number;
            /**
             * The total discount amount applied to a line item.
             */
            discount?: number;
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
         * The outreach associated with this order. For example, an email campaign or Facebook ad.
         */
        outreach?: {
            /**
             * A unique identifier for the outreach. Can be an email campaign ID.
             */
            id?: string;
            /**
             * The name for the outreach.
             */
            readonly name?: string;
            /**
             * The type of the outreach.
             */
            readonly type?: string;
            /**
             * The date and time the Outreach was published in ISO 8601 format.
             */
            readonly published_time?: string;
        };
        /**
         * The tracking number associated with the order.
         */
        tracking_number?: string;
        /**
         * The tracking carrier associated with the order.
         */
        tracking_carrier?: string;
        /**
         * The tracking URL associated with the order.
         */
        tracking_url?: string;
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
            url: '/ecommerce/stores/{store_id}/orders',
            path: {
                'store_id': storeId,
            },
            body: body,
        });
    }

    /**
     * Get order info
     * Get information about a specific order.
     * @returns any
     * @throws ApiError
     */
    public getEcommerceStoresIdOrdersId({
        storeId,
        orderId,
        fields,
        excludeFields,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        /**
         * The id for the order in a store.
         */
        orderId: string,
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
         * A unique identifier for the order.
         */
        readonly id?: string;
        /**
         * Information about a specific customer.
         */
        customer?: {
            /**
             * A unique identifier for the customer.
             */
            readonly id?: string;
            /**
             * The customer's email address.
             */
            readonly email_address?: string;
            /**
             * The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing Mailchimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your Mailchimp list [will be added as `Transactional` members](https://mailchimp.com/developer/marketing/docs/e-commerce/#customers).
             */
            opt_in_status?: boolean;
            /**
             * The customer's company.
             */
            company?: string;
            /**
             * The customer's first name.
             */
            first_name?: string;
            /**
             * The customer's last name.
             */
            last_name?: string;
            /**
             * The customer's total order count.
             */
            readonly orders_count?: number;
            /**
             * The total amount the customer has spent.
             */
            readonly total_spent?: number;
            /**
             * The customer's address.
             */
            address?: {
                /**
                 * The mailing address of the customer.
                 */
                address1?: string;
                /**
                 * An additional field for the customer's mailing address.
                 */
                address2?: string;
                /**
                 * The city the customer is located in.
                 */
                city?: string;
                /**
                 * The customer's state name or normalized province.
                 */
                province?: string;
                /**
                 * The two-letter code for the customer's province or state.
                 */
                province_code?: string;
                /**
                 * The customer's postal or zip code.
                 */
                postal_code?: string;
                /**
                 * The customer's country.
                 */
                country?: string;
                /**
                 * The two-letter code for the customer's country.
                 */
                country_code?: string;
            };
            /**
             * The date and time the customer was created in ISO 8601 format.
             */
            readonly created_at?: string;
            /**
             * The date and time the customer was last updated in ISO 8601 format.
             */
            readonly updated_at?: string;
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
        /**
         * The unique identifier for the store.
         */
        readonly store_id?: string;
        /**
         * A string that uniquely identifies the campaign associated with an order.
         */
        campaign_id?: string;
        /**
         * The URL for the page where the buyer landed when entering the shop.
         */
        landing_site?: string;
        /**
         * The order status. Use this parameter to trigger [Order Notifications](https://mailchimp.com/developer/marketing/docs/e-commerce/#order-notifications).
         */
        financial_status?: string;
        /**
         * The fulfillment status for the order. Use this parameter to trigger [Order Notifications](https://mailchimp.com/developer/marketing/docs/e-commerce/#order-notifications).
         */
        fulfillment_status?: string;
        /**
         * The three-letter ISO 4217 code for the currency that the store accepts.
         */
        currency_code?: string;
        /**
         * The order total associated with an order.
         */
        order_total?: number;
        /**
         * The URL for the order.
         */
        order_url?: string;
        /**
         * The total amount of the discounts to be applied to the price of the order.
         */
        discount_total?: number;
        /**
         * The tax total associated with an order.
         */
        tax_total?: number;
        /**
         * The shipping total for the order.
         */
        shipping_total?: number;
        /**
         * The Mailchimp tracking code for the order. Uses the 'mc_tc' parameter in E-Commerce tracking URLs.
         */
        tracking_code?: 'prec';
        /**
         * The date and time the order was processed in ISO 8601 format.
         */
        processed_at_foreign?: string;
        /**
         * The date and time the order was cancelled in ISO 8601 format.
         */
        cancelled_at_foreign?: string;
        /**
         * The date and time the order was updated in ISO 8601 format.
         */
        updated_at_foreign?: string;
        /**
         * The shipping address for the order.
         */
        shipping_address?: {
            /**
             * The name associated with an order's shipping address.
             */
            name?: string;
            /**
             * The shipping address for the order.
             */
            address1?: string;
            /**
             * An additional field for the shipping address.
             */
            address2?: string;
            /**
             * The city in the order's shipping address.
             */
            city?: string;
            /**
             * The state or normalized province in the order's shipping address.
             */
            province?: string;
            /**
             * The two-letter code for the province or state the order's shipping address is located in.
             */
            province_code?: string;
            /**
             * The postal or zip code in the order's shipping address.
             */
            postal_code?: string;
            /**
             * The country in the order's shipping address.
             */
            country?: string;
            /**
             * The two-letter code for the country in the shipping address.
             */
            country_code?: string;
            /**
             * The longitude for the shipping address location.
             */
            longitude?: number;
            /**
             * The latitude for the shipping address location.
             */
            latitude?: number;
            /**
             * The phone number for the order's shipping address
             */
            phone?: string;
            /**
             * The company associated with an order's shipping address.
             */
            company?: string;
        };
        /**
         * The billing address for the order.
         */
        billing_address?: {
            /**
             * The name associated with an order's billing address.
             */
            name?: string;
            /**
             * The billing address for the order.
             */
            address1?: string;
            /**
             * An additional field for the billing address.
             */
            address2?: string;
            /**
             * The city in the billing address.
             */
            city?: string;
            /**
             * The state or normalized province in the billing address.
             */
            province?: string;
            /**
             * The two-letter code for the province or state in the billing address.
             */
            province_code?: string;
            /**
             * The postal or zip code in the billing address.
             */
            postal_code?: string;
            /**
             * The country in the billing address.
             */
            country?: string;
            /**
             * The two-letter code for the country in the billing address.
             */
            country_code?: string;
            /**
             * The longitude for the billing address location.
             */
            longitude?: number;
            /**
             * The latitude for the billing address location.
             */
            latitude?: number;
            /**
             * The phone number for the billing address.
             */
            phone?: string;
            /**
             * The company associated with the billing address.
             */
            company?: string;
        };
        /**
         * The promo codes applied on the order
         */
        promos?: Array<{
            /**
             * The Promo Code
             */
            code?: string;
            /**
             * The amount of discount applied on the total price. For example if the total cost was $100 and the customer paid $95.5, amount_discounted will be 4.5 For free shipping set amount_discounted to 0
             */
            amount_discounted?: number;
            /**
             * Type of discount. For free shipping set type to fixed
             */
            type?: 'fixed' | 'percentage';
        }>;
        /**
         * An array of the order's line items.
         */
        lines?: Array<{
            /**
             * A unique identifier for an order line item.
             */
            readonly id?: string;
            /**
             * A unique identifier for the product associated with an order line item.
             */
            product_id?: string;
            /**
             * The name of the product for an order line item.
             */
            readonly product_title?: string;
            /**
             * A unique identifier for the product variant associated with an order line item.
             */
            product_variant_id?: string;
            /**
             * The name of the product variant for an order line item.
             */
            readonly product_variant_title?: string;
            /**
             * The image URL for a product.
             */
            readonly image_url?: string;
            /**
             * The order line item quantity.
             */
            quantity?: number;
            /**
             * The order line item price.
             */
            price?: number;
            /**
             * The total discount amount applied to a line item.
             */
            discount?: number;
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
         * The outreach associated with this order. For example, an email campaign or Facebook ad.
         */
        outreach?: {
            /**
             * A unique identifier for the outreach. Can be an email campaign ID.
             */
            id?: string;
            /**
             * The name for the outreach.
             */
            readonly name?: string;
            /**
             * The type of the outreach.
             */
            readonly type?: string;
            /**
             * The date and time the Outreach was published in ISO 8601 format.
             */
            readonly published_time?: string;
        };
        /**
         * The tracking number associated with the order.
         */
        tracking_number?: string;
        /**
         * The tracking carrier associated with the order.
         */
        tracking_carrier?: string;
        /**
         * The tracking URL associated with the order.
         */
        tracking_url?: string;
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
            url: '/ecommerce/stores/{store_id}/orders/{order_id}',
            path: {
                'store_id': storeId,
                'order_id': orderId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * Update order
     * Update a specific order.
     * @returns any
     * @throws ApiError
     */
    public patchEcommerceStoresIdOrdersId({
        storeId,
        orderId,
        body,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        /**
         * The id for the order in a store.
         */
        orderId: string,
        body: {
            /**
             * Information about a specific customer. Orders for existing customers should include only the `id` parameter in the `customer` object body.
             */
            customer?: {
                /**
                 * The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing Mailchimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your Mailchimp list [will be added as `Transactional` members](https://mailchimp.com/developer/marketing/docs/e-commerce/#customers).
                 */
                opt_in_status?: boolean;
                /**
                 * The customer's company.
                 */
                company?: string;
                /**
                 * The customer's first name.
                 */
                first_name?: string;
                /**
                 * The customer's last name.
                 */
                last_name?: string;
                /**
                 * The customer's address.
                 */
                address?: {
                    /**
                     * The mailing address of the customer.
                     */
                    address1?: string;
                    /**
                     * An additional field for the customer's mailing address.
                     */
                    address2?: string;
                    /**
                     * The city the customer is located in.
                     */
                    city?: string;
                    /**
                     * The customer's state name or normalized province.
                     */
                    province?: string;
                    /**
                     * The two-letter code for the customer's province or state.
                     */
                    province_code?: string;
                    /**
                     * The customer's postal or zip code.
                     */
                    postal_code?: string;
                    /**
                     * The customer's country.
                     */
                    country?: string;
                    /**
                     * The two-letter code for the customer's country.
                     */
                    country_code?: string;
                };
            };
            /**
             * A string that uniquely identifies the campaign associated with an order.
             */
            campaign_id?: string;
            /**
             * The URL for the page where the buyer landed when entering the shop.
             */
            landing_site?: string;
            /**
             * The order status. Use this parameter to trigger [Order Notifications](https://mailchimp.com/developer/marketing/docs/e-commerce/#order-notifications).
             */
            financial_status?: string;
            /**
             * The fulfillment status for the order. Use this parameter to trigger [Order Notifications](https://mailchimp.com/developer/marketing/docs/e-commerce/#order-notifications).
             */
            fulfillment_status?: string;
            /**
             * The three-letter ISO 4217 code for the currency that the store accepts.
             */
            currency_code?: string;
            /**
             * The order total associated with an order.
             */
            order_total?: number;
            /**
             * The URL for the order.
             */
            order_url?: string;
            /**
             * The total amount of the discounts to be applied to the price of the order.
             */
            discount_total?: number;
            /**
             * The tax total associated with an order.
             */
            tax_total?: number;
            /**
             * The shipping total for the order.
             */
            shipping_total?: number;
            /**
             * The Mailchimp tracking code for the order. Uses the 'mc_tc' parameter in E-Commerce tracking URLs.
             */
            tracking_code?: 'prec';
            /**
             * The date and time the order was processed in ISO 8601 format.
             */
            processed_at_foreign?: string;
            /**
             * The date and time the order was cancelled in ISO 8601 format. Note: passing a value for this parameter will cancel the order being edited.
             */
            cancelled_at_foreign?: string;
            /**
             * The date and time the order was updated in ISO 8601 format.
             */
            updated_at_foreign?: string;
            /**
             * The shipping address for the order.
             */
            shipping_address?: {
                /**
                 * The name associated with an order's shipping address.
                 */
                name?: string;
                /**
                 * The shipping address for the order.
                 */
                address1?: string;
                /**
                 * An additional field for the shipping address.
                 */
                address2?: string;
                /**
                 * The city in the order's shipping address.
                 */
                city?: string;
                /**
                 * The state or normalized province in the order's shipping address.
                 */
                province?: string;
                /**
                 * The two-letter code for the province or state the order's shipping address is located in.
                 */
                province_code?: string;
                /**
                 * The postal or zip code in the order's shipping address.
                 */
                postal_code?: string;
                /**
                 * The country in the order's shipping address.
                 */
                country?: string;
                /**
                 * The two-letter code for the country in the shipping address.
                 */
                country_code?: string;
                /**
                 * The longitude for the shipping address location.
                 */
                longitude?: number;
                /**
                 * The latitude for the shipping address location.
                 */
                latitude?: number;
                /**
                 * The phone number for the order's shipping address
                 */
                phone?: string;
                /**
                 * The company associated with an order's shipping address.
                 */
                company?: string;
            };
            /**
             * The billing address for the order.
             */
            billing_address?: {
                /**
                 * The name associated with an order's billing address.
                 */
                name?: string;
                /**
                 * The billing address for the order.
                 */
                address1?: string;
                /**
                 * An additional field for the billing address.
                 */
                address2?: string;
                /**
                 * The city in the billing address.
                 */
                city?: string;
                /**
                 * The state or normalized province in the billing address.
                 */
                province?: string;
                /**
                 * The two-letter code for the province or state in the billing address.
                 */
                province_code?: string;
                /**
                 * The postal or zip code in the billing address.
                 */
                postal_code?: string;
                /**
                 * The country in the billing address.
                 */
                country?: string;
                /**
                 * The two-letter code for the country in the billing address.
                 */
                country_code?: string;
                /**
                 * The longitude for the billing address location.
                 */
                longitude?: number;
                /**
                 * The latitude for the billing address location.
                 */
                latitude?: number;
                /**
                 * The phone number for the billing address.
                 */
                phone?: string;
                /**
                 * The company associated with the billing address.
                 */
                company?: string;
            };
            /**
             * The promo codes applied on the order. Note: Patch will completely replace the value of promos with the new one provided.
             */
            promos?: Array<{
                /**
                 * The Promo Code
                 */
                code: string;
                /**
                 * The amount of discount applied on the total price. For example if the total cost was $100 and the customer paid $95.5, amount_discounted will be 4.5 For free shipping set amount_discounted to 0
                 */
                amount_discounted: number;
                /**
                 * Type of discount. For free shipping set type to fixed
                 */
                type: 'fixed' | 'percentage';
            }>;
            /**
             * An array of the order's line items.
             */
            lines?: Array<{
                /**
                 * A unique identifier for the product associated with the order line item.
                 */
                product_id?: string;
                /**
                 * A unique identifier for the product variant associated with the order line item.
                 */
                product_variant_id?: string;
                /**
                 * The quantity of an order line item.
                 */
                quantity?: number;
                /**
                 * The price of an order line item.
                 */
                price?: number;
                /**
                 * The total discount amount applied to this line item.
                 */
                discount?: number;
            }>;
            /**
             * The outreach associated with this order. For example, an email campaign or Facebook ad.
             */
            outreach?: {
                /**
                 * A unique identifier for the outreach. Can be an email campaign ID.
                 */
                id?: string;
            };
            /**
             * The tracking number associated with the order.
             */
            tracking_number?: string;
            /**
             * The tracking carrier associated with the order.
             */
            tracking_carrier?: string;
            /**
             * The tracking URL associated with the order.
             */
            tracking_url?: string;
        },
    }): CancelablePromise<{
        /**
         * A unique identifier for the order.
         */
        readonly id?: string;
        /**
         * Information about a specific customer.
         */
        customer?: {
            /**
             * A unique identifier for the customer.
             */
            readonly id?: string;
            /**
             * The customer's email address.
             */
            readonly email_address?: string;
            /**
             * The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing Mailchimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your Mailchimp list [will be added as `Transactional` members](https://mailchimp.com/developer/marketing/docs/e-commerce/#customers).
             */
            opt_in_status?: boolean;
            /**
             * The customer's company.
             */
            company?: string;
            /**
             * The customer's first name.
             */
            first_name?: string;
            /**
             * The customer's last name.
             */
            last_name?: string;
            /**
             * The customer's total order count.
             */
            readonly orders_count?: number;
            /**
             * The total amount the customer has spent.
             */
            readonly total_spent?: number;
            /**
             * The customer's address.
             */
            address?: {
                /**
                 * The mailing address of the customer.
                 */
                address1?: string;
                /**
                 * An additional field for the customer's mailing address.
                 */
                address2?: string;
                /**
                 * The city the customer is located in.
                 */
                city?: string;
                /**
                 * The customer's state name or normalized province.
                 */
                province?: string;
                /**
                 * The two-letter code for the customer's province or state.
                 */
                province_code?: string;
                /**
                 * The customer's postal or zip code.
                 */
                postal_code?: string;
                /**
                 * The customer's country.
                 */
                country?: string;
                /**
                 * The two-letter code for the customer's country.
                 */
                country_code?: string;
            };
            /**
             * The date and time the customer was created in ISO 8601 format.
             */
            readonly created_at?: string;
            /**
             * The date and time the customer was last updated in ISO 8601 format.
             */
            readonly updated_at?: string;
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
        /**
         * The unique identifier for the store.
         */
        readonly store_id?: string;
        /**
         * A string that uniquely identifies the campaign associated with an order.
         */
        campaign_id?: string;
        /**
         * The URL for the page where the buyer landed when entering the shop.
         */
        landing_site?: string;
        /**
         * The order status. Use this parameter to trigger [Order Notifications](https://mailchimp.com/developer/marketing/docs/e-commerce/#order-notifications).
         */
        financial_status?: string;
        /**
         * The fulfillment status for the order. Use this parameter to trigger [Order Notifications](https://mailchimp.com/developer/marketing/docs/e-commerce/#order-notifications).
         */
        fulfillment_status?: string;
        /**
         * The three-letter ISO 4217 code for the currency that the store accepts.
         */
        currency_code?: string;
        /**
         * The order total associated with an order.
         */
        order_total?: number;
        /**
         * The URL for the order.
         */
        order_url?: string;
        /**
         * The total amount of the discounts to be applied to the price of the order.
         */
        discount_total?: number;
        /**
         * The tax total associated with an order.
         */
        tax_total?: number;
        /**
         * The shipping total for the order.
         */
        shipping_total?: number;
        /**
         * The Mailchimp tracking code for the order. Uses the 'mc_tc' parameter in E-Commerce tracking URLs.
         */
        tracking_code?: 'prec';
        /**
         * The date and time the order was processed in ISO 8601 format.
         */
        processed_at_foreign?: string;
        /**
         * The date and time the order was cancelled in ISO 8601 format.
         */
        cancelled_at_foreign?: string;
        /**
         * The date and time the order was updated in ISO 8601 format.
         */
        updated_at_foreign?: string;
        /**
         * The shipping address for the order.
         */
        shipping_address?: {
            /**
             * The name associated with an order's shipping address.
             */
            name?: string;
            /**
             * The shipping address for the order.
             */
            address1?: string;
            /**
             * An additional field for the shipping address.
             */
            address2?: string;
            /**
             * The city in the order's shipping address.
             */
            city?: string;
            /**
             * The state or normalized province in the order's shipping address.
             */
            province?: string;
            /**
             * The two-letter code for the province or state the order's shipping address is located in.
             */
            province_code?: string;
            /**
             * The postal or zip code in the order's shipping address.
             */
            postal_code?: string;
            /**
             * The country in the order's shipping address.
             */
            country?: string;
            /**
             * The two-letter code for the country in the shipping address.
             */
            country_code?: string;
            /**
             * The longitude for the shipping address location.
             */
            longitude?: number;
            /**
             * The latitude for the shipping address location.
             */
            latitude?: number;
            /**
             * The phone number for the order's shipping address
             */
            phone?: string;
            /**
             * The company associated with an order's shipping address.
             */
            company?: string;
        };
        /**
         * The billing address for the order.
         */
        billing_address?: {
            /**
             * The name associated with an order's billing address.
             */
            name?: string;
            /**
             * The billing address for the order.
             */
            address1?: string;
            /**
             * An additional field for the billing address.
             */
            address2?: string;
            /**
             * The city in the billing address.
             */
            city?: string;
            /**
             * The state or normalized province in the billing address.
             */
            province?: string;
            /**
             * The two-letter code for the province or state in the billing address.
             */
            province_code?: string;
            /**
             * The postal or zip code in the billing address.
             */
            postal_code?: string;
            /**
             * The country in the billing address.
             */
            country?: string;
            /**
             * The two-letter code for the country in the billing address.
             */
            country_code?: string;
            /**
             * The longitude for the billing address location.
             */
            longitude?: number;
            /**
             * The latitude for the billing address location.
             */
            latitude?: number;
            /**
             * The phone number for the billing address.
             */
            phone?: string;
            /**
             * The company associated with the billing address.
             */
            company?: string;
        };
        /**
         * The promo codes applied on the order
         */
        promos?: Array<{
            /**
             * The Promo Code
             */
            code?: string;
            /**
             * The amount of discount applied on the total price. For example if the total cost was $100 and the customer paid $95.5, amount_discounted will be 4.5 For free shipping set amount_discounted to 0
             */
            amount_discounted?: number;
            /**
             * Type of discount. For free shipping set type to fixed
             */
            type?: 'fixed' | 'percentage';
        }>;
        /**
         * An array of the order's line items.
         */
        lines?: Array<{
            /**
             * A unique identifier for an order line item.
             */
            readonly id?: string;
            /**
             * A unique identifier for the product associated with an order line item.
             */
            product_id?: string;
            /**
             * The name of the product for an order line item.
             */
            readonly product_title?: string;
            /**
             * A unique identifier for the product variant associated with an order line item.
             */
            product_variant_id?: string;
            /**
             * The name of the product variant for an order line item.
             */
            readonly product_variant_title?: string;
            /**
             * The image URL for a product.
             */
            readonly image_url?: string;
            /**
             * The order line item quantity.
             */
            quantity?: number;
            /**
             * The order line item price.
             */
            price?: number;
            /**
             * The total discount amount applied to a line item.
             */
            discount?: number;
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
         * The outreach associated with this order. For example, an email campaign or Facebook ad.
         */
        outreach?: {
            /**
             * A unique identifier for the outreach. Can be an email campaign ID.
             */
            id?: string;
            /**
             * The name for the outreach.
             */
            readonly name?: string;
            /**
             * The type of the outreach.
             */
            readonly type?: string;
            /**
             * The date and time the Outreach was published in ISO 8601 format.
             */
            readonly published_time?: string;
        };
        /**
         * The tracking number associated with the order.
         */
        tracking_number?: string;
        /**
         * The tracking carrier associated with the order.
         */
        tracking_carrier?: string;
        /**
         * The tracking URL associated with the order.
         */
        tracking_url?: string;
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
            url: '/ecommerce/stores/{store_id}/orders/{order_id}',
            path: {
                'store_id': storeId,
                'order_id': orderId,
            },
            body: body,
        });
    }

    /**
     * Delete order
     * Delete an order.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public deleteEcommerceStoresIdOrdersId({
        storeId,
        orderId,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        /**
         * The id for the order in a store.
         */
        orderId: string,
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
            url: '/ecommerce/stores/{store_id}/orders/{order_id}',
            path: {
                'store_id': storeId,
                'order_id': orderId,
            },
        });
    }

    /**
     * List order line items
     * Get information about an order's line items.
     * @returns any
     * @throws ApiError
     */
    public getEcommerceStoresIdOrdersIdLines({
        storeId,
        orderId,
        fields,
        excludeFields,
        count = 10,
        offset,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        /**
         * The id for the order in a store.
         */
        orderId: string,
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
         * The store id.
         */
        store_id?: string;
        /**
         * The order id.
         */
        order_id?: string;
        /**
         * An array of objects, each representing an order's line item.
         */
        lines?: Array<{
            /**
             * A unique identifier for an order line item.
             */
            readonly id?: string;
            /**
             * A unique identifier for the product associated with an order line item.
             */
            product_id?: string;
            /**
             * The name of the product for an order line item.
             */
            readonly product_title?: string;
            /**
             * A unique identifier for the product variant associated with an order line item.
             */
            product_variant_id?: string;
            /**
             * The name of the product variant for an order line item.
             */
            readonly product_variant_title?: string;
            /**
             * The image URL for a product.
             */
            readonly image_url?: string;
            /**
             * The order line item quantity.
             */
            quantity?: number;
            /**
             * The order line item price.
             */
            price?: number;
            /**
             * The total discount amount applied to a line item.
             */
            discount?: number;
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
            url: '/ecommerce/stores/{store_id}/orders/{order_id}/lines',
            path: {
                'store_id': storeId,
                'order_id': orderId,
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
     * Add order line item
     * Add a new line item to an existing order.
     * @returns any
     * @throws ApiError
     */
    public postEcommerceStoresIdOrdersIdLines({
        storeId,
        orderId,
        body,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        /**
         * The id for the order in a store.
         */
        orderId: string,
        body: {
            /**
             * A unique identifier for the order line item.
             */
            id: string;
            /**
             * A unique identifier for the product associated with the order line item.
             */
            product_id: string;
            /**
             * A unique identifier for the product variant associated with the order line item.
             */
            product_variant_id: string;
            /**
             * The quantity of an order line item.
             */
            quantity: number;
            /**
             * The price of an order line item.
             */
            price: number;
            /**
             * The total discount amount applied to this line item.
             */
            discount?: number;
        },
    }): CancelablePromise<{
        /**
         * A unique identifier for an order line item.
         */
        readonly id?: string;
        /**
         * A unique identifier for the product associated with an order line item.
         */
        product_id?: string;
        /**
         * The name of the product for an order line item.
         */
        readonly product_title?: string;
        /**
         * A unique identifier for the product variant associated with an order line item.
         */
        product_variant_id?: string;
        /**
         * The name of the product variant for an order line item.
         */
        readonly product_variant_title?: string;
        /**
         * The image URL for a product.
         */
        readonly image_url?: string;
        /**
         * The order line item quantity.
         */
        quantity?: number;
        /**
         * The order line item price.
         */
        price?: number;
        /**
         * The total discount amount applied to a line item.
         */
        discount?: number;
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
            url: '/ecommerce/stores/{store_id}/orders/{order_id}/lines',
            path: {
                'store_id': storeId,
                'order_id': orderId,
            },
            body: body,
        });
    }

    /**
     * Get order line item
     * Get information about a specific order line item.
     * @returns any
     * @throws ApiError
     */
    public getEcommerceStoresIdOrdersIdLinesId({
        storeId,
        orderId,
        lineId,
        fields,
        excludeFields,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        /**
         * The id for the order in a store.
         */
        orderId: string,
        /**
         * The id for the line item of an order.
         */
        lineId: string,
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
         * A unique identifier for an order line item.
         */
        readonly id?: string;
        /**
         * A unique identifier for the product associated with an order line item.
         */
        product_id?: string;
        /**
         * The name of the product for an order line item.
         */
        readonly product_title?: string;
        /**
         * A unique identifier for the product variant associated with an order line item.
         */
        product_variant_id?: string;
        /**
         * The name of the product variant for an order line item.
         */
        readonly product_variant_title?: string;
        /**
         * The image URL for a product.
         */
        readonly image_url?: string;
        /**
         * The order line item quantity.
         */
        quantity?: number;
        /**
         * The order line item price.
         */
        price?: number;
        /**
         * The total discount amount applied to a line item.
         */
        discount?: number;
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
            url: '/ecommerce/stores/{store_id}/orders/{order_id}/lines/{line_id}',
            path: {
                'store_id': storeId,
                'order_id': orderId,
                'line_id': lineId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * Update order line item
     * Update a specific order line item.
     * @returns any
     * @throws ApiError
     */
    public patchEcommerceStoresIdOrdersIdLinesId({
        storeId,
        orderId,
        lineId,
        body,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        /**
         * The id for the order in a store.
         */
        orderId: string,
        /**
         * The id for the line item of an order.
         */
        lineId: string,
        body: {
            /**
             * A unique identifier for the product associated with the order line item.
             */
            product_id?: string;
            /**
             * A unique identifier for the product variant associated with the order line item.
             */
            product_variant_id?: string;
            /**
             * The quantity of an order line item.
             */
            quantity?: number;
            /**
             * The price of an order line item.
             */
            price?: number;
            /**
             * The total discount amount applied to this line item.
             */
            discount?: number;
        },
    }): CancelablePromise<{
        /**
         * A unique identifier for an order line item.
         */
        readonly id?: string;
        /**
         * A unique identifier for the product associated with an order line item.
         */
        product_id?: string;
        /**
         * The name of the product for an order line item.
         */
        readonly product_title?: string;
        /**
         * A unique identifier for the product variant associated with an order line item.
         */
        product_variant_id?: string;
        /**
         * The name of the product variant for an order line item.
         */
        readonly product_variant_title?: string;
        /**
         * The image URL for a product.
         */
        readonly image_url?: string;
        /**
         * The order line item quantity.
         */
        quantity?: number;
        /**
         * The order line item price.
         */
        price?: number;
        /**
         * The total discount amount applied to a line item.
         */
        discount?: number;
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
            url: '/ecommerce/stores/{store_id}/orders/{order_id}/lines/{line_id}',
            path: {
                'store_id': storeId,
                'order_id': orderId,
                'line_id': lineId,
            },
            body: body,
        });
    }

    /**
     * Delete order line item
     * Delete a specific order line item.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public deleteEcommerceStoresIdOrdersIdLinesId({
        storeId,
        orderId,
        lineId,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        /**
         * The id for the order in a store.
         */
        orderId: string,
        /**
         * The id for the line item of an order.
         */
        lineId: string,
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
            url: '/ecommerce/stores/{store_id}/orders/{order_id}/lines/{line_id}',
            path: {
                'store_id': storeId,
                'order_id': orderId,
                'line_id': lineId,
            },
        });
    }

    /**
     * List product
     * Get information about a store's products.
     * @returns any
     * @throws ApiError
     */
    public getEcommerceStoresIdProducts({
        storeId,
        fields,
        excludeFields,
        count = 10,
        offset,
    }: {
        /**
         * The store id.
         */
        storeId: string,
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
         * The store id.
         */
        store_id?: string;
        /**
         * An array of objects, each representing a store product.
         */
        products?: Array<{
            /**
             * A unique identifier for the product.
             */
            readonly id?: string;
            /**
             * The currency code
             */
            readonly currency_code?: string;
            /**
             * The title of a product.
             */
            title?: string;
            /**
             * The handle of a product.
             */
            handle?: string;
            /**
             * The URL for a product.
             */
            url?: string;
            /**
             * The description of a product.
             */
            description?: string;
            /**
             * The type of product.
             */
            type?: string;
            /**
             * The vendor for a product.
             */
            vendor?: string;
            /**
             * The image URL for a product.
             */
            image_url?: string;
            /**
             * Returns up to 50 of the product's variants. To retrieve all variants use [Product Variants](https://mailchimp.com/developer/marketing/api/ecommerce-product-variants/).
             */
            variants?: Array<{
                /**
                 * A unique identifier for the product variant.
                 */
                readonly id?: string;
                /**
                 * The title of a product variant.
                 */
                title?: string;
                /**
                 * The URL for a product variant.
                 */
                url?: string;
                /**
                 * The stock keeping unit (SKU) of a product variant.
                 */
                sku?: string;
                /**
                 * The price of a product variant.
                 */
                price?: number;
                /**
                 * The inventory quantity of a product variant.
                 */
                inventory_quantity?: number;
                /**
                 * The image URL for a product variant.
                 */
                image_url?: string;
                /**
                 * The backorders of a product variant.
                 */
                backorders?: string;
                /**
                 * The visibility of a product variant.
                 */
                visibility?: string;
                /**
                 * The date and time the product was created in ISO 8601 format.
                 */
                readonly created_at?: string;
                /**
                 * The date and time the product was last updated in ISO 8601 format.
                 */
                readonly updated_at?: string;
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
             * An array of the product's images.
             */
            images?: Array<{
                /**
                 * A unique identifier for the product image.
                 */
                id?: string;
                /**
                 * The URL for a product image.
                 */
                url?: string;
                /**
                 * The list of product variants using the image.
                 */
                variant_ids?: Array<string>;
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
             * The date and time the product was published in ISO 8601 format.
             */
            published_at_foreign?: string;
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
            url: '/ecommerce/stores/{store_id}/products',
            path: {
                'store_id': storeId,
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
     * Add product
     * Add a new product to a store.
     * @returns any
     * @throws ApiError
     */
    public postEcommerceStoresIdProducts({
        storeId,
        body,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        body: {
            /**
             * A unique identifier for the product.
             */
            id: string;
            /**
             * The title of a product.
             */
            title: string;
            /**
             * The handle of a product.
             */
            handle?: string;
            /**
             * The URL for a product.
             */
            url?: string;
            /**
             * The description of a product.
             */
            description?: string;
            /**
             * The type of product.
             */
            type?: string;
            /**
             * The vendor for a product.
             */
            vendor?: string;
            /**
             * The image URL for a product.
             */
            image_url?: string;
            /**
             * An array of the product's variants. At least one variant is required for each product. A variant can use the same `id` and `title` as the parent product.
             */
            variants: Array<{
                /**
                 * A unique identifier for the product variant.
                 */
                id: string;
                /**
                 * The title of a product variant.
                 */
                title: string;
                /**
                 * The URL for a product variant.
                 */
                url?: string;
                /**
                 * The stock keeping unit (SKU) of a product variant.
                 */
                sku?: string;
                /**
                 * The price of a product variant.
                 */
                price?: number;
                /**
                 * The inventory quantity of a product variant.
                 */
                inventory_quantity?: number;
                /**
                 * The image URL for a product variant.
                 */
                image_url?: string;
                /**
                 * The backorders of a product variant.
                 */
                backorders?: string;
                /**
                 * The visibility of a product variant.
                 */
                visibility?: string;
            }>;
            /**
             * An array of the product's images.
             */
            images?: Array<{
                /**
                 * A unique identifier for the product image.
                 */
                id: string;
                /**
                 * The URL for a product image.
                 */
                url: string;
                /**
                 * The list of product variants using the image.
                 */
                variant_ids?: Array<string>;
            }>;
            /**
             * The date and time the product was published.
             */
            published_at_foreign?: string;
        },
    }): CancelablePromise<{
        /**
         * A unique identifier for the product.
         */
        readonly id?: string;
        /**
         * The currency code
         */
        readonly currency_code?: string;
        /**
         * The title of a product.
         */
        title?: string;
        /**
         * The handle of a product.
         */
        handle?: string;
        /**
         * The URL for a product.
         */
        url?: string;
        /**
         * The description of a product.
         */
        description?: string;
        /**
         * The type of product.
         */
        type?: string;
        /**
         * The vendor for a product.
         */
        vendor?: string;
        /**
         * The image URL for a product.
         */
        image_url?: string;
        /**
         * Returns up to 50 of the product's variants. To retrieve all variants use [Product Variants](https://mailchimp.com/developer/marketing/api/ecommerce-product-variants/).
         */
        variants?: Array<{
            /**
             * A unique identifier for the product variant.
             */
            readonly id?: string;
            /**
             * The title of a product variant.
             */
            title?: string;
            /**
             * The URL for a product variant.
             */
            url?: string;
            /**
             * The stock keeping unit (SKU) of a product variant.
             */
            sku?: string;
            /**
             * The price of a product variant.
             */
            price?: number;
            /**
             * The inventory quantity of a product variant.
             */
            inventory_quantity?: number;
            /**
             * The image URL for a product variant.
             */
            image_url?: string;
            /**
             * The backorders of a product variant.
             */
            backorders?: string;
            /**
             * The visibility of a product variant.
             */
            visibility?: string;
            /**
             * The date and time the product was created in ISO 8601 format.
             */
            readonly created_at?: string;
            /**
             * The date and time the product was last updated in ISO 8601 format.
             */
            readonly updated_at?: string;
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
         * An array of the product's images.
         */
        images?: Array<{
            /**
             * A unique identifier for the product image.
             */
            id?: string;
            /**
             * The URL for a product image.
             */
            url?: string;
            /**
             * The list of product variants using the image.
             */
            variant_ids?: Array<string>;
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
         * The date and time the product was published in ISO 8601 format.
         */
        published_at_foreign?: string;
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
            url: '/ecommerce/stores/{store_id}/products',
            path: {
                'store_id': storeId,
            },
            body: body,
        });
    }

    /**
     * Get product info
     * Get information about a specific product.
     * @returns any
     * @throws ApiError
     */
    public getEcommerceStoresIdProductsId({
        storeId,
        productId,
        fields,
        excludeFields,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        /**
         * The id for the product of a store.
         */
        productId: string,
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
         * A unique identifier for the product.
         */
        readonly id?: string;
        /**
         * The currency code
         */
        readonly currency_code?: string;
        /**
         * The title of a product.
         */
        title?: string;
        /**
         * The handle of a product.
         */
        handle?: string;
        /**
         * The URL for a product.
         */
        url?: string;
        /**
         * The description of a product.
         */
        description?: string;
        /**
         * The type of product.
         */
        type?: string;
        /**
         * The vendor for a product.
         */
        vendor?: string;
        /**
         * The image URL for a product.
         */
        image_url?: string;
        /**
         * Returns up to 50 of the product's variants. To retrieve all variants use [Product Variants](https://mailchimp.com/developer/marketing/api/ecommerce-product-variants/).
         */
        variants?: Array<{
            /**
             * A unique identifier for the product variant.
             */
            readonly id?: string;
            /**
             * The title of a product variant.
             */
            title?: string;
            /**
             * The URL for a product variant.
             */
            url?: string;
            /**
             * The stock keeping unit (SKU) of a product variant.
             */
            sku?: string;
            /**
             * The price of a product variant.
             */
            price?: number;
            /**
             * The inventory quantity of a product variant.
             */
            inventory_quantity?: number;
            /**
             * The image URL for a product variant.
             */
            image_url?: string;
            /**
             * The backorders of a product variant.
             */
            backorders?: string;
            /**
             * The visibility of a product variant.
             */
            visibility?: string;
            /**
             * The date and time the product was created in ISO 8601 format.
             */
            readonly created_at?: string;
            /**
             * The date and time the product was last updated in ISO 8601 format.
             */
            readonly updated_at?: string;
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
         * An array of the product's images.
         */
        images?: Array<{
            /**
             * A unique identifier for the product image.
             */
            id?: string;
            /**
             * The URL for a product image.
             */
            url?: string;
            /**
             * The list of product variants using the image.
             */
            variant_ids?: Array<string>;
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
         * The date and time the product was published in ISO 8601 format.
         */
        published_at_foreign?: string;
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
            url: '/ecommerce/stores/{store_id}/products/{product_id}',
            path: {
                'store_id': storeId,
                'product_id': productId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * Update product
     * Update a specific product.
     * @returns any
     * @throws ApiError
     */
    public patchEcommerceStoresIdProductsId({
        storeId,
        productId,
        body,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        /**
         * The id for the product of a store.
         */
        productId: string,
        body: {
            /**
             * The title of a product.
             */
            title?: string;
            /**
             * The handle of a product.
             */
            handle?: string;
            /**
             * The URL for a product.
             */
            url?: string;
            /**
             * The description of a product.
             */
            description?: string;
            /**
             * The type of product.
             */
            type?: string;
            /**
             * The vendor for a product.
             */
            vendor?: string;
            /**
             * The image URL for a product.
             */
            image_url?: string;
            /**
             * An array of the product's variants. At least one variant is required for each product. A variant can use the same `id` and `title` as the parent product.
             */
            variants?: Array<{
                /**
                 * The title of a product variant.
                 */
                title?: string;
                /**
                 * The URL for a product variant.
                 */
                url?: string;
                /**
                 * The stock keeping unit (SKU) of a product variant.
                 */
                sku?: string;
                /**
                 * The price of a product variant.
                 */
                price?: number;
                /**
                 * The inventory quantity of a product variant.
                 */
                inventory_quantity?: number;
                /**
                 * The image URL for a product variant.
                 */
                image_url?: string;
                /**
                 * The backorders of a product variant.
                 */
                backorders?: string;
                /**
                 * The visibility of a product variant.
                 */
                visibility?: string;
            }>;
            /**
             * An array of the product's images.
             */
            images?: Array<{
                /**
                 * A unique identifier for the product image.
                 */
                id?: string;
                /**
                 * The URL for a product image.
                 */
                url?: string;
                /**
                 * The list of product variants using the image.
                 */
                variant_ids?: Array<string>;
            }>;
            /**
             * The date and time the product was published in ISO 8601 format.
             */
            published_at_foreign?: string;
        },
    }): CancelablePromise<{
        /**
         * A unique identifier for the product.
         */
        readonly id?: string;
        /**
         * The currency code
         */
        readonly currency_code?: string;
        /**
         * The title of a product.
         */
        title?: string;
        /**
         * The handle of a product.
         */
        handle?: string;
        /**
         * The URL for a product.
         */
        url?: string;
        /**
         * The description of a product.
         */
        description?: string;
        /**
         * The type of product.
         */
        type?: string;
        /**
         * The vendor for a product.
         */
        vendor?: string;
        /**
         * The image URL for a product.
         */
        image_url?: string;
        /**
         * Returns up to 50 of the product's variants. To retrieve all variants use [Product Variants](https://mailchimp.com/developer/marketing/api/ecommerce-product-variants/).
         */
        variants?: Array<{
            /**
             * A unique identifier for the product variant.
             */
            readonly id?: string;
            /**
             * The title of a product variant.
             */
            title?: string;
            /**
             * The URL for a product variant.
             */
            url?: string;
            /**
             * The stock keeping unit (SKU) of a product variant.
             */
            sku?: string;
            /**
             * The price of a product variant.
             */
            price?: number;
            /**
             * The inventory quantity of a product variant.
             */
            inventory_quantity?: number;
            /**
             * The image URL for a product variant.
             */
            image_url?: string;
            /**
             * The backorders of a product variant.
             */
            backorders?: string;
            /**
             * The visibility of a product variant.
             */
            visibility?: string;
            /**
             * The date and time the product was created in ISO 8601 format.
             */
            readonly created_at?: string;
            /**
             * The date and time the product was last updated in ISO 8601 format.
             */
            readonly updated_at?: string;
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
         * An array of the product's images.
         */
        images?: Array<{
            /**
             * A unique identifier for the product image.
             */
            id?: string;
            /**
             * The URL for a product image.
             */
            url?: string;
            /**
             * The list of product variants using the image.
             */
            variant_ids?: Array<string>;
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
         * The date and time the product was published in ISO 8601 format.
         */
        published_at_foreign?: string;
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
            url: '/ecommerce/stores/{store_id}/products/{product_id}',
            path: {
                'store_id': storeId,
                'product_id': productId,
            },
            body: body,
        });
    }

    /**
     * Delete product
     * Delete a product.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public deleteEcommerceStoresIdProductsId({
        storeId,
        productId,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        /**
         * The id for the product of a store.
         */
        productId: string,
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
            url: '/ecommerce/stores/{store_id}/products/{product_id}',
            path: {
                'store_id': storeId,
                'product_id': productId,
            },
        });
    }

    /**
     * List product variants
     * Get information about a product's variants.
     * @returns any
     * @throws ApiError
     */
    public getEcommerceStoresIdProductsIdVariants({
        storeId,
        productId,
        fields,
        excludeFields,
        count = 10,
        offset,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        /**
         * The id for the product of a store.
         */
        productId: string,
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
         * The store id.
         */
        store_id?: string;
        /**
         * The product id.
         */
        product_id?: string;
        /**
         * An array of objects, each representing a product's variants.
         */
        variants?: Array<{
            /**
             * A unique identifier for the product variant.
             */
            readonly id?: string;
            /**
             * The title of a product variant.
             */
            title?: string;
            /**
             * The URL for a product variant.
             */
            url?: string;
            /**
             * The stock keeping unit (SKU) of a product variant.
             */
            sku?: string;
            /**
             * The price of a product variant.
             */
            price?: number;
            /**
             * The inventory quantity of a product variant.
             */
            inventory_quantity?: number;
            /**
             * The image URL for a product variant.
             */
            image_url?: string;
            /**
             * The backorders of a product variant.
             */
            backorders?: string;
            /**
             * The visibility of a product variant.
             */
            visibility?: string;
            /**
             * The date and time the product was created in ISO 8601 format.
             */
            readonly created_at?: string;
            /**
             * The date and time the product was last updated in ISO 8601 format.
             */
            readonly updated_at?: string;
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
            url: '/ecommerce/stores/{store_id}/products/{product_id}/variants',
            path: {
                'store_id': storeId,
                'product_id': productId,
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
     * Add product variant
     * Add a new variant to the product.
     * @returns any
     * @throws ApiError
     */
    public postEcommerceStoresIdProductsIdVariants({
        storeId,
        productId,
        body,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        /**
         * The id for the product of a store.
         */
        productId: string,
        body: {
            /**
             * A unique identifier for the product variant.
             */
            id: string;
            /**
             * The title of a product variant.
             */
            title: string;
            /**
             * The URL for a product variant.
             */
            url?: string;
            /**
             * The stock keeping unit (SKU) of a product variant.
             */
            sku?: string;
            /**
             * The price of a product variant.
             */
            price?: number;
            /**
             * The inventory quantity of a product variant.
             */
            inventory_quantity?: number;
            /**
             * The image URL for a product variant.
             */
            image_url?: string;
            /**
             * The backorders of a product variant.
             */
            backorders?: string;
            /**
             * The visibility of a product variant.
             */
            visibility?: string;
        },
    }): CancelablePromise<{
        /**
         * A unique identifier for the product variant.
         */
        readonly id?: string;
        /**
         * The title of a product variant.
         */
        title?: string;
        /**
         * The URL for a product variant.
         */
        url?: string;
        /**
         * The stock keeping unit (SKU) of a product variant.
         */
        sku?: string;
        /**
         * The price of a product variant.
         */
        price?: number;
        /**
         * The inventory quantity of a product variant.
         */
        inventory_quantity?: number;
        /**
         * The image URL for a product variant.
         */
        image_url?: string;
        /**
         * The backorders of a product variant.
         */
        backorders?: string;
        /**
         * The visibility of a product variant.
         */
        visibility?: string;
        /**
         * The date and time the product was created in ISO 8601 format.
         */
        readonly created_at?: string;
        /**
         * The date and time the product was last updated in ISO 8601 format.
         */
        readonly updated_at?: string;
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
            url: '/ecommerce/stores/{store_id}/products/{product_id}/variants',
            path: {
                'store_id': storeId,
                'product_id': productId,
            },
            body: body,
        });
    }

    /**
     * Get product variant info
     * Get information about a specific product variant.
     * @returns any
     * @throws ApiError
     */
    public getEcommerceStoresIdProductsIdVariantsId({
        storeId,
        productId,
        variantId,
        fields,
        excludeFields,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        /**
         * The id for the product of a store.
         */
        productId: string,
        /**
         * The id for the product variant.
         */
        variantId: string,
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
         * A unique identifier for the product variant.
         */
        readonly id?: string;
        /**
         * The title of a product variant.
         */
        title?: string;
        /**
         * The URL for a product variant.
         */
        url?: string;
        /**
         * The stock keeping unit (SKU) of a product variant.
         */
        sku?: string;
        /**
         * The price of a product variant.
         */
        price?: number;
        /**
         * The inventory quantity of a product variant.
         */
        inventory_quantity?: number;
        /**
         * The image URL for a product variant.
         */
        image_url?: string;
        /**
         * The backorders of a product variant.
         */
        backorders?: string;
        /**
         * The visibility of a product variant.
         */
        visibility?: string;
        /**
         * The date and time the product was created in ISO 8601 format.
         */
        readonly created_at?: string;
        /**
         * The date and time the product was last updated in ISO 8601 format.
         */
        readonly updated_at?: string;
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
            url: '/ecommerce/stores/{store_id}/products/{product_id}/variants/{variant_id}',
            path: {
                'store_id': storeId,
                'product_id': productId,
                'variant_id': variantId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * Add or update product variant
     * Add or update a product variant.
     * @returns any
     * @throws ApiError
     */
    public putEcommerceStoresIdProductsIdVariantsId({
        storeId,
        productId,
        variantId,
        body,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        /**
         * The id for the product of a store.
         */
        productId: string,
        /**
         * The id for the product variant.
         */
        variantId: string,
        body: {
            /**
             * A unique identifier for the product variant.
             */
            id: string;
            /**
             * The title of a product variant.
             */
            title: string;
            /**
             * The URL for a product variant.
             */
            url?: string;
            /**
             * The stock keeping unit (SKU) of a product variant.
             */
            sku?: string;
            /**
             * The price of a product variant.
             */
            price?: number;
            /**
             * The inventory quantity of a product variant.
             */
            inventory_quantity?: number;
            /**
             * The image URL for a product variant.
             */
            image_url?: string;
            /**
             * The backorders of a product variant.
             */
            backorders?: string;
            /**
             * The visibility of a product variant.
             */
            visibility?: string;
        },
    }): CancelablePromise<{
        /**
         * A unique identifier for the product variant.
         */
        readonly id?: string;
        /**
         * The title of a product variant.
         */
        title?: string;
        /**
         * The URL for a product variant.
         */
        url?: string;
        /**
         * The stock keeping unit (SKU) of a product variant.
         */
        sku?: string;
        /**
         * The price of a product variant.
         */
        price?: number;
        /**
         * The inventory quantity of a product variant.
         */
        inventory_quantity?: number;
        /**
         * The image URL for a product variant.
         */
        image_url?: string;
        /**
         * The backorders of a product variant.
         */
        backorders?: string;
        /**
         * The visibility of a product variant.
         */
        visibility?: string;
        /**
         * The date and time the product was created in ISO 8601 format.
         */
        readonly created_at?: string;
        /**
         * The date and time the product was last updated in ISO 8601 format.
         */
        readonly updated_at?: string;
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
            url: '/ecommerce/stores/{store_id}/products/{product_id}/variants/{variant_id}',
            path: {
                'store_id': storeId,
                'product_id': productId,
                'variant_id': variantId,
            },
            body: body,
        });
    }

    /**
     * Update product variant
     * Update a product variant.
     * @returns any
     * @throws ApiError
     */
    public patchEcommerceStoresIdProductsIdVariantsId({
        storeId,
        productId,
        variantId,
        body,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        /**
         * The id for the product of a store.
         */
        productId: string,
        /**
         * The id for the product variant.
         */
        variantId: string,
        body: {
            /**
             * The title of a product variant.
             */
            title?: string;
            /**
             * The URL for a product variant.
             */
            url?: string;
            /**
             * The stock keeping unit (SKU) of a product variant.
             */
            sku?: string;
            /**
             * The price of a product variant.
             */
            price?: number;
            /**
             * The inventory quantity of a product variant.
             */
            inventory_quantity?: number;
            /**
             * The image URL for a product variant.
             */
            image_url?: string;
            /**
             * The backorders of a product variant.
             */
            backorders?: string;
            /**
             * The visibility of a product variant.
             */
            visibility?: string;
        },
    }): CancelablePromise<{
        /**
         * A unique identifier for the product variant.
         */
        readonly id?: string;
        /**
         * The title of a product variant.
         */
        title?: string;
        /**
         * The URL for a product variant.
         */
        url?: string;
        /**
         * The stock keeping unit (SKU) of a product variant.
         */
        sku?: string;
        /**
         * The price of a product variant.
         */
        price?: number;
        /**
         * The inventory quantity of a product variant.
         */
        inventory_quantity?: number;
        /**
         * The image URL for a product variant.
         */
        image_url?: string;
        /**
         * The backorders of a product variant.
         */
        backorders?: string;
        /**
         * The visibility of a product variant.
         */
        visibility?: string;
        /**
         * The date and time the product was created in ISO 8601 format.
         */
        readonly created_at?: string;
        /**
         * The date and time the product was last updated in ISO 8601 format.
         */
        readonly updated_at?: string;
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
            url: '/ecommerce/stores/{store_id}/products/{product_id}/variants/{variant_id}',
            path: {
                'store_id': storeId,
                'product_id': productId,
                'variant_id': variantId,
            },
            body: body,
        });
    }

    /**
     * Delete product variant
     * Delete a product variant.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public deleteEcommerceStoresIdProductsIdVariantsId({
        storeId,
        productId,
        variantId,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        /**
         * The id for the product of a store.
         */
        productId: string,
        /**
         * The id for the product variant.
         */
        variantId: string,
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
            url: '/ecommerce/stores/{store_id}/products/{product_id}/variants/{variant_id}',
            path: {
                'store_id': storeId,
                'product_id': productId,
                'variant_id': variantId,
            },
        });
    }

    /**
     * List product images
     * Get information about a product's images.
     * @returns any
     * @throws ApiError
     */
    public getEcommerceStoresIdProductsIdImages({
        storeId,
        productId,
        fields,
        excludeFields,
        count = 10,
        offset,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        /**
         * The id for the product of a store.
         */
        productId: string,
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
         * The store id.
         */
        store_id?: string;
        /**
         * The product id.
         */
        product_id?: string;
        /**
         * An array of objects, each representing a product image resource.
         */
        images?: Array<{
            /**
             * A unique identifier for the product image.
             */
            id?: string;
            /**
             * The URL for a product image.
             */
            url?: string;
            /**
             * The list of product variants using the image.
             */
            variant_ids?: Array<string>;
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
            url: '/ecommerce/stores/{store_id}/products/{product_id}/images',
            path: {
                'store_id': storeId,
                'product_id': productId,
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
     * Add product image
     * Add a new image to the product.
     * @returns any
     * @throws ApiError
     */
    public postEcommerceStoresIdProductsIdImages({
        storeId,
        productId,
        body,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        /**
         * The id for the product of a store.
         */
        productId: string,
        body: {
            /**
             * A unique identifier for the product image.
             */
            id: string;
            /**
             * The URL for a product image.
             */
            url: string;
            /**
             * The list of product variants using the image.
             */
            variant_ids?: Array<string>;
        },
    }): CancelablePromise<{
        /**
         * A unique identifier for the product image.
         */
        id?: string;
        /**
         * The URL for a product image.
         */
        url?: string;
        /**
         * The list of product variants using the image.
         */
        variant_ids?: Array<string>;
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
            url: '/ecommerce/stores/{store_id}/products/{product_id}/images',
            path: {
                'store_id': storeId,
                'product_id': productId,
            },
            body: body,
        });
    }

    /**
     * Get product image info
     * Get information about a specific product image.
     * @returns any
     * @throws ApiError
     */
    public getEcommerceStoresIdProductsIdImagesId({
        storeId,
        productId,
        imageId,
        fields,
        excludeFields,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        /**
         * The id for the product of a store.
         */
        productId: string,
        /**
         * The id for the product image.
         */
        imageId: string,
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
         * A unique identifier for the product image.
         */
        id?: string;
        /**
         * The URL for a product image.
         */
        url?: string;
        /**
         * The list of product variants using the image.
         */
        variant_ids?: Array<string>;
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
            url: '/ecommerce/stores/{store_id}/products/{product_id}/images/{image_id}',
            path: {
                'store_id': storeId,
                'product_id': productId,
                'image_id': imageId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * Update product image
     * Update a product image.
     * @returns any
     * @throws ApiError
     */
    public patchEcommerceStoresIdProductsIdImagesId({
        storeId,
        productId,
        imageId,
        body,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        /**
         * The id for the product of a store.
         */
        productId: string,
        /**
         * The id for the product image.
         */
        imageId: string,
        body: {
            /**
             * A unique identifier for the product image.
             */
            id?: string;
            /**
             * The URL for a product image.
             */
            url?: string;
            /**
             * The list of product variants using the image.
             */
            variant_ids?: Array<string>;
        },
    }): CancelablePromise<{
        /**
         * A unique identifier for the product image.
         */
        id?: string;
        /**
         * The URL for a product image.
         */
        url?: string;
        /**
         * The list of product variants using the image.
         */
        variant_ids?: Array<string>;
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
            url: '/ecommerce/stores/{store_id}/products/{product_id}/images/{image_id}',
            path: {
                'store_id': storeId,
                'product_id': productId,
                'image_id': imageId,
            },
            body: body,
        });
    }

    /**
     * Delete product image
     * Delete a product image.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public deleteEcommerceStoresIdProductsIdImagesId({
        storeId,
        productId,
        imageId,
    }: {
        /**
         * The store id.
         */
        storeId: string,
        /**
         * The id for the product of a store.
         */
        productId: string,
        /**
         * The id for the product image.
         */
        imageId: string,
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
            url: '/ecommerce/stores/{store_id}/products/{product_id}/images/{image_id}',
            path: {
                'store_id': storeId,
                'product_id': productId,
                'image_id': imageId,
            },
        });
    }

}

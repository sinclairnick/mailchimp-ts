/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';

import { AccountExportApi } from './services/AccountExportApi';
import { AccountExportsApi } from './services/AccountExportsApi';
import { ActivityFeedApi } from './services/ActivityFeedApi';
import { AuthorizedAppsApi } from './services/AuthorizedAppsApi';
import { AutomationsApi } from './services/AutomationsApi';
import { BatchesApi } from './services/BatchesApi';
import { BatchWebhooksApi } from './services/BatchWebhooksApi';
import { CampaignFoldersApi } from './services/CampaignFoldersApi';
import { CampaignsApi } from './services/CampaignsApi';
import { ConnectedSitesApi } from './services/ConnectedSitesApi';
import { ConversationsApi } from './services/ConversationsApi';
import { CustomerJourneysApi } from './services/CustomerJourneysApi';
import { EcommerceApi } from './services/EcommerceApi';
import { FacebookAdsApi } from './services/FacebookAdsApi';
import { FileManagerApi } from './services/FileManagerApi';
import { LandingPagesApi } from './services/LandingPagesApi';
import { ListsApi } from './services/ListsApi';
import { PingApi } from './services/PingApi';
import { ReportingApi } from './services/ReportingApi';
import { ReportsApi } from './services/ReportsApi';
import { RootApi } from './services/RootApi';
import { SearchCampaignsApi } from './services/SearchCampaignsApi';
import { SearchMembersApi } from './services/SearchMembersApi';
import { SurveysApi } from './services/SurveysApi';
import { TemplateFoldersApi } from './services/TemplateFoldersApi';
import { TemplatesApi } from './services/TemplatesApi';
import { VerifiedDomainsApi } from './services/VerifiedDomainsApi';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class mailchimp {

    public readonly accountExport: AccountExportApi;
    public readonly accountExports: AccountExportsApi;
    public readonly activityFeed: ActivityFeedApi;
    public readonly authorizedApps: AuthorizedAppsApi;
    public readonly automations: AutomationsApi;
    public readonly batches: BatchesApi;
    public readonly batchWebhooks: BatchWebhooksApi;
    public readonly campaignFolders: CampaignFoldersApi;
    public readonly campaigns: CampaignsApi;
    public readonly connectedSites: ConnectedSitesApi;
    public readonly conversations: ConversationsApi;
    public readonly customerJourneys: CustomerJourneysApi;
    public readonly ecommerce: EcommerceApi;
    public readonly facebookAds: FacebookAdsApi;
    public readonly fileManager: FileManagerApi;
    public readonly landingPages: LandingPagesApi;
    public readonly lists: ListsApi;
    public readonly ping: PingApi;
    public readonly reporting: ReportingApi;
    public readonly reports: ReportsApi;
    public readonly root: RootApi;
    public readonly searchCampaigns: SearchCampaignsApi;
    public readonly searchMembers: SearchMembersApi;
    public readonly surveys: SurveysApi;
    public readonly templateFolders: TemplateFoldersApi;
    public readonly templates: TemplatesApi;
    public readonly verifiedDomains: VerifiedDomainsApi;

    public readonly request: BaseHttpRequest;

    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://server.api.mailchimp.com/3.0',
            VERSION: config?.VERSION ?? '3.0.55',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });

        this.accountExport = new AccountExportApi(this.request);
        this.accountExports = new AccountExportsApi(this.request);
        this.activityFeed = new ActivityFeedApi(this.request);
        this.authorizedApps = new AuthorizedAppsApi(this.request);
        this.automations = new AutomationsApi(this.request);
        this.batches = new BatchesApi(this.request);
        this.batchWebhooks = new BatchWebhooksApi(this.request);
        this.campaignFolders = new CampaignFoldersApi(this.request);
        this.campaigns = new CampaignsApi(this.request);
        this.connectedSites = new ConnectedSitesApi(this.request);
        this.conversations = new ConversationsApi(this.request);
        this.customerJourneys = new CustomerJourneysApi(this.request);
        this.ecommerce = new EcommerceApi(this.request);
        this.facebookAds = new FacebookAdsApi(this.request);
        this.fileManager = new FileManagerApi(this.request);
        this.landingPages = new LandingPagesApi(this.request);
        this.lists = new ListsApi(this.request);
        this.ping = new PingApi(this.request);
        this.reporting = new ReportingApi(this.request);
        this.reports = new ReportsApi(this.request);
        this.root = new RootApi(this.request);
        this.searchCampaigns = new SearchCampaignsApi(this.request);
        this.searchMembers = new SearchMembersApi(this.request);
        this.surveys = new SurveysApi(this.request);
        this.templateFolders = new TemplateFoldersApi(this.request);
        this.templates = new TemplatesApi(this.request);
        this.verifiedDomains = new VerifiedDomainsApi(this.request);
    }
}


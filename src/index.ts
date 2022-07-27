import { mailchimp as _mailchimp } from "./generated";

type MailchimpArgs =
  | {
      accessToken: string;
      server: string;
    }
  | {
      apiKey: string;
      server: string;
    };

export const createMailchimp = (args: MailchimpArgs) => {
  const baseUrl = `https://${args.server}.api.mailchimp.com/3.0/`;
  const token = "accessToken" in args ? args.accessToken : args.apiKey;
  const authHeader = `Bearer ${token}`;

  return new _mailchimp({
    BASE: baseUrl,
    HEADERS: {
      Authorization: authHeader,
    },
  });
};

import { createMailchimp } from ".";

describe("mailchimp-ts", () => {
  it("Pings", async () => {
    const mc = createMailchimp({
      apiKey: String(process.env.MC_API_KEY),
      server: String(process.env.MC_SERVER),
    });

    const res = await mc.ping.getPing();

    expect(res.health_status).toBe("Everything's Chimpy!");
  });
});

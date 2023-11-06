import mailchannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest = mailchannelsPlugin({
  personalizations: [
    {
      to: [{ name: "Christian", email: "christian.mccabe@liminil.net" }],
    },
  ],
  from: { name: "PI Website", email: "fritz@powerintegrator.net" },
  subject: (submission) => `PI Website submission from ${submission.formData.get("email")}`,
  content: (submission) => [
    {
      type: "text/plain",
      value: `New submission from ${submission.formData.get("name")}:\n\nMessage: ${submission.formData.get("message")}\n\nEmail: ${submission.formData.get("email")}\n\nCompany: ${submission.formData.get("company")}`,
    },
  ],
  respondWith: () =>
    new Response(null, {
      status: 302,
      headers: { Location: "/results/" },
    }),
});

import { EmailService } from "@/lib/api/__generated__/services/mailsending-form";
import { client } from "./contact-form";
import { Api } from "@/lib/api";
import { templates } from "@/components/templates";
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only post request allowed" });
  }
  try {
    const data = await Api.Services.SanityClientService.createHiringRequest({
      doc: req?.body,
      client: client,
    });

    const subject = "Jamstacky Estimate Form";
    const sendGridData = await EmailService.sendEmail(subject,{
      html: templates.estimateProjectForm({
        email: String(data?.email),
        name: String(data?.name),
        projectType: String(data?.project_type),
        subject: String(subject),
        message: String(data?.message),
      }),
    });
    const _res = await EmailService.send({
      html: templates.estimateProjectForm({
        email: String(data?.email),
        name: String(data?.name),
        projectType: String(data?.project_type),
        subject: String(subject),
        message: String(data?.message),
      }),
      subject,
    });
    await EmailService.send({
      html: templates.thankYou({ subject : "Thank you for joining with us!"}),
      subject: "Thank you for joining with us!",
      to: String(data?.email),
    });
    return res.status(200).send(_res);
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Internal server error";
    res.status(500).json({ message: errorMessage });
  }
}

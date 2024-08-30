import { SANITY_API_TOKEN } from "@/lib/constants";
import { SanityDocument } from "@sanity/client";
import { EmailService } from "@/lib/api/__generated__/services/mailsending-form";
import { SanityClientServiceResponse } from "@/lib/api/__generated__/services/sanity-client-service";
import { Api } from "@/lib/api";
import { NextApiRequest, NextApiResponse } from "next";
import { getClient } from "@/lib/sanity";
import { templates } from "@/components/templates";
export type HiringRequestResponseData = SanityClientServiceResponse<
  SanityDocument<Record<string, any>>
>;

export const client = getClient(SANITY_API_TOKEN);

export default async function handler(
  req: Omit<NextApiRequest, "body"> & { body: HiringRequestResponseData },
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only post request allowed" });
  }
  try {
    const data =
      await Api.Services.SanityClientService.createMessageSendRequest({
        doc: req?.body,
        client: client,
      });

    const subject = "Jamstacky Contact Form";
    const sendGridData = await EmailService.sendEmail(subject,{
      html: templates.contactForm({
        subject: subject,
        companyName: data?.companyName,
        name: data?.name, 
        email: data?.email,
        phoneNumber: data?.phone_number,
        projectType: data?.project_type,
        message: data?.message,
      }),
    });
    const _res = await EmailService.send({
      html: templates.contactForm({
        email: String(data?.email),
        companyName: String(data?.companyName),
        phoneNumber: String(data?.phone_number),
        projectType: String(data?.project_type),
        name: String(data?.name),
        subject: String(subject),
        message: String(data?.message),
      }),
      subject,
    });
    await EmailService.send({
      html: templates.thankYou({ subject: "Thank you for joining with us!" }),
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

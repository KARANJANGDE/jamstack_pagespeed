import { EmailService } from "@/lib/api/__generated__/services/mailsending-form";
import { templates } from "@/components/templates";
import { generateCouponCode } from "@/lib/utils/generate-coupon-code";
import { Api } from "@/lib/api";
import { client } from "./contact-form";
import { testimonialRequestQuery } from "@/lib/sanity.queries";
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only post request allowed" });
  }
  try {
    const couponCode = await generateCouponCode("JAM-");
    const emailExists = await client.fetch(testimonialRequestQuery, {
      email: req?.body?.email,
    });
    if (emailExists) {
      const _res = await EmailService.send({
        html: templates.couponCode({
          subject: "Thank you for joining with us!",
          couponCode: emailExists?.couponCode,
        }),
        subject: "Thank you for joining with us!",
        to: String(emailExists?.email),
      });
      return res.status(200).send(_res);
    } else {
      const data =
        await Api.Services.SanityClientService.createTestimonialRequest({
          doc: { ...req?.body, couponCode },
          client: client,
        });
      const subject = "Jamstacky Testimonial Form";
      const sendGridData = await EmailService.sendEmail(subject,{
        html: templates.testimonialPopupForm({
          email: String(data?.email),
          name: String(data?.name),
          subject: String(subject),
        }),
      });
      const _res = await EmailService.send({
        html: templates.testimonialPopupForm({
          email: String(data?.email),
          name: String(data?.name),
          subject: String(subject),
        }),
        subject,
      });
      await EmailService.send({
        html: templates.couponCode({
          subject: "Thank you for joining with us!",
          couponCode,
        }),
        subject: "Thank you for joining with us!",
        to: String(data?.email),
      });
      return res.status(200).send(_res);
    }
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Internal server error";
    res.status(500).json({ message: errorMessage });
  }
}

import { replaceAll } from "@/lib/replace";
import { readFileSync, readdirSync } from "fs";
import path from "path";
const templatesDirectory = path.resolve(process.cwd(), "components/templates");
const htmlPath = (filePath: string) => path.join(templatesDirectory, filePath);
export const emailTemplates = {
  contactForm: ({
    subject,
    companyName,
    name,
    phoneNumber,
    email,
    projectType,
    message,
  }: {
    subject: string;
    companyName: string;
    name: string;
    phoneNumber: string;
    email: string;
    projectType: string;
    message: string;
  }) =>
    replaceAll(
      readFileSync(htmlPath("email-templates/contact-form.html")).toString(),
      {
        "{{subject}}": subject,
        "{{companyName}}": companyName,
        "{{name}}": name,
        "{{phoneNumber}}": phoneNumber,
        "{{email}}": email,
        "{{projectType}}": projectType,
        "{{message}}": message,
      }
    ),

  estimateProjectForm: ({
    subject,
    name,
    email,
    projectType,
    message,
  }: {
    subject: string;
    name: string;
    email: string;
    projectType: string;
    message: string;
  }) =>
    replaceAll(
      readFileSync(
        htmlPath("email-templates/estimate-project-form.html")
      ).toString(),
      {
        "{{subject}}": subject,
        "{{name}}": name,
        "{{email}}": email,
        "{{projectType}}": projectType,
        "{{message}}": message,
      }
    ),
  testimonialPopupForm: ({
    subject,
    name,
    email,
  }: {
    subject: string;
    name: string;
    email: string;
  }) =>
    replaceAll(
      readFileSync(
        htmlPath("email-templates/testimonial-popup-form.html")
      ).toString(),
      {
        "{{subject}}": subject,
        "{{name}}": name,
        "{{email}}": email,
      }
    ),
  thankYou: ({ subject }: { subject: string }) =>
    replaceAll(
      readFileSync(htmlPath("email-templates/thank-you.html")).toString(),
      { "{{subject}}": subject }
    ),
  couponCode: ({ subject, couponCode }: { subject: string; couponCode?: string }) =>
    replaceAll(
      readFileSync(htmlPath("email-templates/coupon-code.html")).toString(),
      {
        "{{subject}}": subject,
        "{{couponCode}}": couponCode??'',
      }
    ),
};

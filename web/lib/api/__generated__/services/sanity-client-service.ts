import {
  SanityClient,
  SanityDocument,
  SanityDocumentStub,
} from "@sanity/client";
export type SanityClientServiceResponse<P> = Partial<P> & {
  clientError?: unknown;
};
export class SanityClientService {
  public static async createHiringRequest({
    doc,
    client,
  }: {
    doc: Record<string, unknown>;
    client: SanityClient;
  }): Promise<
    SanityClientServiceResponse<SanityDocument<Record<string, any>>>
  > {
    const document: SanityDocumentStub = {
      _type: "hiring_request",
      ...doc,
    };
    try {
      const res = await client.create(document);
      return res;
    } catch (error) {
      return { clientError: error };
    }
  }
  public static async createTestimonialRequest({
    doc,
    client,
  }: {
    doc: Record<string, unknown>;
    client: SanityClient;
  }): Promise<
    SanityClientServiceResponse<SanityDocument<Record<string, any>>>
  > {
    const document: SanityDocumentStub = {
      _type: "testimonial_request",
      ...doc,
    };
    try {
      const res = await client.create(document);
      return res;
    } catch (error) {
      return { clientError: error };
    }
  }

  public static async createMessageSendRequest({
    doc,
    client,
  }: {
    doc: Record<string, unknown>;
    client: SanityClient;
  }): Promise<
    SanityClientServiceResponse<SanityDocument<Record<string, any>>>
  > {
    const document: SanityDocumentStub = {
      _type: "message_send_request",
      ...doc,
    };
    try {
      const res = await client.create(document);
      return res;
    } catch (error) {
      return { clientError: error };
    }
  }
}

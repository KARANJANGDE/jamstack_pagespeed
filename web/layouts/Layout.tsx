import React, { useEffect, useMemo } from "react";
import type { PropsWithChildren } from "react";

import {
  Header as HeaderType,
  Footer as FooterType,
  SeoType
} from "@/lib/sanity/types";
import {
  LocalBusinessJsonLd,
  LogoJsonLd,
  NextSeo,
  SocialProfileJsonLd,
} from "next-seo";
import { NEXT_PUBLIC_APP_URL } from "@/lib/constants";
import { getMetaObjects, getOpenGraph } from "@/lib/metaHelper";
import dynamic from "next/dynamic";
import Header from "@/components/Header";

const Footer = dynamic(() => import("@/components/Footer"));
const TestimonialPopup = dynamic(() => import("@/components/common/TestimonialPopup")); 

import { useAnalytics } from "@/lib/utils/analytics";
// const AlertBanner = dynamic(() => import("@/components/AlertBanner"));
interface LayoutProps {
  header?: HeaderType;
  footer?: FooterType;
  preview?: boolean;
  loading?: boolean;
  seo: SeoType | null;
  slug?: string;
}
const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({
  children,
  footer,
  header,
  seo,
  loading,
  preview,
  slug,
}) => {
  const { meta_title, meta_description, meta_tags, twitter, setting } =
    seo || {};
  const tags = useMemo(
    () => (meta_tags ? getMetaObjects(meta_tags) : []),
    [meta_tags]
  );
  const openGraph = useMemo(
    () => (seo?.openGraph ? getOpenGraph(seo.openGraph) : undefined),
    [seo]
  );
  const url =
    (NEXT_PUBLIC_APP_URL ?? "") + (slug?.startsWith("/") ? slug : `/${slug}`);
  const { description, image, name, telePhone } = setting || {};
  const { ReactGA } = useAnalytics()
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: slug?.startsWith("/") ? slug : `/${slug}`,
    });
  }, [slug]);

  return (
    <>
      <NextSeo
        themeColor=""
        twitter={twitter}
        nofollow={process.env.NEXT_PUBLIC_ALLOW_INDEXING !== "true"}
        noindex={process.env.NEXT_PUBLIC_ALLOW_INDEXING !== "true"}
        openGraph={openGraph}
        canonical={url || ""}
        additionalMetaTags={[...(tags || [])]}
        // additionalMetaTags={tags ?? []}
        title={meta_title ?? ""}
        description={meta_description ?? ""}

      />
      <SocialProfileJsonLd
        type="Organization"
        name={meta_title || ""}
        url={url || ""}
        sameAs={[""]}
      />
      <LogoJsonLd
        logo={header?.logo?.image?.asset?.url || ""}
        url={url || ""}
      />
      <LocalBusinessJsonLd
        type="store"
        id={url || ""}
        name={meta_title || ""}
        description={description || ""}
        telephone={telePhone || ""}
        images={[image?.image?.asset?.url || ""]}
        address={{
          "@type": "PostalAddress",
          streetAddress:
            " Nr. Shell Petrol Pump, Fortune Business Hub, Science City Rd,",
          addressLocality: "Sola",
          addressRegion: "Ahmedabad",
          postalCode: "380060",
          addressCountry: "IN",
        }}
        priceRange="$
        424,$764,$
        1274,$2124"
        openingHours={[
          {
            opens: "09:00",
            closes: "19:59",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            validFrom: "2019-12-23",
            validThrough: "2020-04-02",
          },
        ]}
        rating={{
          ratingValue: "4.5",
          ratingCount: "4",
        }}
        review={[
          {
            author: {
              name: "Frank Jackson",
            },
            datePublished: "2020-05-04",
            name: name || "",
            reviewBody:
              "mpressive professionalism and communication. Jamstacky has provided excellent service and customer support, and superior technical development. It is the best jamstack development agency. I highly recommend it for our next project and to other people.",
            reviewRating: {
              bestRating: "5",
              worstRating: "1",
              ratingValue: "4",
            },
          },
        ]}
      />
      {/* {preview && <AlertBanner preview={preview} loading={loading} />} */}
      {header && (
        <Header
          block={header}
          path={slug?.startsWith("/") ? slug : `/${slug}`}
        />
      )}
      {children}
      <TestimonialPopup />
      {footer && <Footer block={footer} />}
    </>
  );
};

export default Layout;

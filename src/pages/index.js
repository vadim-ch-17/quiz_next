import Head from "next/head";
import fetch from "node-fetch";
import { Mulish, Exo_2 } from "next/font/google";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "@/components/Layout";
import { useLandingContext } from "@/utils/landing-context";
import Sections from "@/sections";
import Modal from "@/components/Modal";
import UpButton from "@/components/UpButon";
import { useEffect } from "react";
import wow from "@/libs/wow";

const mulish = Mulish({
  weight: ["400", "600", "700", "800", "900"],
  subsets: ["latin"]
});

const exo2 = Exo_2({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
});


export default function Home({ dataReviews, ...props }) {
  const { t } = useTranslation("common");
  const sections = t("sections", { returnObjects: true });
  const { acceptCookies, modalContent, rejectCookies, setReviews } = useLandingContext();

  //dynamic import modal
  const ModalContent = modalContent ? dynamic(() => import(`@/components/${modalContent}`)) : null;
  const DynamicCookiesMsg = !acceptCookies ? dynamic(() => import("@/components/CookiesMsg")) : null;

  useEffect(() => {
    setReviews(dataReviews);
    if (typeof window !== "undefined") {
      wow();
    }
  }, [])

  return (
    <Layout>
      <Head>
        <title>{t('seo.title')}</title>
        <meta name="description" content={t('seo.description')} />
        <meta name="keywords" content={t('seo.keywords')} />
      </Head>
      <Sections sections={sections} font={{ mulish, exo2 }} />
      <UpButton />
      {ModalContent && <Modal>
        {ModalContent && <ModalContent />}
      </Modal>}
      {DynamicCookiesMsg && !rejectCookies ? <DynamicCookiesMsg /> : null}
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => {
  const getData = async () => {
    try {
      const res = await fetch(`${process.env.URL_REVIEWS}`)
      return res.json()
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

  const data = await getData();

  return {
    props: {
      dataReviews: data?.sections?.reviews,
      ...(await serverSideTranslations(locale, ['common', 'navigation'])),
    },
    revalidate: 3600,
  };
};
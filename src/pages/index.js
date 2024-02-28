import Head from "next/head";
import { Mulish, Days_One } from "next/font/google";
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
const daysOne = Days_One({
  weight: ["400"],
  subsets: ["latin"]
});



export default function Home() {
  const { t } = useTranslation("common");
  const sections = t("sections", { returnObjects: true });
  const { acceptCookies, modalContent, rejectCookies } = useLandingContext();

  //dynamic import modal
  const ModalContent = modalContent ? dynamic(() => import(`@/components/${modalContent}`)) : null;
  const DynamicCookiesMsg = !acceptCookies ? dynamic(() => import("@/components/CookiesMsg")) : null;

  useEffect(() => {
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
      <Sections sections={sections} font={{ mulish, daysOne }} />
      <UpButton />
      {ModalContent && <Modal>
        {ModalContent && <ModalContent />}
      </Modal>}
      {DynamicCookiesMsg && !rejectCookies ? <DynamicCookiesMsg /> : null}
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'navigation'])),
    },
    revalidate: 3600,
  };
};
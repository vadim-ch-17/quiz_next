import { useEffect } from "react";
import fetch from "node-fetch";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "@/components/Layout";
import { useLandingContext } from "@/utils/landing-context";
import Sections from "@/sections";
import wow from "@/libs/wow";
import UpButton from "@/components/UpButon";


export default function Home({ dataReviews, ...props }) {
  const { t } = useTranslation("common");
  const sections = t("sections", { returnObjects: true });
  // const seo = t("seo", { returnObjects: true });

  const { acceptCookies, modalContent, rejectCookies, setReviews, setFonts } = useLandingContext();

  //dynamic import modal
  const ModalDynamic = modalContent ? dynamic(() => import(`@/components/Modal`)) : null;
  const ModalContent = modalContent ? dynamic(() => import(`@/components/${modalContent}`)) : null;

  useEffect(() => {
    setReviews(dataReviews);

    if (typeof window !== "undefined") {
      wow();
    }
  }, [])

  return (
    <Layout >
      <Sections sections={sections} />
      <UpButton />
      {ModalDynamic && <ModalDynamic>
        {ModalContent && <ModalContent />}
      </ModalDynamic>}
    </Layout>
  );
}

export const getStaticProps = async ({ locale, res }) => {
  const getData = async () => {
    try {
      const resData = await fetch(`${process.env.URL_REVIEWS}`)
      return resData.json()
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

  const data = await getData();
  if (res) {
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
  }
  return {
    props: {
      dataReviews: data?.sections?.reviews,
      ...(await serverSideTranslations(locale, ['common', 'navigation'])),
    },
    revalidate: 3600,
  };
};

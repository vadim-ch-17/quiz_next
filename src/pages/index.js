import Image from "next/image";
import { Mulish, Days_One } from "next/font/google";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";
import { useLandingContext } from "@/utils/landing-context";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
const mulish = Mulish({
  weight: ["400", "600", "700", "800", "900"],
  subsets: ["latin"]
});
const daysOne = Days_One({
  weight: ["400"],
  subsets: ["latin"]
});
import theme from "@/styles/theme";
import Sections from "@/sections";

export default function Home() {
  const { t } = useTranslation("common");
  const sections = t("sections", { returnObjects: true });
  const { cookies, setCookies } = useLandingContext();

  return (
    <Layout>
      <Sections sections={sections} font={{ mulish, daysOne }} />
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'navigation'])),
    },
  };
};
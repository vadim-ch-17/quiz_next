import Image from "next/image";
import { Inter } from "next/font/google";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";
import { useLandingContext } from "@/utils/landing-context";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { t } = useTranslation("navigation");
  const navigationItems = t("items", { returnObjects: true });
  const { cookies, setCookies } = useLandingContext();
  return (
    <Layout>
      <h1>TEST</h1>
      <Button>Test Button</Button>
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['navigation'])),
    },
  };
};
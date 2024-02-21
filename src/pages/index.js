
import { Mulish, Days_One } from "next/font/google";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "@/components/Layout";

const mulish = Mulish({
  weight: ["400", "600", "700", "800", "900"],
  subsets: ["latin"]
});
const daysOne = Days_One({
  weight: ["400"],
  subsets: ["latin"]
});

import Sections from "@/sections";

export default function Home() {
  const { t } = useTranslation("common");
  const sections = t("sections", { returnObjects: true });

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
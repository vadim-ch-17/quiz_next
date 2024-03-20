import { useTranslation } from "next-i18next";
import Link from "next/link";
import Button from "../Button";

const ButtonsContainer = ({ classContainer, btnDownload, btnDemo }) => {
    const { t } = useTranslation("common");

    return (
        <div className={`${classContainer} flex flex-wrap gap-[25px]`}>
            <Button as="a" colorType={btnDownload} classes={` sm:w-auto w-full`} href={t('buttons.download.url')} label={t('buttons.download.title')}>{t('buttons.download.title')}</Button>
            <Link href={'/quiz'}><Button as="button" colorType={btnDemo} classes={` sm:w-auto w-full`} label={t('buttons.demo.title')}>{t('buttons.demo.title')}</Button></Link>

        </div>
    );
}

export default ButtonsContainer;
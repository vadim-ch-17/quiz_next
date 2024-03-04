import { useTranslation } from "next-i18next";
import Button from "../Button";

const ButtonsContainer = ({ classContainer, btnDownload, btnDemo }) => {
    const { t } = useTranslation("common");
    return (
        <div className={`${classContainer} flex flex-wrap gap-[25px]`}>
            <Button as="a" type={btnDownload} classes={` sm:w-auto w-full`} href={t('buttons.download.url')} label={t('buttons.download.title')}>{t('buttons.download.title')}</Button>
            <Button as="a" type={btnDemo} classes={` sm:w-auto w-full`} href={t('buttons.demo.url')} label={t('buttons.demo.title')}>{t('buttons.demo.title')}</Button>
        </div>
    );
}

export default ButtonsContainer;
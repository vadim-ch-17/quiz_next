import { useTranslation } from 'next-i18next'
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { FaChevronDown } from "react-icons/fa6";



const LanguageSwitcher = ({ classContainer, ...props }) => {
    const { i18n } = useTranslation();
    const router = useRouter();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        Cookies.set('selectedLanguage', language);
        router.push(router.asPath, router.asPath, { locale: language });
    };
    const languages = {
        ua: 'Українська',
        en: 'English',
    }

    return (
        <div className={`group hover:cursor-pointer h-full flex justify-center relative ${classContainer ? classContainer : ''}`}>
            <p className='uppercase hidden lg:flex flex-nowrap items-center'>
                <span className='mr-[3px] text-base transition-colors font-bold uppercase  text-white group-hover:text-active '>{i18n.language}</span> <FaChevronDown className='transition-all h-[14px] text-white duration-300 group-hover:rotate-180 group-hover:text-active' />
            </p>
            <ul className='flex lg:flex-col flex-row shadow-default relative lg:absolute opacity-100 mt-[36px] lg:mt-0 mb-[24px] lg:mb-0 lg:opacity-0 lg:invisible lg:right-0 lg:translate-y-14 lg:py-3 px-2 lg:shadow-3xl lg:bg-white lg:rounded-md group-hover:visible group-hover:opacity-100'>
                {Object.keys(languages).map((language, idx) => (
                    <li
                        key={language}
                        className={`${Object.keys(languages).length > idx + 1 ? 'lg:mb-[5px]' : ''}`}
                    >
                        <button
                            onClick={() => changeLanguage(language)}
                            className={`text-left px-[10px] py-1 rounded-[20px] lg:hover:bg-lightPink h-full w-full text-sm ${language === i18n.language ? 'font-extrabold' : 'font-medium'} text-mediumPrimary`}
                            label='language-switcher'
                        ><span className='hidden lg:block'>{languages[language]}</span><span className='lg:hidden block uppercase text-white hover:text-mediumPink'>{language}</span></button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LanguageSwitcher;
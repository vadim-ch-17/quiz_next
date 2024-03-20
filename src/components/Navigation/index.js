import Link from "next/link";
import { useTranslation } from "next-i18next";
import { toAnchor } from "./componentUtils";
import { useRouter } from "next/router";

const Navigation = ({
    classContainer,
    typeLinks,
    classItem,
    classLink,
    isOpenNav,
    setIsOpenNav,
    ...props
}) => {
    const { t } = useTranslation("navigation");
    const router = useRouter();
    const navItems = t("items", { returnObjects: true });

    const styleItems = {
        default: " visited:text-white text-white hover:text-mediumPink active:text-mediumPink",
        light:
            " visited:text-white text-white hover:text-active active:text-active",
    };


    return (
        <ul className={classContainer}>
            {navItems.length &&
                navItems.map((item) => {
                    return item.active ? (
                        <li
                            key={item.id}
                            className={`ml-0 flex items-center justify-center lg:ml-4 xl:ml-10 ${classItem ? classItem : ""}`}
                        >
                            <Link
                                href={item.url}
                                onClick={item?.modal ? openModal : (e) => toAnchor(e, setIsOpenNav, isOpenNav, router)}
                                data-anchor={item?.url}
                                className={`nav-link link flex h-full items-center text-base uppercase transition-colors focus:outline-none ${typeLinks && styleItems[typeLinks] ? styleItems[typeLinks] : ""} ${classLink ? classLink : ""}`}
                                aria-label={t(item.name)}
                            >
                                {t(item.name)}
                            </Link>
                        </li>
                    ) : null;
                })}
        </ul>
    );
};

export default Navigation;

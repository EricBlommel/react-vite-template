import { useState } from 'react';
import { createStyles, UnstyledButton, Menu, Image, Group } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons';
import images from './images';
import useLanguage from "../../contexts/language/useLanguage";
import {useTranslation} from "react-i18next";

type Language = {label: string, languageKey: string, image: string};

const languageMap: {[key: string]: Language} = {
    'en' : {label: 'English', languageKey: 'language.english', image: images.english},
    'de' : {label: 'German', languageKey: 'language.german', image: images.german}
}

const useStyles = createStyles((theme, { opened }: { opened: boolean }) => ({
    control: {
        width: 140,
        height: 34,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5px 10px',
        borderRadius: theme.radius.sm,
        transition: 'background-color 150ms ease',
        backgroundColor:
            opened
                ? theme.colorScheme === 'dark'
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0]
                : 'transparent',

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
    },

    label: {
        fontWeight: 500,
        fontSize: theme.fontSizes.sm,
    },

    icon: {
        transition: 'transform 150ms ease',
        transform: opened ? 'rotate(180deg)' : 'rotate(0deg)',
    },
}));

export function LanguagePicker() {
    const [opened, setOpened] = useState(false);
    const { classes } = useStyles({ opened });
    const {language, setLanguage} = useLanguage();
    const {t} = useTranslation()

    const languages = Object.entries(languageMap).map((language: [string, Language]) => (
        <Menu.Item
            icon={<Image src={language[1].image} width={18} height={18} />}
            onClick={() => setLanguage(language[0])}
            key={language[0]}
        >
            <>{t(language[1].languageKey)}</>
        </Menu.Item>
    ));

    return (
        <Menu
            onOpen={() => setOpened(true)}
            onClose={() => setOpened(false)}
            radius="sm"
            width="target"
        >
            <Menu.Target>
                <UnstyledButton className={classes.control}>
                    <Group spacing="xs">
                        <Image src={languageMap[language].image} width={16} height={16} />
                        <span className={classes.label}>{t(languageMap[language].languageKey) as string}</span>
                    </Group>
                    <IconChevronDown size={16} className={classes.icon} stroke={1.5} />
                </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>{languages}</Menu.Dropdown>
        </Menu>
    );
}
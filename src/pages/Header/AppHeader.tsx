import {createStyles, Header, Group, ActionIcon, Container, useMantineColorScheme} from '@mantine/core';
import {IconSun, IconMoonStars} from '@tabler/icons';
import {Logo} from "../../components/_logo";
import {LanguagePicker} from "../../components/LanguagePicker/LanguagePicker";
import {Link} from "react-router-dom";

const useStyles = createStyles((theme) => ({

    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,

        [theme.fn.smallerThan('sm')]: {
            justifyContent: 'flex-start',
        },
    },

    actionButton: {
        width: 260,

        [theme.fn.smallerThan('sm')]: {
            width: 'auto',
            marginLeft: 'auto',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: '8px 12px',
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
    },

    linkActive: {
        '&, &:hover': {
            backgroundColor: theme.fn.variant({variant: 'light', color: theme.primaryColor}).background,
            color: theme.fn.variant({variant: 'light', color: theme.primaryColor}).color,
        },
    },
}));

export function AppHeader() {
    const {classes} = useStyles();
    const {colorScheme, toggleColorScheme} = useMantineColorScheme();

    return (
        <Header height={60} fixed>
            <Container className={classes.inner}>
                <Link to="/react-vite-template">
                    <Logo colorScheme={colorScheme} size={60}/>
                </Link>

                <Group className={classes.actionButton} position="right" noWrap>
                    <LanguagePicker/>
                    <ActionIcon size="lg" onClick={() => toggleColorScheme()}>
                        {colorScheme === 'dark' ? <IconSun size={16}/> : <IconMoonStars size={16}/>}
                    </ActionIcon>
                </Group>
            </Container>
        </Header>
    );
}
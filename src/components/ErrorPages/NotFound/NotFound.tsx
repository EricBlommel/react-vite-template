import { createStyles, Container, Title, Text, Button, Group } from '@mantine/core';
import { Illustration } from './Illustration';
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";

const useStyles = createStyles((theme) => ({
    root: {
        paddingTop: 150,
        paddingBottom: 80,
    },

    inner: {
        position: 'relative',
    },

    image: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        zIndex: 0,
        opacity: 0.75,
    },

    content: {
        paddingTop: 220,
        position: 'relative',
        zIndex: 1,

        [theme.fn.smallerThan('sm')]: {
            paddingTop: 120,
        },
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        textAlign: 'center',
        fontWeight: 900,
        fontSize: 38,

        [theme.fn.smallerThan('sm')]: {
            fontSize: 32,
        },
    },

    description: {
        maxWidth: 540,
        margin: 'auto',
        marginTop: theme.spacing.xl,
        marginBottom: theme.spacing.xl * 1.5,
    },
}));

export function NotFound() {
    const { classes } = useStyles();
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <Container className={classes.root}>
            <div className={classes.inner}>
                <Illustration className={classes.image} />
                <div className={classes.content}>
                    <Title className={classes.title}><>{t("errorPage.notFound.headline")}</></Title>
                    <Text color="dimmed" size="lg" align="center" className={classes.description}>
                        <>{t("errorPage.notFound.description")}</>
                    </Text>
                    <Group position="center">
                        <Button size="md" variant="gradient" onClick={() => navigate('/')}>
                            <>{t("errorPage.notFound.button")}</>
                        </Button>
                    </Group>
                </div>
            </div>
        </Container>
    );
}
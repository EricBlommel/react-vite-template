import {createStyles, Container, Text, Button, Group} from '@mantine/core';
import {IconBrandGithub} from "@tabler/icons";

const BREAKPOINT = '@media (max-width: 755px)';

const useStyles = createStyles((theme) => ({
    inner: {
        position: 'relative',
        paddingTop: 200,
        paddingBottom: 120,

        [BREAKPOINT]: {
            paddingBottom: 80,
            paddingTop: 80,
        },
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: 62,
        fontWeight: 900,
        lineHeight: 1.1,
        margin: 0,
        padding: 0,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,

        [BREAKPOINT]: {
            fontSize: 42,
            lineHeight: 1.2,
        },
    },

    description: {
        marginTop: theme.spacing.xl,
        fontSize: 24,

        [BREAKPOINT]: {
            fontSize: 18,
        },
    },

    controls: {
        marginTop: theme.spacing.xl * 2,

        [BREAKPOINT]: {
            marginTop: theme.spacing.xl,
        },
    },

    control: {
        height: 54,
        paddingLeft: 38,
        paddingRight: 38,

        [BREAKPOINT]: {
            height: 54,
            paddingLeft: 18,
            paddingRight: 18,
            flex: 1,
        },
    },
}));

export function HeroSection() {
    const {classes} = useStyles();

    return (
        <Container size={700} className={classes.inner}>
            <h1 className={classes.title}>
                A{' '}
                <Text component="span" variant="gradient" inherit>
                    template
                </Text>{' '}
                for faster setup of React projects with Vite
            </h1>

            <Text className={classes.description} color="dimmed">
                This project is using React, Vite, Mantine UI, Emotion, i18next and React Router
            </Text>

            <Group className={classes.controls}>
                <Button
                    size="xl"
                    className={classes.control}
                    variant="gradient"
                >
                    Get started
                </Button>

                <Button
                    component="a"
                    href="https://github.com/EricBlommel"
                    size="xl"
                    variant="default"
                    className={classes.control}
                    leftIcon={<IconBrandGithub size={20}/>}
                >
                    GitHub
                </Button>
            </Group>
        </Container>
    );
}
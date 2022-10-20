import { useState } from 'react';
import { createStyles, UnstyledButton, Menu, Image, Group } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons';
import images from './images';

const data = [
    { label: 'English', image: images.english },
    { label: 'German', image: images.german },
];

const useStyles = createStyles((theme, { opened }: { opened: boolean }) => ({
    control: {
        width: 140,
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
    const [selected, setSelected] = useState(data[0]);
    const items = data.map((item) => (
        <Menu.Item
            icon={<Image src={item.image} width={18} height={18} />}
            onClick={() => setSelected(item)}
            key={item.label}
        >
            {item.label}
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
                        <Image src={selected.image} width={22} height={22} />
                        <span className={classes.label}>{selected.label}</span>
                    </Group>
                    <IconChevronDown size={16} className={classes.icon} stroke={1.5} />
                </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>{items}</Menu.Dropdown>
        </Menu>
    );
}
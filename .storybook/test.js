import { styled } from "@storybook/theming";

const Component = styled.div(({ theme }) => ({
    background: theme.background.app,
    pa: theme.barTextColor,
    width: 0,
}));

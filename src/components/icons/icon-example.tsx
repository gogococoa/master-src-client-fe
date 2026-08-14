import Icon from '@ant-design/icons';

import { IconProps } from './type';

type IProps = IconProps & { theme: 'light' | 'dark' };

const IconSVG = (theme: 'light' | 'dark') => {
    const isDark = theme === 'dark';

    return (
        <svg
            fill="currentColor"
            width="1em"
            height="1em"
            viewBox="0 0 28 28"
            className={`theme-icon ${isDark ? 'is-dark' : 'is-light'}`}
        ></svg>
    );
};

// no additional props
// props: IProps

// additional props
// { type, ...props }: IconProps & { type?: 'primary' | 'default' }

const IconExample = ({ theme, ...props }: IProps) => {
    // <Icon component={IconSVG} {...props} />
    // <Icon component={() => IconSVG([props name])} {...props} />

    return <Icon component={() => IconSVG(theme)} {...props} />;
};

export default IconExample;

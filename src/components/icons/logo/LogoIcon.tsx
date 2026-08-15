import Icon from '@ant-design/icons';

import { IconProps } from '../type';
import { THEME_CLASS, ThemeType } from './logo-color';

import bedrockStyled from './bedrock-icon.module.css';

type IProps = IconProps & { theme?: ThemeType };

const IconSVG = (theme: ThemeType = 'primary') => {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            className={`${bedrockStyled.bedIcon} ${THEME_CLASS[theme]}`}
        >
            <rect x="3" y="19" width="26" height="3" rx="1" className={bedrockStyled.mattress} />
            <rect x="4" y="13" width="7" height="6" rx="1.5" className={bedrockStyled.pillow} />
            <rect x="3" y="21.5" width="2.4" height="5" rx="0.8" className={bedrockStyled.legs} />
            <rect x="26.6" y="21.5" width="2.4" height="5" rx="0.8" className={bedrockStyled.legs} />
            <rect x="3" y="9" width="3" height="13" rx="1.2" className={bedrockStyled.post} />
        </svg>
    );
};

const LogoIcon = ({ theme, ...props }: IProps) => {
    return <Icon component={() => IconSVG(theme)} {...props} />;
};

export default LogoIcon;

import Icon from '@ant-design/icons';

import { IconProps } from '../type';

import { THEME_CLASS, ThemeType } from './logo-color';

import bedrockStyled from './bedrock-icon.module.css';

type IProps = IconProps & { theme?: ThemeType };

const IconSVG = (theme: ThemeType = 'primary') => {
    const LETTER_CLASSES = [
        bedrockStyled.letterB,
        bedrockStyled.letterE,
        bedrockStyled.letterD,
        bedrockStyled.letterR,
        bedrockStyled.letterO,
        bedrockStyled.letterC,
        bedrockStyled.letterK,
    ];

    const WORD = 'bedrock';

    return (
        <svg
            height="1em"
            viewBox="0 0 125 32"
            className={`${bedrockStyled.bedIcon} ${THEME_CLASS[theme]}`}
            role="img"
            aria-label="Bedrock"
        >
            <rect x="3" y="19" width="26" height="3" rx="1" className={bedrockStyled.mattress} />
            <rect x="4" y="13" width="7" height="6" rx="1.5" className={bedrockStyled.pillow} />
            <rect x="3" y="21.5" width="2.4" height="5" rx="0.8" className={bedrockStyled.legs} />
            <rect x="26.6" y="21.5" width="2.4" height="5" rx="0.8" className={bedrockStyled.legs} />
            <rect x="3" y="9" width="3" height="13" rx="1.2" className={bedrockStyled.post} />
            <text
                x="38"
                y="24"
                fontFamily="var(--font-sans, system-ui, sans-serif)"
                fontSize="22"
                fontWeight="500"
                letterSpacing="0.2"
            >
                {WORD.split('').map((char, i) => (
                    <tspan key={i} className={LETTER_CLASSES[i]}>
                        {char}
                    </tspan>
                ))}
            </text>
        </svg>
    );
};

// no additional props
// props: IProps

// additional props
// { type, ...props }: IconProps & { type?: 'primary' | 'default' }

const BrandIcon = ({ theme, ...props }: IProps) => {
    // <Icon component={IconSVG} {...props} />
    // <Icon component={() => IconSVG([props name])} {...props} />

    return <Icon component={() => IconSVG(theme)} {...props} />;
};

export default BrandIcon;

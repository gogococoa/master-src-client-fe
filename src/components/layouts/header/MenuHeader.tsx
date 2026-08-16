import { ThemeToggle } from '@/components/buttons/theme-toggle/ThemeToggle';
import BrandIcon from '@/components/icons/logo/BrandIcon';
import { Button, Layout } from 'antd';
import { useRouter } from 'next/navigation';

import containerStyled from '@/components/custom-components/custom-container.module.css';
import customLayoutStyled from '@/components/custom-components/custom-layout.module.css';
import fontStyled from '@/styles/utilities/font.module.css';

const { Header } = Layout;

const MenuHeader = () => {
    const router = useRouter();

    return (
        <Header className={customLayoutStyled.headerLayoutWrapper}>
            <div className={containerStyled.headerWrapper}>
                <Button type="text" onClick={() => router.push('/')}>
                    <BrandIcon theme={'primary'} className={fontStyled.text4Xl} />
                </Button>
                <ThemeToggle />
            </div>
        </Header>
    );
};

export default MenuHeader;

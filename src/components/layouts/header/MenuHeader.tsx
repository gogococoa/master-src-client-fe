import { ThemeToggle } from '@/components/buttons/theme-toggle/ThemeToggle';
import BrandIcon from '@/components/icons/logo/BrandIcon';
import { Button, Layout } from 'antd';
import { useRouter } from 'next/navigation';
import { HeaderContainer } from './menu-header.module';

import containerStyled from '@/components/custom-components/custom-container.module.css';
import fontStyled from '@/styles/utilities/font.module.css';

const MenuHeader = () => {
    const router = useRouter();

    return (
        <Layout>
            <HeaderContainer>
                <div className={containerStyled.flexBetween}>
                    <Button type="text" onClick={() => router.push('/')}>
                        <BrandIcon theme={'primary'} className={fontStyled.text4Xl} />
                    </Button>
                    <ThemeToggle />
                </div>
            </HeaderContainer>
        </Layout>
    );
};

export default MenuHeader;

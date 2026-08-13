import { ThemeToggle } from '@/components/buttons/ThemeToggle';
import { FlexBetweenWrapper } from '@/components/custom-components/custom-container';
import { HomeFilled } from '@ant-design/icons';
import { Button, Layout } from 'antd';
import { HeaderContainer } from './menu-header.module';
import { useRouter } from 'next/navigation';

const MenuHeader = () => {
    const router = useRouter();

    return (
        <Layout>
            <HeaderContainer>
                <FlexBetweenWrapper>
                    <Button type="text" onClick={() => router.push('/')}>
                        <HomeFilled />
                    </Button>
                    <ThemeToggle />
                </FlexBetweenWrapper>
            </HeaderContainer>
        </Layout>
    );
};

export default MenuHeader;

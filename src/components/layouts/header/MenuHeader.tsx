import { ThemeToggle } from '@/components/buttons/ThemeToggle';
import container from '@/components/custom-components/custom-container.module.css';
import { HomeFilled } from '@ant-design/icons';
import { Button, Layout } from 'antd';
import { useRouter } from 'next/navigation';
import { HeaderContainer } from './menu-header.module';

const MenuHeader = () => {
    const router = useRouter();

    return (
        <Layout>
            <HeaderContainer>
                <div className={container.flexBetween}>
                    <Button type="text" onClick={() => router.push('/')}>
                        <HomeFilled />
                    </Button>
                    <ThemeToggle />
                </div>
            </HeaderContainer>
        </Layout>
    );
};

export default MenuHeader;

import { Layout } from 'antd';
import { ThemeToggle } from '../buttons/ThemeToggle';
import { FlexBetweenWrapper } from '../custom-components/custom-container';
import { HomeFilled } from '@ant-design/icons';

const { Header } = Layout;

const MenuHeader = () => <Layout>
    <Header>
        <FlexBetweenWrapper>
            <HomeFilled />
        </FlexBetweenWrapper>
    <ThemeToggle />
    </Header>
</Layout>;

export default MenuHeader;

import { Layout } from 'antd';
import { ThemeToggle } from '../buttons/ThemeToggle';

const { Header } = Layout;

const MenuHeader = () => <Layout>
    <Header>
        Header
    <ThemeToggle></ThemeToggle>
    </Header>
</Layout>;

export default MenuHeader;

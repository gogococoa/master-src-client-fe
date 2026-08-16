'use client';

import { Layout } from 'antd';
import MenuHeader from '@/components/layouts/header/MenuHeader';
import React from 'react';
import containerStyled from '@/components/custom-components/custom-container.module.css';
import customLayoutStyled from '@/components/custom-components/custom-layout.module.css';

const { Content } = Layout;

export default function AntdRegistryLayout({ children }: { children: React.ReactNode }) {
    return (
        <Layout className={customLayoutStyled.layoutWrapper}>
            <MenuHeader />
            <Content className={customLayoutStyled.contentLayoutWrapper}>
                <div className={containerStyled.contentWrapper}>{children}</div>
            </Content>
        </Layout>
    );
}

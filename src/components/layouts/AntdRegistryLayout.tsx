'use client';

import { Layout } from 'antd';
import MenuHeader from '@/components/layouts/header/MenuHeader';
import React from 'react';
import containerStyled from '@/components/custom-components/custom-container.module.css'

const { Content } = Layout;

export default function AntdRegistryLayout({ children }: { children: React.ReactNode }) {
    return (
        <Layout>
            <MenuHeader />
            <Content className={containerStyled.flexColumnCenter}>
                <div className={containerStyled.mainContentWrapper}>
{children}
                </div>
                </Content>
        </Layout>
    );
}

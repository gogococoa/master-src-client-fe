'use client';

import { Layout } from 'antd';
import MenuHeader from '@/components/layouts/MenuHeader';
import React from 'react';

const { Content } = Layout;

export default function AntdRegistryLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <MenuHeader />
      <Content>{children}</Content>
    </Layout>
  );
}
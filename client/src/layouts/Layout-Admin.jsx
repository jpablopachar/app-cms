import { Layout } from 'antd'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { MenuSider, MenuTop } from '../components/admin'
import './Layout-Admin.scss'

const LayoutAdmin = () => {
  const [collapsed, setCollapsed] = useState(false)
  const { Header, Content, Footer } = Layout

  return (
    <Layout>
      <MenuSider collapsed={collapsed}/>
      <Layout className="layout-admin" style={{ marginLeft: collapsed ? '80px' : '200px' }}>
        <Header className="layout-admin__header">
          <MenuTop collapsed={collapsed} setCollapsed={setCollapsed}/>
        </Header>
        <Content className="layout-admin__content">
          <Outlet/>
        </Content>
        <Footer className="layout-admin__footer">Juan Pablo Pachar</Footer>
      </Layout>
    </Layout>
  )
}

export default LayoutAdmin

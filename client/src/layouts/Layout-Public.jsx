import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'

const LayoutPublic = () => {
  const { Content, Footer } = Layout

  return (
    <Layout>
      <h2>Menú</h2>
      <Layout>
        <Content>
          <Outlet />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  )
}
export default LayoutPublic

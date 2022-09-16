import { HomeFilled, MenuOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import { AdminRoutes } from '../../../constants'
import './Menu-Sider.scss'

const MenuSider = ({ collapsed }) => {
  const { Sider } = Layout

  const getItem = (label, key, icon, children, type) => ({
    key,
    icon,
    children,
    type,
    label
  })

  const items = [
    getItem(
      <Link to={AdminRoutes.ADMIN}>
        <span className="nac-text">Inicio</span>
      </Link>,
      '1',
      <HomeFilled />
    ),
    getItem(
      <Link to={AdminRoutes.ADMIN_LOGIN}>
        <span className="nac-text">Menu Web</span>
      </Link>,
      '2',
      <MenuOutlined />
    )
  ]

  return (
    <Sider className="admin-sider" collapsed={collapsed}>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={items}
      />
    </Sider>
  )
}

export default MenuSider

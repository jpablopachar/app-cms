import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PoweroffOutlined
} from '@ant-design/icons'
import { Button } from 'antd'
import logoWhite from '../../../assets/images/png/logo-white.png'
import './Menu-Top.scss'

const MenuTop = ({ collapsed, setCollapsed }) => {
  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img
          src={logoWhite}
          className="menu_top__left-logo"
          alt="Juan Pablo Pachar"
        />
        <Button type="link" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>
      <div className="menu-top__right">
        <Button type="link">
          <PoweroffOutlined />
        </Button>
      </div>
    </div>
  )
}

export default MenuTop

import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link, withRouter, Route, Redirect } from "react-router-dom"
import { Icon } from '@ant-design/compatible';

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import "./css/admin.less"
import menuList from "@/router/modules/menuList"
import apps from '@/router/modules/apps'
const routes = [
    ...apps
]

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        }
    }

    RouteWithSubRoutes = route => {
        if (!route.path) return <Route component={NotFound} />
        return (
            <Route
                exact={route.exact || false}
                path={route.path}
                render={props => {
                    document.title = route.title
                    return (
                        route.redirect ?
                            <Redirect push to={route.redirect} from={route.path}></Redirect> :
                            <route.component {...props} routes={route} />
                    )
                }}
            />
        )
    }

    renderMenuItem = (item) => (
        <Menu.Item key={`${item.path}`}>
            <Link to={item.path}>
                {item.icon ? <Icon type={`${item.icon}`} /> : null}
                <span>{item.title}</span>
            </Link>
        </Menu.Item>
    )

    renderMenu = (menus) => menus.map((item) => {
        const { location: { pathname } } = this.props
        if (item.childern && item.childern.length > 0) {
            const cItem = item.childern.find(cItem => pathname.indexOf(cItem.path) === 0)
            if (cItem) {
                this.openKey = item.path
            }
            return (
                <SubMenu
                    key={item.path}
                    title={
                        <span>
                            <Icon type={`${item.icon}`} />
                            <span>{item.title}</span>
                        </span>
                    }
                >
                    {item.childern.map(data => this.renderMenuItem(data))}
                </SubMenu>
            )
        } else {
            return this.renderMenuItem(item)
        }
    })

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    componentWillMount() {
        const { location: { pathname }, history } = this.props
        if (pathname === "/") {
            history.push("/home")
            this.selectedKey = "/home"
        } else {
            this.selectedKey = pathname
        }
        this.menuNodes = this.renderMenu(menuList)
    }
    render() {
        const { collapsed } = this.state;
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider trigger={null} collapsible collapsed={collapsed} >
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        defaultSelectedKeys={[this.selectedKey]}
                        defaultOpenKeys={[this.openKey]}
                        mode="inline"
                    >
                        {this.menuNodes}
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            {routes.map((route, i) => <this.RouteWithSubRoutes key={i} {...route} />)}
                            {/* <Redirect to="/home" from="/" /> */}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default withRouter(Main);
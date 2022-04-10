import React, { FC } from "react";
import { Layout, Menu } from "antd";
import { HomeOutlined, SettingOutlined } from "@ant-design/icons";
import { MenuInfo } from "rc-menu/lib/interface";
import { useNavigate } from "react-router-dom";
import { useDispatch, useStore } from "react-redux";
import { setAppbarKey } from "../../redux/actions";
import { MyState } from "../../redux/reducer";
import style from "./style.module.scss";

const AppLayout: FC = (props) => {
    const { Header, Footer, Content } = Layout;
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const store = useStore<MyState>();
    const state = store.getState();

    const handleClick = (e: MenuInfo) => {
        dispatch(setAppbarKey(e.keyPath));
        navigate(e.key);
    };

    const { SubMenu, Item } = Menu;

    return (
        <Layout>
            <Header className={style.header}>
                <Menu
                    onClick={handleClick}
                    selectedKeys={state.navbar.key}
                    mode="horizontal"
                >
                    <Item key="/" icon={<HomeOutlined />}>
                        Home
                    </Item>
                    <SubMenu
                        key="/compress"
                        icon={<SettingOutlined />}
                        title="Compress"
                    >
                        <Item key="/compress/js">JS</Item>
                        <Item key="/compress/css">CSS</Item>
                    </SubMenu>
                </Menu>
            </Header>
            <Content className={style.content}>{props.children}</Content>
            <Footer className={style.footer}>
                {"Copyright © 2022 AHdark All Right Reserved"}
            </Footer>
        </Layout>
    );
};

export default AppLayout;

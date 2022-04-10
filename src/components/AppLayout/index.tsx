import React, { FC } from "react";
import { Layout, Menu, Typography } from "antd";
import { CompressOutlined, HomeOutlined } from "@ant-design/icons";
import { MenuInfo } from "rc-menu/lib/interface";
import { useNavigate } from "react-router-dom";
import { useDispatch, useStore } from "react-redux";
import { setAppbarKey } from "../../redux/actions";
import { MyState } from "../../redux/reducer";
import styles from "./style.module.scss";

const AppLayout: FC = (props) => {
    const { Header, Footer, Content } = Layout;
    const { Text } = Typography;

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
        <Layout className={styles.root}>
            <Header className={styles.header}>
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
                        icon={<CompressOutlined />}
                        title="Compress"
                    >
                        <Item key="/compress/js">JS</Item>
                        <Item key="/compress/css">CSS</Item>
                    </SubMenu>
                </Menu>
            </Header>
            <Content className={styles.content}>{props.children}</Content>
            <Footer className={styles.footer}>
                <Text className={styles.copyright}>
                    {"Copyright © 2022 "}
                    <a
                        href={"https://ahdark.com"}
                        rel={"author noopener"}
                        target={"_blank"}
                    >
                        {"AHdark"}
                    </a>
                    {" All Right Reserved"}
                </Text>
            </Footer>
        </Layout>
    );
};

export default AppLayout;

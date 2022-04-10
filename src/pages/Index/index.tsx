import React, { FC, useEffect } from "react";
import AppLayout                from "../../components/AppLayout";
import styles from "./style.module.scss";
import { Typography } from "antd";
import { useDispatch } from "react-redux";
import { setTitle } from "../../redux/actions";

const Index: FC = () => {
    const { Title, Text } = Typography;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle("Home"));
    },[])
    return (
        <AppLayout>
            <div className={styles.root}>
                <Title>{"AHdark Toolbox"}</Title>
                <Text>
                    {
                        "A purely static toolbox that provides simple developer services."
                    }
                </Text>
            </div>
        </AppLayout>
    );
};

export default Index;

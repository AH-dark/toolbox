import React, { FC, useEffect, useState } from "react";
import AppLayout from "../../../components/AppLayout";
import styles from "./style.module.scss";
import { Button, Input, message, Space, Typography } from "antd";
import { setTitle } from "../../../redux/actions";
import { useDispatch } from "react-redux";
import { ArrowRightOutlined } from "@ant-design/icons";
import API from "../../../middleware/API";
import CompressData from "../../../types/api/compressData";

const Js: FC = () => {
    const { Title } = Typography;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle("JS Compress"));
    }, []);

    const { TextArea } = Input;

    const [originData, setOriginData] = useState("");
    const [compressedData, setCompressedData] = useState<CompressData>({
        code: "",
        map: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        setOriginData(e.target.value);
    };

    const submit = () => {
        setLoading(true);
        API.post<CompressData>("/compress/js", { code: originData })
            .then((r) => {
                setCompressedData(r.data);
                if (r.data.error) {
                    message.error(r.data.error);
                }
            })
            .catch((err) => {
                if (err.statusCode && err.statusCode >= 500) {
                    console.error(err.message);
                    message.error(err.message);
                } else if (
                    err.statusCode &&
                    err.statusCode < 500 &&
                    err.statusCode >= 400
                ) {
                    message.error(err.message);
                }
            })
            .then(() => {
                setLoading(false);
            });
    };

    return (
        <AppLayout>
            <div className={styles.root}>
                <Title>{"JS Compress"}</Title>
                <form className={styles.convertArea}>
                    <Space
                        direction="vertical"
                        size="middle"
                        className={styles.textArea}
                    >
                        <TextArea
                            rows={8}
                            className={styles.textContent}
                            id={"input"}
                            onChange={handleChange}
                            disabled={loading}
                        />
                    </Space>
                    <Space
                        direction="vertical"
                        size={24}
                        className={styles.arrowArea}
                    >
                        <ArrowRightOutlined size={40} className={styles.icon} />
                        <Button
                            size={"large"}
                            type="primary"
                            onClick={submit}
                            loading={loading}
                        >
                            {"Convert"}
                        </Button>
                    </Space>
                    <Space
                        direction="vertical"
                        size="middle"
                        className={styles.textArea}
                    >
                        <TextArea
                            rows={8}
                            className={styles.textContent}
                            id={"output"}
                            defaultValue={compressedData.code}
                            value={compressedData.code}
                            disabled={loading}
                        />
                    </Space>
                </form>
            </div>
        </AppLayout>
    );
};

export default Js;

import s from './style.module.scss';
import { useEffect } from "react";
import { getCasesFx, $cases } from "./model";
import { useUnit } from "effector-react";
import { Row, Col } from 'antd';
import CaseList from "../../components/CaseList";

export const Cases = () => {

    const [getCases, cases] = useUnit([
        getCasesFx,
        $cases,
    ]);

    useEffect(() => {
        getCases()
    }, [])

    return (
        <Row gutter={[32, 0]} justify="center">
            <Col span={12} sm={24} xs={24} md={12} className={s.col} >
                <CaseList cases={cases.slice(0, cases.length/2)} />
            </Col>
            <Col span={12} sm={24} xs={24} md={12} className={s.col}>
                <CaseList cases={cases.slice(cases.length/2, cases.length)} />
            </Col>
        </Row>
    )

};

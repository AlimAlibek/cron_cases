
import s from './style.module.scss';
import { Card, Image } from "antd";
import {getTextColor} from '../../helpers/getTextColor';
import { fallbackImg } from './fallbackImg';

export default ({caseItem}) => {

    return (
        <Card
            styles={{body: {padding: 0}}}
            style={{backgroundColor: `#${caseItem.CaseColor}`}}
            bordered={false}
            cover={<Image
                className={s.img}
                src={caseItem.Image}
                fallback={fallbackImg}
                alt={caseItem.Title}
                preview={{
                    mask: <Card
                        className={s.caseHoveredMask}
                        style={{backgroundColor: `#${caseItem.CaseColor}`}}
                        bordered={false}

                    >
                        <div className={s.caseTextContainer} style={{color: getTextColor(caseItem.CaseColor)}}>
                            <div className={s.caseTitle} >{caseItem.Title}</div>
                            <div className={s.caseText}>{caseItem.Filters.map(filter => filter.Name).join(', ')}</div>
                        </div>
                    </Card>,
                    visible: false
                }}
            />}
        />
    )
}

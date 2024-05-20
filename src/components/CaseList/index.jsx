import s from './style.module.scss';
import { List, ConfigProvider } from "antd";
import CaseCard from '../CaseCard';
import { theme } from '../../themeConfig';

export default ({cases}) => {

    return (
      <ConfigProvider theme={theme}>
        <List
         grid={{
           gutter: [0, 8],
           column: 1
         }}
         dataSource={cases}
         locale={{emptyText: ' '}}
         renderItem={(item) => (
           <List.Item >
              <CaseCard caseItem={item} />
           </List.Item>
         )}
         className={s.list}
        />
      </ConfigProvider>
    )

};

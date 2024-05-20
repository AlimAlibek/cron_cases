import s from './app.module.scss';
import Cases from './pages/cases'
import { Layout, Menu } from 'antd';
const {Content, Header} = Layout;


function App() {
  return (
    <Layout className={s.leyout}>

      <Header className={s.header} >
        <Menu
          theme="dark"
          mode="horizontal"
          items={[]}
          className={s.menu}
        />
      </Header>

      <Content className={s.content}>
        <Cases />
      </Content>

    </Layout>
  );
}

export default App;

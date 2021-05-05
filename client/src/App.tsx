import React from 'react';
import 'antd/dist/antd.css';
import { LogIn } from './components/LogIn/LogIn';
import { Col, Row } from 'antd';
import { Registration } from './components/Registration/Registration';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { useSelector } from 'react-redux';
import { selectIsLogin } from './store/reducer';

function App() {
  const isLogin = useSelector(selectIsLogin);

  return (
    <BrowserRouter>
      <Header />
      <Row>
        <Col span={12} offset={6} style={{ marginTop: 30 }}>
          <Switch>
            <Route path='/' exact>
              <h1>Home Page</h1>
            </Route>
            <Route path='/login'>
              {isLogin ? <Redirect to='/' /> : <LogIn />}
            </Route>
            <Route path='/registration'>
              <Registration />
            </Route>
          </Switch>
        </Col>
      </Row>
    </BrowserRouter>
  );
}

export default App;

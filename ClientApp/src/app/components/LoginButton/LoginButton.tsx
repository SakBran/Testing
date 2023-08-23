import { LoginOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import AppContext from '../Context/Context';
import React from 'react';
type Pros = {
  collapsed: boolean;
};
export const LoginButton = ({ collapsed }: Pros) => {
  const { data, updateData } = React.useContext(AppContext);
  const handleLogin = () => {
    if (data?.isSignedIn) {
      sessionStorage.clear();
      const temp = { ...data };
      temp.userId = '';
      temp.role = '';
      temp.isSignedIn = false;
      if (updateData) updateData(temp);
      //window.location.reload();
    } else {
      const temp = { ...data };
      temp.isSignedIn = true;
      if (updateData) updateData(temp);
    }
  };
  return (
    <>
      {data?.isSignedIn === true ? (
        <Button size="small" onClick={handleLogin}>
          <UserOutlined />
        </Button>
      ) : (
        ''
      )}

      <Button style={{ cursor: 'pointer' }} size="small" onClick={handleLogin}>
        {data?.isSignedIn ? <LogoutOutlined /> : <LoginOutlined />}
      </Button>
    </>
  );
};

import { Dropdown, MenuProps } from 'antd';
import { Link, useLocation } from 'react-router-dom';
type Props = {
  id: string;
};

const TableAction = ({ id }: Props) => {
  const location = useLocation();
  const temp = [...location.pathname.split('/')];
  const link = '/' + temp[temp.length - 2];
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <Link to={link + '/Edit/' + id}>Edit</Link>,
    },
    {
      key: '2',
      label: <Link to={link + '/Delete/' + id}>Delete</Link>,
    },
    {
      key: '3',
      label: <Link to={link + '/Detail/' + id}>Detail</Link>,
    },
  ];
  return (
    <td>
      <Dropdown
        menu={{ items }}
        placement="bottomLeft"
        arrow
        trigger={['click']}
      >
        <span style={{ cursor: 'pointer' }}>Action</span>
      </Dropdown>
    </td>
  );
};

export default TableAction;

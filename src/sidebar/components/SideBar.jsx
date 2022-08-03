import { slide as Menu } from 'react-burger-menu';
import './SideBar.css';

function SideBar(props) {
  return (

    <Menu>
      <a className="menu-item" href="/">
        Counter
      </a>
      <a className="menu-item" href="/todo">
        Todo
      </a>
      <a className="menu-item" href="/post">
        Post
      </a>

    </Menu>
  );
};
export default SideBar;
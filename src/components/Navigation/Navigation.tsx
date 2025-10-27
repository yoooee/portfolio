import { NavLink} from 'react-router';

import './navigation.scss';

function Navigation() {
  return (
    <ul className="navigation">
      <li><NavLink to="design">Design</NavLink></li>
      <li><NavLink to="development">Development</NavLink></li>
      <li><NavLink to="illustration">Illustration</NavLink></li>
      <li><NavLink to="photography">Photography</NavLink></li>
    </ul>
  );
}

export default Navigation;

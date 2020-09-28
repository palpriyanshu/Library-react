import withProfile from '../withProfile';
import Header from '../Header';

const HeaderWithAvatar = ({ avatar, setUser }) =>
  withProfile(Header, avatar, setUser);

export default HeaderWithAvatar;

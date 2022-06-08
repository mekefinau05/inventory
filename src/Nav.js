import Link from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <Link className='link' to='/'>
        Home
      </Link>
      {'  '}|{'  '}
      <Link className='link' to='/login'>
        Login
      </Link>
      {'  '}|{'  '}
      <Link className='link' to='/register'>
        Register
      </Link>
      ;
    </nav>
  );
}

export default Nav;

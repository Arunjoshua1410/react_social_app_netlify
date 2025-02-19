import { useContext } from 'react';
import {FaLaptop,FaTabletAlt,FaMobileAlt} from 'react-icons/fa';
import DataContext from './context.js/DataContext';

const Header = ({title}) => {
  const {width}=useContext(DataContext)
  return (
    <header className='Header'>
         <h1>{title}</h1>
         {width<390?<FaMobileAlt/>:width<992?<FaTabletAlt/>:<FaLaptop/>}
    </header>
  )
}

export default Header
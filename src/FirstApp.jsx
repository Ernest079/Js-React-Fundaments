//Los proptypes estan obsoletos para la versión 19 de react
import PropTypes from 'prop-types';

const saludo = () => "Hola"
const nombre = 'Ernesto';

export const FirstApp = ({title = 'test', subTitle = 'test'}) => {

  // if(!title){
  //   throw new Error('El titulo no existe');
  // }
  console.log(title, subTitle);

  return (
    <>
      <h1>{title}</h1>
      {/* <h2>{nombre}</h2> */}
      <p>{subTitle}</p>
    </> 
  )
}

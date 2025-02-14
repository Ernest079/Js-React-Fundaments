//Los proptypes estan obsoletos para la versión 19 de react
import PropTypes from 'prop-types';

export const FirstApp = ({title = 'test', subTitle = 'test', name = 'Ernesto'}) => {

  return (
    <>
      <h1>{title}</h1>
      {/* <h2>{nombre}</h2> */}
      <h2>{subTitle}</h2>
      <p>{name}</p>
    </> 
  )
}

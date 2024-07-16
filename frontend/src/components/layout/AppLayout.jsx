import React from 'react'
import Header from './Header';
import Title from '../shared/Title';

const AppLayout = () => (WrappedComponent) =>{
  // eslint-disable-next-line react/display-name
  return (props)=>{
    return(
      <>
      <Title />
         <Header/>
        <WrappedComponent {...props}/>
        <div>Footer</div>
      </>
    )
  }
}

export default AppLayout;
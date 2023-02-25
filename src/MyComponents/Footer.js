import React from 'react'

 export const Footer = () => {
  let footerstyle={
    top: '100vh',
    width: '100%',
    position: 'relative'
  }
  return (
    <footer className='bg-dark text-light py-3' style={footerstyle}>
     <p className="text-center">
      Copyright &copy; MyToDoList.com
      </p>
      </footer>
  )
}

import React from 'react'
import { Header, Container, Title, Nav, Div, Button } from './styles'
import { Link } from 'react-router-dom'
import { useLogout } from '../../hooks/useLogout'
import { toast } from 'react-toastify'
import { useAuthContext } from '../../hooks/useAuthContext'

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()
  const handleClick = () => {
    logout()
    toast.success('User is Logged out Succesfully')
  }
  return (
    <Header>
      <Container>
        <Link to={'/'}>
          <Title>Workout Buddy</Title>
        </Link>
        <Nav>
          {user && (
            <Div>
              <Button onClick={handleClick}>Logout</Button>
            </Div>
          )}
          {!user && (
            <Div>
              <Link to={'/login'}>Login</Link>
              <Link to={'/signup'}>Signup</Link>
            </Div>
          )}
        </Nav>
      </Container>
    </Header>
  )
}
export default Navbar

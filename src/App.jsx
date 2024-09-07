import { Routes, Route } from 'react-router-dom'
import RegistrationForm from './routes/RegistrationForm/RegistrationForm'
import UserList from './routes/UserList/UserList'
import Nav from './components/Nav'

function App() {

  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/list" element={<UserList />} />
      </Routes>
    </>
  )
}

export default App

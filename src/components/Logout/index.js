// Write your code here
import './index.css'

const Logout = props => {
  const {logout} = props

  return (
    <button type="button" className="button1" onClick={logout}>
      Logout
    </button>
  )
}

export default Logout

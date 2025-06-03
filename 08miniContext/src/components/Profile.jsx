import  {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user} = useContext(UserContext)

    if (!user) {
        return <div>please login</div>
    }
    return <div> <br />Welcome {user.userName}</div>
}

export default Profile
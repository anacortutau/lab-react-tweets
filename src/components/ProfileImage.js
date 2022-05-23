import userEvent from "@testing-library/user-event"

function ProfileImage(props){

    const {image} = props

    return (
        <div>
            <img src={image} className="profile" alt="profile"/>
        </div>

    )
}

export default ProfileImage
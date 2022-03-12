import {useHistory} from 'react-router-dom';

import NewMeetupsForm from "../component/meetups/NewMeetupForm"

function NewMeetups() {
    const history = useHistory();
    console.log(history);
    function addMeetupHandler(meetupData) {
        fetch(
            'https://react-getting-started-f2a46-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json',           
                }
            }
        ).then(()=>{
            history.replace('/')
        } );
    }
    return <div>
        <NewMeetupsForm onAddMeetup={addMeetupHandler} />
    </div>
}
export default NewMeetups;
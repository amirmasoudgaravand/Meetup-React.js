import MeetupsItem from "./MeetupItem";
import classes from './MeetupsList.module.css';

function MeetupList(props){
    return <ul className={classes.list} >

        {props.meetups.map(meetup => <MeetupsItem
         key={meetup.id } 
         id={meetup.id}
         image={meetup.image}
         title={meetup.title}
         address={meetup.address}
         description={meetup.description}
         />) }
         
    </ul>
}
export default MeetupList;
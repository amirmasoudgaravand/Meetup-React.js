import { useContext } from 'react';

import FavoritesContext from '../store/favorites-constext';
import MeetupList from '../component/meetups/MeetupsList';

function Favorites() {
    let content;
    const favoritesCtx = useContext(FavoritesContext);
    if (favoritesCtx.totalFavorites === 0) {
        content = <p>You got no Favorites yet. Start Adding some</p>
    } else {
        content = <MeetupList meetups={favoritesCtx.favorites} />
    }


    

    return <div>
        <h1>Favorites Page</h1>
        {content}
    </div>
}

export default Favorites;

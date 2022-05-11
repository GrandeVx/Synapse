import { useSelector, useDispatch } from 'react-redux';
import {
  userData,
  setUserId
} from '../features/counter/counterSlice';

import { getDatabase, ref, onValue} from "firebase/database";

function HomePage() {

    const count = useSelector(userData); // Accediamo al nick dell'utente
    const dispatch = useDispatch();   


    function getSensor() {

        const db = getDatabase();
        const starCountRef = ref(db, 'SFR3RW');
        onValue(starCountRef, (snapshot) => {
          const data = snapshot.val();
            console.log(data);
          // updateStarCount(postElement, data);
        });
    }
    getSensor();

    return (
        
        <h1>ciao</h1>
        
    )

}


export default HomePage;
import { firestore } from 'firebase/app'
import { useState, useMemo, useContext } from 'react'
// import { AuthContext } from '../contexts/auth'

export const useDeleteWant = () => {
    const [loading, setLoading] = useState(false)
    const [want, setWant] = useState([]);
    
    

  const deleteWant = (e) => {
    if (loading) return

    setLoading(true)

    const wantRef = firestore().collection('wants');
    const docId = firestore().collection('wants').doc().id
    wantRef.doc(e.target.value).delete();

    setLoading(false);

 
    }
return [deleteWant, loading]
}

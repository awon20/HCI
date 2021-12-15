import React from 'react'
import { app } from "../services/base";


export const useGetData = () => {
  const [usersData, setUsersData] = React.useState([]);
  const db = app.firestore();

  React.useEffect(() => {
    db.collection("Sketching")
      .orderBy("createdAt")
      .get()
      .then((querySnapshot) => {
        let arr = [];
        querySnapshot.docs.map((doc) =>
          arr.push({ id: doc.id, value: doc.data() })
        );
        setUsersData(arr);
      });
  }, [db]);
    // console.log(usersData);
    return [usersData];
}
    
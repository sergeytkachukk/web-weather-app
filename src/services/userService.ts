import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

// Function to retrieve user profile data
export const getUserProfile = async (userId: string) => {
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("User data:", docSnap.data());
    return docSnap.data();
  } else {
    console.log("No such user!");
    return null;
  }
};

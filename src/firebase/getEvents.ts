import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export interface AppEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  city: string;
  locationName: string;
  latitude: number;
  longitude: number;
  imageUrl: string;
  createdBy: string;
}

export const getEvents = async (): Promise<AppEvent[]> => {
  const eventsCol = collection(db, "events");
  const snapshot = await getDocs(eventsCol);

  return snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      title: data.title,
      description: data.description,
      date: data.date?.toDate ? data.date.toDate().toISOString() : data.date,
      // date: data.date?.toDate ? data.date.toDate() : new Date(),
      category: data.category,
      city: data.city,
      locationName: data.locationName,
      latitude: data.latitude,
      longitude: data.longitude,
      imageUrl: data.imageUrl,
      createdBy: data.createdBy,
    } as AppEvent;
  });
};

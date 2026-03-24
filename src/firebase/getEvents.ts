import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export interface RawEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  cityId: string;
  locationAddress: string;
  latitude: number;
  longitude: number;
  imageUrl: string;
  userId: string;
  status: "approved" | "pending" | "rejected" | string;
  externalUrl?: string | null;
  attendeeIds: string[];
}

export interface AppEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  city: string;
  locationName: string;
  participants: number;
  imageUrl: string;
  latitude?: number;
  longitude?: number;
  createdBy?: string;
}

export const getAllEvents = async (): Promise<AppEvent[]> => {
  // Cities
  const citiesSnapshot = await getDocs(collection(db, "cities"));
  const citiesMap: Record<string, string> = Object.fromEntries(
    citiesSnapshot.docs.map((doc) => [doc.id, doc.data().name]),
  );

  const eventsCol = collection(db, "events");
  const snapshot = await getDocs(eventsCol);

  // RawEvent -> AppEvent
  return snapshot.docs.map((doc) => {
    const data = doc.data() as RawEvent;

    return {
      id: doc.id,
      title: data.title,
      description: data.description,
      date: data.date,
      category: data.category,
      city: citiesMap[data.cityId],
      locationName: data.locationAddress,
      imageUrl: data.imageUrl,
      participants: data.attendeeIds?.length,
    } as AppEvent;
  });
};

export const getTopEventsPerCityUnique = async (): Promise<AppEvent[]> => {
  try {
    // всі міста
    const citiesSnapshot = await getDocs(collection(db, "cities"));
    const citiesMap: Record<string, string> = Object.fromEntries(
      citiesSnapshot.docs.map((doc) => [doc.id, doc.data().name]),
    );

    // всі події
    const eventsSnapshot = await getDocs(collection(db, "events"));

    const today = new Date();
    const twoWeeksLater = new Date();
    twoWeeksLater.setDate(today.getDate() + 30);

    const allEvents: RawEvent[] = eventsSnapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }) as RawEvent)
      .filter((e) => {
        const eventDate = new Date(e.date);
        return (
          e.status === "approved" &&
          eventDate >= today &&
          eventDate <= twoWeeksLater
        );
      });

    // групування події за містом
    const eventsByCity: Record<string, RawEvent[]> = {};
    allEvents.forEach((e) => {
      if (!eventsByCity[e.cityId]) eventsByCity[e.cityId] = [];
      eventsByCity[e.cityId].push(e);
    });

    // найпопулярніша подія для кожного міста
    const topEvents: AppEvent[] = Object.values(eventsByCity).map(
      (eventsInCity) => {
        const topEvent = eventsInCity.reduce((max, e) =>
          e.attendeeIds?.length > max.attendeeIds?.length ? e : max,
        );

        return {
          id: topEvent.id,
          title: topEvent.title,
          description: topEvent.description,
          date: topEvent.date,
          category: topEvent.category,
          city: citiesMap[topEvent.cityId] || topEvent.cityId,
          locationName: topEvent.locationAddress,
          participants:
            topEvent.attendeeIds?.length ??
            Math.floor(Math.random() * (17 - 4 + 1)) + 4,
          imageUrl: topEvent.imageUrl,
        } as AppEvent;
      },
    );

    return topEvents;
  } catch (err) {
    console.error("Помилка завантаження унікальних топ подій:", err);
    return [];
  }
};

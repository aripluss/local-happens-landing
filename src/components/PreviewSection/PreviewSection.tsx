import { useEffect, useState } from "react";
import {
  StyledPreviewSection,
  StyledPreviewContainer,
  StyledEventsGrid,
  StyledEventCard,
  StyledEventImage,
  StyledEventCategory,
  StyledEventParticipants,
  StyledEventContentStyled,
} from "./PreviewSection.styled";
import { getEvents, type AppEvent } from "@/firebase/getEvents";
import { fallbackEventsData } from "@/data/fallbackEventsData";
import placeholderEventImg from "@/assets/placeholderEventImg.webp";

export const PreviewSection: React.FC = () => {
  const [events, setEvents] = useState<AppEvent[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getEvents();
        // максимум 6 подій
        const topEvents = data.slice(0, 6);

        // якщо отримано менше 6, то + запасні
        if (topEvents.length < 6) {
          const missingCount = 6 - topEvents.length;
          const additionalEvents = fallbackEventsData.slice(0, missingCount);
          setEvents([...topEvents, ...additionalEvents]);
        } else {
          setEvents(topEvents);
        }
      } catch (err) {
        console.error("Помилка завантаження подій:", err);
        setEvents(fallbackEventsData.slice(0, 6));
      }
    };

    fetchEvents();
  }, []);

  const categoryMap: Record<string, string> = {
    Музика: "🎵 Музика",
    Спорт: "⚡ Спорт",
    Їжа: "🍽️ Їжа",
    Мистецтво: "🎨 Мистецтво",
    Технології: "💻 Технології",
    Освіта: "📚 Освіта",
    Розваги: "🎭 Розваги",
    Бізнес: "💼 Бізнес",
    Інше: "✨ Інше",
  };

  return (
    <StyledPreviewSection id="preview">
      <StyledPreviewContainer>
        <div className="header-eyebrow-wrapper">
          <div className="header-wrapper">
            <span className="eyebrow">Уявіть</span>
            <h2>
              Відкриваєте додаток і бачите події, до яких можна приєднатися
              сьогодні
            </h2>
          </div>
          <p className="subtitle">
            Саме так виглядає ваш день з LocalHappens — реальні події, реальні
            люди поруч.
          </p>
        </div>

        <StyledEventsGrid>
          {events.map((event) => (
            <StyledEventCard key={event.id}>
              <div className="image-wrapper">
                <StyledEventImage
                  src={event.imageUrl ? event.imageUrl : placeholderEventImg}
                  alt={event.title}
                />
                <div className="hover-overlay" />

                <StyledEventCategory>
                  {categoryMap[event.category] || event.category}
                </StyledEventCategory>
                <StyledEventParticipants>
                  <span className="participants">
                    +{Math.floor(Math.random() * (17 - 4 + 1)) + 4}
                  </span>
                  {/* <span className="participants">+{event.participants}</span>{" "} */}
                  <span className="text">планують прийти</span>
                </StyledEventParticipants>
              </div>

              <StyledEventContentStyled>
                <h5 className="event-title">{event.title}</h5>
                <p className="event-address">{event.locationName}</p>
              </StyledEventContentStyled>
            </StyledEventCard>
          ))}
        </StyledEventsGrid>
      </StyledPreviewContainer>
    </StyledPreviewSection>
  );
};

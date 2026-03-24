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
import { getTopEventsPerCityUnique, type AppEvent } from "@/firebase/getEvents";
import { fallbackEventsData } from "@/data/fallbackEventsData";
import placeholderEventImg from "@/assets/placeholderEventImg.webp";

export const PreviewSection: React.FC = () => {
  const [events, setEvents] = useState<AppEvent[]>([]);

  const MAX_CARDS = 6;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        let topEvents = await getTopEventsPerCityUnique();
        if (topEvents.length < MAX_CARDS) {
          topEvents = [
            ...topEvents,
            ...fallbackEventsData.slice(0, MAX_CARDS - topEvents.length),
          ];
        }
        setEvents(topEvents.slice(0, MAX_CARDS));
      } catch (err) {
        console.error("Помилка завантаження подій:", err);
        setEvents(fallbackEventsData.slice(0, MAX_CARDS));
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
                  <span className="participants">+{event.participants}</span>{" "}
                  <span className="text">планують прийти</span>
                </StyledEventParticipants>
              </div>

              <StyledEventContentStyled>
                <h5 className="event-title">{event.title}</h5>
                <p className="event-address">
                  {event.locationName}, {event.city}
                </p>
              </StyledEventContentStyled>
            </StyledEventCard>
          ))}
        </StyledEventsGrid>
      </StyledPreviewContainer>
    </StyledPreviewSection>
  );
};

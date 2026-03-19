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
import hero from "@/assets/step5.webp";

const events = [
  {
    id: "1",
    title: "Ранковий йога-марафон",
    address: "Парк Шевченка, Київ",
    image: hero,
    category: "⚡ спорт",
    participants: 7,
  },
  {
    id: "2",
    title: "Jazz вечір у Львові",
    address: "Площа Ринок, 14, Львів",
    image: hero,
    category: "🎵 музика",
    participants: 15,
  },
  {
    id: "3",
    title: "Street Food Festival",
    address: "Аркадія, Одеса",
    image: hero,
    category: "🍽️ їжа",
    participants: 22,
  },
  {
    id: "4",
    title: "Майстер-клас з кераміки",
    address: "Вул. Коперника, 9, Львів",
    image: hero,
    category: "📚 освіта",
    participants: 4,
  },
  {
    id: "5",
    title: "Виставка сучасного мистецтва",
    address: "Мистецький Арсенал, Київ",
    image: hero,
    category: "🎨 мистецтво",
    participants: 11,
  },
  {
    id: "6",
    title: "Електронна музика: Sunrise Party",
    address: "Пляж Ланжерон, Одеса",
    image: hero,
    category: "🎵 музика",
    participants: 17,
  },
];

export const PreviewSection: React.FC = () => {
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
                <StyledEventImage src={event.image} alt={event.title} />
                <StyledEventCategory>{event.category}</StyledEventCategory>
                <StyledEventParticipants>
                  <span className="participants">+{event.participants}</span>{" "}
                  <span className="text">планують прийти</span>
                </StyledEventParticipants>
              </div>

              <StyledEventContentStyled>
                <h5 className="event-title">{event.title}</h5>
                <p className="event-address">{event.address}</p>
              </StyledEventContentStyled>
            </StyledEventCard>
          ))}
        </StyledEventsGrid>
      </StyledPreviewContainer>
    </StyledPreviewSection>
  );
};

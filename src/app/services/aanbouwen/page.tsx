import ServiceTemplate from '@/components/ServiceTemplate';

export default function Aanbouwen() {
  return (
    <ServiceTemplate
      title="Aanbouwen"
      description="Uitbreiding van uw woning met hoogwaardige aanbouwen die perfect aansluiten bij uw bestaande architectuur. Wij specialiseren ons in het ontwerpen en bouwen van aanbouwen die niet alleen functioneel zijn, maar ook esthetisch aansluiten bij uw huidige woning."
      features={[
        "Maatwerk ontwerp op maat van uw wensen en budget",
        "Hoogwaardige materialen voor duurzame constructie",
        "Professionele uitvoering met oog voor detail",
        "Volledige afwerking inclusief elektra en sanitair",
        "Bouwkundige expertise en constructieve kennis",
        "Projectmanagement van begin tot eind"
      ]}
      imageUrl="/placeholderSquare.jpeg"
    />
  );
} 
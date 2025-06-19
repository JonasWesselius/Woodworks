import ServiceTemplate from '@/components/ServiceTemplate';

export default function Badkamers() {
  return (
    <ServiceTemplate
      title="Badkamers"
      description="Complete badkamerrenovaties en nieuwbouw, van ontwerp tot oplevering met oog voor detail. Wij transformeren uw badkamer tot een moderne, functionele en stijlvolle ruimte die perfect aansluit bij uw levensstijl."
      features={[
        "Modern design en functionaliteit gecombineerd",
        "Kwaliteitsmaterialen en duurzame afwerking",
        "Volledige afwerking inclusief sanitair en tegels",
        "Aanpassing aan uw specifieke wensen en budget",
        "Professionele loodgieterswerkzaamheden",
        "Tijdelijke planning en minimale overlast"
      ]}
      imageUrl="/placeholderSquare.jpeg"
    />
  );
} 
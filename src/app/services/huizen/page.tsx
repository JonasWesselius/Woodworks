import ServiceTemplate from '@/components/ServiceTemplate';

export default function Huizen() {
  return (
    <ServiceTemplate
      title="Huizen (Volledig)"
      description="Complete huizenbouw en volledige renovaties van begin tot eind. Wij verzorgen alle aspecten van uw bouwproject, van ontwerp tot oplevering, met volledige projectmanagement."
      features={[
        "Volledige bouw van nieuwbouwwoningen",
        "Complete renovaties en verbouwingen",
        "Projectmanagement van begin tot eind",
        "Bouwvergunningen en technische tekeningen",
        "Coördinatie van alle onderaannemers",
        "Kwaliteitscontrole en oplevering"
      ]}
      imageUrl="/placeholderSquare.jpeg"
    />
  );
} 
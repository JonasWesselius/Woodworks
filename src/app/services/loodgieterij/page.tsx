import ServiceTemplate from '@/components/ServiceTemplate';

export default function Loodgieterij() {
  return (
    <ServiceTemplate
      title="Loodgieterij"
      description="Professionele loodgieterswerkzaamheden voor al uw sanitair en waterleidingen. Wij verzorgen alle aspecten van loodgieterswerk, van nieuwe installaties tot reparaties en onderhoud."
      features={[
        "Sanitair installatie en onderhoud",
        "Waterleidingen en afvoersystemen",
        "Reparaties en storingen",
        "Nieuwe badkamer en keuken installaties",
        "Preventief onderhoud",
        "24/7 spoedservice beschikbaar"
      ]}
      imageUrl="/placeholderSquare.jpeg"
    />
  );
} 
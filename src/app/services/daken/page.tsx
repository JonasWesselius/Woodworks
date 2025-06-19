import ServiceTemplate from '@/components/ServiceTemplate';

export default function Daken() {
  return (
    <ServiceTemplate
      title="Daken"
      description="Dakwerkzaamheden, reparaties en onderhoud van alle soorten daken. Wij verzorgen alle aspecten van dakwerk, van nieuwe daken tot reparaties en preventief onderhoud."
      features={[
        "Dakreparaties en onderhoud",
        "Nieuwe daken en dakbedekking",
        "Dakkapellen en uitbouwen",
        "Dakgoten en afvoersystemen",
        "Isolatie en ventilatie",
        "Inspectie en advies"
      ]}
      imageUrl="/placeholderSquare.jpeg"
    />
  );
} 
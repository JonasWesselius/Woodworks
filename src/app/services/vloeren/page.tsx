import ServiceTemplate from '@/components/ServiceTemplate';

export default function Vloeren() {
  return (
    <ServiceTemplate
      title="Vloeren"
      description="Vloerwerkzaamheden en afwerkingen voor binnen en buiten. Wij verzorgen alle soorten vloeren, van houten vloeren tot tegels en betonwerk, met oog voor kwaliteit en duurzaamheid."
      features={[
        "Binnen- en buitenvloeren",
        "Houten vloeren en parket",
        "Tegelwerk en natuursteen",
        "Betonwerk en egalisatie",
        "Vloerisolatie en ondervloeren",
        "Onderhoud en renovatie"
      ]}
      imageUrl="/placeholderSquare.jpeg"
    />
  );
} 
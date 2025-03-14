import ProjectTemplate from '@/components/ProjectTemplate';

export default function ModerneTuinkamer() {
  return (
    <ProjectTemplate
      title="Moderne Tuinkamer"
      description="Een lichte en ruime tuinkamer die perfect aansluit bij de bestaande woning. Uitgevoerd met grote glazen schuifdeuren en een strak houten plafond."
      category="Aanbouw"
      location="Waalwijk"
      year="2023"
      features={[
        "Volledig glazen schuifwanden",
        "Geïsoleerd dak",
        "Elektrische zonwering",
        "Vloerverwarming",
        "Dimbare LED verlichting"
      ]}
      images={['/placeholderSquare.jpeg', '/placeholderSquare.jpeg']}
    />
  );
} 
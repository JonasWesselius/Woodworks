import ProjectTemplate from '@/components/ProjectTemplate';

export default function ModerneAanbouw() {
  return (
    <ProjectTemplate
      title="Moderne Aanbouw"
      description="Een strakke aanbouw met veel lichtinval en moderne afwerking. Perfect geïntegreerd met de bestaande woning. De grote raampartijen zorgen voor een optimale verbinding tussen binnen en buiten."
      category="Aanbouw"
      location="Tilburg"
      year="2023"
      features={[
        "Grote glazen schuifpui",
        "Geïsoleerd dak met lichtkoepel",
        "Vloerverwarming",
        "Moderne afwerking",
        "LED inbouwspots"
      ]}
      images={['/placeholderSquare.jpeg', '/placeholderSquare.jpeg']}
    />
  );
} 
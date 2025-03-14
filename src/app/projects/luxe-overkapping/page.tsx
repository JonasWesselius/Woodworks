import ProjectTemplate from '@/components/ProjectTemplate';

export default function LuxeOverkapping() {
  return (
    <ProjectTemplate
      title="Luxe Overkapping"
      description="Sfeervolle overkapping met ingebouwde verlichting en verwarmingselementen voor optimaal comfort. Een perfecte plek om het hele jaar door van de tuin te genieten."
      category="Overkapping"
      location="Den Bosch"
      year="2023"
      features={[
        "Ingebouwde LED verlichting",
        "Infrarood verwarmingselementen",
        "Douglas houten constructie",
        "Glazen schuifwanden",
        "Geïntegreerde regenwaterafvoer"
      ]}
      images={['/placeholderSquare.jpeg', '/placeholderSquare.jpeg']}
    />
  );
} 
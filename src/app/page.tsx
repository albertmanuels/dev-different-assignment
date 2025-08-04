import { PropertyCard } from "@/components/PropertyCard";
import { Property } from "@/lib/interface";
import { getProperties } from "@/services/properties.services";

export default async function Home() {
  const properties: Property[] = await getProperties();

  return (
    <div className="w-full container mx-auto px-6 pb-10">
      <h1 className="text-4xl font-bold mb-8">Newest Properties</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {properties.splice(0, 4).map((property) => (
          <PropertyCard key={property.currentSlug} property={property} />
        ))}
      </div>
    </div>
  );
}

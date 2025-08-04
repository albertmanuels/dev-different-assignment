import { PropertyCard } from "@/components/PropertyCard";
import { getProperties } from "@/services/properties.services";
import React from "react";

const PropertyPage = async () => {
  const properties = await getProperties();

  return (
    <div className="w-full container mx-auto px-6 pb-10">
      <h1 className="text-4xl font-bold mb-8">Properties List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.currentSlug} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyPage;

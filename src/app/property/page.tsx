import { PropertyCard } from "@/components/PropertyCard";
import { getProperties } from "@/services/properties.services";
import React from "react";

const PropertyPage = async () => {
  const properties = await getProperties();

  return (
    <div className="w-full">
      <h1 className="text-4xl font-bold">Property Page</h1>
      <p className="mt-4 text-lg">
        This is a placeholder for the property page.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.currentSlug} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyPage;

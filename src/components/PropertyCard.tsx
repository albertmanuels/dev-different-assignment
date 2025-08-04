import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PropertyDetail } from "@/lib/interface";
import { urlFor } from "@/lib/sanity";
import { formatCurrency } from "@/lib/globals";

interface PropertyCardProps {
  property: Omit<PropertyDetail, "content">;
}

export const PropertyCard = ({ property }: PropertyCardProps) => {
  const truncatedDescription =
    property?.description?.length > 50
      ? `${property.description.substring(0, 50)}...`
      : property.description;

  return (
    <Link href={`/property/${property.currentSlug}`}>
      <Card className="group h-full bg-card border-border shadow-property-card hover:shadow-property-card-hover transition-smooth cursor-pointer overflow-hidden pt-0">
        <div className="aspect-[4/3] overflow-hidden">
          <Image
            width={500}
            height={500}
            src={urlFor(property.titleImage).url()}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          />
        </div>
        <CardContent>
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-smooth line-clamp-1">
              {property.title}
            </h3>
          </div>

          <div className="flex items-center text-muted-foreground mb-5">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{property?.location}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">
              {formatCurrency(property.price)}
            </div>
            <div className="flex items-center space-x-3 text-muted-foreground text-sm"></div>
          </div>

          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {truncatedDescription}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

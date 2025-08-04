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
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-smooth line-clamp-1">
              {property.title}
            </h3>
          </div>

          <div className="flex items-center text-muted-foreground mb-2">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{property.location}</span>
          </div>
          <div className="text-2xl font-bold text-primary">
            {formatCurrency(property.price)}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  MapPin,
  Bed,
  Bath,
  Square,
  Heart,
  Share,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getPropertyDetail } from "@/services/properties.services";
import { urlFor } from "@/lib/sanity";
import { formatCurrency } from "@/lib/globals";
import { PortableText } from "next-sanity";
import BackButton from "@/components/BackButton";
import { REVALIDATE_IN_SECONDS } from "@/constants/globals";

export const revalidate = REVALIDATE_IN_SECONDS;

const PropertyDetail = async ({ params }) => {
  const { slug } = await params;

  const property = await getPropertyDetail(slug);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <BackButton />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-property-card mb-6">
              <Image
                width={800}
                height={600}
                src={urlFor(property.titleImage).url()}
                alt={property.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-2xl font-bold text-foreground mb-2">
                      {property.title}
                    </h1>
                    <div className="flex items-center text-muted-foreground mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{property.location}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="text-3xl font-bold text-primary mb-6">
                  {formatCurrency(property.price)}
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-accent rounded-lg">
                  <div className="text-center">
                    <Bed className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="text-sm text-muted-foreground">
                      Bedrooms
                    </div>
                    <div className="font-semibold">{property.bedrooms}</div>
                  </div>
                  <div className="text-center">
                    <Bath className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="text-sm text-muted-foreground">
                      Bathrooms
                    </div>
                    <div className="font-semibold">{property.bathrooms}</div>
                  </div>
                  <div className="text-center">
                    <Square className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="text-sm text-muted-foreground">Area</div>
                    <div className="font-semibold">{property.area}m²</div>
                  </div>
                </div>

                <Button className="w-full transition-smooth">
                  Contact Agent
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Description */}
        <div className="mt-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Description</h2>
              <div className="prose">
                <PortableText value={property.description} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;

"use client";
import React from "react";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import TypeIcons from "../../../public/TypeIcon/exporter";
import Link from "next/link";

interface TypeBadgeProps {
  type: string;
  size?: string;
}

const TypeBadge: React.FC<TypeBadgeProps> = ({ type, size }) => {
  const upperType: string = type[0].toUpperCase() + type.slice(1);
  const lowerType: string = type.toLowerCase();
  const svg = TypeIcons[`${lowerType}`];

  return (
    <Badge className={cn("p-1 xl:px-2", `bg-${lowerType}`)}>
      <Link
        href={`/pokedex/pokemon/${lowerType}`}
        className="flex items-center overflow-hidden"
      >
        <div className={cn(size || "h-7 w-7 sm:h-10 sm:w-10")}>
          <AspectRatio ratio={1 / 1} className="xl:skew-x-[40deg]">
            <Image src={svg} alt="" fill className="object-contain" />
          </AspectRatio>
        </div>
        <p className="hidden pr-1 font-rowdies text-2xl lg:block xl:skew-x-[40deg]">
          {upperType}
        </p>
      </Link>
    </Badge>
  );
};

export default TypeBadge;

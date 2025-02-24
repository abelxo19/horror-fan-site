import * as React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  image?: string;
  releaseDate?: Date;
  author?: string;
  fandom?: string;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, title, description, image, releaseDate, author, fandom, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-xl border bg-card text-card-foreground shadow", className)}
      {...props}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-xl"
        />
      )}
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="font-semibold leading-none tracking-tight">{title}</h3>
        {releaseDate && (
          <p className="text-sm text-muted-foreground">
            Released: {releaseDate.toDateString()}
          </p>
        )}
        {author && (
          <p className="text-sm text-muted-foreground">Author: {author}</p>
        )}
        {fandom && (
          <p className="text-sm text-muted-foreground">Fandom: {fandom}</p>
        )}
      </div>
      <div className="p-6 pt-0">
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
);
Card.displayName = "Card";

export { Card };
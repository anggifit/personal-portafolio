declare module "*.svg" {
  const content: string;

  export default content;
}

// this is for importing images in .webp format
declare module "*.webp" {
  const value: string;

  export default value;
}

declare module "*.json" {
  const value: any;
  export default value;
}

declare module "react-fast-marquee" {
  import { FC } from "react";

  interface MarqueeProps {
    gradient?: boolean;
    speed?: number;
    pauseOnHover?: boolean;
    pauseOnClick?: boolean;
    delay?: number;
    play?: boolean;
    direction?: "left" | "right";
    children?: React.ReactNode;
  }

  const Marquee: FC<MarqueeProps>;
  export default Marquee;
}

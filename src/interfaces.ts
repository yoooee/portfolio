  export type Tag = "css" | "html" | "javascript" | "react" | "angular" | "svelte" | "elm" | "photography" | "photoshop" | "illustrator" | "wacom";

  export type Layout = "landscape" | "portrait";

  export interface PortfolioItem {
    title?: string;
    layout?: Layout;
    subtitle?: string;
    bodytext?: string;
    features?: string [];
    image: string;
    tags?: Tag [];
  }

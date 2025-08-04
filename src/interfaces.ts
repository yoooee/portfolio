  export type Tag = "actionscript" | "css" | "flash" | "html" | "javascript" | "typescript" | "react" | "angular" | "svelte" | "elm" | "asp" | ".net" | "dnn" | "photography" | "photoshop" | "illustrator" | "wacom" | "graphite" | "traditional" ;

  export type Layout = "landscape" | "portrait";

  export type Category = "design" | "development" | "illustration" | "photography";

  export type Feature = {
    text: string;
    url?: string;
  }

  export interface PortfolioItem {
    title?: string;
    layout?: Layout;
    subtitle?: string;
    bodytext?: string;
    features?: Feature [];
    image: string;
    tags?: Tag [];
  }

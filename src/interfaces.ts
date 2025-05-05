  export type Tag = 'css' | 'html' | 'javascript' | 'react' | 'angular' | 'photography' | 'photoshop' | 'illustrator' | 'wacom';

  export interface PortfolioItem {
    title?: string;
    subtitle?: string;
    bodytext?: string;
    features?: string [];
    image: string;
    tags?: Tag [];
  }

  export type Tag = 'css' | 'html' | 'javascript' | 'react' | 'angular' | 'photography' | 'photoshop' | 'illustrator' | 'wacom';

  export interface portfolioItem {
    title?: string;
    subtitle?: string;
    bodytext?: string;
    image: string;
    tags?: Tag [];
  }

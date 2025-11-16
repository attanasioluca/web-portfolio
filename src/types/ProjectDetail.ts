export interface ProjectSection {
    title: string;
    body: string;
  }
  
  export interface ProjectDetail {
    id: number | string;
    title: string;
    category: string;
    img: string;
    repo: string;
    date: string;
    sections: ProjectSection[];
  }
  
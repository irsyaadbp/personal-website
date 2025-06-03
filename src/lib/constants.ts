export type ProjectType = 'exploration' | 'real-project'
export interface Project {
    title: string;
    short_description: string
    url: string
    image: string
    type: ProjectType
    tech_stack: string[]
    featured?: boolean
}

export const projects: Project[] = [
  {
    title: "Project 1",
    short_description: "",
    url: "/projects/project-1",
    image: "",
    tech_stack: [],
    type: 'exploration',
    featured: true
  },
  {
    title: "Project 2",
    short_description: "",
    url: "/projects/project-2",
    image: "",
    tech_stack: [],
    type: 'exploration',
    featured: true
  },
  {
    title: "Project 3",
    short_description: "",
    url: "/projects/project-3",
    image: "",
    tech_stack: [],
    type: 'exploration',
    featured: true
  },
  {
    title: "Project 4",
    short_description: "",
    url: "/projects/project-4",
    image: "",
    tech_stack: [],
    type: 'exploration',
    featured: true
  },
];

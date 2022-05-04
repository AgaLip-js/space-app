export type Subsection = Omit<NavigationItem, 'subsections'>

export type NavigationItem = {
    path: string,
    title: string,
    subsections?: Subsection[],
}

export type NavigationStructure = {
    title: string;
    elements: NavigationItem[];
}
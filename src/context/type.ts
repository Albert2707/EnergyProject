
export interface InViews {
    about?:boolean,
    problem?:boolean,
    team?:boolean,
    deepMind?:boolean,
    outCome?:boolean,
}
export type ContextProps = {
    sectionChange: InViews;
    SetsectionChange: React.Dispatch<React.SetStateAction<InViews>>
}

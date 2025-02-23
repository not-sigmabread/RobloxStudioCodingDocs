interface SectionContent {
    id: string;
    title: string;
    content: string;
}

interface Tutorial {
    id: string;
    title: string;
    steps: string[];
}

interface Documentation {
    fundamentals: SectionContent[];
    advancedInstances: SectionContent[];
    luaBasics: SectionContent[];
    advancedLua: SectionContent[];
    robloxApi: SectionContent[];
    gameTutorials: Tutorial[];
}

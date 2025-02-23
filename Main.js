const documentation = {
    fundamentals: [
        {
            id: 'fundamentals-1',
            title: 'Hierarchical Structure',
            content: 'Roblox Studio uses a hierarchical structure to manage instances...'
        },
        // Add more content sections here
    ],
    advancedInstances: [
        {
            id: 'advanced-instances-1',
            title: 'Services',
            content: 'Services are singleton objects that provide core functionality...'
        },
        // Add more content sections here
    ],
    luaBasics: [
        {
            id: 'lua-basics-1',
            title: 'Basic Syntax',
            content: 'Lua is a lightweight scripting language...'
        },
        // Add more content sections here
    ],
    advancedLua: [
        {
            id: 'advanced-lua-1',
            title: 'Tables',
            content: 'Tables are the main data structure in Lua...'
        },
        // Add more content sections here
    ],
    robloxApi: [
        {
            id: 'roblox-api-1',
            title: 'Roblox API Overview',
            content: 'The Roblox API is a critical resource for developers...'
        },
        // Add more content sections here
    ],
    gameTutorials: [
        {
            id: 'tutorial-1',
            title: 'Creating a Tycoon Game',
            steps: [
                'Step 1: Create the baseplate...',
                'Step 2: Add a spawn location...',
                // Add more steps here
            ]
        },
        // Add more tutorials here
    ]
};

function renderSection(section) {
    return `
        <h3>${section.title}</h3>
        <p>${section.content}</p>
    `;
}

function renderTutorial(tutorial) {
    return `
        <h3>${tutorial.title}</h3>
        <ol>
            ${tutorial.steps.map(step => `<li>${step}</li>`).join('')}
        </ol>
    `;
}

function renderDocumentation() {
    const fundamentalsContent = document.getElementById('fundamentals-content');
    const advancedInstancesContent = document.getElementById('advanced-instances-content');
    const luaBasicsContent = document.getElementById('lua-basics-content');
    const advancedLuaContent = document.getElementById('advanced-lua-content');
    const robloxApiContent = document.getElementById('roblox-api-content');
    const gameTutorialsContent = document.getElementById('game-tutorials-content');

    fundamentalsContent.innerHTML = documentation.fundamentals.map(renderSection).join('');
    advancedInstancesContent.innerHTML = documentation.advancedInstances.map(renderSection).join('');
    luaBasicsContent.innerHTML = documentation.luaBasics.map(renderSection).join('');
    advancedLuaContent.innerHTML = documentation.advancedLua.map(renderSection).join('');
    robloxApiContent.innerHTML = documentation.robloxApi.map(renderSection).join('');
    gameTutorialsContent.innerHTML = documentation.gameTutorials.map(renderTutorial).join('');
}

document.addEventListener('DOMContentLoaded', renderDocumentation);

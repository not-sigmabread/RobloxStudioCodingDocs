import { documentation } from './data';

function renderSection(section: SectionContent) {
    return `
        <h3>${section.title}</h3>
        <p>${section.content}</p>
    `;
}

function renderTutorial(tutorial: Tutorial) {
    return `
        <h3>${tutorial.title}</h3>
        <ol>
            ${tutorial.steps.map(step => `<li>${step}</li>`).join('')}
        </ol>
    `;
}

function renderDocumentation() {
    const mainContent = document.querySelector('main');

    if (mainContent) {
        mainContent.innerHTML = `
            <section id="fundamentals">
                <h2>Fundamentals of Roblox Studio</h2>
                ${documentation.fundamentals.map(renderSection).join('')}
            </section>
            <section id="advanced-instances">
                <h2>Advanced Instance Concepts</h2>
                ${documentation.advancedInstances.map(renderSection).join('')}
            </section>
            <section id="lua-basics">
                <h2>Lua Coding Basics</h2>
                ${documentation.luaBasics.map(renderSection).join('')}
            </section>
            <section id="advanced-lua">
                <h2>Advanced Lua Topics</h2>
                ${documentation.advancedLua.map(renderSection).join('')}
            </section>
            <section id="roblox-api">
                <h2>Roblox API</h2>
                ${documentation.robloxApi.map(renderSection).join('')}
            </section>
            <section id="game-tutorials">
                <h2>Game Tutorials</h2>
                ${documentation.gameTutorials.map(renderTutorial).join('')}
            </section>
        `;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderDocumentation();
});

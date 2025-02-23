const documentation = {
    fundamentals: [
        {
            id: 'fundamentals-1',
            title: 'Hierarchical Structure',
            content: 'Roblox Studio uses a hierarchical structure to manage instances. Each instance has properties and can contain other instances, forming a tree-like structure. The main types of instances include Parts, Models, and Scripts.'
        },
        {
            id: 'fundamentals-2',
            title: 'Core Properties',
            content: 'Instances have core properties like Name, Parent, and Archivable. These properties can be accessed and modified using the Properties window in Roblox Studio or via scripting.'
        },
        {
            id: 'fundamentals-3',
            title: 'Basic Manipulation Techniques',
            content: 'Basic manipulation of instances includes moving, scaling, and rotating parts. You can use the Move, Scale, and Rotate tools in Roblox Studio to adjust instances.'
        },
        {
            id: 'fundamentals-4',
            title: 'Scripting Basics',
            content: 'Scripts are used to control the behavior of instances. You can create a script by right-clicking an instance and selecting "Insert Object" -> "Script".'
        }
    ],
    advancedInstances: [
        {
            id: 'advanced-instances-1',
            title: 'Services',
            content: 'Services are singleton objects that provide core functionality to your game. Examples include Workspace, Players, and ReplicatedStorage. They can be accessed using the game:GetService("ServiceName") function.'
        },
        {
            id: 'advanced-instances-2',
            title: 'Events',
            content: 'Events allow instances to respond to specific actions. For example, the Touched event is triggered when a part is touched by another part. You can connect functions to events using the :Connect(function) method.'
        },
        {
            id: 'advanced-instances-3',
            title: 'Attributes and CollectionService',
            content: 'Attributes are custom properties that can be added to instances. CollectionService allows you to tag instances and work with groups of tagged instances. Use CollectionService:GetTagged("TagName") to retrieve all instances with a specific tag.'
        }
    ],
    luaBasics: [
        {
            id: 'lua-basics-1',
            title: 'Basic Syntax',
            content: 'Lua is a lightweight scripting language. Basic syntax includes variables, functions, and control structures like if statements and loops. Example: local x = 10; function printX() print(x) end; printX();'
        },
        {
            id: 'lua-basics-2',
            title: 'Variable Types',
            content: 'Lua supports several types of variables including numbers, strings, tables, and booleans. Example: local myNumber = 5; local myString = "Hello"; local myTable = {1, 2, 3}; local myBoolean = true;'
        },
        {
            id: 'lua-basics-3',
            title: 'Control Flow',
            content: 'Control flow statements include if, else, for, and while. They allow you to control the execution flow of your scripts. Example: if x > 5 then print("x is greater than 5") end; for i = 1, 10 do print(i) end;'
        },
        {
            id: 'lua-basics-4',
            title: 'Script Creation',
            content: 'Scripts are created by inserting a Script object into an instance. You can write Lua code inside the script to manipulate instances and respond to events. Example: local part = Instance.new("Part"); part.Parent = workspace;'
        }
    ],
    advancedLua: [
        {
            id: 'advanced-lua-1',
            title: 'Tables',
            content: 'Tables are the main data structure in Lua. They can be used as arrays, dictionaries, or objects. Example: local myTable = {key1 = "value1", key2 = "value2"}; print(myTable.key1);'
        },
        {
            id: 'advanced-lua-2',
            title: 'Metatables',
            content: 'Metatables allow you to change the behavior of tables. For example, you can define how a table responds to arithmetic operations. Example: local mt = {__add = function(a, b) return a.value + b.value end}; local a = {value = 1}; local b = {value = 2}; setmetatable(a, mt); setmetatable(b, mt); print(a + b);'
        },
        {
            id: 'advanced-lua-3',
            title: 'Modules',
            content: 'Modules allow you to organize your code into reusable pieces. You can create a module by inserting a ModuleScript and returning a table of functions. Example: local module = {}; function module.sayHello() print("Hello") end; return module;'
        }
    ],
    robloxApi: [
        {
            id: 'roblox-api-1',
            title: 'Roblox API Overview',
            content: 'The Roblox API is a critical resource for developers. It provides detailed documentation on all classes, properties, and methods available in Roblox. You can access the API documentation at https://developer.roblox.com.'
        }
    ],
    gameTutorials: [
        {
            id: 'tutorial-1',
            title: 'Creating a Tycoon Game',
            steps: [
                'Step 1: Create the baseplate by inserting a Part and setting its size to cover the workspace.',
                'Step 2: Add a spawn location by inserting a SpawnLocation object.',
                'Step 3: Create a button that players can click to start generating income. Insert a Part, name it "Button", and add a ClickDetector.',
                'Step 4: Write a script to handle the button click event. Insert a Script into the Button and connect the ClickDetector.MouseClick event to a function that increases the player\'s money.',
                'Step 5: Add a GUI to display the player\'s money. Insert a ScreenGui into StarterGui and add a TextLabel to display the money amount.',
                'Step 6: Create an upgrade system. Add more buttons for different upgrades and write scripts to handle their click events and increase the player\'s income rate.',
                'Step 7: Save the player\'s progress using DataStoreService. Write scripts to save and load the player\'s money and upgrades.'
            ]
        },
        {
            id: 'tutorial-2',
            title: 'Creating a Simulator Game',
            steps: [
                'Step 1: Create the map by inserting Parts and Models to design the environment.',
                'Step 2: Add a tool that players can use to collect items. Insert a Tool into StarterPack and add a Part as the handle.',
                'Step 3: Write a script to handle the tool\'s activation. Insert a Script into the Tool and connect the Tool.Activated event to a function that collects items in the environment.',
                'Step 4: Add a GUI to display the player\'s collected items. Insert a ScreenGui into StarterGui and add a TextLabel to display the item count.',
                'Step 5: Create a shop where players can sell their collected items for money. Insert Parts and Models to design the shop and add a ClickDetector to the counter.',
                'Step 6: Write a script to handle selling items. Insert a Script into the counter and connect the ClickDetector.MouseClick event to a function that exchanges items for money.',
                'Step 7: Save the player\'s progress using DataStoreService. Write scripts to save and load the player\'s items and money.'
            ]
        },
        {
            id: 'tutorial-3',
            title: 'Creating a Story Game',
            steps: [
                'Step 1: Create the map by inserting Parts and Models to design the environment for each chapter of the story.',
                'Step 2: Write the script for the story. Insert a Script into the Workspace and create functions for each chapter of the story.',
                'Step 3: Add NPCs (Non-Player Characters) to interact with players. Insert Models and Parts to create the NPCs and add Dialog objects for conversations.',
                'Step 4: Write scripts to handle player interactions with NPCs. Connect the DialogChoiceSelected event to functions that progress the story.',
                'Step 5: Add a GUI to display the player\'s progress. Insert a ScreenGui into StarterGui and add a TextLabel to display the current chapter.',
                'Step 6: Create checkpoints to save the player\'s progress. Insert Parts as checkpoints and write scripts to save the player\'s current chapter using DataStoreService.',
                'Step 7: Add cutscenes for important story events. Insert Parts and Models to design the cutscenes and write scripts to animate them.'
            ]
        }
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

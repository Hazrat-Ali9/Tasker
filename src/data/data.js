

export const taskListsInitialState = {
    searchKey:"",
    taskList: [
        {
            id: crypto.randomUUID(),
            title: "Integration API",
            description: "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
            tags: ["web", "python", "api"],
            priority: "High",
            isFavorite: true
        },
        {
            id: crypto.randomUUID(),
            title: "API Data Synchronization with Python",
            description: "Implement a Python solution to synchronize data between an API and a third-party database securely, optimizing data exchange.",
            tags: ["python", "api", "data synchronization"],
            priority: "High",
            isFavorite: false
        },
        {
            id: crypto.randomUUID(),
            title: "Efficient Web API Connectivity in Python",
            description: "Develop a Python-based solution for connecting an API to a third-party database securely, focusing on efficient data handling and exchange.",
            tags: ["Web", "python", "api"],
            priority: "High",
            isFavorite: false
        }
    ]
}

    ;
const employees = [
    {
        "id": 1,
        "firstname": "John",
        "email": "a@a.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 2,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Task 1",
                "taskDescription": "Complete the project documentation.",
                "taskDate": "2024-11-15",
                "category": "Documentation"
            },
            {
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Task 2",
                "taskDescription": "Review client feedback.",
                "taskDate": "2024-11-15",
                "category": "Review"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Task 3",
                "taskDescription": "Prepare for team meeting.",
                "taskDate": "2024-11-15",
                "category": "Preparation"
            }
        ]
    },
    {
        "id": 2,
        "firstname": "Alice",
        "email": "employee2@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Task 1",
                "taskDescription": "Update the client database.",
                "taskDate": "2024-11-16",
                "category": "Database"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Task 2",
                "taskDescription": "Send invoice to client.",
                "taskDate": "2024-11-16",
                "category": "Finance"
            }
        ]
    },
    {
        "id": 3,
        "firstname": "Mark",
        "email": "employee3@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Task 1",
                "taskDescription": "Schedule a follow-up call with the vendor.",
                "taskDate": "2024-11-17",
                "category": "Follow-up"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Task 2",
                "taskDescription": "Organize workspace for team meeting.",
                "taskDate": "2024-11-17",
                "category": "Organization"
            }
        ]
    },
    {
        "id": 4,
        "firstname": "Emma",
        "email": "employee4@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 0,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Task 1",
                "taskDescription": "Submit quarterly performance report.",
                "taskDate": "2024-11-18",
                "category": "Reporting"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Task 2",
                "taskDescription": "Research for upcoming project.",
                "taskDate": "2024-11-18",
                "category": "Research"
            }
        ]
    },
    {
        "id": 5,
        "firstname": "Sophia",
        "email": "employee5@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 2,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Task 1",
                "taskDescription": "Prepare budget proposal.",
                "taskDate": "2024-11-19",
                "category": "Budgeting"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Task 2",
                "taskDescription": "Coordinate with team for presentation.",
                "taskDate": "2024-11-19",
                "category": "Coordination"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Task 3",
                "taskDescription": "Organize files for year-end audit.",
                "taskDate": "2024-11-19",
                "category": "Administration"
            }
        ]
    }
];



const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
}];


export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))

}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees')) || []
    const admin = JSON.parse(localStorage.getItem('admin')) || []
    return { employees, admin }
} 

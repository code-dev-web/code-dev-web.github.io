import {
  Container,
  PageContainer,
  WrapperContainer,
} from "../components/Container";
import { CopyPasteContainer } from "../components/CopyPaste";
import { PageTitle, SubTitle, Text } from "../components/PageTitle";
import { StepBuilder } from "../components/StepBuilder";
import { ToDoList } from "../components/ToDoList";
import { CONSTANTS } from "../constants";

export const ToDoApp = () => {
  return (
    <PageContainer>
      <WrapperContainer>
        <PageTitle title={CONSTANTS.PAGE_TITLE.TODO_APP} />
        <SubTitle title={CONSTANTS.OVERVIEW.TODO_APP} />
        <hr className="divider" />
        <Container styleProps={{ justifyContent: "center" }}>
          <WrapperContainer className="w-75 w-m-90">
            <Text text={CONSTANTS.STEPS} />
            <StepBuilder data={steps} />
          </WrapperContainer>
        </Container>
        <hr className="divider" />
        <Container
          styleProps={{
            columnGap: "1rem",
            rowGap: "1rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <WrapperContainer className="w-45 w-m-75 primary-border ">
            <ToDoList />
          </WrapperContainer>
          <WrapperContainer className="w-45 w-m-75 primary-border p-xs secondary-font">
            <CopyPasteContainer
              type={CONSTANTS.REACT}
              id="finalTodoList"
              content={finalCode}
            />
          </WrapperContainer>
        </Container>
      </WrapperContainer>
    </PageContainer>
  );
};

const steps = [
  {
    label: "Setting Up the Environment",
    steps: [
      {
        label: "Install Node.js",
        description: "Install Node js and Npm (Node Package Manager)",
      },
      {
        label: "Create a new react app",
        description: "",
        codeType: "bash",
        code: `
          npx create-react-app todo-app,
          cd todo-app,
          npm start`,
      },
      {
        label: "Structure of react app",
        description:
          "index.js - entry point to react app, app.js - This is the root component of the React application, index.html in public/ is the single HTML file that will host your React app",
      },
    ],
  },
  {
    label: "Building the Basic Layout",
    steps: [
      {
        label: "Create a Simple UI",
        description: [
          "Start with the App.js file.",
          "Add a header, input field, and a button to add todos.",
          "Use basic CSS to style the layout.",
        ],
      },
      {
        label: "Create a new react app",
        description: "",
        codeType: "react",
        code: `
        function App() {
            return (
              <div className="App">
                <h1>Todo List</h1>
                <input type="text" placeholder="Add a new task..." />
                <button>Add Task</button>
                <ul>
                  {/* Todo items will go here */}
                </ul>
              </div>
            );
          }
          `,
      },
      {
        label: "Structure of react app",
        description: [
          "index.js - entry point to react app.",
          "app.js - This is the root component of the React application.",
          "index.html in public/ is the single HTML file that will host your React app.",
        ],
      },
    ],
  },
  {
    label: "Managing State with React Hooks",
    steps: [
      {
        label: "Use useState to Manage Todos",
        description: [
          "useState allows you to store and manage data that can change over time. This data is preserved across re-renders of the component.",
          "Add task will retain existing items in the list and update the new item to the todo list",
        ],
      },
      {
        label: "Example",
        description: "",
        codeType: "react",
        code: `
        const [todos, setTodos] = useState([]);
        const [task, setTask] = useState('');

        const addTask = () => {
        if (task.trim()) {
          setTodos([...todos, { text: task, completed: false }]);
          setTask('');
          }
        };
          `,
      },
    ],
  },
  {
    label: "Rendering the Todo List",
    steps: [
      {
        label: "Map Over the Todos",
        description: [
          "Map over the todos array to display each task in the list",
          "Using Array map method dynamically render each item in todo list state variable.",
        ],
      },
      {
        label: "Example",
        description: "",
        codeType: "react",
        code: `
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo.text}</li>
          ))}
        </ul>
        `,
      },
    ],
  },
  {
    label: "Adding Interactivity",
    steps: [
      {
        label: "Marking Tasks as Complete",
        description: [
          "Introduce a way to toggle the completion status of each task.",
          "Update the todo item’s completed property using useState.",
        ],
      },
      {
        label: "Example",
        description: "",
        codeType: "react",
        code: `
        const toggleComplete = (index) => {
          const newTodos = [...todos];
          newTodos[index].completed = !newTodos[index].completed;
          setTodos(newTodos);
        };        
        `,
      },
      {
        label: "CSS for Completed Tasks",
        description: "",
        codeType: "css",
        code: `
        .completed {
          text-decoration: line-through;
        }               
        `,
      },
    ],
  },
  {
    label: "Removing Todos",
    steps: [
      {
        label: "Implementing the Remove Functionality",
        description: [
          "Remove a task from the list using the array filter method.",
        ],
      },
      {
        label: "Example",
        description: "",
        codeType: "react",
        code: `
        const removeTask = (index) => {
          const newTodos = todos.filter((_, i) => i !== index);
          setTodos(newTodos);
        };               
        `,
      },
    ],
  },
  {
    label: "Additional steps",
    steps: [
      {
        label: "Enhace styling with css or any other styling preprocessor",
        description: [
          "Styling preprocessors - sass, scss, styled-components, bootstrap, material-ui, others",
        ],
      },
      {
        label: "Retain Data",
        description:
          "Use localstorage or backend to retain the todo list data.",
      },
      {
        label: "Optimize the app",
        description:
          "Use react features like React.memo, usecallback, usememo to optimize the app",
      },
    ],
  },
];

const finalCode = `import React, { useState } from "react";
export const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  // Add a new task to the list
  const addTask = () => {
    if (task.trim()) {
      setTodos([...todos, { text: task, completed: false }]);
      setTask("");
    }
  };

  // Toggle the completed status of a task
  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  // Remove a task from the list
  const removeTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <h4 >Example Todo List App</h4>
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul >
        {todos.map((todo, index) => (
          <li 
            key={index}
            className={todo.completed ? "completed" : ""}
          >
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : ""
              }}
              onClick={() => toggleComplete(index)}
            >
              {todo.text}
            </span>
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
`;

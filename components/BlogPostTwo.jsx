import React from "react";
import styles from "../styles/BlogPostTwo.module.css";
import Image from "next/image";
const BlogPostTwo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <div className={styles.titleGroup}>
          <h3>Blog Post Two by Patrick Orihuela</h3>
        </div>
        <div className={styles.textGroup}>
          <h1 className={styles.title}>
            Using TypeScript with React: Creating a Simple Todo List App
          </h1>
          <p>
            TypeScript has gained popularity among developers because it
            provides extra capabilities and type-checking features that help
            produce codebases that are more reliable and easier to maintain.
            React is a widely-used JavaScript library for developing user
            interfaces, and using TypeScript with React can result in
            development workflows that are more efficient and less prone to
            errors. In this blog post, I will show you how to create a basic
            Todo list app using TypeScript with React.
          </p>
        </div>
        <div className={styles.textGroup}>
          <h3>Setup</h3>
          <div className={styles.line}></div>
          <p>
            To get started, we need to set up a new React project with
            TypeScript. We can do this easily by using the Create React App
            command-line tool with the --template typescript flag.
          </p>
          <div className={styles.code}>
            <ul className={styles.none}>
              <li>npx create-react-app my-todo-app --template typescript</li>
              <li>cd my-todo-app</li>
            </ul>
          </div>
          <p>This will generate a new React project with TypeScript support.</p>
        </div>
        <div className={styles.textGroup}>
          <h3>Creating the Todo List Component</h3>
          <p>
            Next, let&apos;s create a new component for our Todo list.
            We&apos;ll create a new file called TodoList.tsx in the
            src/components directory and define the component like this:
          </p>

          <div className={styles.code}>
            <Image
              className={styles.image}
              src="/code.png"
              width="1000"
              height="1000"
              alt="code picture"
            ></Image>
          </div>
          <p>
            We define a TodoItem interface and a TodoList component, which has
            two state variables: an array of TodoItem objects called
            &quot;todos&quot; and a string called &quot;inputText&quot; which
            represents the current input text in our form. We use the useState
            hook to initialize these state variables. When the &quot;Add
            Todo&quot; button is clicked, the addTodo function generates a new
            TodoItem object and adds it to the todos array using the spread
            operator. We then reset the inputText state to an empty string. In
            the return statement, we display a form to add new todos and an
            unordered list of todos using the map function.
          </p>
        </div>
        <div className={styles.textGroup}>
          <h3>Integrating the Todo List Component</h3>
          <p>
            Now that we&apos;ve created our TodoList component, we need to
            integrate it into our app. Let&apos;s modify the App.tsx file like
            this:
          </p>
          <div className={styles.code}>
            <Image
              className={styles.image}
              src="/code2.png"
              width="1200"
              height="400"
              alt="code picture"
            ></Image>
          </div>
          <p>
            To use the TodoList component, we first need to import it into our
            App component. This can be done easily by adding an import statement
            at the top of our App.js file. After that, we can render the
            TodoList component inside our App component&apos;s render method.
          </p>
          <p>
            Once we have done that, we can start customizing the TodoList
            component to fit our needs. For example, we can add new props to the
            component to control its behavior, or modify its existing props to
            change its appearance. We can also add new features to the
            component, such as the ability to sort or filter the list of items.
          </p>
          <p>
            After we have made all the necessary changes, we can run our app
            using the &apos;npm start&apos; command. This will launch the app in
            our browser, where we should be able to see the newly customized
            TodoList component in action. From there, we can continue tweaking
            the component until it meets our requirements.
          </p>
        </div>
        <div className={styles.textGroup}>
          <h3>Conclusion</h3>
          <p>
            In this blog post, we have shown how to make a basic Todo list
            application using TypeScript with React. We have utilized TypeScript
            interfaces to specify the design of our Todo items and applied the
            useState hook to handle our app&apos;s state.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPostTwo;

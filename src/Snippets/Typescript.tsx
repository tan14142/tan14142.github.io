import React from 'react';
import CodePanel from '../Components/CodePanel';

export default () => {
  return (
    <>
      <section className="panel">
        <h2>A Guide to Typescript</h2>
        <h4>Getting Started</h4>
        <p>
          This guide will outline how to port your existing CRA application from
          ES to Typescript. If you are using CRA like I do, you can safely follow
          the offial documentation here:
        </p>
        <a href="https://create-react-app.dev/docs/adding-typescript/">
          https://create-react-app.dev/docs/adding-typescript/
        </a>
        <p>
          Or simply stick to this guide and do it the minimalist and lazy way.
        </p>
      </section>
      <CodePanel title="Bash">{`
        npm i -D @types/node @types/react @types/react-dom @types/react-router
        @types/react-router-dom typescript
    `}</CodePanel>
      <section className="panel">
        <p>
          Next rename all your file extensions in the src subdirectory: .js to .ts
          and .jsx to .tsx.
        </p>
      </section>
      <section className="panel">
        <h4>Troubleshooting</h4>
        <p>
          Now it is time to fix missing types. As usual, your best approach is
          Google. Search for the types of your 3rd party dependencies which are
          usually hosted on npm. Another good resource is DefinitelyTyped on
          github. If you cannot find the right @types for the 3rd party library,
          open up your project directory. Inside src you will find a file named
          react-app-env. Declare every library without types here:
        </p>
      </section>
      <CodePanel title="TypeScript">{`
        declare module 'libraryname';
    `}</CodePanel>
      <section className="panel">
        <p>
          If you have a bunch components that you do not want to translate from ES
          to Typescript straight away, you can add them onto the exclude array.
          This will allow you to start fresh and not worrying about old code. ES
          code will work without porting, since it is a subset of Typescript. To
          ignore your newly renamed files from src, open up tsconfig.json and
          create an exclude array. Add any file to the array that you do not want
          to rewrite straight away.
        </p>
      </section>
      {/* prettier-ignore */}
      <CodePanel title="tsconfig.json">{`
        "exclude": [
          "src/App.tsx",
          "src/Router.tsx",
          "src/index.tsx"
        ],
        "include": [
          "src"
        ]
      `}</CodePanel>
      <h2>Shallow Dive into Types</h2>
      {/* prettier-ignore */}
      <CodePanel title="TypeScript">{`
        //explicite type declaration
        let a: number;

        //implicite type declaration
        let b = 5;

        //implicite any
        let c;
    `}</CodePanel>
      <section className="panel">
      <h2>Basic Types</h2>
      <table className="highlight responsive-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Code</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Boolean</td>
            <td>: bool</td>
          </tr>
          <tr>
            <td>Number</td>
            <td>: number</td>
          </tr>
          <tr>
            <td>String</td>
            <td>: string</td>
          </tr>
          <tr>
            <td>Array</td>
            <td>: string[] or : number[]</td>
          </tr>
          <tr>
            <td>Tuple</td>
            <td>: [bool, number, string]</td>
          </tr>
          <tr>
            <td>Enum</td>
            <td>enum Color &#123; Red, Blue = 4 &#125;</td>
          </tr>
          <tr>
            <td>Any</td>
            <td>: any</td>
          </tr>
          <tr>
            <td>Void</td>
            <td>: void</td>
          </tr>
          <tr>
            <td>Null</td>
            <td>: null</td>
          </tr>
          <tr>
            <td>Undefined</td>
            <td>: undefined</td>
          </tr>
          <tr>
            <td>Never</td>
            <td>: never</td>
          </tr>
          <tr>
            <td>Object</td>
            <td>&#123; key1: bool, key2?: any &#125;</td>
          </tr>
        </tbody>
      </table>
      </section>
      <h2>Union Types</h2>
      <CodePanel title="TypeScript">{`
        let a: number | boolean | null;
    `}</CodePanel>
      <h2>Optional Parameters</h2>
      <h2>Interfaces</h2>
      <CodePanel title="TypeScript">{`
        interface Person {
          firstName: string,
          lastName: string
        }
      `}</CodePanel>
      <h2>setter getter</h2>
    </>
  );
};

import React from 'react';
import CodePanel from '../Components/CodePanel';

export default () => {
  return (
    <>
      <section className="panel">
        <h2>Jest and @testing-library</h2>
        <h4>Getting Started</h4>
        <p>
          In this guide we will get into testing an existing React app. If you are
          using CRA, some packages should be installed already. But here is a full
          list of dev dependencies:
        </p>
      </section>
      <CodePanel title="Bash">{`
        npm i -D @testing-library/react @testing-library/jest-dom
        react-test-renderer
    `}</CodePanel>
      <h2>Plunge into code</h2>
      {/* prettier-ignore */}
      <CodePanel title="Bash">{`
        declare module 'libraryname';
    `}</CodePanel>
    </>
  );
};
//async expect
//setup debugger in vscode
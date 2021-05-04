import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import logo from './logo.svg';
import './App.scss';

function AppView() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{t("page.title")}</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <AppView />
    </Suspense>
  );
}

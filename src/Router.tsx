import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import Loading from './App/Loading';
import FileNotFound from './Router/404';
import Home from './Home';
import Sitemap from './About/Sitemap';
import Routes from './Router/Routes.json';
import useScrollUp from './Hooks/useScrollUp';

export default () => {
  
  const
  location = useLocation()

  useScrollUp();

  return (
    <Suspense fallback={Loading()}>
      <Switch location={location}>
        <Route exact path="/" component={Home} />
        <Route exact path="/Projects" component={() => <Sitemap whitelist={['Projects']} />} />
        <Route exact path="/Snippets" component={() => <Sitemap whitelist={['Snippets']} />} />
        <Route exact path="/About" component={() => <Sitemap whitelist={['About']} />} />
        <Route exact path="/404" component={FileNotFound} />{
        
        Routes.map(({ name, pars, path }, key) => {
          const component = lazy(() =>
            import('.' + path).catch((e) => ({ default: FileNotFound }))
          );
          let url = [
            path.substring(
              0,
              path.lastIndexOf('/') + 1
            ) + name.replace(/\s/g, '-')
          ];

          pars && url.push(
            url[0] + '/' + pars.reduce(
              (acc, param) => {
                acc.push(param);
                return acc;
              },
              [] as string[]
            ).join('/')
          );

          return (
            <Route
            exact
            path={url}
            component={component}
            key={key} />
          );
        })
       }<Redirect to="/404" />
      </Switch>
    </Suspense>
  );
};
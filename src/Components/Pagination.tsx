import React from 'react';
import { Redirect, useHistory, useRouteMatch } from 'react-router-dom';
import Item from './Pagination/Item';
import gsState from './Pagination/gsState';
import './Pagination/Style.scss';

interface PaginationProp {
  children: React.ReactNode;
  itemsPerPage?: number;
  lastPage?: number;
}

export default ({ children, itemsPerPage = 1, lastPage }: PaginationProp) => {

  const
  history = useHistory(),
  match = useRouteMatch() as any,
  currentPage = +match.params.page || 1,
  items = React.Children.toArray(children),
  activeItems = items.length === 1
    ? 0
    : currentPage * itemsPerPage - itemsPerPage,
  page = items.slice(activeItems, activeItems + itemsPerPage),
  aggLastPage = lastPage || Math.floor(items.length / itemsPerPage);

  if (
    (!/^\d+$/.test(match.params.page) && match.params.page !== undefined) ||
    currentPage < 1 ||
    (currentPage > aggLastPage && aggLastPage > 0)
  ) {
    return <Redirect to="/404" />;
  }

  gsState('currentPage', currentPage);
  gsState('lastPage', aggLastPage);
  gsState('path', match.path.replace('/page/:page', '') + '/page/');

  let options = [];

  for (let i = 1; i <= aggLastPage; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  const pagination = (
    <ul className="center-content pagination panel">
      <Item from={1}>
        <i className="material-icons">first_page</i>
      </Item>
      <Item className="hide-on-small-only" offset={-2} />
      <Item offset={-1} />
      <li className="input-field waves-effect">
        <select
          className="browser-default"
          dir="rtl"
          onChange={e => history.push(
            gsState('path') + e.target.value
          )}
          value={currentPage}>
          {options}
        </select>
      </li>
      <Item offset={1} />
      <Item className="hide-on-small-only" offset={2} />
      <Item to={aggLastPage}>
        <i className="material-icons">last_page</i>
      </Item>
    </ul>
  );

  return (
    <>
      {pagination}
      {itemsPerPage > 1
        ? <div className="row">{page}</div>
        : page
      }
      {pagination}
    </>
  );
};
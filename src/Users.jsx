import classNames from 'classnames';
import React from 'react';

// const products = productsFromServer.map((product) => {
//   const category = null; // find by product.categoryId
//   const user = null; // find by category.ownerId
//   return null;
// });
export const UsersList = ({ user, setPerson, person }) => {
  const { name } = user;

  return (
    <a
      data-cy="FilterUser"
      href={`#${user.id}`}
      onClick={() => setPerson(name)}
      className={classNames({ 'is-active': person === name })}
    >
      {name}
    </a>
  );
};

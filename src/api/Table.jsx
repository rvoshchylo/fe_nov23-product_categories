import classNames from 'classnames';

export const Table = ({ visibleProduct }) => (
  <tr data-cy="Product">
    <td className="has-text-weight-bold" data-cy="ProductId">
      {visibleProduct.id}
    </td>

    <td data-cy="ProductName">{visibleProduct.name}</td>
    <td data-cy="ProductCategory">{`${visibleProduct.category.icon} - ${visibleProduct.category.title}`}</td>

    <td
      data-cy="ProductUser"
      className={classNames(
        { 'has-text-link': visibleProduct.user.sex === 'm' },
        { 'has-text-danger': visibleProduct.user.sex === 'f' },
      )}
    >
      {visibleProduct.user.name}
    </td>
  </tr>
);

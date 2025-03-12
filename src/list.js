import ListItem from '../../listItem';

const List = ({ items }) => (
  <ul>
    {items.map((item) => (
      <ListItem key={item.id} item={item} />
    ))}
  </ul>
);

export default List;
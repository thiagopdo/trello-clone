type Item = {
  id: string;
};

export function findItemIndexById<TItem extends Item>(
  items: TItem[],
  id: string
) {
  return items.findIndex((item: TItem) => item.id === id);
}



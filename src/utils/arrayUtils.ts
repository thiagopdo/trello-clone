type Item = {
  id: string;
};

export function findItemIndexById<TItem extends Item>(
  items: TItem[],
  id: string
) {
  return items.findIndex((item: TItem) => item.id === id);
}

/**
 * takes an array and creates two slices of the original
 * @param array
 * @param index
 * @returns a new array, which is a copy of the original array, without the specified element.
 */
export function remoteItemAtIndex<TItem>(array: TItem[], index: number) {
  return [...array.slice(0, index), ...array.slice(index + 1)];
}

/**
 * inserts a new item in an array at a specified position, between the two slices
 * @param array
 * @param item
 * @param index
 * @returns a new array with an item between the slices
 */

export function insertItemAtIndex<TItem>(
  array: TItem[],
  item: TItem,
  index: number
) {
  return [...array.slice(0, index), item, ...array.slice(index)];
}

/**
 * moves an item of an array to a new position
 * @param array
 * @param from
 * @param to
 * @returns a new array with an item placed to the specified position by the param 'from' to the param 'to'
 */

export function moveItem<TItem>(array: TItem[], from: number, to: number) {
  const item = array[from]; //extracts the item from the array

  return insertItemAtIndex(remoteItemAtIndex(array, from), item, to);
}

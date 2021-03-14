import uniqid from 'uniqid';

const tasksMock = [
  {
    id: uniqid(),
    description:
      '1- Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.',
  },
  {
    id: uniqid(),
    description:
      '2 Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.',
  },
];
export const lanesMock = {
  [uniqid()]: {
    title: 'Lane One',
    tasks: tasksMock,
  },
  [uniqid()]: {
    title: 'Lane Two',
    tasks: tasksMock.map((task) => ({ ...task, id: uniqid() })),
  },
};
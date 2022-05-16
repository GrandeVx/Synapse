import create from 'zustand'

const Bearstore = create<{
  bears : any
  increasePopulation() : void;
  removeAllBears() : void;
}>((set) => ({
  bears: 0,
  increasePopulation: () => {
    set((state) => ({
      bears : state.bears + 1
    }));
  },
  removeAllBears: () => {
    set((state) => ({
      bears : 0
    }));
  },
}));


export default Bearstore;
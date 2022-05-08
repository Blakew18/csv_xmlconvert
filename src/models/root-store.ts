import { types, flow, Instance } from 'mobx-state-tree';
import {
   fetchSomeData
  } from '../services/Services';


export const RootStoreModel = types
  .model('RootStore', {
    testData: types.string
  })
  .views((self) => {
    return {
      get showMeSomeData() {
        return `I have written Out your Test Data: ${self.testData}`
      },
    };
  })
  .actions((self) => {
    return {
      // This Function is Written in form of an async fucntion in mobx style. You can also write a normal function
      useExpressData: flow(function* useExpressData() {
        let newString = yield fetchSomeData()
        self.testData = newString
      }),
      changeMyData(myString:string) {
        self.testData = myString
      }
    };
  });

export type RootStore = Instance<typeof RootStoreModel>;
export const setupRootStore = async () => {
  //This Funtion Is Async In Case you want to run any Fetch Functions to hydrate your store.
  const rs: RootStore = RootStoreModel.create({ testData: "Some String" });
  return rs;
};

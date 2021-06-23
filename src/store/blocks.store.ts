import { IApiData } from '../interfaces/IApiData';
import { endpoints } from '../api/api-config';
import { getData } from '../api/api';

interface IBlocksStore {
  blocksData: IApiData | null;
  loadBlocks: () => void;
}

const BlocksStore: IBlocksStore = {
  blocksData: null,
  async loadBlocks() {
    const data = await getData(endpoints.blocks);
    this.blocksData = { ...data };
  },
};

export default BlocksStore;

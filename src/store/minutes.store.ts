import { IApiData } from '../interfaces/IApiData';
import { endpoints } from '../api/api-config';
import { getData } from '../api/api';

interface IMinutesStore {
  minutesData: IApiData | null;
  loadMinutes: () => void;
}

const MinutesStore: IMinutesStore = {
  minutesData: null,
  async loadMinutes() {
    const data = await getData(endpoints.minutes);
    this.minutesData = { ...data };
  },
};

export default MinutesStore;

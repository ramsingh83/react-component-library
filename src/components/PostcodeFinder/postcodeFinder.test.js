import mockAxios from 'axios';
import { act } from 'react-dom/test-utils';
import { DebounceInput } from 'react-debounce-input';
import { mountComponent } from './helpers/setup';
import AddressList from './AddressList';
import { PCA_PAYLOADS } from './helpers/mockData';
import Config from '../../config.json';

jest.mock('axios');

const customProps = {
  label: 'Address',
  placeholder: 'start typing your address',
  setSearchResult: () => {},
  validateInput: () => {},
  config: Config.loqate,
  required: true
};

describe('PostcodeFinder component functionalities', () => {
  let wrapper;

  function mockApiCall(mockResponse) {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: mockResponse }));
  }

  function getRequestUrl(postcode, addressId) {
    if (addressId) {
      return `https://services.postcodeanywhere.co.uk/Capture/Interactive/Retrieve/v1.00/json3ex.ws?Key=${encodeURIComponent('KC83-YH29-KW97-TY93')}&Id=${addressId}&$cache=true&$block=true&LastId=${addressId}&SearchTerm=&field1format=${encodeURIComponent('{Latitude}')}&field2format=${encodeURIComponent('{Longitude}')}`;
    }
    return `https://services.postcodeanywhere.co.uk/Capture/Interactive/Find/v1.00/json3ex.ws?Key=${encodeURIComponent('KC83-YH29-KW97-TY93')}&Country=GBR&Text=${postcode}&Container=undefined&LanguagePreference=en&LastId=undefined&SearchFor=Everything&$block=true&$cache=true`;
  }

  beforeEach(() => {
    wrapper = mountComponent(customProps);
  });

  it('Should render PostcodeFinder component with props', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('Should simulate user input and display address list', async () => {
    const postcode = 'BFPO 61';
    const addressListRequestUrl = getRequestUrl(postcode);

    await act(async () => {
      const input = wrapper.find(DebounceInput);
      mockApiCall(PCA_PAYLOADS.addressListBritishForce);
      input.props().onChange({ target: { value: postcode } });
    });

    expect(mockAxios.get).toHaveBeenCalledWith(addressListRequestUrl);
    const addressList = wrapper.find(AddressList);
    expect(addressList.dive().find('ul').children()).toHaveLength(PCA_PAYLOADS.addressListBritishForce.Items.length);
  });

  it('Should simulate user input and display invalid search error', async () => {
    const postcode = '@';
    const addressListRequestUrl = getRequestUrl(postcode);
    await act(async () => {
      const input = wrapper.find(DebounceInput);
      mockApiCall(PCA_PAYLOADS.invalidSearch);
      input.props().onChange({ target: { value: postcode } });
    });
    expect(mockAxios.get).toHaveBeenCalledWith(addressListRequestUrl);
    expect(wrapper.find('#address-error').text()).toBe(Config.loqate.addressErrors.invalidSearchError);
  });

  it('Should simulate user input and display error for british force postcode', async () => {
    const postcode = 'BFPO 61';
    const addressListRequestUrl = getRequestUrl(postcode);
    const addressRequestUrl = getRequestUrl(
      postcode,
      PCA_PAYLOADS.addressListBritishForce.Items[0].Id
    );
    await act(async () => {
      const input = wrapper.find(DebounceInput);
      mockApiCall(PCA_PAYLOADS.addressListBritishForce);
      input.props().onChange({ target: { value: postcode } });
    });
    expect(mockAxios.get).toHaveBeenCalledWith(addressListRequestUrl);
    const addressList = wrapper.find(AddressList);
    await act(async () => {
      mockApiCall(PCA_PAYLOADS.addressBritishForce);
      addressList.dive().find('ul').childAt(0).find('div')
        .props()
        .onClick(PCA_PAYLOADS.addressListBritishForce.Items[0]);
    });
    expect(mockAxios.get).toHaveBeenCalledWith(addressRequestUrl);
    expect(wrapper.find('#address-error').text()).toBe(Config.loqate.addressErrors.britishForceError);
  });

  it('Should simulate user input and display error for channel island postcode', async () => {
    const postcode = 'JE1 JE2';
    const addressListRequestUrl = getRequestUrl(postcode);
    const addressRequestUrl = getRequestUrl(
      postcode,
      PCA_PAYLOADS.addressListChannelIsland.Items[0].Id
    );
    await act(async () => {
      const input = wrapper.find(DebounceInput);
      mockApiCall(PCA_PAYLOADS.addressListChannelIsland);
      input.props().onChange({ target: { value: postcode } });
    });
    expect(mockAxios.get).toHaveBeenCalledWith(addressListRequestUrl);
    const addressList = wrapper.find(AddressList);
    await act(async () => {
      mockApiCall(PCA_PAYLOADS.addressChannelIsland);
      addressList.dive().find('ul').childAt(0).find('div')
        .props()
        .onClick(PCA_PAYLOADS.addressListChannelIsland.Items[0]);
    });
    expect(mockAxios.get).toHaveBeenCalledWith(addressRequestUrl);
    expect(wrapper.find('#address-error').text()).toBe(Config.loqate.addressErrors.channelIslandError);
  });
});

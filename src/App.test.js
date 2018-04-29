import React from 'react';
import App from './App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
const app = shallow(<App/>)

describe('<App />', () => {
  it('renders without crashing', () => {
    expect(app).toMatchSnapshot()
  });
  
  it('init the `state` with an empty list of gitfs', () => {
    expect(app.state().gifts).toEqual([]);
  })

  describe('When clicking the `add gift buttons`', () => {
    beforeEach(() => {
      app.find('.btn-add').simulate('click');
    })

    afterEach(() => {
      app.setState({ gifts: []});
    })
    it('adds a new gift to `state` when clicking the `add gift` button', () => {
      expect(app.state().gifts).toEqual([{ id: 1}])
    })
    
    it('adds a new gift to the rendered list when clicking the `add gift` button', () => {  
      expect(app.find('.gift-list').children().length).toEqual(1);
    })
  })
})
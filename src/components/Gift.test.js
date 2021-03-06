import React from 'react';
import {shallow , configure} from 'enzyme';
import Gift from './Gift';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

describe('<Gift />', () => {
    const gift = shallow(<Gift />);
    it('renders properly', () => {
        expect(gift).toMatchSnapshot();
    });

    it('initializes a person and persent in `state`', () => {
        expect(gift.state()).toEqual({person: '', present: ''});
    });

    describe('when typing into the person input', () => {
        const person = 'Uncle'
        beforeEach(() => {
            gift.find('.input-person').simulate('change', { target: { value: person}});
        });

        it('updates the person in `state`', () => {
            expect(gift.state().person).toEqual(person)
        })
    });
    describe('when typing into the present input', () => {
        const present = 'Golf Clubs'

        beforeEach(() => {
            gift.find('.input-present').simulate('change', { target: { value: present}});
        });

        it('updates the present in `state`', () => {
            expect(gift.state().present).toEqual(present)
        })
    });
});



//jest.fn()
//toHaveBeenCalledWith(arguments)


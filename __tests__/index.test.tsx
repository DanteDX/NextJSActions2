import React from 'react';
import {shallow} from 'enzyme';
import Home from "../pages/index";

describe('This is the first test',function(){
    test('First Testing',function(){
        let component = shallow(<Home/>);
        let temp = component.find(`[data-testid='mainWrapper']`);
        expect(temp.length).toBe(1);
    })
})
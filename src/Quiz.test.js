import Quiz from './Quiz';
import React from 'react';
import ReactDOM from 'react-dom';

describe("testing Quiz DOM", () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Quiz/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});

// describe("testing Quiz Component", () => {

//     let comp;

//     beforeAll(() => {
//         comp = Quiz({Quiz: 5});
//     });

//     it('returns a value', () => {
//         expect(comp).not.toBeNull();
//     });

//     it('is a div', () => {
//         expect(comp.type).toBe('div');
//     });

//     it('has children', () => {
//         expect(comp.props.children).toBeTruthy();
//     })
// });
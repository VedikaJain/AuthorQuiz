import Score from './Score';
import React from 'react';
import ReactDOM from 'react-dom';

describe("testing Score DOM", () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Score/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});

// describe("testing Score Component", () => {

//     let comp;

//     beforeAll(() => {
//         comp = Score({score: 5});
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
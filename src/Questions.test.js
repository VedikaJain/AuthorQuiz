import Questions from './Questions';
import React from 'react';
import ReactDOM from 'react-dom';

describe("testing Questions DOM", () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Questions/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});

// describe("testing Questions Component", () => {

//     let comp;

//     beforeAll(() => {
//         comp = Questions({Questions: 5});
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
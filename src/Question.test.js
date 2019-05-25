import Question from './Question';
import React from 'react';
import ReactDOM from 'react-dom';

describe("testing Question DOM", () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Question/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});

// describe("testing Question Component", () => {

//     let comp;

//     beforeAll(() => {
//         comp = Question({Question: 5});
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
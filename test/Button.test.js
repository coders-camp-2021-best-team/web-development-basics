import { Button } from '../src/components/Button/Button';

test('the buttons onClick function render id, text, type and className', () => {
    expect(
        Button({
            onClick: () => {},
            id: 'randomBtn',
            text: 'random movies',
            type: 'button',
            className: 'randomBtn'
        })
    ).toBe(`
    <button id="randomBtn" class="btn randomBtn" type="button">random movies</button>
    `);
});

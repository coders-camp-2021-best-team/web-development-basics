const Button = require('../src/components/Button/Button');

test('the buttons onClick function is called', () => {
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

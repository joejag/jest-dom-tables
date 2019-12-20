import {render} from './helpers/test-utils'

test('.toHaveRowTextContent', () => {
  const {container} = render(`
    <table>
      <tr>
        <td>A</td><td>B</td><td>C</td>
      </tr>
    </table>`)

  const row = container.querySelectorAll('tr')[0]

  expect(row).toHaveRowTextContent('| A | B | C |')
  // expect(row).toHaveRowTextContent(/| A | B | C |/)
  expect(row).not.toHaveRowTextContent('| Z | Y | X |')
})

test('handle negative test cases', () => {
  const {container} = render(`
    <table>
      <tr>
        <td>A</td><td>B</td><td>C</td>
      </tr>
    </table>`)

  expect(() =>
    expect(container.querySelectorAll('tr')[0]).toHaveRowTextContent(
      '| N | O | P | E |',
    ),
  ).toThrowError()

  expect(() =>
    expect(container.querySelectorAll('tr')[0]).not.toHaveRowTextContent(
      '| A | B | C |',
    ),
  ).toThrowError()
})

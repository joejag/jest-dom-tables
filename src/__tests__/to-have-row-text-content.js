import {render} from './helpers/test-utils'

test('.toHaveRowTextContent', () => {
  const {container} = render(`
    <table>
      <tr>
        <td>A</td><td>B</td><td>C</td>
      </tr>
    </table>`)

  expect(container.querySelectorAll('tr')[0]).toHaveRowTextContent(
    '| A | B | C |',
  )

  expect(container.querySelectorAll('tr')[0]).not.toHaveRowTextContent(
    '| Z | Y | X |',
  )
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

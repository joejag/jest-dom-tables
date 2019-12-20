import {matcherHint} from 'jest-matcher-utils'
import {getMessage} from './utils'

export const toHaveRowTextContent = (actualRow, expectedRowText) => {
  const innerActualRowText = Array.from(actualRow.querySelectorAll('th, td'))
    .map(th => th.textContent)
    .join(' | ')
  const actualRowText = `| ${innerActualRowText} |`

  const pass = actualRowText === expectedRowText

  const message = pass
    ? () =>
        getMessage(
          matcherHint(`.not.toHaveTextContent`, 'element', ''),
          `Expected element to not have row text content`,
          expectedRowText,
          'Received',
          actualRowText,
        )
    : () =>
        getMessage(
          matcherHint(`.toHaveTextContent`, 'element', ''),
          `Expected element to have row text content`,
          expectedRowText,
          'Received',
          actualRowText,
        )

  return {actual: actualRowText, expected: expectedRowText, message, pass}
}

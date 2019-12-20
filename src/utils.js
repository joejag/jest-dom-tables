import {
  EXPECTED_COLOR as expectedColor,
  RECEIVED_COLOR as receivedColor,
  stringify,
} from 'jest-matcher-utils'

import redent from 'redent'

function display (value) {
  return typeof value === 'string' ? value : stringify(value)
}

function getMessage (
  matcher,
  expectedLabel,
  expectedValue,
  receivedLabel,
  receivedValue,
) {
  return [
    `${matcher}\n`,
    `${expectedLabel}:\n${expectedColor(redent(display(expectedValue), 2))}`,
    `${receivedLabel}:\n${receivedColor(redent(display(receivedValue), 2))}`,
  ].join('\n')
}

export {getMessage}

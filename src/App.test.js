import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() })

/** 
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @returns {ShallowWrapper}
*/ 
const setup = (props = {}) => shallow(<App {...props}/>)

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

test('renders without error', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent.length).toBe(1)
})

test('renders increment button', () => {
  const wrapper = setup()
  const button = findByTestAttr(wrapper, 'increment-button')
  expect(button.length).toBe(1)
})

test('renders decrement button', () => {
  const wrapper = setup()
  const button = findByTestAttr(wrapper, 'decrement-button')
  expect(button.length).toBe(1)
})

test('renders counter display', () => {
  const wrapper = setup()
  const counterDisplay = findByTestAttr(wrapper, 'counter-display')
  expect(counterDisplay.length).toBe(1)
})

test('counter display starts at 0', () => {
  const wrapper = setup()
  const count = findByTestAttr(wrapper, 'count').text()
  expect(count).toBe('0')
})

test('clicking button increments counter display', () => {
  const wrapper = setup()
  // find the button
  const button = findByTestAttr(wrapper, 'increment-button')
  // click the button
  button.simulate('click')
  // find the display, and test that the number has been incremented
  const count = findByTestAttr(wrapper, 'count').text()
  expect(count).toBe('1')
})

test('clicking button decrements counter display', () => {
  const wrapper = setup()
  const incButton = findByTestAttr(wrapper, 'increment-button')
  incButton.simulate('click')
  
  const decButton = findByTestAttr(wrapper, 'decrement-button')
  decButton.simulate('click')
  
  const count = findByTestAttr(wrapper, 'count').text()
  expect(count).toBe('0')
})

test('error does not display when not needed', () => {
  const wrapper = setup()
  const errorDiv = findByTestAttr(wrapper, 'error-message')
  const errorHasHiddenClass = errorDiv.hasClass('hidden')
  expect(errorHasHiddenClass).toBe(true)
})

test('error message displays when decrement is clicked at a zero counter', () => {
  const wrapper = setup()
  const decButton = findByTestAttr(wrapper, 'decrement-button')
  decButton.simulate('click')
  
  const errorDiv = findByTestAttr(wrapper, 'error-message')
  const errorHasHiddenClass = errorDiv.hasClass('hidden')
  expect(errorHasHiddenClass).toBe(false)

  const count = findByTestAttr(wrapper, 'count').text()
  expect(count).toBe('0')
})

test('error message disappears when increment button is clicked', () => {
  const wrapper = setup()
  const decButton = findByTestAttr(wrapper, 'decrement-button')
  decButton.simulate('click')
  const incButton = findByTestAttr(wrapper, 'increment-button')
  incButton.simulate('click')

  const errorDiv = findByTestAttr(wrapper, 'error-message')
  const errorHasHiddenClass = errorDiv.hasClass('hidden')
  expect(errorHasHiddenClass).toBe(true)
})
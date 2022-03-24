import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() })

/** 
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @returns {ShallowWrapper}
*/ 
const setup = () => shallow(<App/>)

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)
const wrapper = setup()

test('renders without error', () => {
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent.length).toBe(1)
})

test('renders increment button', () => {
  const button = findByTestAttr(wrapper, 'increment-button')
  expect(button.length).toBe(1)
})

test('renders counter display', () => {
  const counterDisplay = findByTestAttr(wrapper, 'counter-display')
  expect(counterDisplay.length).toBe(1)
})

test('counter display starts at 0', () => {

})

test('clicking button increments counter display', () => {

})
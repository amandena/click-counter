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

test('renders without error', () => {
  const wrapper = setup()
  const appComponent = wrapper.find("[data-test='component-app']")
  expect(appComponent.length).toBe(1)
})

test('renders increment button', () => {
  const wrapper = setup()
  const button = wrapper.find("[data-test='increment-button']")
  expect(button.length).toBe(1)
})

test('renders counter display', () => {
  const wrapper = setup()
  const counterDisplay = wrapper.find("[data-test='counter-display']")
  expect(counterDisplay.length).toBe(1)
})

test('counter display starts at 0', () => {

})

test('clicking button increments counter display', () => {

})
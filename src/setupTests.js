import Enzyme from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
require('jest-extended');

Enzyme.configure({adapter: new Adapter()});

const config = {
    "jest": {
        "setupTestFrameworkScriptFile": "jest-extended"
    }
}
export default config;
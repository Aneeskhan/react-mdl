import { createRenderer, renderIntoDocument } from 'react-addons-test-utils';
import { findDOMNode } from 'react-dom';
import MDLComponent from '../src/utils/MDLComponent';

export function render(element) {
    const renderer = createRenderer();
    renderer.render(element);

    var output = renderer.getRenderOutput();

    if(output && output.type === MDLComponent) {
        return output.props.children;
    }

    return output;
}

export function renderDOM(element) {
    return findDOMNode(renderIntoDocument(element));
}

import { CreateElement } from 'vue/types';
import { createNamespace } from '../utils';
import { DefaultSlots } from '../utils/types';

const [createComponent] = createNamespace('test');

function Test(h: CreateElement, props: any, slots: DefaultSlots) {
  return (
    <div>
      {slots.default ? slots.default() : 'test'}
    </div>
  );
}

Test.props = {};

export default createComponent(Test);

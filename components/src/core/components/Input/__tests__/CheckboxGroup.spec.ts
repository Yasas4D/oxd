import {mount} from '@vue/test-utils';
import CheckboxGroup from '@orangehrm/oxd/core/components/Input/CheckboxGroup.vue';

const optionsList = [
  {
    id: 1,
    label: 'Item one',
  },
  {
    id: 2,
    label: 'Item two',
  },
];

describe('CheckboxGroup > CheckboxGroup.vue', () => {
  it('renders OXD CheckboxGroup', () => {
    const wrapper = mount(CheckboxGroup, {
      props: {
        options: optionsList,
        class: 'check-box-column',
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should accept valid input', async () => {
    const wrapper = mount(CheckboxGroup, {
      props: {
        options: optionsList,
      },
    });
    wrapper.find('#check-box-group-id_1').trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('update:modelValue')).toEqual([[[1]]]);
  });

  it('should return both the selected values', async () => {
    const wrapper = mount(CheckboxGroup, {
      props: {
        options: optionsList,
      },
    });
    wrapper.find('#check-box-group-id_1').trigger('click');
    wrapper.find('#check-box-group-id_2').trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('update:modelValue')).toEqual([[[1]], [[2]]]);
  });

  it('should uncheck the previous selected values', async () => {
    const wrapper = mount(CheckboxGroup, {
      props: {
        options: optionsList,
        modelValue: [1],
      },
    });
    wrapper.find('#check-box-group-id_1').trigger('change');
    expect(wrapper.emitted('update:modelValue')).toEqual([[[]]]);
  });

  it('should focus the checkbox', async () => {
    const wrapper = mount(CheckboxGroup, {
      props: {
        options: optionsList,
      },
    });
    wrapper.find('#check-box-group-id_1').trigger('focus');
    expect(wrapper.emitted('focus')).toEqual([[true]]);
  });

  it('should blur the checkbox', async () => {
    const wrapper = mount(CheckboxGroup, {
      props: {
        options: optionsList,
      },
    });
    wrapper.find('#check-box-group-id_1').trigger('blur');
    expect(wrapper.emitted('blur')).toEqual([[false]]);
  });

  it('should change the class and id', async () => {
    const wrapper = mount(CheckboxGroup, {
      props: {
        options: optionsList,
        id: 'check-box-new-id',
        class: 'check-box-new-class',
      },
    });

    expect(wrapper.find('.check-box-new-class').exists()).toBeTruthy();
    expect(wrapper.find('#check-box-new-id_1').exists()).toBeTruthy();
  });

  it('should return the default the class and id', async () => {
    const wrapper = mount(CheckboxGroup, {
      props: {
        options: optionsList,
        id: '',
        class: '',
      },
    });

    expect(wrapper.find('.check-box-column').exists()).toBeTruthy();
    expect(wrapper.find('#check-box-group-id_1').exists()).toBeTruthy();
  });
});

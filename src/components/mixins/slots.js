/*
 * @Description: 
 * @Version: 2.0
 * @Autor: zhaojunyun-jk
 * @Date: 2020-08-05 11:12:52
 * @LastEditors: zhaojunyun-jk
 * @LastEditTime: 2020-08-05 14:18:34
 */ 
export const SlotsMixin = {
  methods: {
    slots(name = 'default', props) {
      const { $slots, $scopedSlots } = this;
      const scopedSlot = $scopedSlots[name];

      if (scopedSlot) {
        return scopedSlot(props);
      }

      return $slots[name];
    },
  },
};

import { defineComponent } from 'vue'

import type { Component, VNode } from 'vue'

export default defineComponent({
  name: 'ElOptions',
  emits: ['update-options'],
  setup(_, { slots, emit }) {
    let cachedOptions: any[] = []

    function isSameOptions(a: any[], b: any[]) {
      if (a.length !== b.length) return false
      for (const [index] of a.entries()) {
        if (a[index] != b[index]) {
          return false
        }
      }
      return true
    }

    return () => {
      const children = slots.default?.()!

      if (children.length) {
        const firstChild = (children![0]?.children as VNode[]) || []
        // only get `Option Group / Option` children
        const firstFilteredChild = firstChild.find((child) => {
          const name = ((child?.type || {}) as Component)?.name || ''
          return ['ElOption', 'ElOptionGroup'].includes(name)
        })
        const options = firstFilteredChild?.children || []
        if (options && options.length) {
          const filteredOptions = (options as VNode[])
            .filter(
              (item: VNode) =>
                ((item?.type || {}) as Component)?.name === 'ElOption'
            )
            .map((item: VNode) => item.props?.label)

          if (!isSameOptions(filteredOptions, cachedOptions)) {
            cachedOptions = filteredOptions
            emit('update-options', filteredOptions)
          }
        }
      }

      return children
    }
  },
})

import { Pen, Meta2d } from '@meta2d/core'
import { defineStore } from 'pinia'
import { Meat2dState } from './types'

const useMeta2dStore = defineStore('meta2d', {
  state: (): Meat2dState => ({
    meta2dInst: undefined as unknown as Meta2d,
    activePen: undefined,
  }),

  getters: {
    meta2dInstData(state) {
      return state.meta2dInst?.store?.data
    },
  },

  actions: {
    setActivePen(pen: Pen) {
      this.activePen = pen
    },
    clearActivePen() {
      this.activePen = undefined
    },
    setMeta2dInst(inst: Meta2d) {
      this.meta2dInst = inst
    },
  },
})

export default useMeta2dStore

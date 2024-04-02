import { create } from 'zustand'
const useStore = create((set) => ({
        chec: true ,
        ref1: '' ,
        valinp: '' ,
        menu: '' ,
        data: [] ,
        selectchart: '' ,
        selectchart2: '' ,
        updateUser1: (newchec) => set({ chec: newchec }),
        updateUser2: (newref1) => set({ ref1: newref1 }),
        updateUser3: (newvalinp) => set({ valinp: newvalinp }),
        updateUser4: (newmenu) => set({ menu: newmenu }),
        updateUser5: (newselectchart) => set({ selectchart: newselectchart }),
        updateUser7: (newselectchart2) => set({ selectchart2: newselectchart2 }),
        updateUser6: (newdata) => set({ data: newdata })
        
}))
export default useStore
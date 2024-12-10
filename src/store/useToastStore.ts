// import { create } from 'zustand'

// interface ToastState {
//   open: boolean
//   message: string
//   setOpen: (open: boolean) => void
//   showToast: (message: string) => void
//   hideToast: () => void
// }

// export const useToastStore = create<ToastState>((set) => ({
//   open: false,
//   message: '',
//   setOpen: (open) => set({ open }),
//   showToast: (message) => set({ open: true, message }),
//   hideToast: () => set({ open: false }),
// })) 
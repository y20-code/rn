import book from '@/assets/icons/book.png'
import home from  '@/assets/icons/home.png'
import setting from '@/assets/icons/setting.png'



export const icons = {
    book,
    home,
    setting
} as const;

export type IconKey = keyof typeof icons;
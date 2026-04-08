import type {ImageSourcePropsType} from "react-native"

declare global {
    interface TabIconProps {
        focused:boolean;
        icon:ImageSourcePropsType;
    }
}

export {};
import { FC } from 'react';
import {SvgProps} from 'react-native-svg';
import mauLogo from '@assets/svgs/mau.svg';
import loginBg from "@assets/svgs/zeptobg.svg";


export const svgList: Record<string,FC<SvgProps>> = {
    mauLogo,
    loginBg
}
import { Fonts, lineHeights, fontSizes } from "./Constants";

export interface TextStyle {
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
}

export const Typography: Record<string, TextStyle> = {
  RegularXXS: {
    fontFamily: Fonts.Regular,
    fontSize: fontSizes.xxs,
    lineHeight: lineHeights.xxs,
  },
  RegularXS: {
    fontFamily: Fonts.Regular,
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.xs,
  },
  RegularSM: {
    fontFamily: Fonts.Regular,
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.sm,
  },
  RegularM: {
    fontFamily: Fonts.Regular,
    fontSize: fontSizes.m,
    lineHeight: lineHeights.m,
  },
  RegularL: {
    fontFamily: Fonts.Regular,
    fontSize: fontSizes.l,
    lineHeight: lineHeights.l,
  },
  RegularXL: {
    fontFamily: Fonts.Regular,
    fontSize: fontSizes.xl,
    lineHeight: lineHeights.xl,
  },

  MediumXXS: {
    fontFamily: Fonts.Medium,
    fontSize: fontSizes.xxs,
    lineHeight: lineHeights.xxs,
  },
  MediumXS: {
    fontFamily: Fonts.Medium,
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.xs,
  },
  MediumSM: {
    fontFamily: Fonts.Medium,
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.sm,
  },
  MediumM: {
    fontFamily: Fonts.Medium,
    fontSize: fontSizes.m,
    lineHeight: lineHeights.m,
  },
  MediumL: {
    fontFamily: Fonts.Medium,
    fontSize: fontSizes.l,
    lineHeight: lineHeights.l,
  },
  MediumXL: {
    fontFamily: Fonts.Medium,
    fontSize: fontSizes.xl,
    lineHeight: lineHeights.xl,
  },

  LightXXS: {
    fontFamily: Fonts.Light,
    fontSize: fontSizes.xxs,
    lineHeight: lineHeights.xxs,
  },
  LightXS: {
    fontFamily: Fonts.Light,
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.xs,
  },
  LightSM: {
    fontFamily: Fonts.Light,
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.sm,
  },
  LightM: {
    fontFamily: Fonts.Light,
    fontSize: fontSizes.m,
    lineHeight: lineHeights.m,
  },
  LightL: {
    fontFamily: Fonts.Light,
    fontSize: fontSizes.l,
    lineHeight: lineHeights.l,
  },
  LightXL: {
    fontFamily: Fonts.Light,
    fontSize: fontSizes.xl,
    lineHeight: lineHeights.xl,
  },

  SemiBoldXXS: {
    fontFamily: Fonts.SemiBold,
    fontSize: fontSizes.xxs,
    lineHeight: lineHeights.xxs,
  },
  SemiBoldXS: {
    fontFamily: Fonts.SemiBold,
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.xs,
  },
  SemiBoldSM: {
    fontFamily: Fonts.SemiBold,
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.sm,
  },
  SemiBoldM: {
    fontFamily: Fonts.SemiBold,
    fontSize: fontSizes.m,
    lineHeight: lineHeights.m,
  },
  SemiBoldL: {
    fontFamily: Fonts.SemiBold,
    fontSize: fontSizes.l,
    lineHeight: lineHeights.l,
  },
  SemiBoldXL: {
    fontFamily: Fonts.SemiBold,
    fontSize: fontSizes.xl,
    lineHeight: lineHeights.xl,
  },

  BoldXXS: {
    fontFamily: Fonts.Bold,
    fontSize: fontSizes.xxs,
    lineHeight: lineHeights.xxs,
  },
  BoldXS: {
    fontFamily: Fonts.Bold,
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.xs,
  },
  BoldSM: {
    fontFamily: Fonts.Bold,
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.sm,
  },
  BoldM: {
    fontFamily: Fonts.Bold,
    fontSize: fontSizes.m,
    lineHeight: lineHeights.m,
  },
  BoldL: {
    fontFamily: Fonts.Bold,
    fontSize: fontSizes.l,
    lineHeight: lineHeights.l,
  },
  BoldXL: {
    fontFamily: Fonts.Bold,
    fontSize: fontSizes.xl,
    lineHeight: lineHeights.xl,
  },
};

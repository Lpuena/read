import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      primary: '#8B5A2B', // 古铜色
      secondary: '#654321', // 深棕色
      accent: '#CD853F', // 赭石色
      paper: '#F5F5DC', // 羊皮纸色
      ink: '#3D2B1F', // 墨色
    },
    fontFamily: {
      serif: ['Noto Serif SC', 'serif'],
      sans: ['Noto Sans SC', 'sans-serif'],
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Noto Serif SC:400,700',
        calligraphy: ['Ma Shan Zheng', 'cursive'],
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})

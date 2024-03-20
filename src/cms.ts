/**
 * Will be a Color-Picker in CMS-editor.
 */
export type CmsColor = `rgb(${string})` | `rgba(${string})` | `#${string}` | `hsl(${string})` | `hsla(${string})`

/**
 * For cardinal plural forms.
 * If it is a string, no plural rules are used.
 * Eg.
 * 0 bags, 1 bag, 2 bags, ...
 */
export type CmsPlural =
  | string
  | {
      /**
       * If zero is present, it is always used for 0 in all languages.
       * (Intl.PluralRules is not invoked.)
       * E.g. "No bags"
       */
      zero?: string
      one?: string
      two?: string
      few?: string
      many?: string
      /**
       * If correct form isn't available, it will always fall back to other,
       * but a warning in missing keys.
       */
      other: string
    }

/**
 * For ordinal plural
 * 1:st passenger, 2:nd passenger, ...
 */
export type CmsPluralOrdinal = CmsPlural

/** CMS-editor will show interface for choosing an image. */
export type CmsImage = {
  src: string
}

/** This is a type for CmsImage, together with Image */
export type CmsImageProps = {
  title?: string
  alt?: string
}

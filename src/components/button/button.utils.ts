import { Color } from 'types';
import { ButtonVariant } from './button.types';

export function getContentColorByButtonVariant(buttonVariant: ButtonVariant): Color {
  switch (buttonVariant) {
    case ButtonVariant.Primary:
      return Color.ButtonTextColor;
    case ButtonVariant.Attention:
      return Color.ButtonTextColor;
    case ButtonVariant.Secondary:
      return Color.ButtonSecondaryTextColor;
    case ButtonVariant.Outlined:
      return Color.ButtonSecondaryTextColor;
  }
}

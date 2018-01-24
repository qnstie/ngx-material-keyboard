import { ILocaleMap } from '../interfaces/locale-map.interface';
import { IKeyboardLayouts } from '../interfaces/keyboard-layouts.interface';
import { MatKeyboardConfig } from '../configs/keyboard.config';
/**
 * Applies default options to the keyboard configs.
 * @param config The configuration to which the defaults will be applied.
 * @returns The new configuration object with defaults applied.
 * @private
 */
export declare function _applyConfigDefaults(config: MatKeyboardConfig): MatKeyboardConfig;
/**
 * Applies available layouts.
 * @param {IKeyboardLayouts} layouts
 * @returns {ILocaleMap}
 * @private
 */
export declare function _applyAvailableLayouts(layouts: IKeyboardLayouts): ILocaleMap;

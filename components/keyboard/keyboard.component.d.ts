import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { Observable } from 'rxjs/Observable';
import { IKeyboardLayout } from '../../interfaces/keyboard-layout.interface';
import { KeyboardClassKey } from '../../enums/keyboard-class-key.enum';
import { MatKeyboardRef } from '../../classes/keyboard-ref.class';
import { MatKeyboardService } from '../../services/keyboard.service';
/**
 * A component used to open as the default keyboard, matching material spec.
 * This should only be used internally by the keyboard service.
 */
export declare class MatKeyboardComponent implements OnInit {
    private _locale;
    private _keyboardService;
    private _darkTheme;
    private _isDebug;
    private _inputInstance$;
    private _keys;
    private _modifier;
    private _capsLocked;
    locale?: string;
    layout: IKeyboardLayout;
    control: MatInput;
    keyboardRef: MatKeyboardRef<MatKeyboardComponent>;
    cssClass: boolean;
    enterClick: EventEmitter<void>;
    capsClick: EventEmitter<void>;
    altClick: EventEmitter<void>;
    shiftClick: EventEmitter<void>;
    readonly inputInstance: Observable<ElementRef | null>;
    darkTheme: boolean;
    isDebug: boolean;
    readonly darkTheme$: Observable<boolean>;
    readonly isDebug$: Observable<boolean>;
    constructor(_locale: any, _keyboardService: MatKeyboardService);
    setInputInstance(inputInstance: ElementRef, control: MatInput): void;
    ngOnInit(): void;
    /**
     * dismisses the keyboard
     */
    dismiss(): void;
    /**
     * checks if a given key is currently pressed
     * @param {(string | KeyboardClassKey)[]} key
     * @returns {boolean}
     */
    isActive(key: (string | KeyboardClassKey)[]): boolean;
    getModifiedKey(key: (string | KeyboardClassKey)[]): string;
    /**
     * listens to users keyboard inputs to simulate on virtual keyboard, too
     * @param {KeyboardEvent} event
     */
    onKeyDown(event: KeyboardEvent): void;
    /**
     * listens to users keyboard inputs to simulate on virtual keyboard, too
     * @param {KeyboardEvent} event
     */
    onKeyUp(event: KeyboardEvent): void;
    /**
     * bubbles event if submit is potentially triggered
     */
    onEnterClick(): void;
    /**
     * simulates clicking `CapsLock` key
     * @param {boolean} targetState
     */
    onCapsClick(targetState?: boolean): void;
    /**
     * simulates clicking `Alt` key
     */
    onAltClick(): void;
    /**
     * simulates clicking `Shift` key
     */
    onShiftClick(): void;
    private _invertAltModifier(modifier);
    private _invertShiftModifier(modifier);
}

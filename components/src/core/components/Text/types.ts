/*
 * This file is part of OrangeHRM Inc
 *
 * Copyright (C) 2020 onwards OrangeHRM Inc
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see  http://www.gnu.org/licenses
 */

export const TAG_H1 = 'h1';
export const TAG_H2 = 'h2';
export const TAG_H3 = 'h3';
export const TAG_H4 = 'h4';
export const TAG_H5 = 'h5';
export const TAG_H6 = 'h6';
export const TAG_P = 'p';
export const TAG_SPAN = 'span';
export const TAGS = [
  TAG_H1,
  TAG_H2,
  TAG_H3,
  TAG_H4,
  TAG_H5,
  TAG_H6,
  TAG_P,
  TAG_SPAN,
];

export const TYPE_SUBTITLE_1 = 'subtitle-1';
export const TYPE_SUBTITLE_2 = 'subtitle-2';
export const TYPE_CARD_TITLE = 'card-title';
export const TYPE_TOAST_TITLE = 'toast-title';
export const TYPE_TOAST_MESSAGE = 'toast-message';

export const TYPES = [
  TYPE_SUBTITLE_1,
  TYPE_SUBTITLE_2,
  TYPE_CARD_TITLE,
  TYPE_TOAST_TITLE,
  TYPE_TOAST_MESSAGE,
];

export type Tags =
  | typeof TAG_H1
  | typeof TAG_H2
  | typeof TAG_H3
  | typeof TAG_H4
  | typeof TAG_H5
  | typeof TAG_H6
  | typeof TAG_P
  | typeof TAG_SPAN;

export type TextTypes =
  | typeof TYPE_SUBTITLE_1
  | typeof TYPE_SUBTITLE_2
  | typeof TYPE_CARD_TITLE
  | typeof TYPE_TOAST_TITLE
  | typeof TYPE_TOAST_MESSAGE;

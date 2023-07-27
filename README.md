# NgColorPicker

## Introduction

Angular version >= 15

## Installation

```shell
npm install ···
```

## Usage

```shell
import { NgxColorPickerModule } from 'ngx-color-picker';

<ngx-color-picker></ngx-color-picker>

<ngx-color-block color="#ff6600"></ngx-color-block>
```

- Basic

  <img src="https://github.com/OriginRing/ng-color-picker/blob/master/src/assets/images/color-picker.png" alt="basic" width="300" style="box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),0 6px 16px 0 rgba(0, 0, 0, 0.08),0 9px 28px 8px rgba(0, 0, 0, 0.05);">

- Custom Header / Footer

  <img src="https://github.com/OriginRing/ng-color-picker/blob/master/src/assets/images/custom-color.png" alt="basic" width="300" style="box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),0 6px 16px 0 rgba(0, 0, 0, 0.08),0 9px 28px 8px rgba(0, 0, 0, 0.05);">

- Color Block

  <img src="https://github.com/OriginRing/ng-color-picker/blob/master/src/assets/images/color-block.png" alt="basic">

## API

### ngx-color-picker

| Parameter                 | Description                          | Type                          | Default |
|--------------------|--------------------------------------|-----------------------------|---------|
| `[value]`        | Value of color                       | `string`｜`ColorValue`            | -       |
| `[defaultValue]` | Default value of color               | `string`｜`ColorValue`            | -       |
| `[disabled]`   | Disable ColorPicker                  | `boolean`                   | `false` |
| `[disabledAlpha]`      | Disable Transparency                 | `boolean`             | `false` |
| `[panelRenderHeader]`      | Set the header of the color picker| `TemplateRef<void>`   | -       |
| `[panelRenderFooter]`      | Set the tail of the color picker | `TemplateRef<void>`   | -       |
| `(nzOnChange)`     | Callback when value is changed       | `EventEmitter<{ color: Color; type?: HsbaColorType }>`      | -       |
| `(nzOnChangeComplete)`      | 	Called when clear                   | `EventEmitter<HsbaColorType>`     | -       |


### ngx-color-block

| Parameter    | Description   | Type  | Default       |
|--------------|----------|------------|-----------|
| `[color]` | Module colors | `string` | `#1677ff` |
| `[nzOnClick]` | Callbacks for clicking on color blocks | `EventEmitter<boolean>`   | - |
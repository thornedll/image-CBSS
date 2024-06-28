# image-CBSS

## Description

image-CBSS is an image formatter on simple HTML/CSS (and a bit of JavaScript for dynamic change of values).

CBSS stands for:

* C - Contrast
* B - Brightness
* S - Saturation
* S - Sharpness

## Usage

Image is located in ```<img src="...">```. It can be formatted with 4 range filters above.

"Reset" button sets all settings to default value.

## Implementation

### Contrast, Brightness, Saturation

First 3 filters (Contrast, Brightness, Saturation) implementated with simple [CSS-filters](https://developer.mozilla.org/ru/docs/Web/CSS/filter). By default they all have value ```100%```. Manipulating filters it can be changed between ```0%``` and ```200%```.

### Sharpness

Sharpness setting requires SVG as this filter is possible to make only in SVG. Howewer, it sets to an image just fine.

[\<feConvolveMatrix\>](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feConvolveMatrix) is used for manipulating an image. It requires 3x3 [kernel matrix](https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementKernelMatrixAttribute) that is changed by specific formula to get a result:

![8k+1_formula](https://i.sstatic.net/Rr8Wj.gif)

Values from sharpness range filter are ```k / 100``` that applied to formula for managing matrix values.
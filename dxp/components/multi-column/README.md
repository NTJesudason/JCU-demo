# Intro Text

## Description

Intro Text | Intro text is a component that is primarily used at the top of level 1 & level 2 pages. The component contains a heading and a body paragraph.

## Editing

Users can edit the heading and body content (FormattedText option), they can also edit the size of the body content font as well as the background colour.

## Properties Example:

```
{
    "uniqueID": "",
    "backgroundColour": "bg--white",
    "headerText": "Test header",
    "bodyText": "<p>This is the intro text</p><p>Example of formatted text</p>",
    "fontSize": "f-lead"
}
```

## Component Properties

Outline each property type and it's settings
| Property         |      Property Description       | Property Type | Is Required | Default   |
| :--------------: | :-----------------------------: | :-----------: | :---------: | :-------: |
| uniqueID         | Wrapper ID                      | string        |             | bg--white |
| backgroundColour | Background Colour               | string oneOf  |      ✓      |           |
| headerText       | Header Text                     | string        |             |           |
| bodyText         | Body content                    | FormattedText |             |           |
| fontSize         | Body Content font size          | string oneOf  |     ✓       | f-lead    |
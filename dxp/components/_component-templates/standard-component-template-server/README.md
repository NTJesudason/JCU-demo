# { Component Name }

## Description

Clear description of the component and what it does, including functionality (e.g. accordion, users can show and hide conent by clicking a heading)

## Editing

Clearly outline how users can edit the content of the component (e.g. To customize and configure the component, you can pass different properties to modify its behavior or appearance. Specifically, you can change the heading and content for each accordion item. There is a minimum of 1 item and a maximum of 20 items.)

## Properties Example:

Outline the data structure, this is the structure used in the preview data file
```
{
  "accordion": [
    {
      "heading": "Accordion One",
      "content": "<p>This is accordion one!</p>"
    },
    {
      "heading": "Accordion Two",
      "content": "<p>This is accordion two!</p>"
    },
    {
      "heading": "Accordion Three",
      "content": "<p>This is accordion three!</p>"
    }
  ]
}
```

## Component Properties

Outline each property type and it's settings
| Property  |      Property Description       | Property Type | Is Required | Default |
| :-------- | :-----------------------------: | :-----------: | :---------: | :-----: |
| title     |        The section title        |    string     |             |         |
| accordion |       The accordion items       |     array     |      ✓      |         |
| heading   | The accordion item heading text |    string     |      ✓      |         |
| content   |   The accordion item content    | FormattedText |      ✓      |         |
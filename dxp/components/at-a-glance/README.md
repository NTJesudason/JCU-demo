# At a glance

## Description

Visual representation of quick fast facts or "at a glance" information. Can display 2-4 facts, editors have option to have stats stack on top of each other or to 
be able to scroll. If set to scroll users can click and drag to scroll.

## Editing

Editors can change the heading and its postion (left or center), they can make up to 4 stats which include a title and a subtitle. Editors can choose whether these stats stack on top of eachother when needed or if they scroll horizontally. There is the option for a "reference" list that is added underneath the component. Editors have the option to change spacing above and below the component as well as the background colour.

## Properties Example:

```
{
    "backgroundColour": "bg-white",
    "headerText": "Test header",
    "paddingTop": "default",
    "paddingBottom": "default",
    "centerHeader": true,
    "scrollOverflow": false,
    "stats": [
        {
            "items": {
                "title": "This is the title",
                "subTitle": "This is the subtitle"
            }
        },
        {
            "items": {
                "title": "This is the title",
                "subTitle": "This is the subtitle"
            }
        },
        {
            "items": {
                "title": "This is the title",
                "subTitle": "This is the subtitle"
            }
        },
        {
            "items": {
                "title": "This is the title",
                "subTitle": "This is the subtitle"
            }
        }
    ],
    "references": "references text"
}

```

## Component Properties

Outline each property type and it's settings
| Property          |      Property Description                          | Property Type | Is Required | Default  |
| :--------         | :------------------------------------------------: | :-----------: | :---------: | :------: |
| backgroundColour  | Component background colour                        | string        |      ✓      | bg-sand-2 |
| headerText        | Component H2 header                                | string        |      ⨯      |          |
| paddingTop        | Padding top on component wrapper                   | string oneOf  |      ✓      | default  |
| paddingBottom     | Padding bottom on component wrapper                | string oneOf  |      ✓      | default  |
| centerHeader      | Center the header on the page                      | boolean       |      ✓      | false    |
| scrollOverflow    | Scroll content horizontal or stack it              | boolean       |      ✓      | true     |
| stats             | Array for content                                  | array         |      ⨯      |          |
| title             | Part of stats, content title                       | string        |      ✓      |          |
| subTitle          | Part of stats, content subtitle                    | FormattedText |      ✓      |          |
| references        | Text at the bottom of the component for references | string        |      ⨯      |          |

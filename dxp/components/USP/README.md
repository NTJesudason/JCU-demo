# USP

## Description

USP - Unique Selling Point | USP is a component that allows 2-3 links with a title and description to be placed in a line. Adds a box around the link with a box-shadow and a border-left

## Editing

To customize and configure the component, users can edit the background colour, heading as well as make cards (blocks) for the content. Each block allows users to add a link, heading, description and change the colour of the left border. The component has a minimum of 2 cards and a maximum of 3 cards.

## Properties Example:

```
{
    "backgroundColour": "bg--sand-2",
    "headerText": "Test header",
    "items": [
        {
            "items": {
                "link": {
                    "text": "Science",
                    "url": "https://www.jcu.edu.au/courses/study/science"
                },
                "borderColour": "border--left--ocean-3"
            }
        },
        {
            "items": {
                "link": {
                    "text": "Information Technology",
                    "url": "https://www.jcu.edu.au/courses/study/information-technology"
                },
                "description": "Information technology descxription",
                "borderColour": "border--left--theme--1"
            }
        },
        {
            "items": {
                "link": {
                    "text": "Engineering",
                    "url": "https://www.jcu.edu.au/courses/study/engineering"
                },
                "description": "lorem ipsum",
                "borderColour": "border--left--theme--3"
            }
        }
    ]
}

```

## Component Properties

Outline each property type and it's settings
| Property         |      Property Description       | Property Type | Is Required |        Default        |
| :--------------: | :-----------------------------: | :-----------: | :---------: | :-------------------: |
| backgroundColour |        Background colour        | string oneOf  |             | bg--white             |
| headerText       |          Header text            |    string     |             |                       |
| items            |   Array containing card data    |    array      |      ✓      |                       |
| link             |      items Title and link       |   SquizLink   |             |                       |
| description      |      items Descrption of USP    |    string     |             |                       |
| borderColour     |      items Border colour        | string oneOf  |             | border--left--ocean-3 |
# Project-02

# Timeframe - 8 days, Individual Project

## Technologies/ Frameworks used:

* HTML5
* SCSS
* Bulma
* React.js
* Webpack
* Axios
* Git
* GitHub
* Insominia
* React 
* Python
* PostgreSQL

## Overview

An application to see cruises by region, destination or ship.

<img width="1435" alt="Screenshot 2019-06-17 at 12 21 35" src="https://user-images.githubusercontent.com/46609723/59600952-948cf400-90fa-11e9-88c3-45f29750a019.png">

Hosted Site: [Click here](https://cruiselauren.herokuapp.com/)

## Development process

The brief of this project was to build a full stack application. 
I decided that I wanted to make my server side the main aspect of my application, so I researched and made my own data.

<img width="1419" alt="Screenshot 2019-06-17 at 12 35 04" src="https://user-images.githubusercontent.com/46609723/59601585-5c86b080-90fc-11e9-8736-2feae0724414.png">

I started off with wireframing my design and also started my models which I had a lot of many to many relationships between cruise, ships and cities. All my data was then brought into Insominia so I could clearly see it.

<img width="1439" alt="Screenshot 2019-06-17 at 12 29 29" src="https://user-images.githubusercontent.com/46609723/59601462-eda95780-90fb-11e9-914b-2966cc069978.png">

The following model is for the cruises:

```python
class Cruise(db.Entity):
    name = Optional(str)
    region = Optional(str)
    image = Optional(str)
    descriptionshort = Optional(str)
    descriptionlong = Optional(str)
    categories = Set('Category')
    ship = Optional('Ship')
    city = Optional('City')

class CruiseSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str(optional=True)
    region = fields.Str(optional=True)
    image = fields.Str(optional=True)
    descriptionshort = fields.Str(optional=True)
    descriptionlong = fields.Str(optional=True)
    categories = fields.Nested('CategorySchema', many=True, exclude=('cruises',), dump_only=True)
    ship = fields.Nested('ShipSchema', exclude=('cruises',), dump_only=True)
    ship_id = fields.Int(load_only=True)
    city = fields.Nested('CitySchema', exclude=('cruise',))

    @post_load
    def load_ship(self, data):
        data['ship'] = Ship.get(id=data['ship_id'])
        del data['ship_id']

        return data
 ```

## Design

* I wanted my design to be mostly about the pictures I found so I kept the styling to a minimum. 

<img width="1370" alt="Screenshot 2019-06-17 at 12 39 20" src="https://user-images.githubusercontent.com/46609723/59601781-f9e1e480-90fc-11e9-9d83-e1c363db918e.png">

## Challenges

One of my main challenges I faced was to get used to the relationships and to be able to use that to my advantage to get data from various different parts of my seeds file, I had a few bits of information that was nested.

```python
categories=[australia], ship=voyager_of_the_seas, city=city9)
```

## Wins

I was really proud of how much I achieved on this in 8 days, my seeds file was large so it took me 2 days to get it completed. 

## Future features

We would really like to get maps as a future feature, this would be good if I could see what route the cruise was going on. 
The styling did get left to last minute so I would like to go and fix a few things but I think the pictures make it look good.

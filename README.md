## Employee Management System

#### Introduction

An API for managing vehicle parking.

### Deployed App

https://parking-system-ali.herokuapp.com/api/v1/

#### Endpoint Details

There are total 3 endpoint with the below methods:

######/parking

- GET / - for getting all parking slots information
- GET /:id - for getting a parking slot having specific `<id>`.

######/booking

- POST / - for creating/inserting booking details using slotId.
- DELETE /:id - for deleting an booking details having specific booking `<id>`.

######/payment

- POST / - for making payment using specific bookingId.

###### Author - [IronStark007](https://github.com/IronStark007)

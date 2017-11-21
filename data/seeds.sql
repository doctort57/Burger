--- @author: Thomas Thompson
-- @github: tomtom28
-- @comment: Homework 14 - Eat the Burger!



-- Seed Burgers into Database ... No Sesame! (hehehe)
INSERT INTO burgers(burger_name, devoured, date)
VALUES ("Big Mac", false, current_timestamp()),
  ("Whooper", false, current_timestamp()),
  ("Cheezburger", false, current_timestamp()),
  ("Baconator", false, current_timestamp()),
  ("Quarter Pounder", false, current_timestamp()),
  ("BBQ Bacon Burger", false, current_timestamp()),
  ("Five Guys", true,current_timestamp());
# About the Problem Domain...

Your friend Pat has come up with a business idea by combining two signature Portland icons: 
Pat has developed a recipe for a coffee-time confection called Salmon Cookies.

They're cookies made into the shape of a salmon, and actually made with salmon (though the fish is ground up so fine that you can't even taste it!) that is the ideal match for a steaming cup of coffee on a gray Seattle morning. Or gray Seattle afternoon... whatever. Tourists will go gaga for them, locals will begrudgingly fall in love with them, and Pat will make a ton of money.

But, Pat needs some help with the branding of the business, as well as some help with internal data management for the company, and has enlisted your assistance because of your extensive and proven work in developing web applications.

Pat's Salmon Cookies, soon with franchises all over town, needs to calculate the number of cookies each location must make every day so that it can manage its supplies inventory and baking schedule. The number of cookies to make depends on the hours of operation (6:00 AM to 8:00 PM for all locations) and a few factors unique to each location:

- The minimum number of customers per hour.
- The maximum number of customers per hour.
- The average number of cookies purchased per customer.

Because we are early in the life of this business, we will need to build an application that is adaptable. Pat will need to be able to add and remove locations from the daily projections report, and Pat will also need to be able to easily modify the input numbers for each location based on day of the week, special events, and other factors. Pat would like to see these numbers with nice formatting in a web application, and oh yeah... one more thing:

Pat needs you to take a leading role in doing the design work and construction of a public-facing page, too. Pat has a logo image picked out, but that's it. Yep, all you're getting to work off of is an illustration of a fish:

![A salmon](salmon.png)

Pat has asked you to come up with all other aspects of the design for both documents, including a color scheme and a custom font, and maybe additional images, for a public-facing webpage.

So, in addition to building an application that calculates daily sales projections for each location (in a file called sales.html), you also need to create a pubic-facing page (in a file called index.html) that is colorful, eye-catching, readable, useful, informative... and ultimately of a quality ready for use on T-shirts, stickers, coffee mugs, cookie bags, napkins, and so on.

You've got a lot to do.

*Plan your work, and work your plan*.

### Public-Facing Page (index.html)

Besides using the picture of the fish... you should use...

1. A custom font for highlights
2. A specified standard san-serif web font for data (such as Arial, Verdana, or Helvetica)
3. A specified standard serif web font for text (such as Georgia, Times, etc.)
4. Specified different font colors for all three font usages
5. A background color for the default page background (make sure font colors have good contrast and are readable on this background)
6. A different background color for elements such boxes and tables (so make sure the font colors contrast against this well, too!)
7. Anything else you'd like to add related to style. But remember: simplicity, clarity,  and consistency are good things in design.
8. Be thoughtful about layout and overall organization of the page.
9. Include all of the typical stuff that you'll find on the home page of a business: locations, hours, contact information, some text about how awesome the business is, etc. Be creative, and again, think about what is meaningful to a typical end user.

### Calculate Daily Sales Projections (sales.html)




Here are the starting numbers that you'll need to build these objects:

Location        | Min / Cust | Max / Cust | Avg Cookie / Sale
----------------|------------|------------|-------------------
1st and Pike      |      23    |     65     |        6.3
SeaTac Airport  |      3     |     24     |        1.2
Seattle Center     |      11    |     38     |        3.7
Capitol Hill |      20    |     38     |        2.3
Alki            |      2     |     16     |        4.6

These numbers are simply Pat's estimates for now, but eventually, once there has been some history collected that provides more accurate numbers, we'll want the ability to update these numbers for each location, and to add/remove locations. But we'll not build all of that today. **Make sure to make each location is its own JavaScript object**.



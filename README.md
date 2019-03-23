# Js_Budz_Rebuild

Setting up:

1.) Clone repository into your machine
2.) Run npm install both on the frontend folder and the backend folder


For a more detailed guide of a whole setup go to- https://www.howtographql.com/graphql-js/4-adding-a-database/

This project is using a prisma database which means that to store your own data you'll have to create one of your own
1.) Go to prisma.io and create an account
---There are multiple options to creating the database - here is a brief guide for creating a demo database;

  a.) Run prisma login and allow access
  b.) Next, create prisma.yml and datamodel.prisma files
  c.) Fill the files in with their respective data. (See more on the docs provide above)
 
2.) Run prisma deploy (Here is where you choose your type of database)
3.) In this case choose demo database and choose the region that applies to you
4.) Last step is to run prisma generate
-if you're going to be using environment variables run prisma generate --env-file <your env file>
  
  Refer to these docs for more info - https://www.prisma.io/docs/prisma-cli-and-configuration/prisma-yml-5cy7/#using-variables
  
If there's any questions please feel free to contact me at jasonsoloriom@gmail.com

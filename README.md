reference : https://www.freecodecamp.org/news/how-to-build-a-todo-app-with-react-typescript-nodejs-and-mongodb/
# trouble shootings :

1. Error: unable to get local issuer certificate while running yarn command
    this is because you run behind a proxy. to fix it:

   yarn config set "strict-ssl" false -g
# technologies:
 **MERN** & **Typescript** stack ( mongoDB, Express, React, nodeJS ) all managed by **yarn**. see below
1. React as client coding language
2. Typescript ( instead of javascript)
3. mongoDB - mongoose driver 
4. nodemon - cli for javascript ( see nodemon.json)

# installations :
1. work with yarn ( package manager). start the project
    > yarn init
2. structure the project manually - add new files & folder
3. configure tsconfig.json for outDir, rootDir, include , exclude
4. install typescript
    > yarn add typescript -g
5. add dependencies for express, mongoDB
    > yarn add express cors mongoose
6. install types
    > yarn add -D @types/node @types/express @types/mongoose @types/cors
7. add dependencies to start the server concurrently
    > yarn add -D concurrently nodemon
8. update package.json with scripts to run
9. configure nodemon.json with mongoDB configuration
10. create shared cluster with mongoDB at: https://www.mongodb.com/atlas/database
11. 

# design
1. build a model, based on mongoDB Document. a todoSchema 
   with mongoose driver, the models is in charge on all queries against the mongoDB instance
2. 


# run
1. server side, browse to folder server side:
   
   yarn start
